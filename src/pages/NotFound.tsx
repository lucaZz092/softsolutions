import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/30 px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="text-2xl font-bold text-foreground mb-2">Página não encontrada</h1>
        <p className="text-muted-foreground mb-8">
          O endereço que você tentou acessar não existe ou foi movido.
        </p>
        <Button asChild size="lg" className="font-semibold">
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Voltar para o início
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
