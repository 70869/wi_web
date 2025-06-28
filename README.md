# (wired-in) - Gaming Community & Server Hosting

A modern, responsive website for the (wired-in) gaming community, featuring high-performance game servers, secure file hosting, and a vibrant community platform.

## 🚀 Features

- **Modern Design**: Apple-style UX with dark theme and brand colors
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth animations and micro-interactions
- **Game Server Showcase**: Minecraft and CS2 server information
- **Team Section**: Meet the passionate team behind (wired-in)
- **Contact Form**: Easy communication with the community
- **Testimonials**: Community feedback and reviews
- **SEO Optimized**: Proper metadata and structured content

## 🎨 Design System

- **Brand Colors**: 
  - Primary: `#00ff88` (Neon Green)
  - Secondary: `#00cc6a` (Darker Green)
  - Accent: `#00ffaa` (Light Green)
- **Typography**: Apple system fonts for optimal readability
- **Animations**: Smooth transitions and hover effects
- **Glass Morphism**: Modern backdrop blur effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom CSS variables
- **Language**: TypeScript for type safety
- **Package Manager**: Bun for fast dependency management
- **Deployment**: Ready for Vercel deployment

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd wired-in
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run the development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
wired-in/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and design system
│   │   ├── layout.tsx           # Root layout with metadata
│   │   ├── page.tsx             # Main page component
│   │   └── not-found.tsx        # Custom 404 page
│   ├── components/
│   │   ├── common/              # Reusable components
│   │   │   ├── LoadingSpinner.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/            # Page sections
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── ServersSection.tsx
│   │       ├── TeamSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       └── ContactSection.tsx
│   └── assets/                  # Images and static assets
│       └── images/
└── public/                      # Public assets
```

## 🎯 Key Components

### Hero Section
- Animated background with brand colors
- Call-to-action buttons
- Community statistics
- Smooth scroll indicator

### About Section
- Mission and vision
- Feature highlights
- Community values
- Interactive cards

### Servers Section
- Minecraft server showcase
- CS2 server information
- Server statistics
- Performance metrics

### Team Section
- Team member profiles
- Social links
- Role descriptions
- Community stats

### Testimonials Section
- Auto-rotating carousel
- Community feedback
- Star ratings
- User avatars

### Contact Section
- Interactive contact form
- Social media links
- Community stats
- Multiple contact methods

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with default settings

### Manual Deployment
```bash
# Build the project
bun run build

# Start production server
bun run start
```

## 🎨 Customization

### Colors
Update the CSS variables in `src/app/globals.css`:
```css
:root {
  --brand-primary: #00ff88;
  --brand-secondary: #00cc6a;
  --brand-accent: #00ffaa;
}
```

### Content
- Update team member information in `TeamSection.tsx`
- Modify server details in `ServersSection.tsx`
- Change testimonials in `TestimonialsSection.tsx`
- Update contact information in `ContactSection.tsx`

### Styling
- Modify animations in `globals.css`
- Update component styles using Tailwind classes
- Add new CSS variables for consistent theming

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly

## 🔧 Development Scripts

```bash
# Development
bun run dev          # Start development server
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint
bun run type-check   # Run TypeScript checks
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Discord**: Join our community at [discord.gg/wiredin](https://discord.gg/wiredin)
- **Email**: contact@wiredin.com
- **Steam Group**: [LoveTaps Community](https://steamcommunity.com/groups/lovetaps)

## 🙏 Acknowledgments

- **LoveTaps Steam Group** - The amazing community behind (wired-in)
- **Next.js Team** - For the incredible framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Apple** - Design inspiration and UX patterns

---

**Made with ❤️ by the (wired-in) Team**
