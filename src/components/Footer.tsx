import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SoftSolutions
            </h3>
            <p className="text-muted-foreground">
              Transformando ideias em soluções digitais inovadoras. 
              Sua parceira de confiança em tecnologia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Desenvolvimento Web</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Apps Mobile</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Consultoria</a></li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Tecnologias</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">React & TypeScript</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Node.js & Python</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AWS & Docker</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">PostgreSQL & MongoDB</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">contato@softsolutions.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+55 (11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} SoftSolutions. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;