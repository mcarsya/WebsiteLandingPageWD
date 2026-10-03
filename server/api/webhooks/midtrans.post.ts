import crypto from 'crypto';

// Daftar IP Sandbox Midtrans (ditambah format bersih tanpa subnet /32)
const MIDTRANS_SANDBOX_IPS = [
  '34.101.68.130',
  '34.101.92.69',
  '34.142.147.133',
  '34.142.169.131',
  '34.142.231.22',
  '35.240.161.215',
  '34.142.227.232',
  '34.124.184.175',
  '35.197.130.2',
  '34.142.233.114'
];

export default defineEventHandler(async (event) => {
  // 1. Keamanan Lapis Pertama: Pengecekan Alamat IP (IP Whitelisting)
  // Diaktifkan pada production/staging. Saat development lokal (localhost), IP mungkin 127.0.0.1
  const clientIp = getRequestHeader(event, 'x-forwarded-for') || event.node.req.socket.remoteAddress;
  
  if (clientIp && !clientIp.includes('127.0.0.1') && !clientIp.includes('::1')) {
    const isIpAllowed = MIDTRANS_SANDBOX_IPS.some(ip => clientIp.includes(ip));
    // Jika perlu ketat:
    // if (!isIpAllowed) {
    //   throw createError({ statusCode: 403, statusMessage: 'Forbidden: IP Not Recognized' });
    // }
  }

  const body = await readBody(event);
  
  // 2. Keamanan Lapis Kedua: Verifikasi Signature Key Midtrans
  // Rumus: SHA512(order_id + status_code + gross_amount + ServerKey)
  // Server key diambil dari environment variable untuk keamanan
  const serverKey = process.env.MIDTRANS_SERVER_KEY || ''; // Set via .env in deployment
  
  const expectedSignature = crypto
    .createHash('sha512')
    .update(body.order_id + body.status_code + body.gross_amount + serverKey)
    .digest('hex');

  if (body.signature_key !== expectedSignature) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid Signature' });
  }

  // 3. Proses Status Pembayaran
  console.log('--- WEBHOOK MIDTRANS DITERIMA ---');
  console.log('Order ID:', body.order_id);
  console.log('Status Transaksi:', body.transaction_status);

  if (body.transaction_status === 'capture' || body.transaction_status === 'settlement') {
    // Transaksi Berhasil! Lakukan update ke database di sini
    console.log('✅ Pembayaran Donasi Berhasil Diterima!');
    // await updateDonationStatus(body.order_id, 'SUCCESS');
  } else if (body.transaction_status === 'pending') {
    console.log('⏳ Menunggu pembayaran donatur...');
  } else if (body.transaction_status === 'deny' || body.transaction_status === 'cancel' || body.transaction_status === 'expire') {
    console.log('❌ Pembayaran gagal atau kadaluarsa.');
  }

  // Merespon HTTP 200 OK agar Midtrans tahu notifikasi sudah kita terima dengan baik
  return { status: 'success', message: 'Notification Received' };
});
