
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Michael Johnson',
    role: 'Homeowner',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote: 'ACME Construction transformed our house into a dream home. Their attention to detail and commitment to quality exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jennifer Smith',
    role: 'CEO, Smith Enterprises',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'We\'ve worked with ACME on multiple commercial projects. Their professionalism, expertise, and ability to deliver on time make them our go-to construction partner.',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Chen',
    role: 'Real Estate Developer',
    image: 'https://randomuser.me/api/portraits/men/62.jpg',
    quote: 'As a developer, I need reliable partners who understand the importance of timelines and budgets. ACME Construction has never let me down.',
    rating: 4,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="py-24 bg-construction-secondary text-white">
      <div className="section-container">
        <div className="mb-16 text-center">
          <h2 className="section-title text-white">
            <span className="inline-block pb-2 mb-1 border-b-2 border-construction-primary">Client Testimonials</span>
          </h2>
          <p className="section-subtitle text-gray-300">
            Don't just take our word for it - hear what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden rounded-xl bg-construction-dark/30 p-8 sm:p-10 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover rounded-full border-2 border-construction-primary"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="flex justify-center sm:justify-start mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "w-5 h-5", 
                        i < testimonials[activeIndex].rating ? "text-construction-primary fill-construction-primary" : "text-gray-400"
                      )} 
                    />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6">"{testimonials[activeIndex].quote}"</blockquote>
                <div>
                  <p className="font-semibold text-construction-primary">{testimonials[activeIndex].name}</p>
                  <p className="text-gray-400">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
            
            {/* Quote Icon */}
            <div className="absolute top-5 right-7 text-construction-primary/20 text-8xl font-serif">"</div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              className="bg-construction-dark/50 hover:bg-construction-primary text-white p-3 rounded-full transition-colors duration-300"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              className="bg-construction-dark/50 hover:bg-construction-primary text-white p-3 rounded-full transition-colors duration-300"
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-construction-primary" : "bg-gray-500"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
