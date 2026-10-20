import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/projects/logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { scrollToId } from "@/lib/siteConfig";

const NAV_ITEMS = [
  { id: "home", label: "Início" },
  { id: "services", label: "Serviços" },
  { id: "projects", label: "Projetos" },
  { id: "about", label: "Sobre" },
  { id: "contact", label: "Contato" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Sombra no header ao rolar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Destaca no menu a seção que está na tela
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    scrollToId(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => go("home")}
            className="flex-shrink-0 rounded-md"
            aria-label="Ir para o início"
          >
            <img src={logo} alt="SoftSolutions" className="h-10 w-auto dark:bg-white dark:rounded-lg dark:px-2 dark:py-0.5" width={40} height={40} />
          </button>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
            {NAV_ITEMS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => go(id)}
                aria-current={active === id ? "true" : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  active === id
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
            <ThemeToggle />
            <Button onClick={() => go("contact")} size="sm" className="ml-2 font-semibold">
              Orçamento grátis
            </Button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-1 shadow-lg">
              {NAV_ITEMS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => go(id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    active === id ? "text-primary bg-primary/10" : "text-foreground hover:text-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
              <Button onClick={() => go("contact")} className="w-full mt-2 font-semibold">
                Orçamento grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
