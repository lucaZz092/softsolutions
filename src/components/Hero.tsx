import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";
import { scrollToId, whatsappLink } from "@/lib/siteConfig";

const HIGHLIGHTS = ["Orçamento sem compromisso", "Atendimento direto com quem desenvolve", "Suporte pós-entrega"];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24 pb-12 lg:min-h-[85vh] flex items-center bg-gradient-to-br from-background via-secondary/20 to-accent/30"
    >
      {/* Decoração de fundo */}
      <div className="absolute inset-0 bg-grid pointer-events-none" aria-hidden="true" />
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-blob pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl animate-blob pointer-events-none [animation-delay:-6s]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              Software sob medida para o seu negócio
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
              Soluções de Software
              <span className="block bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">
                Inovadoras
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transformamos suas ideias em software robusto e escalável. Especialistas em
              desenvolvimento personalizado para impulsionar seu negócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={() => scrollToId("contact")}
                className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <ul className="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-2 justify-center lg:justify-start">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual: janela de código estilizada */}
          <div className="hidden lg:block relative" aria-hidden="true">
            <div className="animate-float rounded-2xl border border-border bg-card/90 shadow-2xl backdrop-blur-sm overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 text-xs text-muted-foreground font-mono">solucao.ts</span>
              </div>
              <pre className="p-6 pb-14 text-sm leading-7 font-mono text-foreground overflow-hidden">
                <code>
                  <span className="text-brand">const</span> projeto = {"{"}
                  {"\n"}  cliente: <span className="text-green-600 dark:text-green-400">"Seu negócio"</span>,
                  {"\n"}  stack: [<span className="text-green-600 dark:text-green-400">"React"</span>,{" "}
                  <span className="text-green-600 dark:text-green-400">"Node.js"</span>,{" "}
                  <span className="text-green-600 dark:text-green-400">"Cloud"</span>],
                  {"\n"}  foco: <span className="text-green-600 dark:text-green-400">"resultado"</span>,
                  {"\n"}  entrega: <span className="text-green-600 dark:text-green-400">"sob medida"</span>,
                  {"\n"}
                  {"}"};
                  {"\n\n"}
                  <span className="text-brand">await</span> softsolutions.<span className="text-primary">construir</span>(projeto);
                </code>
              </pre>
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card px-5 py-3 shadow-xl">
              <p className="text-xs text-muted-foreground">Status do projeto</p>
              <p className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                Pronto para começar
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
