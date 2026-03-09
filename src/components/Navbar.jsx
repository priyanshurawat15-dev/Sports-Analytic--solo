import { Link, useLocation } from 'react-router-dom';
import { Trophy, Users, BarChart3, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path) => location.pathname === path;
  
  const navigation = [
    { name: 'Home', href: '/', icon: Trophy },
    { name: 'Players', href: '/players', icon: Users },
    { name: 'Compare', href: '/compare', icon: BarChart3 },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Trophy className="w-10 h-10 text-red-600 transform group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-red-600/20 blur-xl transform group-hover:scale-150 transition-transform duration-300"></div>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">SPORTS</span>
              <span className="text-2xl font-bold text-red-600 ml-1">STATS</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link-modern flex items-center space-x-2 ${
                    isActive(item.href) ? 'text-red-600' : ''
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link to="/compare" className="btn-modern">
              Compare Players
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-red-600 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`nav-link-modern flex items-center space-x-2 py-2 ${
                      isActive(item.href) ? 'text-red-600' : ''
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <Link
                to="/compare"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-modern w-full text-center"
              >
                Compare Players
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
