import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { handleFormSubmission, handleClaude } from './api/handler.js';

config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files
app.use(express.static('.'));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// API Routes
app.post('/api/submit-form', async (req, res) => {
  try {
    const { data } = req.body;
    const formspreeId = process.env.FORMSPREE_QUOTE_ID;

    if (!formspreeId) {
      return res.status(400).json({
        error: 'Formspree ID not configured. Set FORMSPREE_QUOTE_ID in environment variables.'
      });
    }

    const result = await handleFormSubmission(req, data, formspreeId);
    return res.status(result.code).json(result);
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/contact-form', async (req, res) => {
  try {
    const { data } = req.body;
    const formspreeId = process.env.FORMSPREE_CONTACT_ID;

    if (!formspreeId) {
      return res.status(400).json({
        error: 'Formspree ID not configured. Set FORMSPREE_CONTACT_ID in environment variables.'
      });
    }

    const result = await handleFormSubmission(req, data, formspreeId);
    return res.status(result.code).json(result);
  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!process.env.CLAUDE_API_KEY) {
      return res.status(400).json({
        error: 'Claude API key not configured. Set CLAUDE_API_KEY in environment variables.'
      });
    }

    const result = await handleClaude(message, history || []);
    return res.status(result.code).json(result);
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🌞 By Solar server running on http://localhost:${PORT}`);
  console.log('Make sure to set environment variables:');
  console.log('  - FORMSPREE_QUOTE_ID');
  console.log('  - FORMSPREE_CONTACT_ID');
  console.log('  - CLAUDE_API_KEY (optional for chatbot)');
});
