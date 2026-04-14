import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import estetica from "@/assets/projects/estetica.png";
import finorg from "@/assets/projects/finorg.png";
import marketing from "@/assets/projects/marketing.png";
import techrecruit from "@/assets/projects/techrecruit.png";
import webcorp from "@/assets/projects/webcorp.png";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "WebCorp Site",
      description: "Site corporativo para empresa de tecnologia com design moderno, seções de serviços, portfólio e contato. Otimizado para SEO e performance.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "TailwindCSS"],
      image: webcorp,
      stats: {
        users: "1K+",
        uptime: "99.9%"
      }
    },
    {
      id: 2,
      title: "FinOrg - Organizador Financeiro",
      description: "Aplicativo web para gerenciamento financeiro pessoal e empresarial. Inclui dashboard interativo, gráficos de despesas e integração com bancos para importação automática de transações.",
      technologies: ["TypeScript", "TailwindCSS", "Node.js", "React"],
      image: finorg,
      stats: {
        companies: "20+",
        datapoints: "2K+",
        avgTime: "< 100ms"
      }
    },
    {
      id: 3,
      title: "Infoproduto de Marketing Digital",
      description: "Site para divulgação de infoproduto focado em marketing digital. Inclui landing page, área de membros com conteúdo exclusivo, sistema de pagamento e integração com ferramentas de email marketing.",
      technologies: ["TypeScript", "TailwindCSS", "Node.js", "React"],
      image: marketing,
      stats: {
        downloads: "50K+",
        rating: "4.8★"
      }
    },
    {
      id: 4,
      title: "Clínica Estética",
      description: "Site profissional para cl[inica de estética com agendamento online, galeria de tratamentos, depoimentos de clientes e blog integrado para dicas de beleza e saúde.",
      technologies: ["React", "TypeScript", "Node.js"],
      image: estetica,
      stats: {
        requests: "1000+",
        apiVersion: "v3",
        regions: "1"
      }
    },
    {
      id: 5,
      title: "Tech Recruit - Plataforma de Recrutamento Tech",
      description: "Plataforma de recrutamento especializada em vagas para profissionais de tecnologia. Inclui sistema de matchmaking baseado em IA, dashboard para empresas e candidatos, e integração com LinkedIn para importação de perfis.",
      technologies: ["TypeScript", "TailwindCSS", "Node.js", "React"],
      image: techrecruit,
      stats: {
        conversations: "1M+",
        languages: "12",
        accuracy: "94%"
      }
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projects[currentIndex];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e transformamos ideias em realidade
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Carrossel Principal */}
          <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[500px] relative">
            {/* Botões de Navegação - Fora da imagem */}
            <button
              onClick={goToPrevious}
              className="absolute -left-16 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20 hidden lg:flex"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute -right-16 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20 hidden lg:flex"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Imagem/Visualização */}
            <div className="relative group">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="rounded-2xl shadow-2xl w-full object-contain bg-gradient-to-br from-secondary/10 to-accent/10"
              />
              
              {/* Overlay com Badge */}
              <div className="absolute inset-0 rounded-2xl bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-end p-8">
                <Badge className="bg-white/20 text-white hover:bg-white/30">
                  Projeto {currentIndex + 1} de {projects.length}
                </Badge>
              </div>
            </div>

            {/* Informações do Projeto */}
            <Card className="border-0 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-foreground mb-2">
                  {currentProject.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {currentProject.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tecnologias */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Tecnologias Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Estatísticas */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border">
                  {Object.entries(currentProject.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs text-muted-foreground capitalize mb-1">{key}</p>
                      <p className="text-lg font-bold text-primary">{value}</p>
                    </div>
                  ))}
                </div>
                {/* Botões de Ação */}
                {/* <div className="flex gap-3 pt-2">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Projeto
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </div> */}
              </CardContent>
            </Card>
          </div>

          {/* Indicadores de Posição */}
          <div className="flex justify-center gap-2 mt-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
                aria-label={`Ir para projeto ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
