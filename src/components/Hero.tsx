import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 77, 46, 0.85), rgba(26, 77, 46, 0.75)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <img 
            src={logo} 
            alt="Pontes Gestal - Clínica Veterinária" 
            className="w-64 md:w-80 mx-auto mb-8 animate-fade-in"
          />
          <p className="text-xl md:text-2xl mb-4 opacity-95">
            Mais de 42 anos de experiência cuidando do seu pet
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Atendimento especializado com carinho, dedicação e tecnologia de ponta
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg"
            asChild
          >
            <a href="https://w.app/clinicaveterinariapontesgestal" target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-5 w-5" />
              Entre em Contato
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
