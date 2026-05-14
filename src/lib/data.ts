export const flyingPosters = [
  { image: '/assets/ashvathamanassociates.webp' },
  { image: '/assets/blessing.webp' },
  { image: '/assets/accounts-website.webp' },
  { image: '/assets/arultrust.webp' },
  { image: '/assets/curves&fitz.webp' },
  { image: '/assets/drivetech.webp' },
  { image: '/assets/pattushop.webp' },
  { image: '/assets/sunilassociates.webp' },
  { image: '/assets/tamilai.webp' },
  // Newly added posters
  { image: '/assets/Tag_website.webp' },
  { image: '/assets/Trendy_ecommerce_template.webp' },
  { image: '/assets/brandingtemp.webp' },
  { image: '/assets/clothme_website.webp' },
  { image: '/assets/couorse-website.webp' },
  { image: '/assets/course2_website.webp' },
  { image: '/assets/ev_website-.webp' },
  { image: '/assets/glamora_website.png' },
  { image: '/assets/home_landing-removebg-preview.webp' },
  { image: '/assets/skinny_website.webp' },
];

export interface Work {
  id: number;
  title: string;
  description?: string;
  category?: string;
  image: string;
}

// Works populated from images in /public/assets (excluding logo.png)
export const works: Work[] = [
  { id: 1, title: 'Ashvathaman Associates', image: '/assets/ashvathamanassociates.webp', category: 'Branding' },
  { id: 2, title: 'Blessing', image: '/assets/blessing.webp', category: 'Web' },
  { id: 3, title: 'Accounts Website', image: '/assets/accounts-website.webp', category: 'Web' },
  { id: 4, title: 'Arul Trust', image: '/assets/arultrust.webp', category: 'Nonprofit' },
  { id: 5, title: 'Curves & Fitz', image: '/assets/curves&fitz.webp', category: 'E‑commerce' },
  { id: 6, title: 'DriveTech', image: '/assets/drivetech.webp', category: 'Product' },
  { id: 7, title: 'Pattu Shop', image: '/assets/pattushop.webp', category: 'Retail' },
  { id: 8, title: 'Sunil Associates', image: '/assets/sunilassociates.webp', category: 'Consulting' },
  { id: 9, title: 'Tamilai', image: '/assets/tamilai.webp', category: 'Design' },
];

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  color: string;
}



  