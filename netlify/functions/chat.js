exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages, system } = JSON.parse(event.body);

    const openaiMessages = [
      { role: 'system', content: system },
      ...messages
    ];

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`
      },
      body: JSON.stringify({
        model: 'llama3-8b-8192',
        max_tokens: 1000,
        messages: openaiMessages
      })
    });

    const data = await response.json();
    console.log('Groq response:', JSON.stringify(data));

    const reply = data.choices?.[0]?.message?.content || 'No se pudo obtener respuesta.';

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply })
    };
  } catch(err) {
    console.log('Error:', err.message);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: 'Error interno: ' + err.message })
    };
  }
};
