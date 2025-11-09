import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Globe, Award, Shield } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'Culture', path: '/culture' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Travel Tips', path: '/tips' },
    { label: 'Contact', path: '/contact' },
  ];

  const destinations = [
    { label: 'Kurukshetra', path: '/destinations/kurukshetra' },
    { label: 'Morni Hills', path: '/destinations/morni-hills' },
    { label: 'Sultanpur Bird Sanctuary', path: '/destinations/sultanpur' },
    { label: 'Pinjore Gardens', path: '/destinations/pinjore' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-12">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-primary-foreground">
              Stay Updated with Incredible India
            </h3>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">
              Get the latest updates on new destinations, cultural events, and travel tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="px-6 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-xl">
                  H
                </div>
                <div>
                  <div className="text-xl font-bold text-white">Incredible India</div>
                  <div className="text-xs text-white/60">Incredible India</div>
                </div>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Discover the heritage, culture, and natural beauty of India. Experience the land where ancient traditions meet modern aspirations.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-white/60">
                  <Award size={16} />
                  <span>Certified by Ministry of Tourism</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Popular Destinations</h4>
              <ul className="space-y-3">
                {destinations.map((dest) => (
                  <li key={dest.path}>
                    <Link
                      to={dest.path}
                      className="text-white/70 hover:text-primary transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{dest.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Get in Touch</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                  <div className="text-white/70 text-sm">
                    <div>Ministry of Tourism, India</div>
                    <div>New Delhi, India 110001</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <span className="text-white/70 text-sm">+91-172-2560200</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <span className="text-white/70 text-sm">info@incredibleindia.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe size={18} className="text-primary flex-shrink-0" />
                  <span className="text-white/70 text-sm">www.incredibleindia.org</span>
                </div>
              </div>

              <div>
                <h5 className="text-sm font-medium mb-4 text-white">Follow Us</h5>
                <div className="flex space-x-3">
                  {[
                    { icon: Facebook, href: '#', label: 'Facebook' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                  ].map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <span>© 2025 Ministry of Tourism, India. All rights reserved.</span>
                <div className="hidden md:flex items-center space-x-1">
                  <Shield size={14} />
                  <span>Secure & Trusted</span>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <Link to="/privacy" className="text-white/60 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-white/60 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
                <Link to="/sitemap" className="text-white/60 hover:text-primary transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
