import { cn } from "@/lib/utils";
import { useUrgencyTimer } from "@/hooks/useUrgencyTimer";
import { useState, useEffect } from "react";

interface HeaderProps {
  price?: string;
  isTimePage?: boolean;
}

export function Header({ price = "R$ 97", isTimePage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { timeLeft, isExpired } = useUrgencyTimer();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  return (
    <>
      {/* Top Bar de Urgência - IMPROVED CONTRAST */}
      <div className={cn(
        "py-2.5 text-center relative z-50 overflow-hidden",
        "bg-primary"
      )}>
        <div className="container flex items-center justify-center gap-2 md:gap-4">
          <>
            <span className="text-black font-bold text-sm md:text-base flex items-center gap-2">
              <span className="animate-pulse">⚡</span> VAGAS LIMITADAS
            </span>
            <span className="hidden md:inline text-black/60">|</span>
            <span className="text-black/80 font-medium text-sm md:text-base">CONSULTORIA COM O FOUNDER</span>
            <span className="hidden md:inline text-black/60">→</span>
            <a href="#cta" className="text-black font-bold underline underline-offset-2 hover:no-underline transition-all text-sm md:text-base">
              GARANTIR VAGA
            </a>
          </>
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
          <a href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary text-black flex items-center justify-center font-black text-xl md:text-2xl shadow-[0_0_20px_rgba(0,255,135,0.5)] group-hover:shadow-[0_0_30px_rgba(0,255,135,0.7)] transition-all duration-300">
              F
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight text-primary group-hover:text-primary transition-colors">
              FABRANI
            </span>
          </a>

          {/* Countdown Timer - IMPROVED READABILITY */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 bg-primary/15 border-2 border-primary px-5 md:px-8 py-3 md:py-4 rounded-xl shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                <span className="text-sm md:text-base text-primary uppercase tracking-wider font-semibold hidden sm:inline-block">
                  Oferta encerra em:
                </span>
                <div className="flex items-center gap-2 font-mono text-primary font-black text-2xl md:text-4xl leading-none">
                  <span className="w-[2.5ch] text-center bg-primary/30 px-2 py-1.5 rounded-lg shadow-inner">{formatTime(timeLeft.minutes)}</span>
                  <span className="text-primary/60 text-xl md:text-2xl animate-pulse">:</span>
                  <span className="w-[2.5ch] text-center bg-primary/30 px-2 py-1.5 rounded-lg shadow-inner text-primary">{formatTime(timeLeft.seconds)}</span>
                </div>
              </div>
          </div>
        </div>
      </header>
    </>
  );
}
