# Contributing to By Solar

We welcome contributions from solar enthusiasts and developers!

## How to Contribute

1. **Report Issues** - Found a bug? [Open an issue](../../issues)
2. **Suggest Features** - Have an idea? [Share it](../../issues)
3. **Improve Content** - Suggest better solar information
4. **Fix Bugs** - Submit a pull request
5. **Improve Design** - Enhance the UI/UX
6. **Translate** - Help translate content

## Getting Started

```bash
# Clone repository
git clone https://github.com/Chocolatsuisse74/by-solar.fr.git
cd by-solar.fr

# Open in browser
open index.html

# Or use local server
python -m http.server 8000
# Visit http://localhost:8000
```

## Making Changes

### Content Changes

Edit HTML files directly:

```html
<!-- Example: Update hero section -->
<section class="hero">
  <h1>Your Updated Title</h1>
  <p>Your updated description</p>
</section>
```

### Style Changes

Edit CSS files in `css/`:

```css
/* Update theme colors in css/theme.css */
:root {
  --primary-color: #yourcolor;
}
```

### Data Changes

Update JSON files in `data/`:

```json
{
  "products": [
    {
      "id": 1,
      "name": "Product Name",
      "description": "Product description"
    }
  ]
}
```

## Submission Process

1. **Fork** the repository
2. **Create** a branch: `git checkout -b improvement/your-improvement`
3. **Make** your changes
4. **Test** in multiple browsers
5. **Commit**: `git commit -m 'Describe changes'`
6. **Push**: `git push origin improvement/your-improvement`
7. **Open** a Pull Request

## Guidelines

### Content

- ✅ Accurate solar information
- ✅ Cite sources when applicable
- ✅ Keep language clear & accessible
- ✅ SEO-friendly keywords
- ✅ Mobile-friendly layout

### Code

- ✅ Valid HTML5
- ✅ Clean, organized CSS
- ✅ Vanilla JavaScript (no unnecessary deps)
- ✅ Accessibility compliant
- ✅ Cross-browser compatible

### Design

- ✅ Consistent with existing style
- ✅ Mobile responsive
- ✅ Performance optimized
- ✅ Accessibility considered

## Testing

Before submitting:

1. Test in multiple browsers
2. Verify mobile responsiveness
3. Check calculator functionality
4. Validate links work
5. Proof-read content

## Types of Contributions Welcome

### 🐛 Bug Fixes

- Layout issues
- Broken links
- Calculator errors
- Browser compatibility

### ✨ Features

- New tools/calculators
- Educational content
- UI improvements
- Performance optimization

### 📝 Content

- Solar technology articles
- Installation guides
- Cost saving information
- Case studies

### 🎨 Design

- Visual improvements
- Better layouts
- New sections
- Enhanced components

## PR Review Process

Your PR will be reviewed for:

1. **Quality** - Code/content quality
2. **Accuracy** - Technical correctness
3. **Accessibility** - WCAG compliance
4. **Performance** - Speed optimization
5. **Style** - Consistency

## Questions?

- 📖 Check [README](README.md)
- 💬 Open an [issue](../../issues)
- 📧 Contact maintainer

---

Thank you for helping solar energy information! 🌞
