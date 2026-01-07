// 'use client';

// import { motion } from 'framer-motion';

// const items = [
//   { title: 'Business-First Approach', desc: 'We prioritize business outcomes and measurable growth.' },
//   { title: 'Reliable Support', desc: 'Local support with fast SLAs and clear communication.' },
//   { title: 'One-Stop Hub', desc: 'Design, development, and marketing under one roof.' },
// ];

// export function WhyUs() {
//   return (
//     <section id="why" className="w-full py-20">
//       <div className="container mx-auto px-6">
//         <div className="mb-10">
//           <h2 className="text-4xl font-bold tracking-tighter">Why Tech Associates Groups</h2>
//           <p className="text-white/70 mt-2 max-w-2xl">We focus on outcomes, not features — crafted for Indian businesses.</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {items.map((it, idx) => (
//             <motion.div
//               key={idx}
//               whileHover={{ y: -10, scale: 1.02 }}
//               transition={{ type: 'spring', stiffness: 200, damping: 18 }}
//               className="glass-card p-6 relative overflow-hidden"
//             >
//               <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
//               <h3 className="text-xl font-semibold">{it.title}</h3>
//               <p className="text-white/70 mt-2">{it.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
