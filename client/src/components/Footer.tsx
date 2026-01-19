import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold shadow-[0_0_10px_var(--color-primary)]">
                F
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                FABRANI
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Codificando o Futuro da Educação. Uma instituição focada em formar a próxima geração de líderes na era da Inteligência Artificial.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre a FABRANI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Corpo Docente</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Parceiros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Responsabilidade Social</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Transparência</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Denuncie - Políticas Anticorrupção</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CPA - Comissão Permanente de Avaliação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NAP - Núcleo de Atendimento Psicopedagógico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">NDE - Núcleo Docente Estruturante</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CAT - Conselho Adm. e Tecnologia</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6">Atendimento</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">🕒</span>
                <div>
                  <p className="text-white font-medium">Horário</p>
                  <p>Segunda à Sexta</p>
                  <p>08:30 - 17:30</p>
                </div>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <span className="text-primary">📍</span>
                <div>
                  <p className="text-white font-medium">Sede</p>
                  <p>Av. Paulista, 1000</p>
                  <p>São Paulo - SP</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {/* Selo MEC Simulado */}
            <div className="bg-white px-4 py-2 rounded flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center text-white text-xs font-bold">BR</div>
              <div className="text-black text-xs font-bold leading-tight">
                MEC<br/>
                <span className="font-normal text-[10px]">MINISTÉRIO DA EDUCAÇÃO</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground max-w-[200px]">
              Instituição credenciada com nota máxima no MEC.
            </p>
          </div>
          
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © 2026 Faculdade FABRANI. Todos os direitos reservados.<br/>
            CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}
