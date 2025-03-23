
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Target, Users, Shield, Award, Clock, Leaf, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Company values
  const values = [
    {
      icon: <Shield className="h-8 w-8 text-construction-primary" />,
      title: "Calitate",
      description: "Nu compromitem niciodată calitatea, folosind doar cele mai bune materiale și măiestrie în fiecare proiect."
    },
    {
      icon: <Clock className="h-8 w-8 text-construction-primary" />,
      title: "Punctualitate",
      description: "Respectăm termenele și lucrăm eficient pentru a livra proiecte la timp, fără a sacrifica calitatea."
    },
    {
      icon: <Users className="h-8 w-8 text-construction-primary" />,
      title: "Focus pe Client",
      description: "Prioritizăm nevoile clienților noștri și menținem o comunicare deschisă pe tot parcursul ciclului de viață al proiectului."
    },
    {
      icon: <Leaf className="h-8 w-8 text-construction-primary" />,
      title: "Sustenabilitate",
      description: "Adoptăm practici ecologice și metode de construcție durabile pentru a minimiza impactul asupra mediului."
    }
  ];

  // Team members
  const team = [
    {
      name: "Robert Ionescu",
      role: "Fondator & CEO",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      bio: "Cu peste 30 de ani de experiență în construcții, Robert a fondat ACME Construcții cu viziunea de a oferi excelență în fiecare proiect."
    },
    {
      name: "Maria Popescu",
      role: "Arhitect Șef",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      bio: "Maria aduce viziune creativă și expertiză tehnică fiecărui design, asigurând atât estetica, cât și funcționalitatea în toate proiectele noastre."
    },
    {
      name: "Mihai Dumitrescu",
      role: "Director de Proiect",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      bio: "Mihai supraveghează execuția proiectelor cu precizie, asigurând livrarea la timp și respectarea standardelor de calitate."
    },
    {
      name: "Elena Radu",
      role: "Manager Relații Clienți",
      image: "https://randomuser.me/api/portraits/women/64.jpg",
      bio: "Elena asigură o comunicare perfectă între echipa noastră și clienți, asigurându-se că fiecare nevoie este abordată prompt."
    }
  ];

  // Timeline events
  const timeline = [
    {
      year: "1995",
      title: "Înființarea Companiei",
      description: "ACME Construcții a fost înființată de Robert Ionescu cu o mică echipă de profesioniști dedicați."
    },
    {
      year: "2002",
      title: "Extindere către Proiecte Comerciale",
      description: "Ne-am extins serviciile pentru a include construcții comerciale, marcând o fază semnificativă de creștere."
    },
    {
      year: "2010",
      title: "Inițiativa de Sustenabilitate",
      description: "Am lansat angajamentul nostru față de practici de construcție durabile, incorporând materiale și metode ecologice."
    },
    {
      year: "2015",
      title: "Recunoaștere Regională",
      description: "ACME a fost recunoscută ca una dintre companiile de top în construcții din regiune, primind multiple premii în industrie."
    },
    {
      year: "2020",
      title: "Integrarea Tehnologiei",
      description: "Am adoptat tehnologii de construcție de ultimă generație, îmbunătățind eficiența și precizia în proiectele noastre."
    },
    {
      year: "Astăzi",
      title: "Continuarea Excelenței",
      description: "Continuăm să creștem și să evoluăm, menținând angajamentul nostru față de calitate, inovație și satisfacția clienților."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-construction-dark relative">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 opacity-30"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 animate-fade-in">
              <span className="text-construction-primary inline-block mb-2">Cine Suntem</span>
              <br />Despre ACME Construcții
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Suntem o echipă de profesioniști dedicați excelenței în construcții, 
              livrând proiecte de calitate care depășesc așteptările din 1995.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-4xl font-heading font-bold mb-6">
                Povestea <span className="text-construction-primary">Noastră</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                ACME Construcții a fost fondată în 1995 cu o misiune simplă dar puternică: să oferim excelență 
                în construcții prin calitatea meșteșugului, soluții inovatoare și integritate neabătută.
              </p>
              <p className="text-gray-600 mb-6">
                Ce a început ca o mică echipă de constructori pasionați a crescut într-o companie de construcții 
                cu servicii complete, cu o reputație de excelență în sectoarele rezidențiale și comerciale. Pe 
                parcursul călătoriei noastre, ne-am menținut principiile fondatoare în timp ce am îmbrățișat 
                noi tehnologii și practici durabile.
              </p>
              <p className="text-gray-600">
                Astăzi, suntem mândri să fim recunoscuți ca lideri în industrie, cunoscuți pentru atenția la detalii, 
                angajamentul față de satisfacția clienților și capacitatea de a aduce la viață chiar și cele mai 
                ambițioase viziuni.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Echipă de construcții"
                className="rounded-lg shadow-xl animate-slide-up"
                style={{ animationDelay: '0.3s' }}
              />
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-8 border-construction-primary rounded-lg z-0"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-lg shadow-md animate-fade-in">
              <div className="mb-6">
                <Target className="h-12 w-12 text-construction-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Misiunea Noastră</h3>
              <p className="text-gray-700 mb-4">
                Să oferim servicii excepționale de construcții care transformă viziunile clienților noștri în realitate 
                prin măiestrie de calitate, soluții inovatoare și angajament neclintit față de excelență.
              </p>
              <ul className="space-y-3">
                {["Măiestrie de calitate", "Abordare centrată pe client", "Livrare la timp", "Soluții inovatoare"].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-construction-dark text-white p-10 rounded-lg shadow-md animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="mb-6">
                <Award className="h-12 w-12 text-construction-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Viziunea Noastră</h3>
              <p className="text-gray-200 mb-4">
                Să fim cel mai de încredere nume în construcții, recunoscut pentru integritatea, calitatea, inovația 
                și angajamentul nostru de a crea spații care îmbunătățesc viețile și comunitățile.
              </p>
              <ul className="space-y-3">
                {["Leadership în industrie", "Practici durabile", "Impact comunitar", "Avansare tehnologică"].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-construction-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="inline-block pb-2 mb-1 border-b-2 border-construction-primary">Valorile Noastre</span>
            </h2>
            <p className="section-subtitle">
              Principiile fundamentale care ne ghidează munca și ne definesc ca și companie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="flex p-6 rounded-lg hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <div className="mr-6 flex-shrink-0">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="inline-block pb-2 mb-1 border-b-2 border-construction-primary">Călătoria Noastră</span>
            </h2>
            <p className="section-subtitle">
              Reperele cheie care ne-au format compania de-a lungul anilor.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div 
                  key={event.year} 
                  className={`relative flex flex-col md:flex-row md:items-center animate-fade-in ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  {/* Year bubble */}
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-construction-primary text-white font-bold shadow-lg mb-4 md:mb-0 z-10">
                    {event.year.substring(0, 2)}
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-md ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}>
                    <div className="flex items-center mb-3">
                      <span className="text-lg font-bold text-construction-primary">{event.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="inline-block pb-2 mb-1 border-b-2 border-construction-primary">Echipa Noastră de Conducere</span>
            </h2>
            <p className="section-subtitle">
              Cunoaște experții care conduc compania noastră și ne determină succesul.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-construction-primary font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-construction-primary">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6 animate-fade-in">
              Gata să Lucrezi cu Noi?
            </h2>
            <p className="text-xl text-white/90 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Hai să discutăm despre proiectul tău și cum expertiza noastră poate aduce viziunea ta la viață.
            </p>
            <Button asChild size="lg" className="bg-white text-construction-primary hover:bg-gray-100 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <Link to="/contact" className="flex items-center">
                Contactează-ne Astăzi
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
