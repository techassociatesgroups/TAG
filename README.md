# Premium Digital Studio - Next.js Landing Page

A high-end React landing page built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. This project features premium animations, smooth scrolling, custom cursor tracking, and glass morphism design patterns.

## 🎯 Key Features

### Core Architecture
- **Deep Dark Theme**: Custom `bg-[#0a0a0a]` background with `text-[#ededed]` foreground
- **SVG Grain Overlay**: Subtle texture added to global styles for premium feel
- **Smooth Scrolling**: Integrated Lenis for inertial, buttery-smooth scroll experience

### Animations & Interactions
- **Custom Cursor**: 20px circle with `mix-blend-mode: difference`, springs with delay (damping: 30, stiffness: 200)
- **Scroll Reveal**: Every section animates with `y: 50 → y: 0` transition (duration: 0.8s)
- **Parallax Effects**: Uses `useScroll` and `useTransform` for depth-based animations
- **Magnetic Buttons**: Buttons "pull" toward cursor on hover using spring physics
- **Glass Cards**: `backdrop-blur-md` with `border-white/10` and hover states

### Components

#### 1. **Hero Section**
- Bento Grid layout with animated content
- Two animated mesh gradients (purple & blue) with blur-[120px] and 20% opacity
- Large bold typography with `tracking-tighter`
- Call-to-action buttons with magnetic effects
- Scroll indicator with bounce animation

#### 2. **Works Section**
- Project cards with glass morphism styling
- Sticky parallax scrolling effect
- Gradient backgrounds with hover states
- Category badges and external link buttons

#### 3. **Features Section**
- 4-column grid showcasing key benefits
- Icon animation on hover
- Gradient background overlays

#### 4. **CTA Section**
- Large call-to-action with gradient text
- Glass card with hover scale effect
- Dual button options

#### 5. **Footer**
- Social media links with hover animations
- Multi-column link structure
- Legal links and branding

## 🛠️ Tech Stack

| Feature | Library | Why? |
|---------|---------|------|
| Framework | **Next.js 15** | Optimal image handling and performance |
| Animations | **Framer Motion 11** | Industry-standard animation engine |
| Scrolling | **Lenis** | Premium "weighty" scroll effect |
| Styling | **Tailwind CSS 4** | Utility-first, rapid development |
| Icons | **Lucide React** | Clean, minimalist strokes |
| UI Components | **Custom React** | Full control and customization |

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles with grain overlay
├── components/
│   ├── CustomCursor.tsx    # Trailing cursor component
│   ├── SmoothScroll.tsx    # Lenis scroll provider
│   ├── ScrollReveal.tsx    # Scroll animation wrapper
│   ├── GradientBlob.tsx    # Animated mesh gradients
│   ├── MagneticButton.tsx  # Hover-tracking buttons
│   ├── GlassCard.tsx       # Glass morphism card
│   ├── Hero.tsx            # Hero section
│   ├── Works.tsx           # Works/projects section
│   ├── Features.tsx        # Features showcase
│   ├── CTA.tsx             # Call-to-action section
│   ├── Footer.tsx          # Footer component
│   └── index.ts            # Component exports
├── globals.css             # Global styles
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript config
├── tailwind.config.ts      # Tailwind customization
├── postcss.config.mjs      # PostCSS setup
└── next.config.js          # Next.js configuration
```

## 🎨 Design Tokens

### Colors
- **Background**: `#0a0a0a` (Deep Dark)
- **Text**: `#ededed` (Light Gray)
- **Accent**: Purple → Blue Gradients
- **Glass**: `bg-white/10` with `border-white/10`

### Effects
- **Blur**: `blur-[120px]` for gradients, `backdrop-blur-md` for glass
- **Opacity**: 20% for gradients, 10% for borders
- **Blend Mode**: `mix-blend-mode: multiply` for gradients, `difference` for cursor

### Typography
- **Font**: Inter (System UI) with `tracking-tighter`
- **Line Height**: 0.9em for premium tight look
- **Letter Spacing**: -0.04em for professional appearance

## 🚀 Deployment

This project is optimized for **Vercel**:

```bash
# Push to GitHub (if using Git)
git push origin main

# Deploy on Vercel
# Simply connect your GitHub repo at vercel.com
```

## 📊 Performance

- ⚡ **Core Web Vitals**: Optimized with Next.js Image component
- 🎯 **SEO**: Metadata configured in `layout.tsx`
- 📱 **Responsive**: Mobile-first design with Tailwind breakpoints
- 🔍 **Dark Mode**: Built-in with deep dark theme

## 🎬 Animation Reference

### Scroll Reveal
```typescript
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
```

### Spring Easing (Magnetic Buttons)
```typescript
spring: { stiffness: 150, damping: 15, mass: 0.1 }
```

### Cursor Physics
```typescript
spring: { damping: 30, stiffness: 200 }
```

## 🔧 Customization

### Change Theme Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'deep-dark': '#0a0a0a',
  'light-text': '#ededed',
}
```

### Adjust Scroll Speed
Modify `SmoothScroll.tsx`:
```typescript
duration: 0.8, // Increase for slower scroll
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
```

### Customize Animation Timing
Update transition values in component files or `globals.css`.

## 📝 Best Practices Implemented

✅ **Performance**: Image optimization, lazy loading, code splitting
✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
✅ **SEO**: Meta tags, structured data, clean URLs
✅ **Type Safety**: Full TypeScript implementation
✅ **Code Quality**: ESLint configuration, consistent formatting
✅ **Responsive**: Mobile-first design approach

## 🤝 Contributing

Feel free to fork and customize this template for your own projects!

## 📄 License

MIT License - Feel free to use for personal or commercial projects.

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion.
