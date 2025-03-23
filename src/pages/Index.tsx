
import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Building, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProjectCard, { Project } from '@/components/ProjectCard';

// Sample featured projects
const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Complex de Birouri Modern",
    category: "Comercial",
    location: "București, România",
    date: "2022",
    description: "Un complex de birouri modern cu design sustenabil și facilități de ultimă generație.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Rezidență de Lux",
    category: "Rezidențial",
    location: "Constanța, România",
    date: "2023",
    description: "O locuință de lux personalizată cu vedere panoramică la mare și finisaje de înaltă calitate.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Centru Comercial Urban",
    category: "Comercial",
    location: "Cluj-Napoca, România",
    date: "2021",
    description: "Un centru comercial modern cu design deschis și spații comerciale diverse.",
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    featured: true
  }
];

const stats = [
  { 
    icon: Building, 
    count: "250+", 
    label: "Proiecte Finalizate", 
    description: "Proiecte livrate cu succes în sectoarele rezidențial și comercial." 
  },
  { 
    icon: Users, 
    count: "120+", 
    label: "Clienți Mulțumiți", 
    description: "Clienți satisfăcuți care au încredere în expertiza și calitatea meșteșugului nostru." 
  },
  { 
    icon: CheckCircle, 
    count: "30+", 
    label: "Ani de Experiență", 
    description: "Decenii de experiență în industria construcțiilor." 
  },
  { 
    icon: Award, 
    count: "15+", 
    label: "Premii în Industrie", 
    description: "Recunoaștere pentru excelență, inovație și practici sustenabile." 
  }
];

export default function Index() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Preview Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Construim cu Excelență din <span className="text-construction-primary">1995</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                ACME Construcții s-a impus ca lider în industria construcțiilor, 
                oferind calitate excepțională și soluții inovatoare de peste trei decenii.
              </p>
              <p className="text-gray-700 mb-8">
                Echipa noastră dedicată de profesioniști aduce expertiză, măiestrie și atenție 
                la detalii pentru fiecare proiect, asigurând rezultate care depășesc așteptările. 
                Suntem mândri de angajamentul nostru față de calitate, siguranță, durabilitate și satisfacția clienților.
              </p>
              <Button asChild className="bg-construction-primary hover:bg-construction-primary/90 text-white group">
                <Link to="/about" className="flex items-center">
                  Află Mai Multe Despre Noi
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" 
                    alt="Muncitori în Construcții" 
                    className="rounded-lg shadow-lg object-cover h-40 w-full animate-slide-up"
                    style={{ animationDelay: '0.2s' }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Construcția Clădirii" 
                    className="rounded-lg shadow-lg object-cover h-64 w-full animate-slide-up"
                    style={{ animationDelay: '0.4s' }}
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80" 
                    alt="Arhitecți Planificând" 
                    className="rounded-lg shadow-lg object-cover h-64 w-full animate-slide-up"
                    style={{ animationDelay: '0.6s' }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Șantier de Construcții" 
                    className="rounded-lg shadow-lg object-cover h-40 w-full animate-slide-up"
                    style={{ animationDelay: '0.8s' }}
                  />
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-8 border-construction-primary rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-8 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-construction-primary/10 flex items-center justify-center text-construction-primary">
                    <stat.icon className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl font-bold text-construction-secondary mb-2 font-heading">{stat.count}</div>
                <div className="text-lg font-medium text-construction-primary mb-2">{stat.label}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="mb-16 text-center">
            <h2 className="section-title">
              <span className="inline-block pb-2 mb-1 border-b-2 border-construction-primary">Proiecte Reprezentative</span>
            </h2>
            <p className="section-subtitle">
              Explorează câteva dintre cele mai notabile proiecte ale noastre care demonstrează expertiza și calitatea meșteșugului nostru.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-construction-primary hover:bg-construction-primary/90 text-white group">
              <Link to="/projects" className="flex items-center">
                Vezi Toate Proiectele
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-24 bg-construction-dark relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1627831792194-8e4f65a234ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80)'
          }}
        ></div>
        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6 animate-fade-in">
              Gata să Începi Proiectul Tău de Construcție?
            </h2>
            <p className="text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Contactează-ne astăzi pentru o consultație gratuită și lasă-ne să-ți aducem viziunea la viață cu expertiza și măiestria noastră.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Button asChild size="lg" className="bg-construction-primary hover:bg-construction-primary/90 text-white">
                <Link to="/contact">
                  Contactează-ne
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20 border-white hover:border-white">
                <Link to="/projects">
                  Explorează Proiectele Noastre
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
