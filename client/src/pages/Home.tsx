import { Header } from "@/components/Header";
import { ExitPopup } from "@/components/ExitPopup";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, AlertTriangle, Zap, Target, FileText, Users, Lock, Clock, ShieldAlert, HelpCircle, Award, Briefcase, GraduationCap, ChevronRight, CheckCircle2, Lightbulb, TrendingUp } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/fbPixel";

export default function Home() {

  const handleCTAClick = () => {
    trackInitiateCheckout();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Header />
      <ExitPopup />
      
      <main>
        {/* ========================================
             1. PRÉ-HEADLINE + HERO SECTION
        ========================================= */}
        <section id="hero" className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.08),transparent_60%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-10">
              
              {/* Pre-headline */}
              <div className="inline-flex flex-col items-center gap-2 px-6 py-4 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm animate-fade-in-up">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-sm md:text-base font-semibold text-foreground/90 uppercase tracking-wide">
                    Transforme seu Curso em Extensão Universitária Válida pelo MEC
                  </span>
                </div>
                <div className="text-sm md:text-base font-bold text-primary flex items-center gap-2">
                  <Clock size={16} /> 12/02/26 • 19h • Online e ao Vivo
                </div>
                <div className="text-xs md:text-sm text-foreground font-semibold">
                  Implantação da sua Certificação MEC (Direito a 1 Curso ou Mentoria)
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                De Infoprodutor para{" "}
                <span className="text-primary glow-text-neon">Empresário de Educação Formal</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Existe um atalho institucional legítimo para quem já tem um curso online ou mentoria e quer vender mais, cobrar mais e ser escolhido: entrar oficialmente para a Educação Formal.
              </p>

              {/* CTA */}
              <div className="flex flex-col items-center gap-5 animate-fade-in-up delay-300 pt-4">
                <Button 
                  size="lg" 
                  className="btn-neon h-auto w-full sm:w-auto text-black text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6" 
                  asChild
                  onClick={handleCTAClick}
                >
                  <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX" target="_blank" rel="noopener noreferrer">
                    🔥 QUERO ACESSAR
                  </a>
                </Button>
                <p className="text-sm md:text-base text-foreground flex items-center gap-2">
                  <Lock size={16} className="text-primary" /> Pagamento Seguro • Vagas Limitadas
                </p>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-12 animate-fade-in-up delay-500">
                {[
                  { number: "20", text: "Anos de Mercado" },
                  { number: "+100K", text: "Alunos Formados" },
                  { number: "150", text: "Projetos Validados" },
                  { number: "500+", text: "Professores" },
                ].map((badge, i) => (
                  <div key={i} className="badge-card group">
                    <div className="badge-number group-hover:text-foreground transition-colors">
                      {badge.number}
                    </div>
                    <div className="badge-text">
                      {badge.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Benefícios do Logotipo MEC */}
              <div className="mt-16 pt-16 border-t border-primary/20 space-y-8">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Quando Você Tem Seu Curso ou Mentoria Válido com Extensão pelo MEC:
                  </h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      num: "#1",
                      title: "O logótipo do MEC em seu site é um AVALIADOR invisível",
                      desc: "Que gera mais autoridade e menos dúvida sobre você ou seu curso"
                    },
                    {
                      num: "#2",
                      title: "O logótipo do MEC em seu site reduz o custo do Tráfego",
                      desc: "E aumenta brutalmente suas vendas"
                    },
                    {
                      num: "#3",
                      title: "O logótipo do MEC em seu site permite uma parceria sólida",
                      desc: "Entre você e uma faculdade - cooperação Técnica"
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col gap-4 p-6 rounded-xl bg-primary/10 border-2 border-primary hover:bg-primary/15 transition-all duration-300">
                      <div className="text-primary font-black text-2xl">{item.num}</div>
                      <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
                      <p className="text-foreground/80 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             2. CONTEXTO — O MERCADO MUDOU
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  O Mercado de Cursos Online Mudou{" "}
                  <span className="text-muted-foreground">— E a Maioria Ainda Não Percebeu</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Hoje, conteúdo bom não garante mais vendas. Autoridade percebida garante.
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  {
                    title: "Durante Anos, Bastava Ter um Bom Método",
                    desc: "Uma promessa clara e conteúdo de qualidade eram suficientes. O aluno confiava porque havia menos opções.",
                  },
                  {
                    title: "Hoje, o Aluno Está Mais Cético e Seletivo",
                    desc: "Ele vê centenas de cursos parecidos, certificados genéricos e especialistas autodeclarados. Antes de comprar, ele faz uma pergunta silenciosa: 'Por que eu deveria confiar em você?'",
                  },
                  {
                    title: "Educação Virou Commodity",
                    desc: "Sem um selo forte de credibilidade, você compete por preço. E competir por preço é sempre o jogo mais caro.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 rounded-xl border-l-4 border-primary bg-background hover:bg-background/80 transition-colors">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <TrendingUp />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             3. IDENTIFICAÇÃO DA DOR — ESPELHO EMOCIONAL
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Talvez Esse Seja Exatamente o Seu Cenário Hoje
                </h2>
                <p className="text-xl text-muted-foreground">
                  E se for, não é falta de competência — é falta de validação externa.
                </p>
              </div>

              <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed">
                    Seu curso entrega transformação real. Seus alunos têm resultado. Mas isso não fica claro antes da compra.
                  </p>
                  <p className="text-lg text-foreground font-semibold">O aluno:</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    "Compara você com opções inferiores",
                    "Questiona seu preço",
                    "Precisa de muita explicação para confiar",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">
                        <Check size={14} />
                      </div>
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-xl font-bold text-primary">
                    👉 O problema não é o que você ensina. É como você é percebido antes da venda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             4. AGITAÇÃO — O CUSTO DE CONTINUAR INVISÍVEL
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Quando a Autoridade Não É Clara{" "}
                  <span className="text-muted-foreground">O Preço Vira o Critério</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Sem um selo forte de credibilidade, você investe mais em tráfego, explica mais na página e convence mais no WhatsApp.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: AlertTriangle, title: "Mais Investimento em Tráfego", desc: "Precisa de volume maior para compensar a falta de confiança" },
                  { icon: FileText, title: "Mais Explicação na Página", desc: "Longas páginas tentando convencer o que um selo poderia fazer" },
                  { icon: Users, title: "Mais Convencimento no WhatsApp", desc: "Suporte manual intenso porque o aluno ainda tem dúvidas" },
                  { icon: TrendingUp, title: "Concorrentes Vendem Mais", desc: "Com cursos piores, mas que parecem mais confiáveis" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                      <item.icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             5. INIMIGO COMUM — A RAIZ DO PROBLEMA
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  O Verdadeiro Vilão:{" "}
                  <span className="text-primary">A Informalidade Total do Mercado Digital</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Quando tudo parece igual, o aluno não sabe quem é sério.
                </p>
              </div>

              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8 md:p-12 space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Hoje, qualquer pessoa pode criar um curso, emitir um certificado genérico e se chamar de especialista — sem nenhum critério institucional.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  Quando o aluno hesita porque não sabe se você é confiável… ele não compra.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             6. QUEBRA DE PADRÃO — O INSIGHT CENTRAL
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Na Educação, Nada Gera Mais Valor Percebido{" "}
                  <span className="text-primary">Do Que Educação Formal</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Autoridade não precisa ser construída só com marketing. Ela pode ser reconhecida institucionalmente.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Certificados e diplomas carregam um peso psicológico que o marketing sozinho não substitui.
                  </p>
                  <p className="text-lg text-foreground leading-relaxed">
                    Quando um aluno vê que seu curso é reconhecido pelo MEC, ele não questiona mais se você é sério. Ele já sabe.
                  </p>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-foreground"><strong>Confiança imediata</strong> — Sem precisar explicar</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-foreground"><strong>Preço mais alto</strong> — Educação formal justifica valor</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <p className="text-foreground"><strong>Menos objeções</strong> — O aluno já confia antes de comprar</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-2xl"></div>
                  <div className="relative bg-card border border-primary/30 rounded-2xl p-8 text-center">
                    <div className="text-6xl font-black text-primary mb-4">MEC</div>
                    <p className="text-foreground font-semibold">Reconhecimento Institucional</p>
                    <p className="text-muted-foreground text-sm mt-2">Certificação oficial e legítima</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             7. MECANISMO ÚNICO — O ATALHO INSTITUCIONAL
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  O Atalho Institucional:{" "}
                  <span className="text-primary">Quando Seu Curso Entra Oficialmente para a Educação Formal</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Sem mudar seu conteúdo. Sem virar faculdade. Sem burocracia.
                </p>
              </div>

              <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 space-y-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Por meio de uma parceria com uma faculdade reconhecida pelo MEC (FABRANI), nós transformamos seu curso em uma <strong>Extensão Universitária oficial</strong>.
                </p>

                <div className="space-y-4">
                  <p className="text-lg font-semibold text-foreground">Isso significa que:</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Educação Formal", desc: "Seu curso passa a integrar a Educação Formal" },
                      { title: "Certificação MEC", desc: "Seu aluno recebe certificação institucional reconhecida" },
                      { title: "Autoridade Imediata", desc: "Sua oferta ganha autoridade acadêmica instantânea" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border space-y-2">
                  <p className="text-lg font-bold text-foreground">👉 Não é marketing.</p>
                  <p className="text-lg font-bold text-foreground">👉 Não é hype.</p>
                  <p className="text-lg font-bold text-primary">👉 É instituição.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             8. PROVA SOCIAL — TRACK RECORD COM IMAGEM
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-16">
              
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src="/images/founder.png" 
                      alt="Elias Evangelista - Founder FABRANI" 
                      className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                      <h3 className="text-2xl font-bold text-foreground">Elias Evangelista</h3>
                      <p className="text-primary font-mono">Founder & Diretor FABRANI</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <Badge variant="outline" className="border-primary text-primary px-4 py-1">QUEM VAI TE ATENDER</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                    Não É Coach. Não É Guru.<br/>
                    <span className="text-primary">É Quem Valida o Mercado.</span>
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground text-lg">
                    <p>
                      Com <strong>24 anos de experiência</strong> em modelos de negócios físicos e digitais, Elias Evangelista não apenas ensina — ele constrói as estruturas que sustentam os maiores players do mercado.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-foreground font-bold">
                          <Briefcase className="text-primary" size={20} /> Experiência
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• 24 anos em Modelos de Negócios</li>
                          <li>• Mercado Digital desde 2009</li>
                          <li>• Advogado há 20 anos</li>
                          <li>• Contabilista há 24 anos</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-foreground font-bold">
                          <GraduationCap className="text-primary" size={20} /> Formação
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• Mestrado em Direito</li>
                          <li>• MBA em Modelo de Negócios</li>
                          <li>• Especialista em Regulação MEC</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-card border border-border p-6 rounded-xl">
                      <div className="flex items-center gap-2 text-foreground font-bold mb-4">
                        <Award className="text-primary" size={20} /> Track Record
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="block text-2xl font-bold text-foreground">150</span>
                          <span className="text-muted-foreground">Projetos Validados em 2025</span>
                        </div>
                        <div>
                          <span className="block text-2xl font-bold text-foreground">+100k</span>
                          <span className="text-muted-foreground">Alunos Treinados</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             8b. PROVA SOCIAL — AUTORIDADE INSTITUCIONAL
        ========================================= */}
        <section className="py-24 bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title-bar text-3xl md:text-4xl font-bold mb-6">
                Estes Não São "Casos de Sucesso".<br/>São Projetos Que Ele Validou.
              </h2>
              <p className="text-muted-foreground">
                Quando você valida negócios que movimentam bilhões, você não está "dando consultoria". Você está construindo impérios educacionais.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
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
                <div key={i} className="group relative p-8 rounded-xl bg-card border border-border border-l-4 border-l-primary hover:border-primary hover:shadow-[0_12px_48px_rgba(0,255,135,0.2)] transition-all duration-500">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{caseStudy.name}</h3>
                    <p className="text-primary font-mono font-bold text-lg mb-4">{caseStudy.stat}</p>
                    <p className="text-sm text-muted-foreground">{caseStudy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
             9. COMO FUNCIONA — PROCESSO SIMPLES
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Como a Certificação Acontece na Prática
                </h2>
                <p className="text-xl text-muted-foreground">
                  Você não fica sozinho em nenhum momento.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: "1", title: "Onboarding ao Vivo", desc: "12/02 às 19h – online e ao vivo com a equipe FABRANI" },
                  { step: "2", title: "Validação Institucional", desc: "Análise e aprovação do seu conteúdo pelo PPC" },
                  { step: "3", title: "Emissão de Certificados", desc: "Seus alunos recebem certificação reconhecida pelo MEC" },
                ].map((item, i) => (
                  <div key={i} className="relative p-8 rounded-xl bg-background border border-primary/30 hover:border-primary transition-colors">
                    <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mt-4 mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center bg-primary/20 border border-primary/30 rounded-2xl p-8">
                <p className="text-lg font-semibold text-foreground">
                  ⏱️ Em até 7 dias, tudo pode estar pronto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             10. O PRODUTO — IMPLEMENTAÇÃO AO VIVO
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Certificação MEC para Seu Curso
                </h2>
                <p className="text-xl text-muted-foreground">
                  Onboarding Ao Vivo
                </p>
              </div>

              <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-foreground">Para quem:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Já tem curso",
                      "Já tem alunos",
                      "Quer autoridade imediata",
                      "Quer aumentar lucro",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             11. OFERTA — OPORTUNIDADE + URGÊNCIA
        ========================================= */}
        <section id="cta" className="py-24 relative bg-card">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
          
          <div className="container max-w-5xl relative z-10">
            <div className="glass-card rounded-3xl p-8 md:p-12 border-2 border-primary relative overflow-hidden bg-primary/10">
              {/* Neon Glow Effect */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-primary rounded-3xl opacity-50 animate-pulse"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-black text-center mb-12 text-primary glow-text-neon">
                  ✨ Uma Condição Que Não Vai Se Repetir ✨
                </h2>

                {/* Veja tudo o que você vai receber */}
                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-center text-foreground mb-8">Veja tudo o que você vai receber:</h3>
                  
                  <div className="space-y-4">
                    {[
                      { num: "#1", title: "Projeto Pedagógico do Curso ou Mentoria que transforma seu curso em Extensão Universitária", price: "R$1.000,00" },
                      { num: "#2", title: "Pack de Logotipo do MEC para incluir no seu site, landingpage, redes sociais como Curso Válido pelo MEC como Extensão Universitária", price: "R$197,00" },
                      { num: "#3", title: "Contrato com a Faculdade que permite uso e divulgação da Marca FABRANI Faculdade de Negócios Inovadores como sua parceira oficial", price: "R$1.000,00" },
                      { num: "#4", title: "Consultoria Coletiva Ao Vivo para implantação do projeto e transformar seu curso ou mentoria em extensão no MEC - ao vivo", price: "R$497,00" },
                      { num: "#5", title: "Estratégia digital - Caixa Rápido, explicada ao vivo - que poderá gerar R$10.000 a R$100.000 em vendas do seu curso ou mentoria", price: "R$ sem preço" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4 bg-primary/10 border-2 border-primary rounded-lg hover:bg-primary/15 transition-all duration-300 transform hover:scale-105">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-xs font-bold flex-none">
                          <Check size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-primary font-bold mb-1">{item.num}</p>
                          <p className="text-foreground font-semibold text-sm mb-2">{item.title}</p>
                          <p className="text-primary font-bold text-sm">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 rounded-xl bg-primary/20 border border-primary/30 text-center">
                    <p className="text-foreground font-bold mb-2">Em até 7 dias seu curso será uma extensão universitária.</p>
                  </div>
                </div>

                {/* Preço e Benefícios */}
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-6">
                    <div className="flex gap-4 p-4 bg-primary/5 border border-border border-l-4 border-l-primary rounded-lg">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-xs font-bold">
                        <Check size={14} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-xl mb-1">Implementação ao Vivo</h3>
                        <p className="text-sm text-muted-foreground">Você não fica sozinho no processo</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-primary/5 border border-border border-l-4 border-l-primary rounded-lg">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-xs font-bold">
                        <Check size={14} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-xl mb-1">Certificação Institucional</h3>
                        <p className="text-sm text-muted-foreground">Reconhecida pelo MEC</p>
                      </div>
                    </div>

                    <div className="flex gap-4 p-4 bg-primary/5 border border-border border-l-4 border-l-primary rounded-lg">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-xs font-bold">
                        <Check size={14} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground text-xl mb-1">Menor Custo de Certificação</h3>
                        <p className="text-sm text-muted-foreground">A partir de R$ 10,00 por aluno</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="text-center p-8 rounded-xl bg-red-500/10 border border-red-500/30">
                      <p className="text-sm text-muted-foreground mb-2">TOTAL</p>
                      <p className="text-2xl font-bold text-muted-foreground line-through mb-3">R$ 2.700,00</p>
                      <p className="text-sm text-muted-foreground mb-4">De R$ 2.700,00</p>
                      <p className="text-5xl font-black text-primary mb-2">por R$ 97</p>
                    </div>

                    <div className="text-center p-8 rounded-xl bg-primary/20 border border-primary/30">
                      <p className="text-sm text-muted-foreground mb-2">VALOR ESPECIAL HOJE</p>
                      <p className="text-5xl font-black text-primary mb-2">R$ 97</p>
                      <p className="text-sm text-muted-foreground">Implementação + Certificação</p>
                    </div>

                    <div className="text-center p-6 rounded-xl bg-red-500/10 border border-red-500/30">
                      <p className="text-sm text-muted-foreground mb-2">APÓS O ENCERRAMENTO</p>
                      <p className="text-3xl font-bold text-red-400">R$ 4.997</p>
                      <p className="text-xs text-muted-foreground mt-2">Preço integral volta automaticamente</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <Button 
                    size="lg" 
                    className="btn-neon h-auto w-full sm:w-auto text-black text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6" 
                    asChild
                    onClick={handleCTAClick}
                  >
                    <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX">
                      🔥 QUERO ACESSAR AGORA
                    </a>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Vagas limitadas • Implementação ao vivo em data única
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             12. O QUE VOCÊ SÓ ENCONTRA NA FABRANI
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">DIFERENCIAIS ÚNICOS</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  O que você só encontra na <span className="text-primary">FABRANI</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Somos a única plataforma que oferece esses 4 diferenciais combinados para transformar seu negócio educacional
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    number: "#1",
                    title: "Transformamos seu curso em Extensão Universitária válida pelo MEC",
                    desc: "Em até 7 dias, seu conteúdo se torna uma certificação institucional reconhecida nacionalmente",
                    icon: Award
                  },
                  {
                    number: "#2",
                    title: "Menor valor de Certificação do Brasil",
                    desc: "A partir de R$ 10,00 por aluno em plano de assinatura — o menor custo operacional do mercado",
                    icon: TrendingUp
                  },
                  {
                    number: "#3",
                    title: "Venda seu curso em qualquer lugar",
                    desc: "Liberdade total para escolher sua plataforma de pagamento — sem dependência de intermediários",
                    icon: Users
                  },
                  {
                    number: "#4",
                    title: "Projeto Pedagógico criado ao vivo com você",
                    desc: "Não é um template genérico — construímos seu projeto pedagógico personalizado durante a implementação",
                    icon: Lightbulb
                  },
                ].map((item, i) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={i} className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_12px_48px_rgba(0,255,135,0.15)]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 text-primary">
                            <IconComponent size={24} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-primary mb-2">{item.number}</div>
                          <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="relative rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 p-8 md:p-12 text-center">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Encontro de Implantação</h3>
                  <p className="text-lg text-muted-foreground mb-4">Nosso próximo encontro de implantação do projeto acontece em:</p>
                  <div className="inline-block bg-primary/30 border border-primary/50 rounded-lg px-6 py-4 mb-6">
                    <p className="text-2xl font-bold text-primary">📅 12 de Fevereiro de 2026</p>
                    <p className="text-lg text-foreground mt-2">⏰ 19h (Online e Ao Vivo)</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Você receberá acesso ao encontro ao vivo onde implementaremos seu projeto pedagógico, esclareceremos dúvidas e validaremos toda a estrutura junto com você.
                </p>
                <Button 
                  size="lg" 
                  className="btn-neon h-auto text-black text-base sm:text-lg px-8 py-4" 
                  asChild
                  onClick={handleCTAClick}
                >
                  <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX">
                    🔥 QUERO PARTICIPAR DO ENCONTRO
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             13. QUEM JÁ CONFIA NA FABRANI
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title-bar text-3xl md:text-4xl font-bold mb-6">
                Quem Já Confia na FABRANI
              </h2>
              <p className="text-muted-foreground">
                Grandes nomes do mercado digital que validaram seus projetos com a FABRANI
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">O Novo Mercado - 2025</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">Certificação FABRANI</p>
                  <p className="text-base text-foreground/70">Pós Graduação Ícaro de Carvalho / FABRANI - Projeto: Elias Evangelista</p>
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
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Escola do Dólar</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+20 mil alunos nos EUA</p>
                  <p className="text-base text-foreground/70">Escola do Dólar - Certificação FABRANI - Capa Forbes Malta</p>
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
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Neil Patel</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">Maior Especialista em SEO</p>
                  <p className="text-base text-foreground/70">Elias Evangelista com Neil Patel - Referência mundial em Marketing Digital</p>
                </div>
              </div>

              {/* Evento Outlier - 2 mil pessoas */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/videos/outlier2025-poster.jpg"
                  >
                    <source src="/videos/outlier2025.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Evento Outlier</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+2 mil pessoas</p>
                  <p className="text-base text-foreground/70">Certificação FABRANI - Tiago Finch / Ticto</p>
                </div>
              </div>

              {/* Weburn */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden bg-[#2d2d2d] flex items-center justify-center">
                  <img 
                    src="/images/parceiros/weburn.png" 
                    alt="Weburn - MBA FABRANI"
                    className="w-3/4 h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Weburn</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+2,5 milhões de usuários</p>
                  <p className="text-base text-foreground/70">Desenvolvimento de MBA pela FABRANI</p>
                </div>
              </div>

              {/* Vendedor de Elite */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/videos/vendedordeElite-poster.jpg"
                  >
                    <source src="/videos/vendedordeElite.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Vendedor de Elite</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">+3 mil pessoas</p>
                  <p className="text-base text-foreground/70">Certificação e desenvolvimento de conteúdo</p>
                </div>
              </div>

              {/* Renner Silva */}
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <video 
                    controls 
                    className="w-full h-full object-cover"
                    poster="/videos/RennerSilva-poster.jpg"
                  >
                    <source src="/videos/RennerSilva.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeos.
                  </video>
                </div>
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Renner Silva</h3>
                  <p className="text-primary font-mono font-bold text-lg mb-2">Melhor Palestrante do Brasil</p>
                  <p className="text-base text-foreground/70">Validação e certificação de projetos educacionais</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             14. FAQ
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Essa Decisão É Para Quem Pensa Como Empresário
                </h2>
                <p className="text-xl text-muted-foreground">
                  Autoridade é ativo. Educação Formal gera valor.
                </p>
              </div>

              <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-foreground">Requisitos Mínimos:</p>
                  <ul className="space-y-3">
                    {[
                      "Seu conteúdo precisa ter 4h e uma atividade prática ou avaliativa",
                      "Não aceitamos nichos: religião, adulto, mercado de aposto ou cursos de promessas falsas",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-border space-y-4">
                  <p className="text-lg font-semibold text-foreground">Após o Pagamento:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Onboarding ao vivo – implantação do projeto",
                      "Preenchimento de formulário com dados do curso",
                      "Contrato com FABRANI – Faculdade Brasileira de Negócios Inovadores",
                      "Liberdade de vender em qualquer plataforma",
                      "Menor custo de certificação do Brasil",
                      "Grupo de WhatsApp com nossa equipe",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             13. GARANTIA — RISCO ZERO
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center bg-gradient-to-r from-primary/20 to-purple-600/20 border border-primary/30 rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Garantia: Risco Zero
                </h2>
                <p className="text-xl text-primary font-semibold">
                  Ou você vê a implementação acontecer — ou seu dinheiro volta.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             14. CTA FINAL — DECISÃO BINÁRIA + FAQ
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              
              <div className="text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Você Pode Continuar Tentando Parecer Autoridade…
                </h2>
                <p className="text-2xl font-bold text-primary">
                  Ou Se Tornar Uma.
                </p>
                <Button 
                  size="lg" 
                  className="btn-neon h-auto w-full sm:w-auto text-black text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 mx-auto" 
                  asChild
                  onClick={handleCTAClick}
                >
                  <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX">
                    👉 QUERO ACESSAR
                  </a>
                </Button>
              </div>

              {/* FAQ */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h3>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {[
                    {
                      q: "Por que essa condição especial é tão acessível agora?",
                      a: "Essa condição existe porque a implementação acontece ao vivo, em data definida, com vagas limitadas. É uma decisão estratégica para formar a turma e validar todo o processo junto com você, em tempo real."
                    },
                    {
                      q: "Por que faz sentido decidir agora e não depois?",
                      a: "Porque a implementação ao vivo acontece em data única. Participar desse momento reduz drasticamente tempo, esforço e risco — depois disso, a certificação continua disponível, mas sem essa condição especial."
                    },
                    {
                      q: "Vou conseguir implementar mesmo sem equipe ou estrutura grande?",
                      a: "Sim. O processo é guiado passo a passo no onboarding ao vivo. Você não precisa entender de burocracia acadêmica — nós conduzimos toda a implementação com você."
                    },
                    {
                      q: "Isso realmente impacta vendas e posicionamento?",
                      a: "Entrar para a Educação Formal muda a percepção antes da venda. O aluno confia mais, questiona menos o preço e percebe valor institucional, não apenas promessa de marketing."
                    },
                    {
                      q: "Existe algum custo recorrente?",
                      a: "Apenas a emissão do certificado por aluno, com valor de até R$10 — atualmente o menor custo do Brasil. Você só paga quando vende, mantendo margem e previsibilidade."
                    },
                    {
                      q: "Como saber que o processo é sério e confiável?",
                      a: "Toda a certificação acontece por meio de uma faculdade reconhecida pelo MEC, seguindo os mesmos critérios usados em MBAs, pós-graduações e programas institucionais."
                    },
                    {
                      q: "E se eu ainda não conhecer a faculdade parceira?",
                      a: "A FABRANI atua há anos na Educação Formal e é utilizada por grandes projetos educacionais do país. A parceria garante legitimidade institucional e reconhecimento oficial para seu curso."
                    },
                  ].map((item, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6">
                      <AccordionTrigger className="text-foreground hover:text-primary transition-colors">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
