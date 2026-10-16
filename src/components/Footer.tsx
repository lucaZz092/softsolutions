import { Linkedin, Github, MessageCircle } from "lucide-react";
import { SITE, scrollToId, whatsappLink } from "@/lib/siteConfig";

const LINKS = [
  { id: "services", label: "Serviços" },
  { id: "projects", label: "Projetos" },
  { id: "about", label: "Sobre" },
  { id: "faq", label: "Dúvidas" },
  { id: "contact", label: "Contato" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const social = "text-muted-foreground hover:text-primary transition-colors";

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-brand bg-clip-text text-transparent">
              {SITE.name}
            </h3>
            <p className="text-sm text-muted-foreground">Transformando ideias em soluções digitais.</p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            {LINKS.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToId(id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={social}>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={social}>
              <Github className="h-5 w-5" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={social}>
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          © {currentYear} {SITE.name} · {SITE.city} ·{" "}
          <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
