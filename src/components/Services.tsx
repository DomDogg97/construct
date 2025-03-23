
import { CheckCircle, Ruler, HardHat, Wrench, Compass, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getAnimationDelay } from '@/lib/animations';

const services = [
  {
    title: 'Construcții Rezidențiale',
    description: 'Case personalizate construite conform specificațiilor tale exacte, cu materiale de calitate și măiestrie expertă.',
    icon: Home,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Proiecte Comerciale',
    description: 'Clădiri de birouri, spații comerciale și alte proprietăți comerciale concepute pentru funcționalitate și stil.',
    icon: Compass,
    color: 'bg-green-50 text-green-600',
  },
  {
    title: 'Renovări',
    description: 'Transformă-ți spațiul existent cu serviciile noastre profesionale de renovare și remodelare.',
    icon: Wrench,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'Managementul Proiectelor',
    description: 'Management complet al proiectului, asigurând că proiectul tău de construcție se finalizează la timp și în limita bugetului.',
    icon: HardHat,
    color: 'bg-orange-50 text-orange-600',
  },
  {
    title: 'Design și Planificare',
    description: 'Servicii experte de design și planificare arhitecturală pentru a-ți aduce viziunea la viață cu precizie.',
    icon: Ruler,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Asigurarea Calității',
    description: 'Procese riguroase de control al calității pentru a asigura că fiecare aspect al proiectului tău îndeplinește standardele noastre înalte.',
    icon: CheckCircle,
    color: 'bg-indigo-50 text-indigo-600',
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title">
            <span className="inline-block pb-2 mb-1 border-b-2 border-construction-primary">Serviciile Noastre</span>
          </h2>
          <p className="section-subtitle">
            Oferim servicii complete de construcții adaptate pentru a răspunde nevoilor tale specifice cu precizie și excelență.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={cn(
                "rounded-lg p-8 border border-gray-100 hover-card animate-fade-in",
                "bg-white shadow-sm transition-all duration-300"
              )}
              style={{ animationDelay: getAnimationDelay(index) }}
            >
              <div className={cn(
                "w-14 h-14 rounded-lg flex items-center justify-center mb-6",
                service.color
              )}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
