
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Contact information
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-construction-primary" />,
      title: "Telefon",
      details: [
        "(021) 456-7890",
        "(031) 123-4567"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-construction-primary" />,
      title: "Email",
      details: [
        "info@acmeconstructii.ro",
        "proiecte@acmeconstructii.ro"
      ]
    },
    {
      icon: <MapPin className="h-6 w-6 text-construction-primary" />,
      title: "Adresă",
      details: [
        "Str. Construcțiilor 123",
        "București, România"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-construction-primary" />,
      title: "Program de Lucru",
      details: [
        "Luni - Vineri: 8:00 - 18:00",
        "Sâmbătă: 9:00 - 16:00"
      ]
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
            backgroundImage: 'url(https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6 animate-fade-in">
              <span className="text-construction-primary inline-block mb-2">Contactează-ne</span>
              <br />Suntem aici pentru tine
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Ai întrebări sau ești gata să începi proiectul tău? Contactează-ne astăzi
              și echipa noastră va fi bucuroasă să te ajute.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={item.title} 
                className={cn(
                  "bg-white p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md animate-fade-in",
                  "border border-gray-100"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-construction-primary/10 flex items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <div className="pl-16">
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 mb-1">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Form & Map Section */}
      <section className="py-24">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 animate-fade-in">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MessageSquare className="h-6 w-6 text-construction-primary mr-3" />
                  <h2 className="text-2xl font-heading font-bold">Trimite-ne un mesaj</h2>
                </div>
                <p className="text-gray-600">
                  Completează formularul de mai jos și te vom contacta cât mai curând posibil.
                </p>
              </div>
              <ContactForm />
            </div>
            
            {/* Map */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="rounded-xl overflow-hidden shadow-lg h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d182135.3323538304!2d25.96726509999999!3d44.43788845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucure%C8%99ti!5e0!3m2!1sro!2sro!4v1716123455640!5m2!1sro!2sro" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '400px' }} 
                  allowFullScreen 
                  loading="lazy"
                  title="ACME Construcții Locație"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title">
              <span className="inline-block pb-2 mb-1 border-b-2 border-construction-primary">Întrebări Frecvente</span>
            </h2>
            <p className="section-subtitle">
              Găsește răspunsuri la întrebările comune despre serviciile și procesul nostru.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid gap-6">
            {[
              {
                question: "Ce tipuri de proiecte gestionați?",
                answer: "Gestionăm o gamă largă de proiecte de construcții, inclusiv case rezidențiale, clădiri comerciale, renovări și facilități specializate. Echipa noastră are experiență în diverse sectoare, inclusiv sănătate, educație, retail și multe altele."
              },
              {
                question: "Cum pot obține o ofertă pentru proiectul meu?",
                answer: "Poți solicita o ofertă completând formularul nostru de contact, sunându-ne direct sau trimițând un email. Vom organiza o consultație pentru a discuta despre cerințele proiectului tău și pentru a oferi o estimare detaliată."
              },
              {
                question: "Care este termenul tipic pentru un proiect?",
                answer: "Termenele proiectelor variază în funcție de mărime, complexitate și cerințe specifice. O renovare simplă poate dura săptămâni, în timp ce un proiect comercial mare se poate întinde pe mai multe luni. Vom furniza un calendar detaliat în faza de consultare."
              },
              {
                question: "Vă ocupați de permise și reglementări?",
                answer: "Da, gestionăm toate permisele necesare și asigurăm conformitatea cu codurile și reglementările locale de construcție. Echipa noastră se ocupă de documentație pentru ca tu să nu-ți faci griji cu privire la aspectele administrative ale proiectului tău."
              },
              {
                question: "Oferiți garanții pentru lucrările dvs.?",
                answer: "Absolut. Garantăm calitatea meșteșugului nostru cu garanții cuprinzătoare. Termenii specifici depind de tipul proiectului, dar suntem dedicați să asigurăm satisfacția ta cu privire la munca noastră pentru anii următori."
              }
            ].map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
