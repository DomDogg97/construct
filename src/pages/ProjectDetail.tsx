
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Building, User, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Project } from '@/components/ProjectCard';
import { cn } from '@/lib/utils';

// Sample projects data (this would typically come from a database or API)
const allProjects: Project[] = [
  {
    id: 1,
    title: "Complex de Birouri Modern",
    category: "Comercial",
    location: "București, România",
    date: "2022",
    description: "Un complex de birouri de ultimă generație cu design sustenabil și facilități moderne. Proiectul a încorporat tehnologii eficiente energetic, spații colaborative deschise și elemente de design biofil pentru a crea un mediu de lucru sănătos și productiv. Echipa noastră a lucrat îndeaproape cu arhitecții și părțile interesate pentru a asigura o execuție de înaltă calitate, menținând în același timp termene și bugete stricte.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Rezidență de Lux",
    category: "Rezidențial",
    location: "Constanța, România",
    date: "2023",
    description: "O locuință de lux personalizată cu vedere panoramică la mare și finisaje de înaltă calitate. Această proprietate rezidențială exclusivistă prezintă tâmplărie personalizată, automatizare pentru case inteligente, piscină infinită și materiale premium în întreaga casă. Echipa noastră de construcții a colaborat cu designeri de interior pentru a realiza viziunea clientului pentru o reședință de coastă modernă, dar atemporală, care maximizează locația impresionantă de pe malul mării.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Centru Comercial Urban",
    category: "Comercial",
    location: "Cluj-Napoca, România",
    date: "2021",
    description: "Un centru comercial modern cu design deschis și spații comerciale diverse. Acest proiect de dezvoltare urbană a transformat un spațiu subutilizat într-un hub comercial vibrant cu un mix de retail, restaurante și opțiuni de divertisment. Arhitectura încorporează materiale durabile, iluminare naturală și spații flexibile care se pot adapta la tendințele de retail în schimbare, oferind în același timp o experiență de cumpărături plăcută.",
    image: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    featured: true
  },
  {
    id: 4,
    title: "Apartamente pe Malul Lacului",
    category: "Rezidențial",
    location: "Brașov, România",
    date: "2022",
    description: "Complex de apartamente de lux cu vedere la lac și facilități premium. Această dezvoltare rezidențială cu mai multe etaje oferă rezidenților locuințe de lux cu acces la o sală de fitness, terasă pe acoperiș și locuri de acostare private pentru bărci. Construcția a utilizat metode inovatoare pentru a minimiza impactul asupra mediului, creând în același timp spații de locuit durabile, de înaltă calitate, cu vederi spectaculoase asupra apei și a panoramei orașului.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 5,
    title: "Extindere Spital",
    category: "Sănătate",
    location: "Timișoara, România",
    date: "2021",
    description: "Extindere majoră a spitalului cu facilități medicale de ultimă generație și design centrat pe pacient. Acest proiect de sănătate a implicat cerințe tehnice complexe, inclusiv integrarea echipamentelor medicale specializate, standarde stricte de igienă și etapizare atentă pentru a menține operațiunile spitalului în timpul construcției. Extinderea a adăugat noi săli de operație, departamente de imagistică și saloane pentru pacienți, concepute pentru a îmbunătăți atât eficiența clinică, cât și confortul pacienților.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
  },
  {
    id: 6,
    title: "Centru de Cercetare Universitar",
    category: "Educațional",
    location: "Iași, România",
    date: "2020",
    description: "Centru de cercetare avansată proiectat pentru inovație colaborativă și excelență academică. Această clădire educațională de ultimă generație adăpostește laboratoare specializate, spații de lucru flexibile și medii de învățare îmbunătățite tehnologic. Construcția a încorporat practici și materiale durabile pe tot parcursul, obținând certificarea LEED Gold, oferind în același timp studenților și profesorilor spații excepționale pentru cercetare și colaborare interdisciplinară.",
    image: "https://images.unsplash.com/photo-1567496892661-8e4c7d256944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
  {
    id: 7,
    title: "Hotel Boutique",
    category: "Ospitalitate",
    location: "Sibiu, România",
    date: "2023",
    description: "Hotel boutique elegant care combină luxul modern cu farmecul și caracterul local. Acest proiect de ospitalitate a transformat o clădire istorică într-un hotel intim, de lux, cu camere de oaspeți unice, un restaurant emblematic și zone comune stilate. Echipa noastră de construcții a lucrat meticuloasă pentru a conserva elementele arhitecturale originale, integrând în același timp facilități contemporane și elemente de design care reflectă bogatul patrimoniu cultural al orașului.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 8,
    title: "Sediu Corporativ",
    category: "Comercial",
    location: "București, România",
    date: "2022",
    description: "Sediu corporativ impresionant proiectat pentru productivitate, colaborare și bunăstarea angajaților. Această clădire de birouri emblematică include un atrium dramatic, planuri de etaj flexibile și facilități de conferință de ultimă generație. Considerentele de mediu au fost primordiale pe tot parcursul construcției, rezultând o clădire eficientă energetic cu utilizare extensivă a luminii naturale, sisteme de acoperiș verde și tehnologii inteligente pentru clădiri pentru a optimiza consumul de resurse.",
    image: "https://images.unsplash.com/photo-1614854262318-831574f15f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: 9,
    title: "Comunitate Eco-Friendly",
    category: "Rezidențial",
    location: "Oradea, România",
    date: "2021",
    description: "Comunitate rezidențială durabilă cu case eficiente energetic și spații verzi comune. Această dezvoltare inovatoare de locuințe se concentrează pe viața responsabilă față de mediu, cu case care dispun de panouri solare, colectare a apei de ploaie și aparate eficiente energetic. Dispunerea comunității încurajează mersul pe jos și ciclismul cu poteci interconectate, grădini comunitare și zone naturale conservate care promovează biodiversitatea și recreerea în aer liber pentru rezidenți.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
  }
];

// Additional project details that would be loaded from a database
interface ProjectDetails {
  clientName: string;
  projectSize: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  gallery: string[];
}

const projectDetails: Record<number, ProjectDetails> = {
  1: {
    clientName: "TechVision Enterprises",
    projectSize: "11.000 m²",
    duration: "18 luni",
    challenges: [
      "Cerințe structurale complexe pentru rezistență la cutremure",
      "Integrarea sistemelor smart building de ultimă generație",
      "Spațiu urban limitat pentru depozitarea materialelor"
    ],
    solutions: [
      "Implementarea tehnicilor avansate de design și construcție seismică",
      "Coordonarea cu specialiști în tehnologie pentru integrarea perfectă a sistemelor",
      "Dezvoltarea unui plan logistic cuprinzător pentru livrarea materialelor și gestionarea șantierului"
    ],
    results: [
      "Clădire certificată LEED Platinum",
      "Reducere cu 30% a consumului de energie față de clădiri similare",
      "Finalizat la timp și în limitele bugetare"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  2: {
    clientName: "Reședință Privată",
    projectSize: "790 m²",
    duration: "14 luni",
    challenges: [
      "Mediu de coastă provocator, necesitând materiale speciale",
      "Elemente de design personalizate complexe și finisaje de înaltă calitate",
      "Reglementări locale stricte de construcție și considerente de mediu"
    ],
    solutions: [
      "Selectarea materialelor rezistente la coroziune, adecvate pentru condiții marine",
      "Colaborarea cu meșteșugari specializați pentru elemente personalizate",
      "Lucru strâns cu autoritățile locale pentru a asigura conformitatea"
    ],
    results: [
      "Design rezidențial premiat",
      "Prezentat în Architectural Digest",
      "A depășit așteptările clientului în ceea ce privește calitatea și măiestria"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1574739782594-db4ead022697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ]
  },
  // Add details for other projects as needed
};

// For projects without specific details, use this default
const defaultDetails: ProjectDetails = {
  clientName: "Confidențial",
  projectSize: "Variabil",
  duration: "12-18 luni",
  challenges: [
    "Respectarea termenului proiectului menținând standardele de calitate",
    "Coordonarea mai multor subcontractori și specialiști",
    "Adaptarea la cerințele în schimbare ale clientului"
  ],
  solutions: [
    "Implementarea metodologiilor eficiente de management de proiect",
    "Întâlniri regulate de coordonare și canale de comunicare clare",
    "Abordare de planificare flexibilă cu rezolvare proactivă a problemelor"
  ],
  results: [
    "Finalizarea cu succes a proiectului îndeplinind toate cerințele",
    "Feedback pozitiv și satisfacție din partea clientului",
    "Adăugare la portofoliul nostru în creștere de proiecte de calitate"
  ],
  gallery: [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  ]
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [details, setDetails] = useState<ProjectDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // In a real app, this would be an API call
    // Simulating API call with setTimeout
    setLoading(true);
    setTimeout(() => {
      if (id) {
        const projectId = parseInt(id);
        const foundProject = allProjects.find(p => p.id === projectId);
        
        if (foundProject) {
          setProject(foundProject);
          // Get project specific details or use default
          setDetails(projectDetails[projectId] || defaultDetails);
        }
      }
      setLoading(false);
    }, 500);
  }, [id]);

  // SEO-friendly metadata
  useEffect(() => {
    if (project) {
      document.title = `${project.title} - ACME Construcții Proiect`;
      
      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', project.description);
    } else {
      document.title = 'Detalii Proiect - ACME Construcții';
    }
  }, [project]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 flex justify-center items-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 bg-gray-200 rounded w-64 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project || !details) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 section-container">
          <div className="text-center py-16">
            <h1 className="text-3xl font-bold mb-4">Proiect Negăsit</h1>
            <p className="mb-8">Proiectul pe care îl cauți nu există sau a fost eliminat.</p>
            <Button asChild className="bg-construction-primary hover:bg-construction-primary/90 text-white">
              <Link to="/projects">Înapoi la Proiecte</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-construction-dark relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <Link 
            to="/projects" 
            className="inline-flex items-center text-gray-300 hover:text-construction-primary mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Înapoi la Proiecte
          </Link>
          
          <div className="max-w-3xl">
            <span className="bg-construction-primary text-white px-3 py-1 text-sm rounded-full mb-4 inline-block">
              {project.category}
            </span>
            <h1 className="text-white mb-6 animate-fade-in">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-gray-300 text-sm mb-8">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-construction-primary" />
                {project.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1 text-construction-primary" />
                {project.date}
              </div>
              <div className="flex items-center">
                <Building className="h-4 w-4 mr-1 text-construction-primary" />
                {details.projectSize}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1 text-construction-primary" />
                Client: {details.clientName}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Left Column - Description */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Prezentare Generală a Proiectului</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">{project.description}</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-construction-secondary">Provocări</h3>
                  <ul className="space-y-2">
                    {details.challenges.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-construction-primary mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-construction-secondary">Soluții</h3>
                  <ul className="space-y-2">
                    {details.solutions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-construction-primary mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-4 text-construction-secondary">Rezultate</h3>
                  <ul className="space-y-2">
                    {details.results.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-construction-primary mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Project Gallery */}
              <h2 className="text-2xl font-bold mb-6">Galerie Proiect</h2>
              
              <div className="mb-6">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-100">
                  <img 
                    src={details.gallery[activeImageIndex]} 
                    alt={`${project.title} - Imagine galerie ${activeImageIndex + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {details.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={cn(
                      "aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-gray-100 transition-all",
                      activeImageIndex === index ? "ring-2 ring-construction-primary" : "opacity-70 hover:opacity-100"
                    )}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Miniatură ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Column - Sidebar */}
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-32">
                <h3 className="font-bold text-xl mb-6 text-construction-secondary">Informații Proiect</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Categorie</p>
                    <p className="font-medium">{project.category}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Locație</p>
                    <p className="font-medium">{project.location}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Data Finalizării</p>
                    <p className="font-medium">{project.date}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium">{details.clientName}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Dimensiune</p>
                    <p className="font-medium">{details.projectSize}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Durată</p>
                    <p className="font-medium">{details.duration}</p>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-construction-primary hover:bg-construction-primary/90 text-white">
                  <Link to="/contact" className="flex items-center justify-center">
                    Începe Proiectul Tău
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
