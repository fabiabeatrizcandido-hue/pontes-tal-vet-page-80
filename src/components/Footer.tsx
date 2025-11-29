export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-2">Pontes Gestal - Clínica Veterinária</h3>
          <p className="text-sm opacity-90">
            Mais de 42 anos cuidando do seu melhor amigo com amor e dedicação
          </p>
          <p className="text-sm opacity-75 mt-4">
            © {new Date().getFullYear()} Pontes Gestal - Clínica Veterinária. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
