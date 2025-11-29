import { Award, Heart, Users } from "lucide-react";
import clinicFacade from "@/assets/clinic-facade.jpg";

export const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            42+ Anos de Dedicação
          </h2>
          <p className="text-lg text-muted-foreground">
            Somos referência em medicina veterinária, oferecendo cuidados excepcionais 
            para seu melhor amigo há mais de quatro décadas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src={clinicFacade} 
            alt="Fachada da Clínica Veterinária Pontes Gestal" 
            className="w-full rounded-lg shadow-xl"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Experiência</h3>
            <p className="text-muted-foreground">
              Mais de 4 décadas de conhecimento e prática em medicina veterinária
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Cuidado</h3>
            <p className="text-muted-foreground">
              Carinho e atenção dedicados a cada paciente
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">Confiança</h3>
            <p className="text-muted-foreground">
              Milhares de famílias confiam na nossa equipe especializada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
