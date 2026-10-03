export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  // Server key diambil dari environment variable untuk keamanan
  const serverKey = process.env.MIDTRANS_SERVER_KEY || '';

  const payload = {
    transaction_details: {
      order_id: `DONASI-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      gross_amount: body.amount,
    },
    customer_details: {
      first_name: body.name,
      email: body.email,
      phone: body.phone,
      billing_address: {
        city: body.city
      }
    },
    item_details: [
      {
        id: body.programId,
        price: body.amount,
        quantity: 1,
        name: `Donasi - ${body.programName}`.substring(0, 50)
      }
    ]
  };

  try {
    const response = await fetch('https://app.sandbox.midtrans.com/snap/v1/transactions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(serverKey + ':').toString('base64')}`
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: data.error_messages ? data.error_messages.join(', ') : 'Failed to create transaction'
      });
    }

    return data; // returns { token, redirect_url }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message
    });
  }
});

