import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, CheckCircle2, FileText, Calendar, MessageCircle, Clock, Video, Target, AlertTriangle, HelpCircle } from "lucide-react";

export default function ThankYouPage() {
  const whatsappNumber = "5516997117597";
  const whatsappMessage = encodeURIComponent("Olá Comprei a Consultoria Escale FABRANI e estou com Dúvida !");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  const formLink = "https://forms.gle/ovvrEjuNsUtZacLB8";
  const calendarLink = "https://calendar.app.google/keiobpGB17Szngo48";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-black">
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)]"
        aria-label="Falar no WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Header Simplificado - Sem contador de urgência */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-black font-black text-xl group-hover:scale-105 transition-transform">
              F
            </div>
            <span className="text-xl font-bold text-white tracking-tight">FABRANI</span>
          </Link>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary">COMPRA CONFIRMADA</span>
          </div>
        </div>
      </header>
      
      <main>
        {/* ========================================
             1. HERO - CELEBRAÇÃO
        ========================================= */}
        <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.08),transparent_50%)]"></div>
          
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              
              {/* Success Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/20 border-2 border-primary animate-pulse mb-4">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                <span className="text-primary">Bem-Vindo</span> à Consultoria FABRANI
              </h1>

              {/* Subheadline */}
              <p className="text-xl md:text-2xl text-white font-semibold">
                Sua vaga está garantida. Agora, faltam <span className="text-primary">2 passos simples</span> para você ter sua 1 hora com o Founder.
              </p>

              <div className="bg-card border border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-white">Parabéns por tomar a decisão certa.</strong> Enquanto outros 50 infoprodutores continuam testando no escuro, você escolheu clareza. Sua consultoria foi confirmada. Nos próximos dias, você terá <strong className="text-white">1 hora de diagnóstico cirúrgico</strong> com quem validou 150 projetos em 2025 e R$ 2 bilhões em negócios educacionais.
                </p>
              </div>

              {/* Alert Box */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 max-w-2xl mx-auto">
                <p className="text-lg font-bold text-white flex items-center justify-center gap-2">
                  <AlertTriangle className="text-red-500" />
                  Mas antes da consultoria acontecer, você precisa completar 2 ações obrigatórias:
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================
             2. INSTRUÇÕES - ORDEM CLARA
        ========================================= */}
        <section className="py-16 bg-card">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-red-500">IMPORTANTE:</span> Siga Esta Ordem
              </h2>
              <p className="text-xl text-muted-foreground">(Não Pule Etapas)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl">1</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">PRIMEIRO: Preencher o formulário estratégico</h3>
                  <p className="text-muted-foreground">(5-10 minutos)</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border">
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-black text-xl">2</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">DEPOIS: Agendar sua consultoria</h3>
                  <p className="text-muted-foreground">(escolher data 48h após enviar o formulário)</p>
                </div>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-white">
                <AlertTriangle className="inline-block mr-2 text-red-500" />
                Não pule o passo 1. Sem o formulário preenchido, a consultoria não acontece.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================
             3. PASSO 1 - FORMULÁRIO
        ========================================= */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
          
          <div className="container max-w-4xl relative z-10">
            <div className="bg-card border-2 border-primary rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,255,135,0.1)]">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-primary font-mono text-sm uppercase tracking-wider">Passo 1</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Preencha o Formulário Estratégico AGORA</h2>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Por Que Este Formulário é Obrigatório?</h3>
                  <p className="text-lg text-muted-foreground mb-4">Ele permite que o Founder da FABRANI:</p>
                  <ul className="space-y-3">
                    {[
                      "Entenda seu negócio antes da consultoria",
                      "Identifique seus gargalos com antecedência",
                      "Prepare um diagnóstico personalizado para você",
                      "Aproveite 100% da 1 hora (sem desperdiçar tempo com contexto básico)"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-lg text-white">
                        <Check className="text-primary shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-white mb-4">O Que Você Vai Preencher:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sobre seu negócio atual (nicho, produto, faturamento)</li>
                    <li>• Principais desafios e gargalos</li>
                    <li>• O que você já tentou que não funcionou</li>
                    <li>• Objetivos para os próximos 6-12 meses</li>
                    <li>• Perguntas específicas para a consultoria</li>
                  </ul>
                  <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2">
                    <Clock size={16} className="text-primary" />
                    Tempo estimado: 5-10 minutos
                  </p>
                </div>

                <Button size="lg" className="w-full btn-neon h-20 text-xl md:text-2xl text-black" asChild>
                  <a href={formLink} target="_blank" rel="noopener noreferrer">
                    🔥 PREENCHER FORMULÁRIO ESTRATÉGICO
                  </a>
                </Button>

                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
                  <p className="text-lg font-bold text-white">
                    <AlertTriangle className="inline-block mr-2 text-red-500" />
                    NÃO PULE PARA O PASSO 2 SEM PREENCHER ESTE FORMULÁRIO
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Se você agendar a consultoria sem preencher o formulário, teremos que remarcar — e você perderá tempo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             4. PASSO 2 - AGENDAMENTO
        ========================================= */}
        <section className="py-20 bg-card">
          <div className="container max-w-4xl">
            <div className="bg-background border border-border rounded-3xl p-8 md:p-12">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-black">
                  <Calendar className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-primary font-mono text-sm uppercase tracking-wider">Passo 2</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Agende Sua Consultoria</h2>
                  <p className="text-muted-foreground">(APÓS Preencher o Formulário)</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Regra 48h */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-red-500" />
                    REGRA IMPORTANTE DE AGENDAMENTO:
                  </h3>
                  <p className="text-lg text-white mb-4">
                    Você só pode agendar sua consultoria para uma data que seja, <strong>NO MÍNIMO, 48 horas (2 dias) APÓS</strong> você enviar o formulário.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-white">Por quê?</strong> Porque o Founder precisa de 48 horas para: analisar suas respostas do formulário, preparar seu diagnóstico personalizado e estruturar a consultoria focada nos SEUS gargalos.
                  </p>
                </div>

                {/* Exemplos */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <Check className="text-primary" /> CORRETO:
                    </h4>
                    <p className="text-muted-foreground">
                      Você preencheu o formulário hoje (segunda-feira às 14h)<br/>
                      → Pode agendar para <strong className="text-white">quarta-feira</strong> (ou depois) em qualquer horário disponível
                    </p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <AlertTriangle className="text-red-500" /> ERRADO:
                    </h4>
                    <p className="text-muted-foreground">
                      Você preencheu o formulário hoje<br/>
                      → Tenta agendar para amanhã <strong className="text-red-400">(NÃO DÁ TEMPO)</strong>
                    </p>
                  </div>
                </div>

                {/* Como funciona */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-white mb-4">Como Funciona o Agendamento:</h3>
                  <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
                    <li>Clique no botão abaixo</li>
                    <li>Escolha uma data 48h após você ter enviado o formulário</li>
                    <li>Escolha o melhor horário para você</li>
                    <li>Confirme o agendamento</li>
                    <li>Você receberá um email de confirmação com o link da videochamada (Zoom/Google Meet)</li>
                  </ol>
                </div>

                <Button size="lg" className="w-full btn-neon h-16 text-xl text-black" asChild>
                  <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                    📅 AGENDAR MINHA CONSULTORIA
                  </a>
                </Button>

                <p className="text-center text-muted-foreground">
                  <AlertTriangle className="inline-block mr-2 text-yellow-500" />
                  LEMBRE-SE: Agende para 48 horas APÓS enviar o formulário (não antes)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             5. CHECKLIST VISUAL
        ========================================= */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <Check className="inline-block mr-2 text-primary" />
              Checklist: O Que Fazer Agora
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: "PASSO 1",
                  title: "Preencher o Formulário Estratégico",
                  link: formLink,
                  time: "5-10 minutos",
                  note: "Faça AGORA (obrigatório para consultoria acontecer)",
                  icon: <FileText className="w-6 h-6" />
                },
                {
                  step: "PASSO 2",
                  title: "Agendar Consultoria",
                  link: calendarLink,
                  time: "Duração da consultoria: 1 hora",
                  note: "Escolha data 48h APÓS enviar o formulário",
                  icon: <Calendar className="w-6 h-6" />
                },
                {
                  step: "PASSO 3",
                  title: "Preparar-se Para a Consultoria",
                  time: "Antes da call",
                  note: "Liste suas 3 maiores dúvidas, teste câmera/microfone, esteja pronto para ouvir a verdade",
                  icon: <Target className="w-6 h-6" />
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-mono text-sm uppercase tracking-wider mb-1">{item.step}</p>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm break-all mb-2 block">
                        {item.link}
                      </a>
                    )}
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock size={14} /> {item.time}
                    </p>
                    <p className="text-sm text-yellow-500 mt-1">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================
             6. O QUE ESPERAR
        ========================================= */}
        <section className="py-20 bg-card">
          <div className="container max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <Target className="inline-block mr-2 text-primary" />
              O Que Esperar da Sua Consultoria de 1 Hora
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold text-white mb-4">Como Será a Consultoria:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Video className="text-primary shrink-0 mt-1" size={20} />
                    <span><strong className="text-white">Formato:</strong> Videochamada online (Zoom ou Google Meet)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="text-primary shrink-0 mt-1" size={20} />
                    <span><strong className="text-white">Duração:</strong> 1 hora completa dedicada ao SEU negócio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="text-primary shrink-0 mt-1" size={20} />
                    <span><strong className="text-white">Com quem:</strong> Founder e Diretor da FABRANI (não é com a equipe)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold text-white mb-4">O Que Vai Acontecer:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li><strong className="text-white">Minutos 0-10:</strong> Contexto rápido do seu negócio (ele já leu seu formulário)</li>
                  <li><strong className="text-white">Minutos 10-40:</strong> Diagnóstico cirúrgico dos seus gargalos + validação do modelo</li>
                  <li><strong className="text-white">Minutos 40-55:</strong> Plano de ação priorizado (o que fazer primeiro, segundo, terceiro)</li>
                  <li><strong className="text-white">Minutos 55-60:</strong> Avaliação para Aliança FABRANI (se você está pronto ou o que falta)</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 border border-primary/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">O Que Você Vai Sair Com:</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Clareza total do que está impedindo você de escalar",
                  "Plano de crescimento personalizado (não genérico)",
                  "Próximos passos priorizados (onde investir primeiro)",
                  "Resposta clara: você está pronto para Aliança FABRANI ou o que falta"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-white">
                    <Check className="text-primary shrink-0 mt-1" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-center text-muted-foreground mt-6 italic">
                Não é motivação. É diagnóstico técnico. Ele vai te mostrar a verdade — mesmo que doa.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================
             7. FAQ RÁPIDO
        ========================================= */}
        <section className="py-20 bg-background">
          <div className="container max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <HelpCircle className="inline-block mr-2 text-primary" />
              Perguntas Frequentes (Próximos Passos)
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { 
                  q: '"Já paguei. O que faço agora?"', 
                  a: 'Siga exatamente esta ordem: Passo 1: Preencha o formulário → Passo 2: Agende a consultoria 48h após enviar o formulário.' 
                },
                { 
                  q: '"Posso agendar a consultoria para amanhã?"', 
                  a: 'Não. Você precisa agendar para no mínimo 48 horas (2 dias) APÓS enviar o formulário. Isso permite que o Founder analise suas respostas e prepare um diagnóstico personalizado. Exemplo: Se você preencheu o formulário hoje (segunda-feira), pode agendar para quarta-feira (ou depois).' 
                },
                { 
                  q: '"E se eu não preencher o formulário?"', 
                  a: 'A consultoria NÃO acontece. O formulário é obrigatório porque permite ao Founder entender seu negócio antes da call. Sem ele, seria impossível entregar um diagnóstico cirúrgico em 1 hora.' 
                },
                { 
                  q: '"Quanto tempo leva para preencher o formulário?"', 
                  a: '5-10 minutos. Seja honesto e específico nas respostas — quanto mais contexto você der, melhor será sua consultoria.' 
                },
                { 
                  q: '"Vou receber o link da videochamada?"', 
                  a: 'Sim. Após agendar no Google Calendar, você receberá um email com: data e horário da consultoria, link da videochamada (Zoom ou Google Meet) e instruções de acesso.' 
                },
                { 
                  q: '"Posso remarcar a consultoria?"', 
                  a: 'Sim, mas com no mínimo 24h de antecedência. Entre em contato no WhatsApp: (16) 99711-7597' 
                },
                { 
                  q: '"Posso gravar a consultoria?"', 
                  a: 'Sim. Você pode gravar para revisitar depois e não perder nenhum detalhe.' 
                },
                { 
                  q: '"E se eu tiver problemas técnicos no dia?"', 
                  a: 'Entre em contato imediatamente no WhatsApp: (16) 99711-7597. Vamos resolver na hora.' 
                },
                { 
                  q: '"Depois da consultoria, como faço para virar Aliançado FABRANI?"', 
                  a: 'Se durante a consultoria o Founder avaliar que você está pronto para a Aliança, ele te dará os próximos passos. Se você ainda não estiver pronto, ele te mostrará exatamente o que fazer para chegar lá.' 
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border bg-card rounded-lg px-4">
                  <AccordionTrigger className="text-left font-bold hover:text-primary hover:no-underline py-4">
                    <span className="flex items-center gap-3">
                      <HelpCircle size={18} className="text-primary shrink-0" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 pl-9 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* ========================================
             8. SUPORTE WHATSAPP
        ========================================= */}
        <section className="py-16 bg-card">
          <div className="container max-w-3xl text-center">
            <div className="bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl p-8">
              <MessageCircle className="w-16 h-16 text-[#25D366] mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Tem Alguma Dúvida? Fale Direto no WhatsApp
              </h2>
              <p className="text-muted-foreground mb-6">
                Se você tiver qualquer dúvida sobre: preenchimento do formulário, agendamento da consultoria, confirmação de pagamento, problemas técnicos ou reagendamento.
              </p>
              <Button size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white h-16 text-lg px-8" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  💬 FALAR NO WHATSAPP - (16) 99711-7597
                </a>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Horário de atendimento: Segunda a sexta, 9h às 18h
              </p>
            </div>
          </div>
        </section>

        {/* ========================================
             9. REFORÇO FINAL
        ========================================= */}
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,135,0.05),transparent_50%)]"></div>
          
          <div className="container max-w-4xl relative z-10">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                🔥 Última Coisa Antes de Você Ir
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-8 text-left max-w-2xl mx-auto">
                <p className="text-lg text-muted-foreground mb-6">
                  Você acabou de dar um passo que <strong className="text-white">95% dos infoprodutores nunca dão</strong>: investir em clareza com quem realmente sabe.
                </p>
                <p className="text-lg text-white font-bold mb-4">
                  Mas o R$ 97 não te entrega resultados. O que te entrega resultados é:
                </p>
                <ol className="space-y-2 text-muted-foreground list-decimal list-inside mb-6">
                  <li>Você preencher o formulário <strong className="text-white">agora</strong> (não deixar para depois)</li>
                  <li>Você agendar a consultoria <strong className="text-white">corretamente</strong> (48h após o formulário)</li>
                  <li>Você <strong className="text-white">executar</strong> o que o Founder vai te mostrar na call</li>
                </ol>
                <p className="text-muted-foreground">
                  A maioria das pessoas que compram consultorias: não preenche o formulário direito, agenda de qualquer jeito, não aparece na consultoria, ou aparece e não executa nada depois.
                </p>
                <p className="text-xl font-bold text-primary mt-4">Não seja essa pessoa.</p>
              </div>

              <div className="space-y-4 max-w-xl mx-auto">
                <Button size="lg" className="w-full btn-neon h-16 text-lg text-black" asChild>
                  <a href={formLink} target="_blank" rel="noopener noreferrer">
                    🔥 PREENCHER FORMULÁRIO ESTRATÉGICO (PASSO 1)
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="w-full h-14 text-lg border-primary text-primary hover:bg-primary hover:text-black" asChild>
                  <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                    📅 AGENDAR CONSULTORIA (PASSO 2 - 48h APÓS)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
