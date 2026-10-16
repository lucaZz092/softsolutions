// Dados centrais do site: altere aqui e reflete em todos os componentes.
export const SITE = {
  name: "SoftSolutions",
  url: "https://www.softsolutions.com.br",
  email: "contato@softsolutions.com.br",
  // ⚠️ Confirme o número correto (antes havia 97837-7155 no Contato e 97873-7155 no rodapé).
  phoneDisplay: "+55 (11) 97837-7155",
  phoneDigits: "5511978377155",
  city: "São Paulo, SP",
  linkedin: "https://www.linkedin.com/in/perfil-lucas-mendonca/",
  github: "https://github.com/lucaZz092",
} as const;

export const whatsappLink = (
  message = "Olá! Vim pelo site da SoftSolutions e gostaria de conversar sobre um projeto."
) => `https://wa.me/${SITE.phoneDigits}?text=${encodeURIComponent(message)}`;

export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};
