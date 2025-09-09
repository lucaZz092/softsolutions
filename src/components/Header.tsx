import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SoftSolutions
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contato
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border border-border rounded-lg mt-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
              >
                Contato
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;