import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, AlertTriangle, Zap, Target, FileText, Users, Lock, Clock, ShieldAlert, HelpCircle, Award, Briefcase, GraduationCap, ChevronRight } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/fbPixel";

export default function Home() {

  const handleCTAClick = () => {
    trackInitiateCheckout();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Header />
      
      <main>
        {/* ========================================
             1. HERO SECTION - OPTIMIZED
        ========================================= */}
        <section id="hero" className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.08),transparent_60%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-10">
              
              {/* Pre-headline Badge - More visible */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm animate-fade-in-up">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-wide">
                  20 Anos de Mercado | +100k Alunos | 150 Projetos Validados
                </span>
              </div>

              {/* Headline - Larger and more impactful */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                Você Está Investindo No{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Lugar Errado</span>
                {" "}— 1 Hora Para Descobrir Onde Colocar Seu Dinheiro Para{" "}
                <span className="text-primary glow-text-green">Realmente Escalar</span>
              </h1>

              {/* Subheadline - Better contrast and size */}
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Receba o <strong className="text-white">Plano Estruturado 2026</strong> e <strong className="text-primary">Personalizado</strong> para Seu Negócio.
              </p>

              {/* CTA - Larger and more prominent */}
              <div className="flex flex-col items-center gap-5 animate-fade-in-up delay-300 pt-4">
                <Button 
                  size="lg" 
                  className="btn-neon h-auto w-full sm:w-auto text-black text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6" 
                  asChild
                  onClick={handleCTAClick}
                >
                  <a href="#cta">
                    🔥 QUERO ACESSAR
                  </a>
                </Button>
                <p className="text-sm md:text-base text-white/60 flex items-center gap-2">
                  <Lock size={16} className="text-primary" /> Pagamento Seguro • Apenas 50 vagas
                </p>
              </div>

              {/* Badges Grid - More readable */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-12 animate-fade-in-up delay-500">
                {[
                  { number: "150", text: "Projetos Validados em 2025" },
                  { number: "+100K", text: "Alunos Formados" },
                  { number: "20", text: "Anos de Experiência" },
                  { number: "R$ 2bi", text: "Em Projetos Validados" },
                ].map((badge, i) => (
                  <div key={i} className="badge-card group">
                    <div className="badge-number group-hover:text-white transition-colors">
                      {badge.number}
                    </div>
                    <div className="badge-text">
                      {badge.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             2. PROBLEM SECTION - IMPROVED READABILITY
        ========================================= */}
        <section className="py-20 md:py-28 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-14">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl sm:text-4xl md:text-5xl font-bold">
                  Você Está Travado — <span className="text-white/60">E Provavelmente Não É Onde Você Pensa</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto">
                  Você trabalha duro. Investe. Testa. Mas não sabe se está a 1 ajuste de decolar... ou a 1 ano de distância.
                </p>
              </div>

              <div className="grid gap-6 md:gap-8">
                {[
                  {
                    title: "Você Investe... Mas Não Sabe Se É No Lugar Certo",
                    desc: "Gastou R$ 5k em tráfego, mudou a cor do botão 47 vezes, contratou copywriter... e a conversão subiu 0,3%. Você está ajustando detalhes enquanto o problema é estrutural.",
                  },
                  {
                    title: "Você Não Sabe Se Está a 1 Passo ou a 10 Mudanças",
                    desc: "Será que é o posicionamento? O produto? Falta de certificação MEC? Você está voando no escuro, desperdiçando tempo e dinheiro testando às cegas.",
                  },
                  {
                    title: "Você Já Tentou 'Experts' e Continua Sem Clareza",
                    desc: "'Você precisa de mais tráfego', 'Sua oferta está fraca'. Tudo genérico. Nada específico para O SEU negócio. Você precisa de diagnóstico, não de palpite.",
                  },
                ].map((problem, i) => (
                  <div key={i} className="flex flex-col sm:flex-row gap-5 md:gap-6 p-6 md:p-8 rounded-2xl border-l-4 border-primary bg-background hover:bg-white/[0.02] transition-colors">
                    <div className="shrink-0 w-14 h-14 rounded-full bg-red-500/15 flex items-center justify-center text-red-400">
                      <AlertTriangle size={28} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{problem.title}</h3>
                      <p className="text-base md:text-lg text-white/70 leading-relaxed">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-center text-primary border-y border-white/10 py-10 italic leading-relaxed">
                "E se você pudesse ter 1 hora com quem enxerga o que você não vê — e já fez isso 150 vezes só em 2025?"
              </blockquote>

            </div>
          </div>
        </section>

        {/* ========================================
             3. SOLUTION SECTION (ABOUT FOUNDER)
        ========================================= */}
        <section className="py-20 md:py-28 relative overflow-hidden bg-background">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="/images/founder.png" 
                    alt="Elias Evangelista - Founder FABRANI" 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">Elias Evangelista</h3>
                    <p className="text-primary font-mono text-lg">Founder & Diretor FABRANI</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <Badge variant="outline" className="border-primary text-primary px-5 py-2 text-sm font-semibold">QUEM VAI TE ATENDER</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Não É Coach. Não É Guru.<br/>
                  <span className="text-primary">É Quem Valida o Mercado.</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                    Com <strong className="text-white">24 anos de experiência</strong> em modelos de negócios físicos e digitais, Elias Evangelista não apenas ensina — ele constrói as estruturas que sustentam os maiores players do mercado.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-3 bg-card/50 p-5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <Briefcase className="text-primary" size={22} /> Experiência
                      </div>
                      <ul className="text-base text-white/70 space-y-2">
                        <li>• 24 anos em Modelos de Negócios</li>
                        <li>• Mercado Digital desde 2009</li>
                        <li>• Advogado há 20 anos</li>
                        <li>• Contabilista há 24 anos</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-3 bg-card/50 p-5 rounded-xl border border-white/5">
                      <div className="flex items-center gap-2 text-white font-bold text-lg">
                        <GraduationCap className="text-primary" size={22} /> Formação
                      </div>
                      <ul className="text-base text-white/70 space-y-2">
                        <li>• Mestrado em Direito</li>
                        <li>• MBA em Modelo de Negócios</li>
                        <li>• Especialista em Regulação MEC</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-card border border-primary/20 p-6 rounded-xl">
                    <div className="flex items-center gap-2 text-white font-bold mb-5 text-lg">
                      <Award className="text-primary" size={22} /> Track Record
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <span className="block text-3xl md:text-4xl font-black text-primary">150</span>
                        <span className="text-base text-white/70">Projetos em 2025</span>
                      </div>
                      <div>
                        <span className="block text-3xl md:text-4xl font-black text-primary">+100k</span>
                        <span className="text-base text-white/70">Alunos Treinados</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================
             4. SOCIAL PROOF - IMPROVED
        ========================================= */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="section-title-bar text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Estes Não São "Casos de Sucesso".<br/>
                <span className="text-primary">São Projetos Que Ele Validou.</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70">
                Quando você valida negócios que movimentam bilhões, você não está "dando consultoria". Você está construindo impérios educacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  name: "Ícaro de Carvalho",
                  stat: "300.000 alunos impactados",
                  desc: "Desenvolvimento de Pós Graduação e Certificação do Evento \"O Novo Mercado\""
                },
                {
                  name: "Tiago Finch / Ticto",
                  stat: "R$ 2 bilhões em transações",
                  desc: "Certificação do Evento Outlier 2"
                },
                {
                  name: "Weburn",
                  stat: "2,5 milhões de usuários",
                  desc: "Desenvolvimento de MBA pela FABRANI"
                }
              ].map((caseStudy, i) => (
                <div key={i} className="group relative p-6 md:p-8 rounded-2xl bg-background border border-white/10 border-l-4 border-l-primary hover:border-primary/50 hover:shadow-[0_12px_48px_rgba(0,255,135,0.15)] transition-all duration-500">
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{caseStudy.name}</h3>
                    <p className="text-primary font-mono font-bold text-lg md:text-xl mb-4">{caseStudy.stat}</p>
                    <p className="text-base md:text-lg text-white/70">{caseStudy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
             4.5. PARCEIROS - PROVA SOCIAL COM IMAGENS
        ========================================= */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Badge variant="outline" className="border-primary text-primary px-5 py-2 mb-6 text-sm font-semibold">PARCEIROS FABRANI</Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Quem Já Confia na <span className="text-primary">FABRANI</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70">
                Grandes nomes do mercado digital que validaram seus projetos com a FABRANI.
              </p>
            </div>

            {/* Grid de Parceiros com Imagens */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
              {/* Ícaro de Carvalho - O Novo Mercado */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/parceiros/onm.jpg" 
                    alt="Ícaro de Carvalho - O Novo Mercado - Certificação FABRANI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">O Novo Mercado - 2025</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">Certificação FABRANI</p>
                  <p className="text-base text-white/70">Pós Graduação Ícaro de Carvalho / FABRANI - Projeto: Elias Evangelista</p>
                </div>
              </div>

              {/* Escola do Dólar - Forbes */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/parceiros/escola-dolar.jpg" 
                    alt="Escola do Dólar - Forbes Malta - Certificação FABRANI"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Escola do Dólar</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+20 mil alunos nos EUA</p>
                  <p className="text-base text-white/70">Escola do Dólar - Certificação FABRANI - Capa Forbes Malta</p>
                </div>
              </div>

              {/* Neil Patel */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="/images/parceiros/neilpatel.jpg" 
                    alt="Elias Evangelista e Neil Patel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Neil Patel</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">Maior Especialista em SEO</p>
                  <p className="text-base text-white/70">Elias Evangelista com Neil Patel - Referência mundial em Marketing Digital</p>
                </div>
              </div>

              {/* Evento Outlier - 2 mil pessoas */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/images/parceiros/outlier-poster.jpg"
                  >
                    <source src="/videos/outlier2025.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Evento Outlier</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+2 mil pessoas</p>
                  <p className="text-base text-white/70">Certificação FABRANI - Tiago Finch / Ticto</p>
                </div>
              </div>

              {/* Weburn */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card md:col-span-2 lg:col-span-1">
                <div className="aspect-[4/3] overflow-hidden bg-[#2d2d2d] flex items-center justify-center">
                  <img 
                    src="/images/parceiros/weburn.png" 
                    alt="Weburn - MBA FABRANI"
                    className="w-3/4 h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Weburn</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+2,5 milhões de usuários no App</p>
                  <p className="text-base text-white/70">Projeto MBA - FABRANI/Elias Evangelista</p>
                </div>
              </div>

              {/* Evento Vendedor de Elite - 3 mil pessoas */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/vendedordeElite.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Vendedor de Elite</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+3 mil pessoas</p>
                  <p className="text-base text-white/70">Certificação FABRANI</p>
                </div>
              </div>

              {/* Renner Silva - Melhor Palestrante do Brasil */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/RennerSilva.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Renner Silva</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">Melhor Palestrante do Brasil</p>
                  <p className="text-base text-white/70">Projeto Validade e Certificado Elias Evangelista/FABRANI</p>
                </div>
              </div>
            </div>

            {/* Seção de Vídeos de Depoimentos */}
            <div className="mt-16">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
                <span className="text-primary">Depoimentos</span> de Quem Já Passou Pela FABRANI
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Vídeo 1 - Vendedor de Elite */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-card">
                  <div className="aspect-[9/16] md:aspect-video">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="/images/parceiros/novo-mercado.webp"
                    >
                      <source src="/videos/vendedordeElite.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-white">Vendedor de Elite</p>
                  </div>
                </div>

                {/* Vídeo 2 - Renner Silva */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-card">
                  <div className="aspect-[9/16] md:aspect-video">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="/images/parceiros/escola-dolar-forbes.webp"
                    >
                      <source src="/videos/RennerSilva.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-white">Renner Silva</p>
                  </div>
                </div>

                {/* Vídeo 3 - Outlier 2025 */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-card">
                  <div className="aspect-[9/16] md:aspect-video">
                    <video 
                      controls 
                      className="w-full h-full object-cover"
                      poster="/images/parceiros/neil-patel.webp"
                    >
                      <source src="/videos/outlier2025.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                  <div className="p-4">
                    <p className="text-base font-semibold text-white">Outlier 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             5. OFFER STACK - OPTIMIZED FOR CONVERSION
        ========================================= */}
        <section id="cta" className="py-20 md:py-28 relative bg-background">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
          
          <div className="container max-w-5xl">
            <div className="glass-card rounded-3xl p-6 md:p-10 lg:p-12 border-primary relative overflow-hidden bg-card">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
                  O Que Você Recebe Por R$ 97
                </h2>

                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-12">
                  <div className="space-y-5">
                    {[
                      {
                        title: "Consultoria Online de 1 Hora",
                        desc: "Análise completa do seu negócio e diagnóstico do gargalo invisível.",
                        value: "R$ 5.000+"
                      },
                      {
                        title: "Plano de Crescimento Personalizado",
                        desc: "Roadmap de ações priorizadas. Onde investir primeiro e timeline realista.",
                        value: "R$ 2.000"
                      },
                      {
                        title: "Avaliação Para Aliança FABRANI",
                        desc: "Potencial para se tornar um dos 200 Aliançados e ter cursos MEC.",
                        value: "Inestimável"
                      },
                      {
                        title: "Liberdade Total de Plataforma",
                        desc: "Se virar Aliançado: 0% sobre vendas. Venda onde quiser.",
                        value: "Inestimável"
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-primary/5 border border-white/10 border-l-4 border-l-primary rounded-xl">
                        <div className="shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center text-black">
                          <Check size={16} strokeWidth={3} />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-xl md:text-2xl mb-2">{item.title}</h3>
                          <p className="text-base md:text-lg text-white/70 mb-2">{item.desc}</p>
                          <p className="text-sm font-mono text-primary font-bold">Valor: {item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-background rounded-2xl p-6 md:p-8 flex flex-col justify-center items-center text-center border border-primary/30 shadow-[0_8px_32px_rgba(0,255,135,0.1)]">
                    <p className="text-sm md:text-base text-white/60 uppercase tracking-widest mb-3">Investimento Hoje</p>
                    <p className="text-2xl md:text-3xl text-white/50 line-through mb-3">R$ 7.000+</p>
                    <div className="text-6xl md:text-7xl lg:text-8xl font-black text-primary mb-3 glow-text-green">R$ 97</div>
                    <p className="text-base md:text-lg text-white/60 mb-8">À vista ou até 3x sem juros</p>
                    
                    <Button 
                      size="lg" 
                      className="w-full btn-neon h-auto text-base sm:text-lg md:text-xl text-black py-4 sm:py-5 md:py-6" 
                      asChild
                      onClick={handleCTAClick}
                    >
                      <a href="https://pay.kiwify.com.br/..." target="_blank" rel="noopener noreferrer">
                        QUERO ACESSAR
                        <ChevronRight className="ml-2" size={24} />
                      </a>
                    </Button>
                    
                    <p className="mt-5 text-sm md:text-base text-white/50 max-w-sm">
                      "Se você não tem R$ 97 para investir em 1 hora de clareza com quem validou 150 projetos... você não está pronto."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             5.5. ALIANÇA FABRANI SECTION
        ========================================= */}
        <section className="py-20 md:py-28 bg-card relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-primary/5 pointer-events-none"></div>
          
          <div className="container max-w-5xl relative z-10">
            <div className="bg-background border border-purple-500/30 rounded-3xl p-6 md:p-10 lg:p-12 shadow-[0_0_60px_rgba(168,85,247,0.1)]">
              <div className="text-center mb-12">
                <Badge variant="outline" className="border-purple-500 text-purple-400 px-5 py-2 mb-6 text-sm font-semibold">OPORTUNIDADE EXCLUSIVA</Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Na Consultoria você também será avaliado para o projeto{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary">ALIANÇA FABRANI</span>
                </h2>
                <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
                  Faculdade Brasileira de Negócios Inovadores. O ecossistema que transforma infoprodutores em instituições de ensino.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {[
                  {
                    icon: <Award className="text-purple-400" size={26} />,
                    text: "Cursos, mentorias e palestras reconhecidas pelo MEC"
                  },
                  {
                    icon: <Users className="text-purple-400" size={26} />,
                    text: "Acesso a 300 professores para gravar qualquer conteúdo"
                  },
                  {
                    icon: <Zap className="text-purple-400" size={26} />,
                    text: "Grupo individualizado e exclusivo no WhatsApp"
                  },
                  {
                    icon: <Target className="text-purple-400" size={26} />,
                    text: "Acesso a Eventos FABRANI Online e Presencial"
                  },
                  {
                    icon: <Briefcase className="text-purple-400" size={26} />,
                    text: "Uso da MARCA: atue como universidade sem o custo de uma"
                  },
                  {
                    icon: <FileText className="text-purple-400" size={26} />,
                    text: "Receba o passo a passo para ter Sua Escola Digital"
                  }
                ].map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 md:p-6 rounded-xl bg-card border border-white/5 hover:border-purple-500/40 transition-colors group">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                      {benefit.icon}
                    </div>
                    <p className="text-base md:text-lg font-medium text-white/90 leading-relaxed">
                      {benefit.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             6. OBJECTION CRUSHER SECTION
        ========================================= */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container max-w-4xl">
            <h2 className="section-title-bar text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
              Deixa Eu Adivinhar o Que Você Está Pensando...
            </h2>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  title: '"Vai ser muito genérico, igual todas as consultorias"',
                  content: (
                    <>
                      <p className="text-base md:text-lg text-white/70 leading-relaxed">Entendo perfeitamente. Você já pagou por "consultoria personalizada" e recebeu planilha copiada e dicas genéricas.</p>
                      <p className="mt-4 font-bold text-white text-lg">A diferença aqui:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-3 text-base md:text-lg text-white/70">
                        <li>Ele não é consultor profissional. Ele é Founder de instituição educacional credenciada pelo MEC.</li>
                        <li>Ele não vive de consultoria. Ele vive de validar negócios educacionais de escala.</li>
                        <li>Essa consultoria é o filtro para encontrar os 50 projetos que ele vai apoiar em 2026.</li>
                      </ul>
                      <p className="mt-4 text-primary font-bold text-lg">Tradução: Ele está mais interessado em achar os certos do que em te agradar.</p>
                    </>
                  )
                },
                {
                  title: '"R$ 97 vai realmente resolver meu problema?"',
                  content: (
                    <>
                      <p className="font-bold text-white text-lg">Resposta honesta: Não. R$ 97 não vai resolver seu problema.</p>
                      <p className="mt-4 text-base md:text-lg text-white/70">O que R$ 97 compra:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-3 text-base md:text-lg text-white/70">
                        <li>1 hora da atenção dele</li>
                        <li>Diagnóstico preciso do seu gargalo</li>
                        <li>Plano claro do que fazer</li>
                      </ul>
                      <p className="mt-4 text-base md:text-lg text-white/70">O que resolve seu problema: <strong className="text-white">Você executar o que ele disser.</strong></p>
                      <p className="mt-4 text-primary font-bold text-lg">Se você quer clareza cirúrgica de onde está o buraco do seu barco, então vale cada centavo.</p>
                    </>
                  )
                },
                {
                  title: '"Como sei que vou virar Aliançado?"',
                  content: (
                    <>
                      <p className="font-bold text-white text-lg">Resposta honesta: Você não sabe. E ele também não.</p>
                      <p className="mt-4 text-base md:text-lg text-white/70">A consultoria não garante que você vira Aliançado. O que ela garante:</p>
                      <ul className="list-disc pl-5 space-y-2 mt-3 text-base md:text-lg text-white/70">
                        <li>✅ Você vai descobrir se está pronto para ser Aliançado agora</li>
                        <li>✅ Se não, vai saber exatamente o que falta (e como chegar lá)</li>
                      </ul>
                      <p className="mt-4 text-primary font-bold text-lg">O pior lugar para estar não é "longe do objetivo". É não saber a distância real. R$ 97 te mostra a distância exata.</p>
                    </>
                  )
                }
              ].map((obj, i) => (
                <div key={i} className="bg-background border border-white/10 p-6 md:p-8 rounded-2xl">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center gap-3">
                    <span className="text-2xl md:text-3xl">💭</span> {obj.title}
                  </h3>
                  <div>
                    {obj.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
             7. URGENCY/SCARCITY SECTION
        ========================================= */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-red-500/5 pointer-events-none"></div>
          
          <div className="container max-w-4xl relative z-10">
            <h2 className="section-title-bar text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-red-400">
              Por Que Apenas 50 Vagas (E Por Que Não Vão Sobrar)
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
              <div className="bg-card p-6 md:p-8 rounded-2xl border border-red-500/20">
                <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center text-red-400 mb-6">
                  <Target size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Limitação Real de Capacidade</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  O Founder da FABRANI não dá 500 consultorias por mês. Ele abriu 50 vagas porque esse é o número máximo que ele consegue atender pessoalmente com excelência enquanto toca a operação de 150 projetos.
                </p>
              </div>

              <div className="bg-card p-6 md:p-8 rounded-2xl border border-red-500/20">
                <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center text-red-400 mb-6">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Foco Estratégico em 2026</h3>
                <p className="text-base md:text-lg text-white/70 leading-relaxed">
                  Em 2026, o foco é qualidade sobre quantidade. Ele quer validar 50 novos projetos — mas apenas os certos. Essa consultoria é o processo seletivo.
                </p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 p-6 md:p-8 rounded-2xl text-center mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-5 flex items-center justify-center gap-3">
                <ShieldAlert className="text-red-400" size={28} /> Quando as vagas preencherem:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base font-bold text-red-400 uppercase tracking-wider">
                <span>❌ A porta fecha</span>
                <span>❌ Sem lista de espera</span>
                <span>❌ Sem próxima turma</span>
                <span>❌ Sem "me avisa"</span>
              </div>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-500 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] border-none text-base sm:text-lg md:text-xl px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl font-bold" 
                asChild
                onClick={handleCTAClick}
              >
                <a href="#cta">🔥 QUERO ACESSAR</a>
              </Button>
            </div>
          </div>
        </section>

        {/* ========================================
             8. FAQ SECTION - IMPROVED READABILITY
        ========================================= */}
        <section className="py-20 md:py-28 bg-card">
          <div className="container max-w-3xl">
            <h2 className="section-title-bar text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
              Perguntas Que Você Deve Estar Fazendo
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Quanto tempo leva para agendar após a compra?", a: "Imediatamente. Após a confirmação do pagamento, você recebe um link com os horários disponíveis na agenda dele. Você escolhe o melhor horário para você e pronto. Simples e rápido." },
                { q: "A consultoria é online ou presencial?", a: "100% online via Zoom ou Google Meet. Você pode estar em qualquer lugar do Brasil (ou do mundo). Basta ter internet e 1 hora disponível." },
                { q: "Eu realmente vou falar com o Founder ou com a equipe?", a: "Direto com o Founder e Diretor da FABRANI. Não é com analista. Não é com consultor da equipe. É com ele pessoalmente, 1 hora dedicada ao seu negócio." },
                { q: "Preciso ter um faturamento mínimo para aproveitar?", a: "Não. Se você já vende (ou quer vender) cursos, mentorias ou programas educacionais, a consultoria funciona. Não importa se você fatura R$ 5.000 ou R$ 500.000/mês. O diagnóstico se adapta ao seu momento atual." },
                { q: "E se eu não quiser virar Aliançado? Perdi meu dinheiro?", a: "Absolutamente não. Você sai com o diagnóstico completo e o plano de crescimento independentemente de virar Aliançado. Virar Aliançado é uma possibilidade, não uma obrigação. O valor da consultoria está na clareza que você recebe." },
                { q: "Posso gravar a consultoria para revisitar depois?", a: "Sim. Você pode gravar para assistir quantas vezes quiser e não perder nenhum detalhe do que foi dito." },
                { q: "Tem garantia de reembolso?", a: "Não. São 50 vagas limitadas e ele vai dedicar 1 hora pessoalmente para você. Se você não está 100% certo de que quer clareza, não compre. Mas se está disposto a ouvir a verdade (mesmo que doa), R$ 97 é o investimento mais barato que você vai fazer para parar de desperdiçar dinheiro." },
                { q: "Depois das 50 vagas, vai abrir de novo?", a: "Não há previsão. Depende da capacidade de atendimento dele ao longo de 2026. Pode ser que sim, pode ser que não. O que você sabe é que hoje tem vaga. Amanhã, não sabemos." },
                { q: "Quanto tempo dura a consultoria?", a: "1 hora completa. Pode ser que ele estenda se necessário, mas o mínimo garantido é 1 hora focada no seu negócio." },
                { q: "E se meu negócio for muito específico/nichado?", a: "Melhor ainda. Ele já validou projetos nos nichos mais diversos: saúde, marketing, vendas, mindset, técnicos, maternidade, esportes, finanças. Quanto mais específico, mais cirúrgico o diagnóstico." }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-background rounded-xl px-5 md:px-6">
                  <AccordionTrigger className="text-left font-bold hover:text-primary hover:no-underline py-5 md:py-6 text-lg md:text-xl">
                    <span className="flex items-center gap-3">
                      <HelpCircle size={22} className="text-primary shrink-0" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5 md:pb-6 pl-9 text-base md:text-lg leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ========================================
             9. FINAL CTA SECTION - MAXIMUM CONVERSION
        ========================================= */}
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          <div className="container max-w-5xl relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-14 md:mb-16">
              Você Tem Duas Escolhas
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-16">
              {/* Escolha 1 */}
              <div className="bg-card border border-red-500/20 p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-red-500/40 transition-colors">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-red-500"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Escolha #1: Continuar Testando Sozinho</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Gastando R$ 5.000+/mês em tráfego sem saber se é o problema real",
                    "Testando headlines, cores, copies sem clareza do gargalo estrutural",
                    "Se perguntando 'será que estou perto de decolar?' (sem nunca saber a resposta)",
                    "Observando concorrentes medianos escalarem com certificação MEC",
                    "Desperdiçando tempo precioso em tentativa e erro"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base md:text-lg text-white/70">
                      <span className="text-red-400 mt-0.5">❌</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-red-500/10 p-5 rounded-xl text-center border border-red-500/20">
                  <p className="text-sm md:text-base text-red-400 uppercase font-bold mb-2">Custo nos próximos 6 meses</p>
                  <p className="text-2xl md:text-3xl font-black text-white">R$ 30.000+ desperdiçados</p>
                </div>
              </div>

              {/* Escolha 2 */}
              <div className="bg-card border-2 border-primary p-6 md:p-8 rounded-2xl relative overflow-hidden shadow-[0_0_40px_rgba(0,255,135,0.15)] transform md:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary"></div>
                <div className="absolute top-4 right-4 bg-primary text-black text-xs md:text-sm font-bold px-4 py-1.5 rounded-full">RECOMENDADO</div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Escolha #2: Ter Clareza Cirúrgica em 1 Hora</h3>
                <ul className="space-y-4 mb-8">
                  {[
                    "Descobre exatamente o que está travando seu crescimento (causa raiz)",
                    "Sai com um plano de ação priorizado (não genérico, específico para você)",
                    "Tem a avaliação se está pronto para Aliança FABRANI (ou o que falta)",
                    "Para de desperdiçar dinheiro testando no escuro",
                    "Sabe a distância real entre você e a escala"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base md:text-lg text-white">
                      <span className="text-primary mt-0.5">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-primary/10 p-5 rounded-xl text-center border border-primary/30">
                  <p className="text-sm md:text-base text-primary uppercase font-bold mb-2">Investimento Único</p>
                  <p className="text-4xl md:text-5xl font-black text-white glow-text-green">R$ 97</p>
                </div>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto space-y-8">
              <Button 
                size="lg" 
                className="w-full btn-neon h-auto text-lg sm:text-xl md:text-2xl text-black py-5 sm:py-6 md:py-7 shadow-[0_0_50px_rgba(0,255,135,0.4)]" 
                asChild
                onClick={handleCTAClick}
              >
                <a href="https://pay.kiwify.com.br/..." target="_blank" rel="noopener noreferrer">
                  🔥 QUERO ACESSAR
                </a>
              </Button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-white/60">
                <span className="flex items-center gap-2"><Check size={18} className="text-primary" /> Consultoria 1h com Founder</span>
                <span className="flex items-center gap-2"><Check size={18} className="text-primary" /> Plano Personalizado</span>
                <span className="flex items-center gap-2"><Check size={18} className="text-primary" /> Avaliação Aliança</span>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-lg md:text-xl font-bold text-white mb-4">Uma Última Coisa Antes de Você Decidir:</p>
                <p className="text-base md:text-lg text-white/70 leading-relaxed mb-6">
                  Você pode continuar justificando por que não escala. Ou pode ter clareza cirúrgica do que fazer.
                  Você pode desperdiçar mais R$ 30.000 nos próximos 6 meses. Ou pode investir R$ 97 hoje.
                  A porta está aberta. Mas só para 50 pessoas.
                </p>
                <p className="text-xl md:text-2xl font-bold text-primary">Você vai ser uma delas?</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
