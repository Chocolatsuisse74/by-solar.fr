# By Solar - API Backend

This directory contains serverless functions for Netlify deployment and Express.js routes for local development.

## Files

- **handler.js** - Main API handler for all endpoints
  - Form submission (Formspree proxy)
  - Claude AI chatbot
  - CORS handling

## Endpoints

### Form Submission
```
POST /api/submit-form
POST /api/contact-form

Body: {
  action: 'submit-form' | 'contact-form',
  data: { nom, email, phone, pays, message, etc. }
}

Response: { success: true, message: "...", code: 200 }
```

### AI Chatbot
```
POST /api/chat

Body: {
  message: "user message",
  history: [ { role, content }, ... ]
}

Response: { success: true, message: "ai response", code: 200 }
```

### Health Check
```
GET /health

Response: { status: 'ok' }
```

## Environment Variables

Set these in Netlify dashboard or local `.env` file:

```
FORMSPREE_QUOTE_ID     # e.g., f/xxxxxxxxxxx
FORMSPREE_CONTACT_ID   # e.g., f/xxxxxxxxxxx
CLAUDE_API_KEY         # e.g., sk-ant-xxxxx
```

## Local Development

```bash
# Install dependencies
npm install

# Start with file watcher
npm run dev

# Or start normally
npm start

# Test endpoints
curl http://localhost:3000/health
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello", "history": []}'
```

## Netlify Functions Deployment

The `netlify.toml` file configures auto-deployment:

1. Push changes to repo
2. Netlify auto-detects changes
3. Runs `npm install`
4. Deploys functions to `/.netlify/functions/handler`
5. Functions available at `/api/*` URLs

## CORS

CORS is enabled for all origins by default. To restrict:

Edit `api/handler.js` and change:
```javascript
res.setHeader('Access-Control-Allow-Origin', '*');
```

To:
```javascript
res.setHeader('Access-Control-Allow-Origin', 'https://by-solar.fr');
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Error description",
  "code": 500
}
```

Check browser console logs for debugging.

## Rate Limiting

Consider adding rate limiting for production:

```bash
npm install express-rate-limit
```

Then implement in `server.js` or `handler.js`.

## Testing

```bash
# Test form submission
curl -X POST http://localhost:3000/api/submit-form \
  -H "Content-Type: application/json" \
  -d '{
    "action":"submit-form",
    "data":{"nom":"Test","email":"test@test.com","pays":"France"}
  }'

# Test chatbot
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message":"Bonjour!",
    "history":[]
  }'
```

## Monitoring

Netlify Functions logs are available in:
1. Netlify Dashboard → Site → Functions
2. Real-time logs: `netlify logs functions`
3. Setup error alerts in Netlify

## Documentation

- [Netlify Functions](https://docs.netlify.com/functions/overview/)
- [Express.js](https://expressjs.com/)
- [Formspree API](https://formspree.io/help/api/)
- [Claude API](https://console.anthropic.com/docs/)
