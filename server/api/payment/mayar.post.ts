export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  // Menggunakan API Key Mayar yang diberikan
  const mayarApiKey = process.env.MAYAR_API_KEY || 'be62d40ee1b1a29629bb31a040943e44b0e250eacee7845eb70d84165b82044e135bbf98f680add7e71e5ca3e4c6ac98a19570eb6e3ff0bd101232422113d314';

  const payload = {
    name: body.name || 'Hamba Allah',
    email: body.email || 'donatur@example.com',
    amount: body.amount,
    description: `Donasi - ${body.programName}`,
    // Opsional: Redirect URL setelah sukses bayar
    // success_redirect_url: 'http://localhost:3000/success' 
  };

  try {
    const response = await fetch('https://api.mayar.id/hl/v1/payment/create', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${mayarApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: data.message || 'Failed to create Mayar payment link'
      });
    }

    // Mayar mengembalikan data link pembayaran di dalam data.link
    return {
      success: true,
      link: data.data.link
    };
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});

