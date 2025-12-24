import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary' : 'text-slate-300 hover:text-primary';
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass-panel py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <span className="font-heading text-2xl font-bold tracking-tighter text-white">
              UMK<span className="text-primary">.</span>Trading
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive(link.path)}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/courses">
              <Button variant="primary" className="!py-2 !px-5 text-sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-panel border-t border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="flex flex-col space-y-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-lg font-medium ${isActive(link.path)}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10">
            <Link to="/courses" className="block w-full">
              <Button variant="primary" className="w-full justify-center">
                Start Learning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


