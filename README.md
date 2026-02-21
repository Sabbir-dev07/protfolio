# Modern Portfolio Website

A production-ready, ultra-modern personal portfolio website built with React JS, featuring premium animations, glassmorphism design, and a dark theme.

![Portfolio Preview](https://via.placeholder.com/1200x600/0A0A0A/00D9FF?text=Portfolio+Website)

## ✨ Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS
- **Premium Animations**: Framer Motion + GSAP for smooth, professional animations
- **Glassmorphism Design**: Beautiful glass-effect cards with backdrop blur
- **Dark Theme**: Sleek dark mode with neon blue accents
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: ARIA labels and keyboard navigation support
- **Performance**: Optimized for 60 FPS animations

## 🎨 Design Highlights

- Letter-by-letter hero animation using GSAP
- Typing effect for role text
- Scroll-triggered animations
- Animated stat counters
- Interactive project filters
- Auto-rotating testimonial carousel
- Floating label contact form
- Smooth page transitions

## 📦 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Scroll Detection**: React Intersection Observer

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd Protpholio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Customization

### Update Personal Information

Edit `src/data/content.js` to customize:
- Personal info (name, role, bio, contact details)
- Skills and expertise
- Projects portfolio
- Work experience
- Testimonials
- Social media links

### Customize Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  primary: {
    DEFAULT: '#00D9FF', // Change to your preferred color
    // ...
  }
}
```

### Add Your Images

Replace placeholder images in the content data:
- Profile picture in About section
- Project screenshots
- Testimonial avatars

## 🏗️ Project Structure

```
portfolio/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   ├── common/      # Reusable components
│   │   ├── layout/      # Layout components (Navbar, Footer)
│   │   └── sections/    # Page sections
│   ├── data/            # Content data
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json
├── tailwind.config.js   # Tailwind configuration
└── vite.config.js       # Vite configuration
```

## 📱 Sections

1. **Hero** - Full-screen intro with animated name and typing effect
2. **About** - Bio and animated statistics
3. **Skills** - Categorized skills with progress bars
4. **Projects** - Filterable project showcase
5. **Experience** - Timeline of work history
6. **Testimonials** - Auto-rotating client feedback
7. **Contact** - Form with floating labels and social links
8. **Footer** - Social media and copyright

## 🎯 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

## 🌐 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## ⚡ Performance

- Optimized bundle splitting
- Lazy loading for images
- Smooth 60 FPS animations
- Minimal dependencies
- Tree-shaking enabled

## 🎨 Customization Tips

1. **Change Font**: Update Google Fonts link in `index.html` and `tailwind.config.js`
2. **Add Sections**: Create new components in `src/components/sections/`
3. **Modify Animations**: Edit `src/utils/animations.js` for custom variants
4. **Update Theme**: Modify Tailwind config for colors, spacing, etc.

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues, please open an issue on GitHub or contact via email.

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**
