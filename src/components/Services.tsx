import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  BarChart3,
  Cog,
  Users
} from "lucide-react";
import techIllustration from "@/assets/tech-illustration.jpg";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Desenvolvimento Web",
      description: "Aplicações web modernas e responsivas usando as mais recentes tecnologias.",
      technologies: ["React", "TypeScript", "Node.js", "Next.js"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Apps Mobile",
      description: "Aplicativos nativos e híbridos para iOS e Android com performance otimizada.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Banco de Dados",
      description: "Arquitetura e otimização de bases de dados robustas e escaláveis.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Migração e implementação de soluções em nuvem para máxima eficiência.",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cibersegurança",
      description: "Proteção avançada e auditorias de segurança para seus sistemas.",
      technologies: ["Pentesting", "OWASP", "Encryption", "Monitoring"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Business Intelligence",
      description: "Dashboards e análises de dados para decisões estratégicas.",
      technologies: ["Power BI", "Tableau", "Python", "Machine Learning"]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Automação",
      description: "Automatização de processos para aumentar produtividade e reduzir custos.",
      technologies: ["RPA", "APIs", "Webhooks", "CI/CD"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Consultoria",
      description: "Consultoria especializada em transformação digital e arquitetura de software.",
      technologies: ["Strategy", "Architecture", "Best Practices", "Training"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/10 relative">
      <div className="absolute top-10 right-10 opacity-10 hidden lg:block">
        <img 
          src={techIllustration} 
          alt="Ilustração de tecnologia" 
          className="w-64 h-48 object-cover rounded-lg"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;