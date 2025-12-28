"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SECTION_HEIGHT = 1200;

// Update these projects with your own work - add image URLs and website links
const projects = [
  { 
    id: 1, 
    title: "Ashwathaman associates ", 
    tag: "Web Design & Development", 
    image: "/asvathamanassociateswebsite.png",
    websiteUrl: "https://ashvathamanassociates.in/",
    description: "Modern responsive website design"
  },
  { 
    id: 2, 
    title: "Sunil Associates", 
    tag: "Branding & Identity with SEO", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    websiteUrl: "https://sunilassociates.in/",
    description: "Complete brand identity system"
  },
  { 
    id: 3, 
    title: "Drivetech solutions", 
    tag: "Branding & Identity with SEO", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    websiteUrl: "https://drivetechsystems.in/",
    description: "Website designing and development with maintenance"
  },
  { 
    id: 4, 
    title: "Capicons", 
    tag: "Website Developement", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    websiteUrl: "https://www.capicons.in/",
    description: "Website development"
  },
  { 
    id: 5, 
    title: "Blessings PreSchool", 
    tag: "Website Developement", 
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop",
    websiteUrl: "https://blessingspreschool.in/",
    description: "Website development"
  },
  
];

export default function ScrollStackProjects() {
  return (
    <section id="our-works" className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Our <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Works</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Showcase of our latest projects and digital solutions for our clients.
          </p>
        </motion.div>
      </div>

      <div className="relative pb-20 space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
      
      <div className="text-center py-12">
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all"
        >
          View All Projects
        </motion.a>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="
        mx-auto
        max-w-5xl
        rounded-2xl
        overflow-hidden
        border border-white/10
        shadow-[0_40px_140px_-25px_rgba(0,0,0,.45)]
        bg-gradient-to-br from-gray-900 to-black
        group
      "
    >
      <div className="flex flex-col md:flex-row h-full overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-80 md:h-auto overflow-hidden bg-gray-800">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 px-8 py-12 md:py-16 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] opacity-60 text-blue-400">
              {project.tag}
            </span>
            <h3 className="text-4xl md:text-5xl font-bold mt-4 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              {project.description}
            </p>
          </div>

          {/* CTA Button */}
          <motion.a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold text-white hover:from-purple-600 hover:to-blue-600 transition-all w-fit mt-6"
          >
            View Live Site
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
