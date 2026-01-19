import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, AlertTriangle, Zap, Target, FileText, Users, Lock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Header />
      
      <main>
        {/* ========================================
             1. HERO SECTION
        ========================================= */}
        <section id="hero" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              
              {/* Pre-headline Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  20 Anos de Mercado | +100k Alunos | 150 Projetos Validados
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                1 Hora Para Descobrir Se Você Está a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white glow-text-green">1 Ajuste</span> ou <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">1 Ano de Escalar</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                O Founder da FABRANI abriu a agenda para <strong>50 infoprodutores</strong>. Não é consultoria genérica. É um <strong>diagnóstico cirúrgico</strong> de quem já validou R$ 2bi em projetos.
              </p>

              {/* CTA */}
              <div className="flex flex-col items-center gap-4 animate-fade-in-up delay-300">
                <Button size="lg" className="btn-neon h-auto w-full md:w-auto text-black" asChild>
                  <a href="#cta">🔥 QUERO MINHA CONSULTORIA DE R$ 97 AGORA</a>
                </Button>
                <p className="text-xs text-muted-foreground flex items-center gap-2">
                  <Lock size={12} /> Pagamento Seguro • Apenas 50 vagas
                </p>
              </div>

              {/* Badges Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 animate-fade-in-up delay-500">
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
             2. PROBLEM SECTION
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-16">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Você Está Travado — <span className="text-muted-foreground">E Provavelmente Não É Onde Você Pensa</span>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Você trabalha duro. Investe. Testa. Mas não sabe se está a 1 ajuste de decolar... ou a 1 ano de distância.
                </p>
              </div>

              <div className="grid gap-8">
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
                  <div key={i} className="flex gap-6 p-8 rounded-xl border-l-4 border-primary bg-background hover:bg-background/80 transition-colors">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                      <AlertTriangle />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white">{problem.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{problem.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium text-center text-primary border-y border-border py-8 italic">
                "E se você pudesse ter 1 hora com quem enxerga o que você não vê — e já fez isso 150 vezes só em 2025?"
              </blockquote>

            </div>
          </div>
        </section>

        {/* ========================================
             3. SOLUTION SECTION
        ========================================= */}
        <section className="py-24 relative overflow-hidden bg-background">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          
          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-8">
                <Badge variant="outline" className="border-primary text-primary px-4 py-1">DIAGNÓSTICO TÉCNICO</Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Conheça o Founder Que Não Adivinha. <span className="text-primary">Ele Diagnostica.</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Ele não é coach. Não é guru. Ele é o <strong>Founder e Diretor da FABRANI</strong> — a instituição por trás dos maiores projetos do digital brasileiro.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Formou +100.000 alunos",
                    "Validou 150 projetos educacionais só em 2025",
                    "Está por trás de Ícaro de Carvalho (300k alunos)",
                    "Validou Tiago Finch/Ticto (R$ 2 bilhões transacionados)",
                    "Estruturou Weburn (2,5 milhões de usuários)"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                        <Check size={14} />
                      </div>
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6">
                {[
                  {
                    icon: <Zap className="text-primary" />,
                    title: "Diagnostica Seu Gargalo Invisível",
                    desc: "Ele não pergunta 'qual sua taxa de conversão?'. Ele pergunta 'por que seu modelo não gera credibilidade automática?'."
                  },
                  {
                    icon: <Target className="text-primary" />,
                    title: "Valida Seu Modelo de Negócio",
                    desc: "Se você está pronto para escala institucional ou precisa ajustar estrutura antes. Diagnóstico técnico, não motivacional."
                  },
                  {
                    icon: <FileText className="text-primary" />,
                    title: "Plano de Crescimento Personalizado",
                    desc: "Específico: 'Você precisa de certificação MEC primeiro, depois tráfego. Se fizer o inverso, vai desperdiçar R$ 30k'."
                  },
                  {
                    icon: <Users className="text-primary" />,
                    title: "Avaliação Para Aliança FABRANI",
                    desc: "Se você pode se tornar um dos 200 Aliançados e ter cursos validados como extensão pelo MEC."
                  }
                ].map((benefit, i) => (
                  <Card key={i} className="glass-card bg-card border-border">
                    <CardContent className="p-6 flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ========================================
             4. SOCIAL PROOF
        ========================================= */}
        <section className="py-24 bg-card">
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
                  desc: "Ícaro não é apenas um influenciador. Ele é um educador institucionalizado — e a FABRANI foi fundamental para estruturar isso."
                },
                {
                  name: "Tiago Finch / Ticto",
                  stat: "R$ 2 bilhões em transações",
                  desc: "Como você processa bilhões com confiança? Vendendo educação certificada por instituição reconhecida nacionalmente."
                },
                {
                  name: "Weburn",
                  stat: "2,5 milhões de usuários",
                  desc: "Maior app de saúde da América Latina. Diferencial competitivo brutal através de certificação profissional educacional."
                }
              ].map((caseStudy, i) => (
                <div key={i} className="group relative p-8 rounded-xl bg-background border border-border border-l-4 border-l-primary hover:border-primary hover:shadow-[0_12px_48px_rgba(0,255,135,0.2)] transition-all duration-500">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.name}</h3>
                    <p className="text-primary font-mono font-bold text-lg mb-4">{caseStudy.stat}</p>
                    <p className="text-sm text-muted-foreground">{caseStudy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
             5. OFFER STACK
        ========================================= */}
        <section id="cta" className="py-24 relative bg-background">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>
          
          <div className="container max-w-5xl">
            <div className="glass-card rounded-3xl p-8 md:p-12 border-primary relative overflow-hidden bg-card">
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
                  O Que Você Recebe Por R$ 97
                </h2>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-6">
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
                      <div key={i} className="flex gap-4 p-4 bg-primary/5 border border-border border-l-4 border-l-primary rounded-lg">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-xs font-bold">
                          <Check size={14} />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-xl mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.desc}</p>
                          <p className="text-xs font-mono text-primary font-bold">Valor: {item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-background rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-border shadow-[0_8px_32px_rgba(0,255,135,0.08)]">
                    <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">Investimento Hoje</p>
                    <p className="text-2xl text-muted-foreground line-through mb-2">R$ 7.000+</p>
                    <div className="text-7xl font-black text-primary mb-2 glow-text-green">R$ 97</div>
                    <p className="text-sm text-muted-foreground mb-8">À vista ou até 3x sem juros</p>
                    
                    <Button size="lg" className="w-full btn-neon h-auto text-lg text-black" asChild>
                      <a href="https://pay.kiwify.com.br/..." target="_blank" rel="noopener noreferrer">
                        QUERO MINHA VAGA AGORA
                      </a>
                    </Button>
                    
                    <p className="mt-4 text-xs text-muted-foreground max-w-xs">
                      "Se você não tem R$ 97 para investir em 1 hora de clareza com quem validou 150 projetos... você não está pronto."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
