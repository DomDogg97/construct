
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending the form data
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      toast({
        title: "Mesaj Trimis",
        description: "Mulțumim pentru mesajul tău. Te vom contacta în curând!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nume
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-construction-primary focus:ring-construction-primary px-4 py-3 bg-white/90"
            placeholder="Ion Popescu"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-construction-primary focus:ring-construction-primary px-4 py-3 bg-white/90"
            placeholder="ion@exemplu.ro"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Număr de Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-construction-primary focus:ring-construction-primary px-4 py-3 bg-white/90"
          placeholder="0712 345 678"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-construction-primary focus:ring-construction-primary px-4 py-3 bg-white/90 resize-none"
          placeholder="Spune-ne despre proiectul tău..."
        />
      </div>
      
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full md:w-auto bg-construction-primary hover:bg-construction-primary/90 text-white py-3 px-8 rounded-md transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Se trimite...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Trimite Mesaj
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
