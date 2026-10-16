import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/siteConfig";

/**
 * Botão flutuante de WhatsApp.
 * Fica no canto INFERIOR ESQUERDO para não sobrepor o chat do Tidio (canto direito).
 */
const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar pelo WhatsApp"
    className="group fixed bottom-5 left-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
  >
    <MessageCircle className="h-6 w-6" />
    <span className="hidden text-sm font-semibold sm:inline">Fale no WhatsApp</span>
  </a>
);

export default WhatsAppButton;
