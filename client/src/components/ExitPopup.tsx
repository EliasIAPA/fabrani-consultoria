import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { X, AlertTriangle, Clock, Gift } from "lucide-react";

export function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleExitIntent = useCallback((e: MouseEvent) => {
    // Detecta quando o mouse sai pela parte superior da janela
    if (e.clientY <= 0 && !hasShown) {
      // Verifica se já foi mostrado nesta sessão
      const alreadyShown = sessionStorage.getItem("exitPopupShown");
      if (!alreadyShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    }
  }, [hasShown]);

  useEffect(() => {
    // Adiciona listener para detectar exit intent
    document.addEventListener("mouseout", handleExitIntent);
    
    // Verifica se já foi mostrado nesta sessão
    const alreadyShown = sessionStorage.getItem("exitPopupShown");
    if (alreadyShown) {
      setHasShown(true);
    }

    return () => {
      document.removeEventListener("mouseout", handleExitIntent);
    };
  }, [handleExitIntent]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCTAClick = () => {
    // Dispara evento do Pixel do Facebook
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        value: 47.0,
        currency: "BRL",
        content_name: "Consultoria Escola Digital Escalável - Exit Popup",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in">
      {/* Overlay escuro */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-lg bg-gradient-to-b from-[#0a0a0a] to-[#111] border-2 border-primary rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,255,135,0.3)] animate-scale-in">
        {/* Botão fechar */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {/* Badge de urgência */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 animate-pulse">
            <AlertTriangle size={16} />
            <span className="text-sm font-bold uppercase tracking-wide">Última Chance</span>
          </div>
        </div>

        {/* Título principal */}
        <div className="text-center mb-6">
          <div className="inline-block mb-4">
            <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              50% OFF
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Restam <span className="text-primary">3 vagas</span>
          </h2>
          
          <p className="text-lg text-red-400 font-semibold flex items-center justify-center gap-2">
            <Clock size={18} />
            Você não verá esta mensagem novamente
          </p>
        </div>

        {/* Oferta */}
        <div className="bg-primary/10 border border-primary/30 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Gift className="text-primary" size={24} />
            <span className="text-white font-bold text-lg">Consultoria Escola Digital Escalável</span>
          </div>
          <div className="text-center">
            <span className="text-muted-foreground line-through text-lg">De R$ 97</span>
            <span className="text-4xl sm:text-5xl font-black text-primary ml-3">R$ 47</span>
          </div>
        </div>

        {/* CTA */}
        <Button 
          size="lg" 
          className="w-full btn-neon h-auto text-lg sm:text-xl text-black py-5 sm:py-6 shadow-[0_0_40px_rgba(0,255,135,0.4)]" 
          asChild
          onClick={handleCTAClick}
        >
          <a 
            href="https://payfast.greenn.com.br/154808/offer/SWDXVl" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            🔥 QUERO APROVEITAR AGORA
          </a>
        </Button>

        {/* Texto de segurança */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          🔒 Pagamento 100% seguro • Acesso imediato após confirmação
        </p>
      </div>
    </div>
  );
}
