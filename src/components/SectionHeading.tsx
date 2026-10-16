import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/** Cabeçalho padrão e compacto das seções. */
const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => (
  <Reveal className="text-center mb-8 md:mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{title}</h2>
    {subtitle && <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
