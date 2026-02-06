import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { X } from 'lucide-react';

// Extend JSX to support vturb-smartplayer custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
      };
    }
  }
}

export function ExitIntentPopup() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  // Don't show popup on thank you page
  if (location === '/obrigado') {
    return null;
  }

  useEffect(() => {
    // Check if popup has already been shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Set up 5-minute timer
    const timeoutId = setTimeout(() => {
      if (!hasShown && !sessionStorage.getItem('exitPopupShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        setHasShown(true);
      }
    }, 5 * 60 * 1000); // 5 minutes

    // Set up exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown && !sessionStorage.getItem('exitPopupShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitPopupShown', 'true');
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [hasShown]);



  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen || location === '/obrigado') return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 z-40"
        onClick={handleClose}
      />

      {/* Popup Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-background rounded-2xl border-2 border-primary shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-gradient-to-r from-primary to-primary/80 p-6 flex items-center justify-between">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-black text-black">
                ESPERE — ESPERE
              </h2>
              <p className="text-sm text-muted-foreground">
                Não sai antes de ler este recado
              </p>
            </div>
            <button
              onClick={handleClose}
              className="shrink-0 ml-4 p-2 hover:bg-black/10 rounded-lg transition-colors"
            >
              <X size={24} className="text-black" />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                Você está a <strong>1 ajuste</strong> de escalar suas vendas e ter seu Curso válido como Extensão Universitária no MEC.
              </p>
              <p className="text-base text-muted-foreground">
                Essa oferta encerra <strong>HOJE</strong>. <span className="text-primary font-bold">R$97,00</span> Isso mesmo <span className="text-primary font-bold">R$97,00</span>.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col gap-3">
              <a
                href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon h-12 w-full flex items-center justify-center text-black font-bold text-lg rounded-lg hover:shadow-lg transition-all"
              >
                QUERO ACESSAR
              </a>
              <button
                onClick={handleClose}
                className="text-red-500 hover:text-red-600 transition-colors font-semibold"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
