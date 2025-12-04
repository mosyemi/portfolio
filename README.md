# Collins Kipchumba Mosyemi - Software Developer Portfolio

A modern, cyberpunk-themed portfolio website showcasing projects, skills, and services. Built with HTML, CSS, and vanilla JavaScript with interactive animations and a matrix-style design.

## 🌟 Features

- **Cyber-themed Design** — Matrix rain canvas, scanlines, glitch effects, and neon green color scheme
- **Responsive Layout** — Mobile-first design with smooth responsiveness across all devices
- **Interactive Animations** — Typing effects, floating particles, pulsing icons, and smooth transitions
- **Multi-page Structure** — Dedicated pages for about, skills, projects, services, and contact
- **Performance Optimized** — Lightweight vanilla JavaScript, no heavy frameworks
- **Accessibility Ready** — Semantic HTML, alt text, and keyboard navigation

## 📁 Project Structure

```
portfolio/
├── index.html                      # Homepage
├── About Me.html                   # About page
├── Technical skils.html            # Skills page
├── Featured Projects.html          # Projects showcase
├── What I Offer.html              # Services page
├── Let's Connect.html             # Contact page
├── style.css                       # Main stylesheet
├── script.js                       # JavaScript interactivity
├── assets/
│   └── profile.svg                # Avatar placeholder
├── images/
│   └── collo.png                  # Profile photo
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (for local development)

### Installation

1. **Clone the repository** (if hosted on GitHub):
   ```bash
   git clone https://github.com/mosyemi/portfolio.git
   cd portfolio
   ```

2. **Start a local server**:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (using http-server)
   npx http-server
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

## 📖 Usage

### Navigation
- **Home** — Hero section with introduction and quick stats
- **About Me** — Personal background and professional journey
- **Technical Skills** — Languages, frameworks, and tools
- **Featured Projects** — Showcase of completed work
- **What I Offer** — Services and expertise areas
- **Let's Connect** — Contact information and forms

### Customization

#### Update Profile Image
Replace `images/collo.png` with your own photo:
```html
<img src="images/your-image.jpg" alt="Your Name">
```

#### Modify Content
Edit each HTML page directly:
- `index.html` — Update hero title, subtitle, and stats
- `About Me.html` — Add your story
- `Technical skils.html` — List your skills
- `Featured Projects.html` — Showcase your work
- `What I Offer.html` — Describe your services
- `Let's Connect.html` — Add contact details

#### Change Colors
Edit `style.css` and modify the primary color (currently `#00ff41` green):
```css
/* Replace #00ff41 with your preferred color */
color: #00ff41;
text-shadow: 0 0 10px #00ff41;
```

## 🎨 Design System

### Colors
- **Primary:** `#00ff41` (Neon Green)
- **Secondary:** `#00ffff` (Cyan)
- **Accent:** `#ffff00` (Yellow)
- **Background:** `#000000` (Black)

### Fonts
- **Main Font:** Courier New, Consolas, monospace

### Animations
- Matrix rain effect on canvas
- Glitch text effect on titles
- Typing animation on subtitle
- Floating binary particles
- Pulsing icons
- Smooth transitions and hover effects

## 🔧 Technologies

- **HTML5** — Semantic markup
- **CSS3** — Animations, gradients, flexbox, grid
- **JavaScript (Vanilla)** — No dependencies
  - Canvas API for matrix rain
  - Intersection Observer for scroll animations
  - Event listeners for interactivity

## ⚙️ Features Detail

### Matrix Rain Canvas
- Animated falling binary characters
- Responsive to window resize
- Performance optimized with interval-based updates

### Counter Animation
- Animates stats on scroll
- Uses Intersection Observer API
- Smooth number increment

### Mobile Menu
- Hamburger menu for screens < 768px
- Keyboard shortcuts (Ctrl/Cmd+K to toggle)
- Escape key to close

### Performance Monitoring
- Console logs for load times and performance metrics
- DNS lookup, server response, and total load time tracking

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Brave 

## 🚢 Deployment

### GitHub Pages
1. Push your repository to GitHub
2. Enable GitHub Pages in repository settings
3. Select `main` branch as source

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/` (root)
4. Deploy

### Other Hosting
- Upload all files to your hosting provider
- Ensure directory structure is preserved
- Test all links after upload

## 📝 Console Easter Egg

Open your browser's developer console (F12) to see system access messages and performance stats.

## 🛠️ Troubleshooting

**Image not showing?**
- Ensure `images/collo.png` exists
- Check file path is correct
- Verify image format is supported

**Animations not working?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check JavaScript is enabled
- Open console for any error messages

**Links not working?**
- Verify HTML filenames match exactly (including spaces)
- Check file paths are relative

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and improve this portfolio template for your own use.

## 📧 Contact

For inquiries or custom modifications, reach out through the **Let's Connect** page.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
