
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-construction-dark">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white font-bold mb-6">
            <span className="font-heading block text-construction-primary mb-2">Excelență în</span>
            Construirea Viziunii Tale
          </h1>
          <p className="text-xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            ACME Construcții oferă soluții excepționale de construcție cu precizie, 
            inovație și măiestrie remarcabilă. Visurile tale, expertiza noastră.
          </p>
          <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Button asChild size="lg" className="bg-construction-primary hover:bg-construction-primary/90 text-white">
              <Link to="/projects">
                Proiectele Noastre
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white bg-white/10 border-white hover:bg-white/20 text-white hover:text-white hover:border-white group">
              <Link to="/contact" className="flex items-center">
                Contactează-ne 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
