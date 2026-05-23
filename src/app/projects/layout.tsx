import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio & Works | Tech Associates Groups',
  description: 'Explore our latest website development, UI/UX design, 3D modeling, and digital marketing projects.',
  alternates: {
    canonical: 'https://tech.associatesgroups.in/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
