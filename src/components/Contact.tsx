import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SITE, whatsappLink } from "@/lib/siteConfig";

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

const EMPTY_FORM = { name: "", email: "", company: "", message: "", website: "" /* honeypot anti-spam */ };

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || `A API respondeu com status ${response.status}.`);
      }

      if (data.success) {
        toast({
          title: "✅ Mensagem enviada com sucesso!",
          description: "Obrigado pelo contato! Retornaremos em breve.",
        });
        setFormData(EMPTY_FORM);
      } else {
        toast({
          title: "❌ Erro ao enviar mensagem",
          description: data.message || "Por favor, tente novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "❌ Erro ao enviar mensagem",
        description:
          error instanceof Error
            ? error.message
            : "Não foi possível conectar ao servidor. Tente novamente ou fale pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const channels = [
    { icon: Phone, label: SITE.phoneDisplay, href: `tel:+${SITE.phoneDigits}`, hint: "Seg-Sex, 9h às 18h" },
    { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}`, hint: "Resposta em até 24h" },
    { icon: MapPin, label: SITE.city, hint: "Remoto e presencial" },
  ];

  return (
    <section
      id="contact"
      className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Vamos Conversar?"
          subtitle="Conte sobre seu projeto e receba um orçamento sem compromisso."
        />

        <div className="grid lg:grid-cols-5 gap-5 lg:gap-8 max-w-5xl mx-auto">
          {/* Formulário */}
          <Reveal className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-2xl border border-border bg-card/90 p-5 md:p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Nome *</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={150}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="company">Empresa (opcional)</Label>
                <Input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  maxLength={100}
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nome da sua empresa"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="message">Mensagem *</Label>
                <Textarea
                  id="message"
                  name="message"
                  maxLength={3000}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="resize-none"
                  placeholder="Conte sobre seu projeto e objetivos..."
                />
              </div>

              {/* Honeypot: invisível para pessoas, robôs costumam preencher */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Não preencha este campo</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} size="lg" className="w-full font-semibold shadow-lg">
                <Send className={`mr-2 h-5 w-5 ${isSubmitting ? "animate-pulse" : ""}`} />
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </form>
          </Reveal>

          {/* Contato direto */}
          <Reveal delay={120} className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-brand p-5 text-primary-foreground shadow-xl">
              <h3 className="text-xl font-bold">Prefere falar agora?</h3>
              <p className="mb-4 mt-1 text-sm opacity-90">Resposta rápida pelo WhatsApp.</p>
              <Button
                asChild
                size="lg"
                className="w-full bg-white font-semibold text-primary hover:bg-white/90"
              >
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>

            <ul className="space-y-3 rounded-2xl border border-border bg-card/90 p-5">
              {channels.map(({ icon: Icon, label, href, hint }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    {href ? (
                      <a href={href} className="block break-all text-sm font-medium text-foreground hover:text-primary">
                        {label}
                      </a>
                    ) : (
                      <span className="block text-sm font-medium text-foreground">{label}</span>
                    )}
                    <span className="text-xs text-muted-foreground">{hint}</span>
                  </div>
                </li>
              ))}
              <li className="pt-1">
                <Button asChild variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    Conecte-se no LinkedIn
                  </a>
                </Button>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
