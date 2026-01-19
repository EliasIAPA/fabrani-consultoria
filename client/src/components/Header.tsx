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
      {/* Top Bar de Urgência */}
      <div className="bg-background border-b border-primary py-2 text-center text-xs md:text-sm font-medium text-primary-foreground relative z-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container flex items-center justify-center gap-2 animate-pulse">
          <span className="text-primary font-bold">⚡ 50 VAGAS DISPONÍVEIS</span>
          <span className="hidden md:inline text-muted-foreground">|</span>
          <span className="hidden md:inline">CONSULTORIA COM O FOUNDER</span>
          <span className="hidden md:inline text-muted-foreground">→</span>
          <a href="#cta" className="underline hover:text-primary transition-colors font-bold">
            GARANTIR VAGA POR R$ 97
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-[36px] left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl border-white/5 py-3 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-primary text-black flex items-center justify-center font-bold text-xl shadow-[0_0_15px_rgba(0,255,135,0.4)] group-hover:shadow-[0_0_25px_var(--color-primary)] transition-all duration-300">
              F
            </div>
            <span className="text-xl font-bold tracking-tighter font-display text-white group-hover:text-primary transition-colors">
              FABRANI
            </span>
          </a>

          {/* Countdown Timer (Substituindo Menu) */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-card border border-primary/30 px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(0,255,135,0.1)]">
              <span className="text-xs text-muted-foreground uppercase tracking-wider font-bold hidden sm:inline-block">Oferta encerra em:</span>
              <div className="flex items-center gap-1 font-mono text-primary font-bold text-lg leading-none">
                <span className="w-[2ch] text-center">{formatTime(timeLeft.hours)}</span>
                <span className="text-muted-foreground">:</span>
                <span className="w-[2ch] text-center">{formatTime(timeLeft.minutes)}</span>
                <span className="text-muted-foreground">:</span>
                <span className="w-[2ch] text-center">{formatTime(timeLeft.seconds)}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
