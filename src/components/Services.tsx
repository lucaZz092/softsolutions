import { Globe, Smartphone, Database, Cloud, Shield, BarChart3, Cog, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const SERVICES = [
  { icon: Globe, title: "Sites e Sistemas Web", description: "Aplicações modernas, rápidas e responsivas.", tech: "React · TypeScript · Node.js" },
  { icon: Smartphone, title: "Apps Mobile", description: "iOS e Android com ótima performance.", tech: "React Native · Flutter" },
  { icon: Database, title: "Banco de Dados", description: "Arquitetura robusta e escalável.", tech: "PostgreSQL · MongoDB · Redis" },
  { icon: Cloud, title: "Cloud", description: "Migração e infraestrutura na nuvem.", tech: "AWS · Azure · Docker" },
  { icon: Shield, title: "Cibersegurança", description: "Auditorias e proteção dos seus sistemas.", tech: "Pentest · OWASP" },
  { icon: BarChart3, title: "Business Intelligence", description: "Dashboards para decidir com dados.", tech: "Power BI · Python" },
  { icon: Cog, title: "Automação", description: "Menos trabalho manual, mais produtividade.", tech: "APIs · RPA · CI/CD" },
  { icon: Users, title: "Consultoria", description: "Transformação digital e arquitetura.", tech: "Estratégia · Boas práticas" },
];

const Services = () => (
  <section id="services" className="py-12 md:py-16 bg-gradient-to-b from-background to-secondary/10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Nossos Serviços" subtitle="Tudo o que seu negócio precisa em tecnologia" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {SERVICES.map(({ icon: Icon, title, description, tech }, index) => (
          <Reveal key={title} delay={(index % 4) * 80} className="h-full">
            <article className="group h-full rounded-xl border border-border bg-card p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-card-foreground leading-snug">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
              <p className="mt-2 hidden text-xs font-medium text-primary/80 md:block">{tech}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
