exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { messages, system } = JSON.parse(event.body);

  // Convertir formato de mensajes para OpenAI
  const openaiMessages = [
    { role: 'system', content: system },
    ...messages
  ];

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: 1000,
      messages: openaiMessages
    })
  });

  const data = await response.json();
  const reply = data.choices?.[0]?.message?.content || 'No se pudo obtener respuesta.';

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ reply })
  };
};
