import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    // Timer logic
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer loop for demo purposes or stop
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <>
      {/* Top Bar de Urgência - IMPROVED CONTRAST */}
      <div className="bg-primary py-2.5 text-center relative z-50 overflow-hidden">
        <div className="container flex items-center justify-center gap-2 md:gap-4">
          <span className="text-black font-bold text-sm md:text-base flex items-center gap-2">
            <span className="animate-pulse">⚡</span> 50 VAGAS DISPONÍVEIS
          </span>
          <span className="hidden md:inline text-black/60">|</span>
          <span className="hidden md:inline text-black/80 font-medium">CONSULTORIA COM O FOUNDER</span>
          <span className="hidden md:inline text-black/60">→</span>
          <a href="#cta" className="text-black font-bold underline underline-offset-2 hover:no-underline transition-all text-sm md:text-base">
            GARANTIR VAGA POR R$ 97
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-[44px] left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-white/10 py-3 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-background/50 backdrop-blur-sm py-4 md:py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo - IMPROVED */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary text-black flex items-center justify-center font-black text-xl md:text-2xl shadow-[0_0_20px_rgba(0,255,135,0.5)] group-hover:shadow-[0_0_30px_rgba(0,255,135,0.7)] transition-all duration-300">
              F
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-white group-hover:text-primary transition-colors">
              FABRANI
            </span>
          </a>

          {/* Countdown Timer - IMPROVED READABILITY */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-card/80 border-2 border-primary/40 px-4 md:px-6 py-2.5 md:py-3 rounded-xl shadow-[0_0_20px_rgba(0,255,135,0.15)]">
              <span className="text-xs md:text-sm text-white/70 uppercase tracking-wider font-semibold hidden sm:inline-block">
                Oferta encerra em:
              </span>
              <div className="flex items-center gap-1.5 font-mono text-primary font-black text-xl md:text-2xl leading-none">
                <span className="w-[2.5ch] text-center bg-black/30 px-1.5 py-1 rounded">{formatTime(timeLeft.hours)}</span>
                <span className="text-white/50 text-lg">:</span>
                <span className="w-[2.5ch] text-center bg-black/30 px-1.5 py-1 rounded">{formatTime(timeLeft.minutes)}</span>
                <span className="text-white/50 text-lg">:</span>
                <span className="w-[2.5ch] text-center bg-black/30 px-1.5 py-1 rounded">{formatTime(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
