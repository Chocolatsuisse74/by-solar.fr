// Vercel serverless function for By Solar
// Deploy to Vercel or use with Express.js

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

// Form submission handler (forwards to Formspree)
async function handleFormSubmission(req, formData, formspreeId) {
  try {
    const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.statusText}`);
    }

    return {
      success: true,
      message: 'Form submitted successfully',
      code: 200
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: error.message,
      code: 500
    };
  }
}

// Claude API handler (secure proxy)
async function handleClaude(message, conversationHistory = []) {
  try {
    const apiKey = process.env.CLAUDE_API_KEY;
    if (!apiKey) {
      throw new Error('Claude API key not configured');
    }

    const messages = [
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-1',
        max_tokens: 1024,
        system: `You are Soleil, an expert solar energy AI assistant for By Solar. Your role:
1. Quickly qualify prospects (system size, country, budget, usage)
2. Recommend appropriate solar products from our catalog
3. Explain ROI and real savings potential
4. Address concerns about guarantees and financing (30% deposit, 70% on completion)
5. Guide users toward requesting a quote

Be conversational, helpful, and focused on converting to quote requests. If asked about specific products, reference real offerings with pricing.`,
        messages
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Claude API error: ${error.error?.message || response.statusText}`);
    }

    const data = await response.json();
    const assistantMessage = data.content[0].text;

    return {
      success: true,
      message: assistantMessage,
      code: 200
    };
  } catch (error) {
    console.error('Claude API error:', error);
    return {
      success: false,
      message: 'Sorry, I encountered an error. Please try again.',
      code: 500
    };
  }
}

// Main handler for Vercel
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { action, data } = req.body;

  if (action === 'submit-form') {
    const formspreeId = process.env.FORMSPREE_QUOTE_ID; // Set in Vercel env vars
    const result = await handleFormSubmission(req, data, formspreeId);
    return res.status(result.code).json(result);
  }

  if (action === 'contact-form') {
    const formspreeId = process.env.FORMSPREE_CONTACT_ID; // Set in Vercel env vars
    const result = await handleFormSubmission(req, data, formspreeId);
    return res.status(result.code).json(result);
  }

  if (action === 'chat') {
    const { message, history } = data;
    const result = await handleClaude(message, history);
    return res.status(result.code).json(result);
  }

  return res.status(400).json({ error: 'Invalid action' });
}

// For local Express.js usage:
export { handleFormSubmission, handleClaude };
