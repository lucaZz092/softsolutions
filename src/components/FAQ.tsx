import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const FAQS = [
  {
    q: "Quanto custa um site ou sistema?",
    a: "Depende do escopo e do prazo. Fazemos uma conversa inicial sem compromisso e enviamos um orçamento detalhado e transparente.",
  },
  {
    q: "Em quanto tempo fica pronto?",
    a: "Varia conforme a complexidade. Após entender o escopo, apresentamos um cronograma com entregas em etapas para você acompanhar.",
  },
  {
    q: "Atendem outras cidades?",
    a: "Sim. Atendemos todo o Brasil de forma remota, com reuniões por vídeo, e presencialmente em São Paulo.",
  },
  {
    q: "Há suporte depois da entrega?",
    a: "Sim. Acompanhamos o projeto após a publicação e oferecemos suporte e evolução contínua, conforme a sua necessidade.",
  },
];

const FAQ = () => (
  <section id="faq" className="py-12 md:py-14 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
      <SectionHeading title="Dúvidas Frequentes" />
      <Reveal>
        <Accordion type="single" collapsible className="space-y-2">
          {FAQS.map((item, index) => (
            <AccordionItem
              key={item.q}
              value={`item-${index}`}
              className="rounded-lg border border-border bg-card px-4"
            >
              <AccordionTrigger className="py-3 text-left text-base font-semibold text-card-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export default FAQ;
