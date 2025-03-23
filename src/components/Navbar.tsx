
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { title: 'Acasă', path: '/' },
  { title: 'Despre Noi', path: '/about' },
  { title: 'Proiecte', path: '/projects' },
  { title: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full', 
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 text-construction-dark' 
          : 'bg-black/50 backdrop-blur-sm py-6 text-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <Link to="/" className="z-50">
          <div className={cn(
            "font-heading font-bold text-xl md:text-2xl",
            isScrolled ? "text-construction-dark" : "text-white"
          )}>
            <span className="text-construction-primary">ACME</span> CONSTRUCȚII
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={cn(
                'font-medium transition-colors link-hover',
                location.pathname === item.path ? 'text-construction-primary' : '',
                isScrolled ? 'text-construction-dark hover:text-construction-primary' : 'text-white hover:text-construction-primary'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className={cn("p-2", isScrolled ? "text-construction-dark" : "text-white")}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-construction-dark/95 pt-24 px-6 backdrop-blur-lg">
          <nav className="flex flex-col space-y-8 items-center">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.title}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'text-xl font-medium transition-colors animate-slide-down',
                  location.pathname === item.path ? 'text-construction-primary' : 'text-white',
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
