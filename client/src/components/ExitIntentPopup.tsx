import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

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

  useEffect(() => {
    // Load ConvertAI script when popup opens
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://scripts.converteai.net/3758b217-bbef-4f2e-a783-8b3253d8c374/players/6984591d3f2c4e4035cfa155/v4/player.js';
      script.async = true;
      document.head.appendChild(script);

      return () => {
        // Cleanup script if needed
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
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
            <div style={{ width: '100%' }}>
              <div
                id="vid-6984591d3f2c4e4035cfa155"
                style={{ display: 'block', margin: '0 auto', width: '100%' }}
              />
            </div>

            {/* Close Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={handleClose}
                className="text-red-500 hover:text-red-600 transition-colors font-semibold text-lg"
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
