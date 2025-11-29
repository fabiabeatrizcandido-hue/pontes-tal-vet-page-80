import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Consultas Clínicas",
    description: "Acolhimento, avaliação e plano terapêutico",
  },
  {
    title: "Oncologia Veterinária",
    description: "Diagnóstico e condução de casos",
  },
  {
    title: "Exames no Local",
    description: "Radiografia digital e laboratório próprios",
  },
  {
    title: "Fisioterapia & Ozonioterapia",
    description: "Reabilitação e dor crônica",
  },
  {
    title: "Ultrassonografia & Eletrocardiograma",
    description: "Diagnósticos avançados com equipamentos modernos",
  },
  {
    title: "Odontologia",
    description: "Limpeza dentária com avaliação prévia",
  },
  {
    title: "Cirurgias",
    description: "Cirurgias gerais e especializadas",
  },
  {
    title: "Oftalmologia Veterinária",
    description: "Cuidados especializados para a visão do seu pet",
  },
  {
    title: "Atendimento Domiciliar",
    description: "Sem taxa de deslocamento",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Conheça nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos atendimento completo para garantir a saúde e bem-estar do seu animal de estimação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-primary leading-relaxed">
            Cuidamos do seu melhor amigo com carinho e atenção, em um espaço pensado para o bem-estar do seu pet.
          </p>
        </div>
      </div>
    </section>
  );
};
