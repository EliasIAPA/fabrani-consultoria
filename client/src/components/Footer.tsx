import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t-2 border-primary pt-16 md:pt-20 pb-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-14 md:mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-[0_0_15px_var(--color-primary)]">
                F
              </div>
              <span className="text-2xl font-black tracking-tight text-primary">
                FABRANI
              </span>
            </div>
            <p className="text-foreground/80 text-base leading-relaxed">
              Codificando o Futuro da Educação. Uma instituição focada em formar a próxima geração de líderes na era da Inteligência Artificial.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-black hover:shadow-[0_0_20px_var(--color-primary)] transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-primary font-bold text-lg mb-5">Contato</h4>
            <ul className="space-y-4 text-base">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl">🕒</span>
                <div>
                  <p className="text-foreground font-semibold">Horário</p>
                  <p className="text-foreground/70">Segunda à Sexta</p>
                  <p className="text-foreground/70">08:30 - 17:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <span className="text-primary text-xl">📍</span>
                <div>
                  <p className="text-foreground font-semibold">Sede</p>
                  <p className="text-foreground/70">Av. Paulista, 1000</p>
                  <p className="text-foreground/70">São Paulo - SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Selo MEC Simulado */}
            <div className="bg-white px-4 py-2.5 rounded-lg flex items-center gap-3">
              <div className="w-9 h-9 bg-blue-800 rounded-full flex items-center justify-center text-white text-sm font-bold">BR</div>
              <div className="text-black text-sm font-bold leading-tight">
                MEC<br/>
                <span className="font-normal text-xs">MINISTÉRIO DA EDUCAÇÃO</span>
              </div>
            </div>
            <p className="text-sm text-foreground/70 max-w-[220px]">
              Instituição credenciada com nota máxima no MEC.
            </p>
          </div>
          
          <p className="text-sm text-foreground/70 text-center md:text-right">
            © 2026 Faculdade FABRANI. Todos os direitos reservados.<br/>
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
