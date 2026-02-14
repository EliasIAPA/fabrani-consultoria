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


      {/* Main Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl border-white/10 py-3 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)]"
            : "bg-background/50 backdrop-blur-sm py-4 md:py-5"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo removido para liberar espaço */}
        </div>
      </header>
    </>
  );
}
