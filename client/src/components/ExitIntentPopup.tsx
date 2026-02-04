import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !isOpen) {
        setIsOpen(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

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
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-black text-black leading-tight">
                ESPERE — ESPERE
              </h2>
              <p className="text-black/90 font-semibold mt-2">
                Não sai antes de VER ESSE VÍDEO
              </p>
            </div>
            <button
              onClick={handleClose}
              className="shrink-0 ml-4 p-2 hover:bg-black/10 rounded-lg transition-colors"
            >
              <X size={24} className="text-black" />
            </button>
          </div>

          {/* Video Container */}
          <div className="p-6">
            <div className="relative w-full rounded-xl overflow-hidden border border-primary/30 shadow-lg" style={{ aspectRatio: '16/9' }}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/N4Hl1NsRtwg?autoplay=1"
                title="O AVALIADOR INVISÍVEL DO MERCADO DE CURSOS ONLINE"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>

            {/* CTA Button */}
            <div className="mt-6 flex flex-col gap-3">
              <Button
                size="lg"
                className="btn-neon w-full text-black text-lg font-bold py-6"
                asChild
              >
                <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX" target="_blank" rel="noopener noreferrer">
                  🔥 QUERO ACESSAR AGORA
                </a>
              </Button>
              <button
                onClick={handleClose}
                className="text-foreground/60 hover:text-foreground transition-colors font-semibold"
              >
                Fechar popup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
