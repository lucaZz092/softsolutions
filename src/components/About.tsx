import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Eye, 
  Award, 
  Users2, 
  Clock, 
  TrendingUp,
  CheckCircle,
  Lightbulb
} from "lucide-react";
import teamImage from "@/assets/team-collaboration.jpg";

const About = () => {
  const stats = [
    { icon: <Users2 className="h-8 w-8" />, value: "100+", label: "Projetos Entregues" },
    { icon: <Clock className="h-8 w-8" />, value: "5+", label: "Anos de Experiência" },
    { icon: <TrendingUp className="h-8 w-8" />, value: "98%", label: "Satisfação do Cliente" },
    { icon: <Award className="h-8 w-8" />, value: "50+", label: "Clientes Atendidos" }
  ];

  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Qualidade",
      description: "Comprometimento com excelência técnica e entrega de valor"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Inovação",
      description: "Sempre buscando as melhores e mais modernas soluções"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Confiabilidade",
      description: "Parcerias duradouras baseadas em transparência e resultados"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Sobre Nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa especializada em soluções de software, dedicada a transformar 
            ideias em realidade através de tecnologia de ponta e inovação constante.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-border bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Image */}
        <div className="mb-16 flex justify-center">
          <div className="relative max-w-4xl">
            <img 
              src={teamImage} 
              alt="Nossa equipe de desenvolvimento trabalhando em soluções inovadoras" 
              className="rounded-xl shadow-2xl w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-xl"></div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 border-border bg-card">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Nossa Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à tecnologia de qualidade, oferecendo soluções 
                personalizadas que impulsionam o crescimento e a eficiência dos nossos 
                clientes, sempre com foco na inovação e excelência.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-border bg-card">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Nossa Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como referência em soluções de software inovadoras, 
                contribuindo para a transformação digital das empresas e criando 
                um futuro mais tecnológico e eficiente.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-8">Nossos Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full text-primary w-fit">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Tecnologias que Dominamos</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "TypeScript", "Node.js", "Python", "Java", "PHP", "PostgreSQL", 
              "MongoDB", "AWS", "Docker", "Kubernetes", "Git", "GraphQL", "REST APIs",
              "Machine Learning", "DevOps", "Microservices", "React Native", "Flutter"
            ].map((tech, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1 text-sm border-primary text-primary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;