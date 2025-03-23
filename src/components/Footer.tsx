
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-construction-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">
              <span className="text-construction-primary">ACME</span> CONSTRUCȚII
            </h3>
            <p className="text-gray-300 mb-6">
              Construim visuri și transformăm spații cu precizie, calitate și inovație din 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-construction-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-construction-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-construction-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-construction-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Link-uri Rapide</h4>
            <ul className="space-y-3">
              {[
                { name: 'Acasă', path: '/' },
                { name: 'Despre Noi', path: '/about' },
                { name: 'Proiecte', path: '/projects' },
                { name: 'Servicii', path: '/#services' },
                { name: 'Contact', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-gray-300 hover:text-construction-primary transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">Informații de Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-construction-primary mr-3 mt-1" />
                <span className="text-gray-300">Str. Construcțiilor 123, București, România</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-construction-primary mr-3" />
                <span className="text-gray-300">(021) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-construction-primary mr-3" />
                <a href="mailto:info@acmeconstructii.ro" className="text-gray-300 hover:text-construction-primary transition-colors">
                  info@acmeconstructii.ro
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-construction-primary mr-3 mt-1" />
                <span className="text-gray-300">
                  Luni - Vineri: 8:00 - 18:00 <br />
                  Sâmbătă: 9:00 - 16:00
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} ACME Construcții. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
