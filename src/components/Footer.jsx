import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail, TrendingUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    navigation: [
      { path: '/', label: 'Home' },
      { path: '/courses', label: 'Courses' },
      { path: '/pricing', label: 'Pricing' },
      { path: '/about', label: 'About' },
      { path: '/contact', label: 'Contact' },
    ],
    resources: [
      { path: '/courses', label: 'Course Catalog' },
      { path: '/pricing', label: 'Pricing Plans' },
      { path: '/about', label: 'Our Team' },
      { path: '/contact', label: 'FAQ' },
    ],
    legal: [
      { path: '#', label: 'Privacy Policy' },
      { path: '#', label: 'Terms of Service' },
      { path: '#', label: 'Refund Policy' },
      { path: '#', label: 'Disclaimer' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center space-x-2 mb-4 group"
            >
              <div className="bg-gradient-to-br from-primary-600 to-success-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary-400 to-success-400 bg-clip-text text-transparent">
                UMK Trading Academy
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Master Forex & Synthetics Trading with proven strategies from industry experts. 
              Achieve financial freedom through comprehensive education and dedicated support.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:info@umktradingacademy.com"
                className="hover:text-primary-400 transition-colors"
              >
                info@umktradingacademy.com
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary-600 hover:scale-110 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} UMK Trading Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


