import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Contact = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Visite Nossa Clínica
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e seu pet
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Endereço</h3>
              <p className="text-muted-foreground text-sm">
                Avenida Amélia Bernardino Cutrale, 2359
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Telefone</h3>
              <a href="tel:1733131505" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                (17) 3313-1505
              </a>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">WhatsApp</h3>
              <a href="https://wa.me/5517981070266" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                (17) 98107-0266
              </a>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Horário</h3>
              <p className="text-muted-foreground text-sm">
                Segunda a Sexta<br />
                8h às 12h<br />
                14h às 17:20h
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
