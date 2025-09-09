import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cpu, Zap } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background via-secondary/20 to-accent/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-full">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <Cpu className="h-8 w-8 text-primary" />
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <Zap className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Soluções de Software
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Inovadoras
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos suas ideias em software robusto e escalável. 
            Especialistas em desenvolvimento personalizado para impulsionar seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
            >
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;