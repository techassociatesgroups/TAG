import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Associates Groups
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transforming ideas into digital reality. We specialize in creating stunning 3D websites and digital solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="#services" className="hover:text-purple-400 transition-colors">Website Development</Link></li>
              <li><Link href="#services" className="hover:text-purple-400 transition-colors">UI/UX Design</Link></li>
              <li><Link href="#services" className="hover:text-purple-400 transition-colors">3D Modeling</Link></li>
              <li><Link href="#services" className="hover:text-purple-400 transition-colors">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="#about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
              <li><Link href="#works" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-purple-400 shrink-0" />
                <span>+91 63748 46995</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-400 shrink-0" />
                <span>info@associatesgroups.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Associates Groups. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}