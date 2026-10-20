import { Target, Eye, Award, Users2, Clock, TrendingUp, CheckCircle, Lightbulb } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const STATS = [
  { icon: Users2, value: "10+", label: "Projetos entregues" },
  { icon: Clock, value: "3+", label: "Anos de experiência" },
  { icon: TrendingUp, value: "98%", label: "Satisfação" },
  { icon: Award, value: "15+", label: "Clientes atendidos" },
];

const VALUES = [
  { icon: Target, label: "Qualidade" },
  { icon: Lightbulb, label: "Inovação" },
  { icon: CheckCircle, label: "Confiabilidade" },
];

const About = () => (
  <section id="about" className="py-12 md:py-16 bg-gradient-to-b from-secondary/10 to-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Sobre Nós"
        subtitle="Transformamos ideias em realidade com tecnologia de ponta e inovação constante."
      />

      <div className="grid lg:grid-cols-2 gap-5 lg:gap-8 items-stretch max-w-5xl mx-auto">
        {/* Missão e visão */}
        <Reveal className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-2 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Missão</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Democratizar o acesso à tecnologia de qualidade, com soluções personalizadas que impulsionam o
              crescimento e a eficiência dos nossos clientes.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="mb-2 flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-bold text-foreground">Visão</h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Ser referência em soluções de software inovadoras, contribuindo para a transformação digital das empresas.
            </p>
          </div>
        </Reveal>

        {/* Números + valores */}
        <Reveal delay={120} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3 md:gap-4 flex-1">
            {STATS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-4 text-center transition-shadow hover:shadow-lg"
              >
                <Icon className="mb-1 h-5 w-5 text-primary" />
                <div className="text-2xl md:text-3xl font-bold text-foreground">{value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {VALUES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
              >
                <Icon className="h-4 w-4" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
