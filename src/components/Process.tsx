import { Search, PenTool, Code2, Rocket } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const STEPS = [
  { icon: Search, title: "Descoberta", description: "Entendemos seu objetivo." },
  { icon: PenTool, title: "Planejamento", description: "Definimos escopo e prazos." },
  { icon: Code2, title: "Desenvolvimento", description: "Entregas em etapas, com você junto." },
  { icon: Rocket, title: "Entrega e suporte", description: "Publicamos e seguimos ao seu lado." },
];

const Process = () => (
  <section id="process" className="py-12 md:py-14 bg-secondary/20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading title="Como Trabalhamos" subtitle="Simples e transparente, da conversa ao projeto no ar" />

      <ol className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {STEPS.map(({ icon: Icon, title, description }, index) => (
          <li key={title}>
            <Reveal delay={index * 100} className="h-full">
              <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-card p-4">
                <div className="relative shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground leading-snug">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
