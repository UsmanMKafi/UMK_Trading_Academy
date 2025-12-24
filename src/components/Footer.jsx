import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, ShieldCheck, Lock } from 'lucide-react';
import Button from './Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="inline-block group">
              <span className="font-heading text-2xl font-bold tracking-tighter text-white">
                UMK<span className="text-primary">.</span>Trading
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500">
              The premier destination for mastering forex and synthetic indices.
              Institutional-grade strategies for the retail trader.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass-button flex items-center justify-center hover:text-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Academy</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses" className="hover:text-primary transition-colors">All Courses</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Membership Plans</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/success-stories" className="hover:text-primary transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Stay Ahead</h4>
            <p className="text-xs text-slate-500 mb-4">Get weekly market insights and trading tips.</p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors text-white placeholder:text-slate-600"
              />
              <Button variant="primary" className="w-full !py-2">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Trust & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-600">
            © {currentYear} UMK Trading Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={14} className="text-primary" />
              <span>SSL Secured Information</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Lock size={14} className="text-primary" />
              <span>Encrypted Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


