import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import estetica from "@/assets/projects/estetica.webp";
import finorg from "@/assets/projects/finorg.webp";
import marketing from "@/assets/projects/marketing.webp";
import techrecruit from "@/assets/projects/techrecruit.webp";
import webcorp from "@/assets/projects/webcorp.webp";

// Rótulos em português para as estatísticas exibidas
const STAT_LABELS: Record<string, string> = {
  users: "Usuários",
  uptime: "Disponibilidade",
  companies: "Empresas",
  datapoints: "Registros",
  avgTime: "Tempo médio",
  downloads: "Downloads",
  rating: "Avaliação",
  requests: "Requisições",
  apiVersion: "Versão da API",
  regions: "Regiões",
  conversations: "Conversas",
  languages: "Idiomas",
  accuracy: "Precisão",
};

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
      description: "Site profissional para clínica de estética com agendamento online, galeria de tratamentos, depoimentos de clientes e blog integrado para dicas de beleza e saúde.",
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
    <section id="projects" className="py-12 md:py-16 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Nossos Projetos" subtitle="Alguns trabalhos que transformaram ideias em realidade" />

        <div className="max-w-5xl mx-auto">
          {/* Carrossel Principal */}
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-center relative">
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
                alt={`Prévia do projeto ${currentProject.title}`}
                width={1400}
                height={697}
                loading="lazy"
                decoding="async"
                className="rounded-xl shadow-xl w-full object-contain bg-gradient-to-br from-secondary/10 to-accent/10"
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
              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-bold text-foreground mb-1">
                  {currentProject.title}
                </CardTitle>
                <CardDescription className="text-sm md:text-base line-clamp-4">
                  {currentProject.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tecnologias */}
                <div>
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
                <div className="grid grid-cols-3 gap-4 py-3 border-t border-border">
                  {Object.entries(currentProject.stats).slice(0, 3).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <p className="text-xs text-muted-foreground mb-1">{STAT_LABELS[key] ?? key}</p>
                      <p className="text-lg font-bold text-primary">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navegação mobile + indicadores */}
          <div className="flex items-center justify-center gap-4 mt-4 lg:hidden">
            <button onClick={goToPrevious} className="bg-primary text-primary-foreground p-2 rounded-full shadow-md" aria-label="Projeto anterior">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={goToNext} className="bg-primary text-primary-foreground p-2 rounded-full shadow-md" aria-label="Próximo projeto">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-5 lg:mt-6">
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
