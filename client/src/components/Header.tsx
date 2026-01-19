import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "O Manifesto", href: "#hero" },
    { name: "Graduação AI-Driven", href: "#graduacao" },
    { name: "MBAs de Aplicação", href: "#mbas" },
    { name: "AI Starter Pack", href: "#starter" },
    { name: "Hub de Insights", href: "#hub" },
  ];

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

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full shadow-[0_0_10px_var(--color-primary)]"></span>
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button 
              className="hidden md:flex btn-neon bg-primary hover:bg-primary-dark text-black border-none"
              asChild
            >
              <a href="#login">Área do Aluno</a>
            </Button>

            <button
              className="lg:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-background/95 backdrop-blur-xl pt-32 px-6 transition-transform duration-300 lg:hidden flex flex-col gap-6",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-2xl font-bold text-white hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
        <Button className="w-full btn-neon mt-4" asChild>
          <a href="#login">Área do Aluno</a>
        </Button>
      </div>
    </>
  );
}
