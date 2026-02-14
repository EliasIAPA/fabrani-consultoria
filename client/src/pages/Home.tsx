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
import { Check, AlertTriangle, Zap, Target, FileText, Users, Lock, Clock, ShieldAlert, HelpCircle, Award, Briefcase, GraduationCap, ChevronRight, CheckCircle2, Lightbulb, TrendingUp } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/fbPixel";
import { ConvertAIPlayer } from "@/components/ConvertAIPlayer";


export default function Home() {

  const handleCTAClick = () => {
    trackInitiateCheckout();
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      <Header />
      
      <main>
        {/* ========================================
             NEW 1. HERO SECTION — MUDANÇA DE CATEGORIA
        ========================================= */}
        <section id="hero-new" className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.08),transparent_60%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-[0.03]"></div>
          
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-10">
              
              {/* Context Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm animate-fade-in-up">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-sm md:text-base font-semibold text-foreground/90">
                  Para quem já vende cursos, mentorias ou treinamentos
                </span>
              </div>

              {/* H1 Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight animate-fade-in-up delay-100">
                Seu curso pode continuar competindo como infoproduto… {" "}
                <span className="text-primary">ou entrar oficialmente na Educação Formal.</span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
                Existe um Atalho Institucional que transforma seu treinamento em uma <strong>Extensão Universitária com certificação validada por faculdade reconhecida pelo MEC</strong>. Quando isso acontece, ele deixa de disputar atenção. Ele passa a operar com Reconhecimento Institucional. O valor percebido sobe. A resistência ao preço diminui. E vender fica mais simples.
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
                    Agendar Avaliação Acadêmica
                  </a>
                </Button>
                <p className="text-sm md:text-base text-foreground flex items-center gap-2">
                  <Lock size={16} className="text-primary" /> Avaliação Gratuita • Sem Compromisso
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             NEW 2. O MERCADO MUDOU
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  O mercado não premia apenas quem entrega mais.{" "}
                  <span className="text-muted-foreground">Premia quem parece mais seguro.</span>
                </h2>
              </div>

              <div className="bg-background border border-primary/30 rounded-2xl p-8 md:p-12 space-y-8">
                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed">
                    Você pode ter um treinamento melhor, mais profundo, mais transformador. Mas antes da compra, o aluno não sabe disso. Ele enxerga apenas:
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Quem PARECE maior",
                    "Quem PARECE mais seguro",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start p-6 rounded-xl bg-primary/10 border border-primary/20">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-black">
                        <Check size={16} className="font-bold" />
                      </div>
                      <p className="text-foreground font-semibold text-lg">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-border space-y-4">
                  <p className="text-lg font-bold text-foreground">
                    👉 Ele enxerga errado, e você paga o preço com:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Mais esforço para justificar preço",
                      "Mais comparação",
                      "Mais desconto",
                      "Menor margem"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-foreground/80 pt-4">
                    Enquanto seu curso opera como infoproduto comum, ele compete como todos. Já na Educação Formal, a lógica muda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             NEW 3. O CUSTO INVISÍVEL
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  O problema não é o seu curso.{" "}
                  <span className="text-primary">É o enquadramento dele.</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Enquanto seu treinamento opera como infoproduto comum, ele é percebido como <strong>substituível</strong>. E quando algo é percebido como substituível, três coisas acontecem:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      "O aluno compara preço",
                      "A decisão demora mais",
                      "Sua margem diminui"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-black text-sm font-bold">
                          {i + 1}
                        </div>
                        <p className="text-foreground font-semibold">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8 md:p-12 space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Você investe mais em tráfego. Adiciona mais bônus. Argumenta mais para justificar valor. Não porque seu conteúdo é fraco. Mas porque ele ainda não tem <strong>validação institucional</strong>.
                  </p>
                  
                  <p className="text-lg text-foreground leading-relaxed">
                    No cenário atual, quem não sobe de categoria… fica preso na disputa por preço. E disputar preço nunca constrói autoridade. Só consome margem.
                  </p>

                  <p className="text-lg font-bold text-foreground">
                    Se nada mudar no enquadramento, o esforço aumenta — mas o lucro não acompanha. E é exatamente aqui que a maioria dos infoprodutores trava.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-8">
                <Button 
                  size="lg" 
                  className="btn-neon h-auto text-black text-base md:text-lg px-8 md:px-12 py-4 md:py-5" 
                  asChild
                  onClick={handleCTAClick}
                >
                  <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX" target="_blank" rel="noopener noreferrer">
                    👉 Quero mudar de categoria
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             NEW 4. O SHIFT
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Existe um Atalho Institucional.
                </h2>
                <p className="text-xl text-muted-foreground">
                  E ele separa dois tipos de posicionamento: O informal e o institucional.
                </p>
              </div>

              <div className="space-y-8">
                <div className="bg-background border border-primary/30 rounded-2xl p-8 md:p-12 space-y-6">
                  <p className="text-lg text-foreground leading-relaxed">
                    Não é sobre marketing, tráfego ou audiência... <strong>É sobre categoria.</strong>
                  </p>

                  <div className="space-y-6 pt-6 border-t border-border">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">O Diferencial</h3>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Quando seu treinamento se torna <strong>Extensão Universitária com certificação validada pelo MEC</strong>, ele deixa de operar como produto digital. Ele passa a integrar a <strong>Educação Formal</strong>. E Educação Formal não compete por preço. Compete por legitimidade.
                      </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-border">
                      <h3 className="text-2xl font-bold text-foreground">O Fechamento</h3>
                      <p className="text-lg text-foreground/80 leading-relaxed">
                        Isso muda a decisão <strong>antes da Venda</strong> acontecer. Não é sobre parecer maior. É sobre <strong>pertencer a outra categoria</strong>. Mas entrar na Educação Formal não é uma decisão comercial. É uma decisão acadêmica. E é exatamente por isso que existe um processo de validação.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             NEW 5. O MECANISMO DE AVALIAÇÃO
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Nem todo curso pode receber o Selo.{" "}
                  <span className="text-primary">E é exatamente isso que mantém o peso dele.</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Explicação Técnica</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Antes de qualquer enquadramento, seu treinamento passa por <strong>Avaliação Acadêmica</strong> conduzida por <strong>Junta Permanente Avaliação</strong> formada por professores doutores vinculados à Faculdade reconhecida pelo MEC.
                    </p>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      Não é validação de marketing. É <strong>parecer acadêmico</strong>. Somente após esse parecer é possível estruturar a certificação.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-border space-y-4">
                    <h3 className="text-2xl font-bold text-foreground">Chamada Final</h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      A <strong>Consultoria Estratégica</strong> existe para definir se seu curso já está nesse nível — ou o que falta para chegar lá. Porque o Selo não é um detalhe. <strong>É mudança de categoria.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex justify-center pt-8">
                <Button 
                  size="lg" 
                  className="btn-neon h-auto text-black text-base md:text-lg px-8 md:px-12 py-4 md:py-5" 
                  asChild
                  onClick={handleCTAClick}
                >
                  <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX" target="_blank" rel="noopener noreferrer">
                    👉 Solicitar Avaliação Acadêmica
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             1. PRÉ-HEADLINE + HERO SECTION (ORIGINAL)
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
                <span className="text-primary">Empresário de Educação Formal</span>
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
              </div>

              <div className="bg-card border border-primary/30 rounded-2xl p-8 md:p-12 space-y-8">
                <p className="text-lg text-foreground leading-relaxed">
                  Até 2023, infoproduto era uma categoria com regras claras. Hoje, as regras mudaram. E quem não acompanhou essa mudança está ficando para trás.
                </p>

                <div className="space-y-4">
                  <p className="text-lg font-semibold text-foreground">3 mudanças que transformaram o mercado:</p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { title: "Saturação de Oferta", desc: "Qualquer pessoa pode criar um curso agora. O mercado está cheio." },
                      { title: "Desconfiança do Aluno", desc: "Certificados genéricos não valem mais nada. O aluno quer legitimidade." },
                      { title: "Competição por Preço", desc: "Sem diferenciação, só resta competir por preço. Margem vai para zero." },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <h4 className="font-bold text-primary">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border space-y-2">
                  <p className="text-lg font-bold text-foreground">👉 Resultado:</p>
                  <p className="text-lg text-foreground/80">
                    Infoprodutores que não se reinventarem vão ficar presos em uma categoria que não cresce mais. Enquanto isso, quem entra na Educação Formal sai dessa disputa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             3. VÍDEO HERO — CONVERTAI
        ========================================= */}
        <section className="py-24 bg-background relative">
          <div className="container">
            <div className="max-w-5xl mx-auto space-y-12">
              
              <div className="text-center space-y-6">
                <h2 className="section-title-bar text-3xl md:text-5xl font-bold">
                  Assista o Vídeo Que Explica Tudo
                </h2>
                <p className="text-xl text-muted-foreground">
                  Em 5 minutos, você entende como a transformação funciona
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-2xl">
                <ConvertAIPlayer />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             4. PROBLEMA — POR QUE INFOPRODUTO NÃO ESCALA
        ========================================= */}
        <section className="py-24 bg-card relative">
          <div className="container">
            <div className="max-w-4xl mx-auto space-y-16">
              
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
                      <h3 className="text-2xl font-bold text-white">Elias Evangelista</h3>
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
                        <div className="flex items-center gap-2 text-white font-bold">
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
                        <div className="flex items-center gap-2 text-white font-bold">
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
                      <div className="flex items-center gap-2 text-white font-bold mb-4">
                        <Award className="text-primary" size={20} /> Track Record
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="block text-2xl font-bold text-white">150</span>
                          <span className="text-muted-foreground">Projetos Validados em 2025</span>
                        </div>
                        <div>
                          <span className="block text-2xl font-bold text-white">+100k</span>
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
             9. OFFER STACK
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
                          <p className="text-xs font-mono text-primary">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-gradient-to-b from-primary/20 to-purple-600/20 rounded-2xl p-8 text-center space-y-6">
                      <h3 className="text-2xl font-bold text-white">
                        Sua Consultoria de R$ 5.000 por Apenas R$ 97
                      </h3>
                      <p className="text-foreground/80">
                        Apenas 50 vagas disponíveis para este mês. Depois, o preço volta ao normal.
                      </p>
                      <Button 
                        size="lg" 
                        className="btn-neon h-auto w-full text-black text-base md:text-lg px-6 md:px-8 py-4 md:py-5" 
                        asChild
                        onClick={handleCTAClick}
                      >
                        <a href="https://payfast.greenn.com.br/em29d57/offer/aiAmgX" target="_blank" rel="noopener noreferrer">
                          🔥 QUERO MINHA CONSULTORIA DE R$ 97 AGORA
                        </a>
                      </Button>
                      <p className="text-xs text-foreground/60">
                        ✓ Pagamento Seguro • ✓ Apenas 50 vagas • ✓ Acesso Imediato
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             10. FAQ
        ========================================= */}
        <section className="py-24 bg-card">
          <div className="container max-w-4xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="section-title-bar text-3xl md:text-4xl font-bold mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-muted-foreground">
                Esclareça suas dúvidas sobre o processo de transformação em Educação Formal
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                {
                  question: "Como funciona exatamente a Extensão Universitária?",
                  answer: "A Extensão Universitária é um programa oficial reconhecido pelo MEC que permite que cursos, mentorias e treinamentos sejam certificados por uma instituição de educação superior. Seu conteúdo não muda, mas passa a ter validade institucional."
                },
                {
                  question: "Quanto tempo leva para implementar?",
                  answer: "O processo completo leva entre 30 a 60 dias, dependendo da complexidade do seu curso. A avaliação acadêmica é o primeiro passo e pode ser feita em até 5 dias úteis."
                },
                {
                  question: "Preciso mudar meu conteúdo?",
                  answer: "Não necessariamente. Sua avaliação acadêmica indicará se há ajustes recomendados, mas o objetivo é validar o que você já tem, não recriar do zero."
                },
                {
                  question: "Qual é o investimento?",
                  answer: "A avaliação acadêmica é gratuita. Os custos de implementação variam conforme o modelo do seu curso. Discutiremos isso em detalhes após a avaliação."
                },
                {
                  question: "Meu curso será reconhecido em todo o Brasil?",
                  answer: "Sim. Como Extensão Universitária de uma faculdade reconhecida pelo MEC, seu certificado tem validade nacional e é reconhecido por órgãos públicos e privados."
                },
                {
                  question: "Posso continuar vendendo meu curso como antes?",
                  answer: "Sim. Você continuará vendendo normalmente, mas agora com a certificação MEC. Isso aumenta o valor percebido e reduz objeções de preço."
                }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="py-4 hover:no-underline">
                    <span className="text-left font-semibold text-foreground">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
