# Website Agency - Setup & Customization Guide

## 🚀 Overview

Your premium agency website is now production-ready with advanced animations, smooth scrolling effects, and a clean structure. The website showcases your work with an impressive portfolio section and professional contact/pricing areas.

## 📋 Website Structure

The website flows in this order:
1. **Hero Section** - Eye-catching introduction with animations
2. **About Portfolio** - Your agency overview
3. **Our Works** - Scrollable portfolio gallery with project images and links
4. **Pricing** - Service packages with features
5. **Contact Section** - Contact form and information
6. **Footer** - Social links and additional info

## 🎨 Customization Guide

### 1. Update Portfolio/Works Section

Edit **`src/components/ProjectShowcase.tsx`** to add your projects:

```tsx
const projects = [
  { 
    id: 1, 
    title: "Your Project Name", 
    tag: "Your Category", 
    image: "https://your-image-url.com/image.jpg",
    websiteUrl: "https://your-client-website.com",
    description: "Brief description of the project"
  },
  // Add more projects...
];
```

**Fields to update:**
- `title`: Project name
- `tag`: Category (e.g., "Web Design", "E-Commerce", "Branding")
- `image`: Direct URL to project screenshot/image
- `websiteUrl`: Link to the live website
- `description`: Project description

### 2. Update Contact Information

Edit **`src/components/ContactSection.tsx`**:

```tsx
// Update WhatsApp number
href="https://wa.me/YOUR_PHONE_NUMBER"

// Update Email
href="mailto:your-email@yourdomain.com"
```

### 3. Update Pricing Section

Edit **`src/components/Pricing.tsx`**:

```tsx
const pricingTiers = [
  {
    name: 'Your Package Name',
    price: 99, // Price in dollars
    description: 'Package description',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    highlighted: true, // Set to true for featured plan
  },
  // Add more packages...
];
```

### 4. Update Hero Section

Edit **`src/components/Hero.tsx`**:
- Update headline text
- Modify description
- Change CTA button text
- Customize colors if needed

### 5. Update About Section

Edit **`src/components/AboutPortfolio.tsx`**:
- Update company/agency description
- Modify key statistics
- Change benefits/highlights

### 6. Update Footer

Edit **`src/components/Footer.tsx`**:
- Update social media links
- Modify company links
- Change copyright information

## 🖼️ Best Practices for Project Images

1. **Image Size**: Use images between 1200x800 to 1920x1080px
2. **Format**: JPG or WebP (WebP loads faster)
3. **Optimization**: Compress images using tools like TinyPNG
4. **Hosting**: Use CDN services like:
   - Cloudinary
   - Imgix
   - AWS S3
   - Your own server with caching

Example optimized image URLs:
```
https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80
```

## 🎯 SEO Optimization

Update **`src/app/layout.tsx`** with:

```tsx
export const metadata = {
  title: 'Your Agency Name - Web Design & Development',
  description: 'Premium web design, UI/UX, and digital marketing services',
  keywords: 'web design, web development, UI/UX, digital marketing',
  robots: 'index, follow',
  openGraph: {
    title: 'Your Agency Name',
    description: 'Premium digital solutions',
    url: 'https://yourdomain.com',
    type: 'website',
  },
};
```

## 📱 Responsive Design

The website is fully responsive:
- **Mobile**: Optimized for screens 320px and up
- **Tablet**: Enhanced layout for 768px and up
- **Desktop**: Full experience for 1024px and up

No additional changes needed - it's already optimized!

## ⚡ Performance Tips

1. **Image Optimization**:
   - Use WebP format when possible
   - Lazy load images
   - Use responsive image sizes

2. **Code Splitting**:
   - Components are already code-split by Next.js

3. **Caching**:
   - Static assets are cached automatically

4. **CDN**:
   - Deploy on Vercel for automatic CDN

## 🚀 Deployment

### Option 1: Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

### Option 2: Netlify

1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Option 3: Self-Hosting

```bash
# Build production
npm run build

# Start production server
npm run start
```

## 📊 Analytics Setup

Add Google Analytics by updating **`src/app/layout.tsx`**:

```tsx
<Script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
  `}
</Script>
```

Replace `GA_ID` with your Google Analytics ID.

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## 🎨 Color Customization

Update **`tailwind.config.ts`** to modify colors:

```ts
const config: Config = {
  theme: {
    extend: {
      colors: {
        'primary': '#6366f1', // Indigo
        'secondary': '#3b82f6', // Blue
      },
    },
  },
};
```

Common gradient colors already implemented:
- Purple to Blue (Primary theme)
- Cyan to Green
- Various opacity levels

## 🐛 Troubleshooting

### Images not loading?
- Check image URL is accessible
- Ensure CORS headers are set on CDN
- Use absolute URLs, not relative paths

### Animations too slow?
- Check browser performance
- Reduce animation complexity
- Use `will-change` CSS property sparingly

### Pricing not visible?
- Check viewport/scroll position
- Verify component is imported in `page.tsx`
- Check z-index layering

## 📧 Support & Updates

For feature updates:
1. Update Next.js: `npm update next`
2. Update Framer Motion: `npm update framer-motion`
3. Update Tailwind: `npm update tailwindcss`

## ✅ Production Checklist

- [ ] Update all contact information
- [ ] Add 4-6 real portfolio projects with images
- [ ] Update pricing based on your services
- [ ] Update Hero section copy
- [ ] Update About section
- [ ] Update footer links
- [ ] Test on mobile, tablet, desktop
- [ ] Set up Google Analytics
- [ ] Deploy to production
- [ ] Set up SSL certificate
- [ ] Configure email notifications
- [ ] Test contact form

## 📝 Notes

- All animations are GPU-accelerated for smooth performance
- Components use Framer Motion for advanced animations
- Tailwind CSS provides responsive design
- Next.js provides automatic code splitting and optimization

Your site is now ready for production! 🎉
