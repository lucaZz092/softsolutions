import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Linkedin,
  Globe
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "✅ Mensagem enviada com sucesso!",
          description: "Obrigado pelo contato! Retornaremos em breve.",
        });
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        toast({
          title: "❌ Erro ao enviar mensagem",
          description: data.message || "Por favor, tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Erro:', error);
      toast({
        title: "❌ Erro ao enviar mensagem",
        description: "Verifique se o servidor está rodando e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "contato@softsolutions.com.br",
      description: "Respondemos em até 24h"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      content: "+55 (11) 97837-7155",
      description: "Seg-Sex, 9h às 18h"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      content: "São Paulo, SP",
      description: "Atendimento remoto e presencial"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horário",
      content: "9h às 18h",
      description: "Segunda a Sexta-feira"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforme sua ideia em realidade. Entre em contato conosco e vamos 
            construir juntos a solução perfeita para seu negócio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-card-foreground flex items-center justify-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Fale Conosco
              </CardTitle>
              <CardDescription className="text-base">
                Preencha o formulário e retornaremos em breve
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-input bg-background"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-input bg-background"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="border-input bg-background"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-input bg-background resize-none"
                    placeholder="Conte-nos sobre seu projeto, necessidades e objetivos..."
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-card/80 backdrop-blur-sm hover:-translate-y-1"
                >
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-card-foreground mb-1">{info.title}</h3>
                        <p className="text-primary font-medium break-words whitespace-pre-line max-w-[120px] overflow-hidden">{info.content}</p>                        
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground shadow-2xl border-0">
              <CardContent className="p-0 text-center">
                <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
                <p className="mb-6 opacity-90">
                  Agende uma consulta gratuita e descubra como podemos 
                  transformar suas ideias em soluções digitais de sucesso.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-semibold">
                    <Phone className="mr-2 h-4 w-4" />
                    Ligar Agora
                  </Button>
                  <Button 
                    variant="secondary"
                    className="bg-white/20 hover:bg-white/30 border-white/30 text-white font-semibold"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    Agendar Reunião
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-card/80 backdrop-blur-sm border-border">
              <CardContent className="p-0">
                <h3 className="font-semibold text-card-foreground mb-4 text-center">Conecte-se Conosco</h3>
                <div className="flex justify-center space-x-4">
                  <a href="www.linkedin.com/in/perfil-lucas-mendonca" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="mailto:contato@softsolutions.com.br" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                  <a href="" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Globe className="h-4 w-4" />
                  </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;