# (wired-in) - Gaming Community Platform

A modern, high-performance web platform for the (wired-in) gaming community, featuring game server hosting, community management, and secure file sharing services.

## 🎮 Overview

(wired-in) is a comprehensive gaming platform that provides:
- **High-performance game servers** for Minecraft and Counter-Strike 2
- **Community management** with Discord integration
- **Secure file hosting** and sharing capabilities
- **Modern web interface** with Apple-inspired design principles

## ✨ Key Features

### Core Functionality
- **Game Server Management** - Real-time server status and player monitoring
- **Community Hub** - Integrated Discord community with member management
- **File Hosting** - Secure file storage and sharing platform
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices

### User Experience
- **Modern UI/UX** - Apple-inspired design with glassmorphic effects
- **Smooth Animations** - Fluid transitions and micro-interactions
- **Dark Theme** - Eye-friendly dark mode with brand accent colors
- **Accessibility** - WCAG compliant with keyboard navigation support

###  Performance
- **Next.js 14** - Latest React framework with App Router
- **TypeScript** - Type-safe development with enhanced IDE support
- **Tailwind CSS** - Utility-first styling with custom design system
- **Bun Runtime** - Fast JavaScript runtime for development and production

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - I think we know this one
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions

### Development Tools
- **Bun** - Fast JavaScript runtime and package manager
- **ESLint** - Code linting and quality assurance
- **Prettier** - Code formatting and consistency
- **TypeScript** - Static type checking

### Deployment
- **Vercel** - Optimized hosting platform for Next.js
- **GitHub** - Version control and CI/CD integration

## 🏗️ Project Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Homepage component
│   └── [routes]/          # Dynamic routes and pages
├── components/            # Reusable React components
│   ├── common/           # Shared utility components
│   ├── layout/           # Layout and navigation components
│   └── sections/         # Page-specific section components
├── assets/               # Static assets and resources
└── types/                # TypeScript type definitions
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18+ or **Bun** 1.0+
- **Git** for version control
- **Code editor** (VS Code recommended)

### Installation

1. **Clone the repository**

2. **Install dependencies**
   ```bash
   # Using Bun (recommended)
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Design System

### Color Palette
```css
--brand-primary: #00ff88    /* (wi) Green */
--brand-secondary: #00cc6a  /* Dark Green */
--brand-accent: #00ffaa     /* Light Green */
--background: #000000       /* Pure Black */
--surface-primary: #0a0a0a  /* Dark Gray */
--text-primary: #ffffff     /* White */
--text-secondary: #a0a0a0   /* Light Gray */
```

### Typography
- **Primary Font**: Apple system fonts cuz why tf not (SF Pro, Segoe UI, Roboto)
- **Monospace**: SF Mono, Monaco, Cascadia Code
- **Font Weights**: 400 (regular), 600 (semibold), 700 (bold)

### Components
- **Glassmorphic Cards** - Backdrop blur with transparency
- **Gradient Text** - Brand color gradients for emphasis
- **Interactive Buttons** - Hover effects and micro-animations
- **Responsive Grid** - Flexible layouts for all screen sizes

## 📱 Component Documentation

### Hero Section
The main landing section featuring:
- Animated brand title with staggered text reveal
- CTA buttons for community engagement
- Key metrics display (members, uptime, reliability)
- Background parallax effects

### Servers Section
Game server showcase with:
- Real-time server status monitoring
- Player count and capacity display
- Server feature highlights
- Interactive join guides and modals

### Team Section
Community team presentation:
- Team member profiles with avatars
- Role descriptions and social links
- Online/offline status indicators
- Community statistics

### Contact Section
Communication hub featuring:
- Interactive contact form with validation
- Multiple contact methods (Discord, email)
- Community statistics and engagement metrics
- Social media integration

## 🔧 Development

### Available Scripts
```bash
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint
bun run type-check   # Run TypeScript checks
```

### Code Quality
- **ESLint** configuration for code consistency
- **Prettier** formatting for clean code
- **TypeScript** strict mode for type safety
- **Component testing** with React Testing Library

### Performance Optimization
- **Image optimization** with Next.js Image component
- **Code splitting** and lazy loading
- **CSS optimization** with Tailwind's purge
- **Bundle analysis** and size monitoring

## 🚀 Deployment

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `bun run build`
   - **Output Directory**: `.next`
3. Deploy with automatic CI/CD

### Environment Variables
```env
NEXT_PUBLIC_DISCORD_INVITE=https://discord.gg/wiredin
NEXT_PUBLIC_SITE_URL=https://wiredin.gg
```

### Build Optimization
- **Static generation** for improved performance
- **Image optimization** with WebP format
- **CSS minification** and purging
- **JavaScript bundling** and tree shaking

## 📊 Performance Metrics

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🔒 Security

### Best Practices
- **Content Security Policy** (CSP) headers
- **HTTPS enforcement** with secure cookies
- **Input validation** and sanitization
- **Dependency scanning** for vulnerabilities

### Data Protection
- **GDPR compliance** with privacy controls
- **Cookie consent** management
- **Data encryption** in transit and at rest
- **Regular security audits**

## 🤝 Contributing

We welcome contributions from the community! Please follow these guidelines:

- Shie | who made the base layout of this website and the intial 1.0 Design

### Commit Convention
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add or update tests
chore: maintenance tasks
```

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🆘 Support & Community

### Getting Help
- **Discord**: [Join our community](https://discord.gg/wiredin)
- **Issues**: [GitHub Issues](https://github.com/your-username/wired-in/issues)
- **Documentation**: [Project Wiki](https://github.com/your-username/wired-in/wiki)

### Community Guidelines
- **Be respectful** and inclusive
- **Follow Discord** server rules
- **Report issues** responsibly
- **Share feedback** constructively

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Vercel or cloudflare** for seamless deployment
- **Our community** for continuous support and feedback

**Built with ❤️ by the (wired-in) team**
