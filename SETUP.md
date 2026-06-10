# By Solar - Complete Setup & Deployment Guide

## Phase 1: Complete ✅ 
**Status**: Fixed broken systems and added API infrastructure

### What Was Done
- ✅ Updated form submission to use backend API (`/api/submit-form`, `/api/contact-form`)
- ✅ Fixed chatbot to use secure backend API (`/api/chat`) instead of exposing Claude API key
- ✅ Added Google Analytics 4 code for conversion tracking
- ✅ Added Facebook Pixel for retargeting
- ✅ Added SEO meta tags (canonical, Open Graph, Twitter Cards)
- ✅ Created Node.js/Express backend for API proxy
- ✅ Created environment configuration files

---

## Quick Start (Next Steps)

### 1. Set Up Formspree (Form Backend)

1. Go to **https://formspree.io** and sign up (free account)
2. Create 2 forms:
   - **Form 1 (Quote Requests)**: Collect name, email, phone, country, product, message
     - Copy the form ID (e.g., `f/xxxxxxxxxxx`)
     - Save as `FORMSPREE_QUOTE_ID`
   - **Form 2 (General Contact)**: Same fields
     - Copy the form ID
     - Save as `FORMSPREE_CONTACT_ID`

### 2. Get Google Analytics 4

1. Go to **https://analytics.google.com** (sign in with Google account)
2. Create a new property for "by-solar.fr"
3. Get your **Measurement ID** (looks like `G-XXXXXXXXXX`)
4. In `index.html`, replace `G-XXXXXXXXXX` (appears 2x) with your Measurement ID

### 3. Get Facebook Pixel

1. Go to **https://business.facebook.com** → Business Settings
2. Go to **Data Sources** → **Pixels** → **Create Pixel**
3. Create pixel for "by-solar.fr"
4. Get your **Pixel ID** (looks like `123456789`)
5. In `index.html`, replace `XXXXXXXXXX` (appears 3x in Facebook Pixel code) with your Pixel ID

### 4. Set Up Environment Variables

Create `.env` file in project root (copy from `.env.example`):

```bash
# Copy and fill in your values
FORMSPREE_QUOTE_ID=f/xxxxxxxxxxx
FORMSPREE_CONTACT_ID=f/xxxxxxxxxxx
CLAUDE_API_KEY=sk-ant-xxxxxxxxxxxxxxxx  # Optional for chatbot
PORT=3000
NODE_ENV=development
```

### 5. Deploy Backend Server

#### Option A: Vercel (Recommended - Free Tier)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# When prompted:
# - Link to existing project: No
# - Set project name: by-solar-fr
# - Add environment variables (use UI)
```

#### Option B: Your Own Server

```bash
# Install dependencies
npm install

# Start local server
npm run dev

