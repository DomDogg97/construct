
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard, { Project } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample projects data
const allProjects: Project[] = [
  {
    id: 1,
    title: "Complex de Birouri Modern",
    category: "Comercial",
    location: "București, România",
    date: "2022",
    description: "Un complex de birouri de ultimă generație cu design sustenabil și facilități moderne.",
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
  },
  {
    id: 4,
    title: "Apartamente pe Malul Lacului",
    category: "Rezidențial",
    location: "Brașov, România",
    date: "2022",
    description: "Complex de apartamente de lux cu vedere la lac și facilități premium.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    title: "Extindere Spital",
    category: "Sănătate",
    location: "Timișoara, România",
    date: "2021",
    description: "Extindere majoră a spitalului cu facilități medicale de ultimă generație și design centrat pe pacient.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  },
  {
    id: 6,
    title: "Centru de Cercetare Universitar",
    category: "Educațional",
    location: "Iași, România",
    date: "2020",
    description: "Centru de cercetare avansată proiectat pentru inovație colaborativă și excelență academică.",
    image: "https://images.unsplash.com/photo-1567496892661-8e4c7d256944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: 7,
    title: "Hotel Boutique",
    category: "Ospitalitate",
    location: "Sibiu, România",
    date: "2023",
    description: "Hotel boutique elegant care combină luxul modern cu farmecul și caracterul local.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 8,
    title: "Sediu Corporativ",
    category: "Comercial",
    location: "București, România",
    date: "2022",
    description: "Sediu corporativ impresionant proiectat pentru productivitate, colaborare și bunăstarea angajaților.",
    image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 9,
    title: "Comunitate Eco-Friendly",
    category: "Rezidențial",
    location: "Oradea, România",
    date: "2021",
    description: "Comunitate rezidențială durabilă cu case eficiente energetic și spații verzi comune.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
  }
];

// Available categories for filtering
const categories = [
  "Toate",
  ...Array.from(new Set(allProjects.map(project => project.category)))
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);
  const [visibleCount, setVisibleCount] = useState(6);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedCategory === "Toate") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(project => project.category === selectedCategory));
    }
    setVisibleCount(6); // Reset visible count when changing category
  }, [selectedCategory]);

  const loadMore = () => {
    setVisibleCount(prevCount => Math.min(prevCount + 3, filteredProjects.length));
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-construction-dark relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 animate-fade-in">
              <span className="text-construction-primary inline-block mb-2">Lucrările Noastre</span>
              <br />Portofoliu de Proiecte
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Explorează portofoliul nostru divers de proiecte de construcții, demonstrând expertiza
              noastră în sectoarele rezidențiale, comerciale și specializate.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-24">
        <div className="section-container">
          {/* Category Filters */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={cn(
                  "transition-all animate-fade-in",
                  selectedCategory === category 
                    ? "bg-construction-primary hover:bg-construction-primary/90 text-white" 
                    : "hover:text-construction-primary hover:border-construction-primary",
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.slice(0, visibleCount).map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          
          {/* Load More Button */}
          {visibleCount < filteredProjects.length && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMore}
                className="bg-construction-primary hover:bg-construction-primary/90 text-white"
              >
                Încarcă Mai Multe Proiecte
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}
          
          {/* No Projects Found Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium mb-2">Nu s-au găsit proiecte</h3>
              <p className="text-gray-600">
                Niciun proiect nu se potrivește cu categoria selectată. Te rugăm să încerci o altă categorie.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <div className="bg-construction-dark rounded-xl p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-construction-primary to-blue-500 opacity-30"></div>
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-construction-primary rounded-full transform translate-x-1/2 translate-y-1/2"></div>
              <div className="absolute left-0 top-0 w-48 h-48 bg-construction-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6 animate-fade-in">
                Ai un Proiect în Minte?
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                Hai să discutăm cum ACME Construcții poate aduce viziunea ta la viață cu expertiza și măiestria noastră.
              </p>
              <Button asChild size="lg" className="bg-construction-primary hover:bg-construction-primary/90 text-white animate-slide-up" style={{ animationDelay: '0.5s' }}>
                <a href="/contact" className="flex items-center">
                  Începe Proiectul Tău
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
