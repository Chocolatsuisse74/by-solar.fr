# ☀️ By Solar

> **Solar Energy Investment Platform - Calculate Your ROI in Minutes**

A modern, responsive web platform for solar energy enthusiasts and potential investors. Calculate payback periods, savings, and make informed decisions about solar installations.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](#-tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](#-tech-stack)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-green)](#-responsive-design)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**[🌐 Visit Live Site](https://by-solar.fr)** | **[📖 Documentation](./docs)** | **[💬 Issues](../../issues)** | **[🤝 Contributing](CONTRIBUTING.md)**

---

## 🎯 What is By Solar?

By Solar is a comprehensive platform designed to educate and empower people about solar energy investments. Whether you're considering going solar or just curious about the technology, we provide tools and information to help you make the right decision.

### Key Benefits

- 💰 **ROI Calculator** - See your potential savings
- 📊 **Cost Analysis** - Break down the numbers
- 🏠 **Home Assessment** - Check your solar potential
- 📚 **Educational Content** - Learn about solar technology
- 🌍 **Location-Based Info** - Regional solar incentives
- 📱 **Fully Responsive** - Works on all devices

---

## ✨ Features

### 🔧 Tools & Calculators

- **ROI Calculator**
  - Calculate payback period
  - Estimate annual savings
  - Factor in incentives/tax credits
  - Compare scenarios

- **System Size Calculator**
  - Based on electricity usage
  - Account for shading
  - Regional sun exposure

- **Cost Estimator**
  - Installation costs
  - Maintenance expenses
  - Financing options
  - Long-term projections

### 📚 Educational Resources

- Solar technology basics
- Installation process guide
- Financing options explained
- Government incentives database
- Environmental impact calculator
- Case studies from real users

### 📱 Responsive Design

- **Desktop** - Full feature access
- **Tablet** - Optimized layout
- **Mobile** - Touch-friendly interface
- **All Browsers** - Maximum compatibility

### ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- Color contrast optimized
- Semantic HTML structure

---

## 🚀 Quick Start

### View Website

Simply open `index.html` in your browser:

```bash
# Using local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000

# Or just open directly
open index.html
```

### Deployment

#### Netlify (Recommended)

```bash
# Connect your GitHub repo to Netlify
# Or drag and drop the folder
# Site automatically deploys
```

#### GitHub Pages

```bash
# Enable in repo settings:
# Settings > Pages > Source: main branch
# Your site: https://username.github.io/by-solar.fr
```

#### Vercel

```bash
# Sign up and import your GitHub repo
# Automatic deployment on push
```

#### Traditional Server

```bash
# Upload all files to your web server
# Set index.html as default document
```

---

## 📁 Project Structure

```
by-solar.fr/
├── index.html              # Main page
├── css/
│   ├── style.css          # Main styles
│   ├── theme.css          # Color scheme
│   └── responsive.css     # Mobile styles
├── js/
│   ├── calculator.js      # ROI calculator logic
│   ├── forms.js           # Form handling
│   └── utils.js           # Utility functions
├── images/                # Image assets
├── data/
│   ├── incentives.json    # Government incentives
│   └── locations.json     # Regional data
├── docs/                  # Documentation
├── CONTRIBUTING.md        # Contribution guide
└── README.md             # This file
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure & semantics |
| **CSS3** | Styling & responsive design |
| **Vanilla JS** | Interactive calculators |
| **JSON** | Data storage |

### Why Vanilla Stack?

- ⚡ **Fast** - No framework overhead
- 📦 **Lightweight** - Minimal dependencies
- 🔒 **Secure** - No security vulnerabilities
- 🌐 **Compatible** - Works everywhere
- ♿ **Accessible** - Easy to audit

---

## 📊 Calculators

### ROI Calculator

**Input:**
- System size (kW)
- Electricity rate ($/kWh)
- Installation cost
- Tax credits/incentives
- Inflation rate

**Output:**
- Annual savings
- Payback period
- 25-year savings
- System performance

```html
<!-- Example usage -->
<form id="roi-calculator">
  <input type="number" id="system-size" placeholder="System size in kW" />
  <input type="number" id="electricity-rate" placeholder="Rate $/kWh" />
  <button type="submit">Calculate</button>
</form>
<div id="results"></div>
```

### System Size Calculator

Based on annual electricity consumption, estimate ideal system size accounting for:
- Regional sun exposure
- Roof orientation
- Shading factors
- Seasonal variation

---

## 🎨 Customization

### Theme Colors

Edit `css/theme.css`:

```css
:root {
  --primary-color: #FFB81C;      /* Solar yellow */
  --secondary-color: #003DA5;    /* Sky blue */
  --accent-color: #00A651;       /* Growth green */
  --text-dark: #333333;
  --text-light: #FFFFFF;
  --bg-light: #F5F5F5;
}
```

### Data Updates

Update `data/incentives.json` with latest government incentives:

```json
{
  "incentives": [
    {
      "country": "USA",
      "state": "California",
      "program": "CSI",
      "incentive": "$0.50-$1.00/watt",
      "url": "https://..."
    }
  ]
}
```

---

## 📈 Performance

- **Page Load** - < 2 seconds
- **Lighthouse Score** - 95+
- **File Size** - < 500KB total
- **Caching** - Browser optimization enabled
- **CDN Ready** - Works with content delivery networks

### Optimization Tips

1. **Images** - Compressed SVGs & WebP formats
2. **CSS** - Minified production version
3. **JavaScript** - Bundled and optimized
4. **Caching** - Service worker support
5. **Analytics** - Lightweight tracking

---

## 🌍 Regional Support

Current supported regions:
- 🇺🇸 United States (all states)
- 🇨🇦 Canada (provinces)
- 🇪🇺 European Union
- 🇦🇺 Australia
- 🇯🇵 Japan

Add your region by updating `data/locations.json`.

---

## ✅ Testing Checklist

Before deploying:

- [ ] All calculators function correctly
- [ ] Mobile layout responsive
- [ ] All links working
- [ ] Forms submit properly
- [ ] Images load correctly
- [ ] Accessibility verified
- [ ] Cross-browser tested
- [ ] Content proofread

---

## 🤝 Contributing

We welcome improvements! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Quick Contribution Steps

```bash
1. Fork the repository
2. Create your branch: git checkout -b improvement/my-feature
3. Make your changes
4. Test thoroughly
5. Commit: git commit -m 'Add my feature'
6. Push: git push origin improvement/my-feature
7. Open a Pull Request
```

---

## 🐛 Reporting Issues

Found a bug? [Open an issue](../../issues) with:
- Description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/device info

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file

---

## 👥 Team

- **Chocolatsuisse74** - [GitHub](https://github.com/Chocolatsuisse74)

---

## 🌞 Support Solar Energy

By Solar is committed to promoting renewable energy adoption. Every installation reduces carbon emissions and supports a sustainable future.

### Related Resources

- ☀️ [Solar Energy Industries Association](https://www.seia.org)
- 🌍 [International Renewable Energy Agency](https://www.irena.org)
- 💡 [Department of Energy - Solar](https://energy.gov/solar)
- 📊 [Solar Database](https://pvwatts.nrel.gov)

---

## 📞 Contact & Support

- 🐛 [Bug Reports](../../issues)
- 💡 [Feature Requests](../../issues)
- 📧 [Email Support](mailto:support@by-solar.fr)
- 💬 [Discussions](../../discussions)

---

**Start your solar journey today! ☀️** [Open the App](https://by-solar.fr)