# Server runs on http://localhost:3000
```

#### Option C: Railway, Heroku, or AWS Lambda

Use any Node.js hosting platform. Set environment variables in the dashboard.

### 6. Update HTML Form Endpoints (If Not on Same Domain)

If backend is on different domain (e.g., `api.by-solar.fr`):

```html
<!-- In index.html, update form actions -->
<form action="https://api.by-solar.fr/api/submit-form" ...>
```

---

## Testing Checklist

### ✓ Forms Work
1. Go to https://by-solar.fr
2. Click "Demander un devis" button
3. Fill in form and submit
4. Should see success message (green button)
5. Check Formspree dashboard - see the submission?

### ✓ Chatbot Works
1. Click chat icon (bottom-right)
2. Type a question: "Je suis intéressé par 6 kW"
3. Should get response from Claude AI

### ✓ Analytics Tracks Events
1. Open browser DevTools (F12)
2. Go to Console
3. Submit a form or chat message
4. Should see `gtag` events logged
5. Check Google Analytics after 24h

### ✓ Pixel Fires
1. DevTools → Network tab
2. Look for requests to `facebook.com/tr`
3. Should see Facebook Pixel firing

---

## Phase 2: Next (Analytics & CRM) - Coming Soon

### 2.1 CRM Integration
- [ ] Choose: Pipedrive Free or Hubspot Free
- [ ] Set up webhook: Formspree → CRM
- [ ] Create sales pipeline

### 2.2 Email Automation
- [ ] Set up Mailchimp or Brevo
- [ ] Create welcome email sequence
- [ ] Set up Formspree → Email automation

### 2.3 Payment Processing
- [ ] Integrate Stripe or Wise
- [ ] Add deposit payment button
- [ ] Track payment status

---

## Configuration Reference

### Environment Variables

```
FORMSPREE_QUOTE_ID       - Formspree form ID for quote requests
FORMSPREE_CONTACT_ID     - Formspree form ID for contact form
CLAUDE_API_KEY           - Claude API key (optional)
GOOGLE_ANALYTICS_ID      - GA4 Measurement ID
FACEBOOK_PIXEL_ID        - Facebook Pixel ID
PORT                     - Server port (default: 3000)
NODE_ENV                 - Environment (development/production)
```

### API Endpoints

- `POST /api/submit-form` - Quote request form (modal)
- `POST /api/contact-form` - Contact form (footer)
- `POST /api/chat` - AI chatbot messages
- `GET /health` - Server health check

### Analytics Events

```javascript
gtag('event','form_submission',{form_type:'quote'})    // Quote form submit
gtag('event','form_submission',{form_type:'contact'})  // Contact form submit
gtag('event','chat_message',{type:'assistant'})        // Chat message received
```

---

## Troubleshooting

### Forms Not Submitting
- [ ] Check `.env` file has correct `FORMSPREE_QUOTE_ID` and `FORMSPREE_CONTACT_ID`
- [ ] Verify Formspree form IDs are correct format (`f/xxxxxxxxxxx`)
- [ ] Check browser console for errors (F12)
- [ ] Test with curl: `curl -X POST http://localhost:3000/health`

### Chatbot Not Working
- [ ] Check `CLAUDE_API_KEY` in `.env` (optional, but recommended)
- [ ] Verify API key is valid at https://console.anthropic.com
- [ ] Check browser console for errors
- [ ] Make sure backend server is running

### Analytics Not Showing Data
- [ ] GA4 ID must start with `G-` (not `UA-`)
- [ ] Verify in browser console: `gtag('event','page_view')`
- [ ] Check Google Analytics takes 24-48h to show data
- [ ] Facebook Pixel shows in Network tab → `facebook.com/tr`

### Deployment Issues
- [ ] Use `npm start` or `npm run dev` to test locally first
- [ ] Check Vercel/Railway logs for errors
- [ ] Verify environment variables are set in hosting dashboard
- [ ] CORS should be enabled for frontend to call API

---

## Production Checklist

Before going live:
- [ ] Set `NODE_ENV=production` in server
- [ ] Test all forms work end-to-end
- [ ] Verify Google Analytics IDs are production IDs
- [ ] Verify Facebook Pixel IDs are production IDs
- [ ] Test chatbot with real Claude API key
- [ ] Check Formspree receives submissions
- [ ] Monitor server logs for errors
- [ ] Set up error alerts (Sentry, etc.)

---

## Support

- **Formspree Issues**: https://formspree.io/help
- **Google Analytics**: https://support.google.com/analytics
- **Facebook Pixel**: https://www.facebook.com/support
- **Claude API**: https://support.anthropic.com
- **Node.js/Express**: https://expressjs.com

---

## Next Phase Goals

1. **CRM Integration** - Organize and manage leads
2. **Email Automation** - Auto-follow-up with prospects
3. **Payment Processing** - Collect 30% deposits
4. **Interactive Calculators** - ROI, system size, cost estimates
5. **Customer Portal** - Order tracking and status
6. **Blog/SEO** - Long-term organic growth

Timeline: ~3 weeks to complete all phases

---

**Current Status**: Phase 1 Complete ✅ | Next: Phase 2 (CRM & Analytics) 
**Last Updated**: 2026-06-10
**Branch**: `claude/complete-deploy-project-Ynlqx`
