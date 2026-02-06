import { useEffect } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Mail, Calendar } from "lucide-react";

export default function ThankYouPage() {
  useEffect(() => {
    // Track purchase event in Meta Pixel when user reaches thank you page
    if (window.fbq) {
      // Track Purchase event with R$ 97 value
      window.fbq('track', 'Purchase', {
        value: 97,
        currency: 'BRL'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      <Header />

      <main>
        {/* ========================================
             1. HERO SECTION - PARABÉNS
        ========================================= */}
        <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
          {/* Background Gradient Sutil */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              {/* Checkmark Animation */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Parabéns!
              </h1>

              {/* Subheadline */}
              <p className="text-2xl md:text-3xl font-bold text-foreground">
                Você está oficialmente no{" "}
                <span className="text-primary glow-text-neon">PROJETO MEC 2026</span> da FABRANI
              </p>

              {/* Description */}
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Sua jornada para transformar seu curso ou mentoria em uma Extensão Universitária válida pelo MEC começou agora. Siga as instruções abaixo para não perder nenhum detalhe importante.
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border-2 border-primary">
                <span className="text-sm font-bold text-primary uppercase tracking-wider">
                  ✨ Bem-vindo à FABRANI
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             2. INSTRUÇÕES SECTION
        ========================================= */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {/* Section Title */}
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-foreground">
                  Próximos Passos
                </h2>
                <p className="text-lg text-foreground/70">
                  Siga estas 3 instruções para garantir sua participação no projeto
                </p>
              </div>

              {/* Instructions Grid */}
              <div className="space-y-8">
                {/* Instrução 1 */}
                <div className="group relative p-8 rounded-2xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        1
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        Entre no Grupo e Clique no Link do Formulário
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Acesse nosso grupo de WhatsApp exclusivo para receber todas as atualizações em tempo real sobre o projeto MEC 2026.
                      </p>
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-bold h-auto px-8 py-3 rounded-lg"
                        asChild
                      >
                        <a
                          href="https://chat.whatsapp.com/LpvAgryPEOd3qQY25SVNEv"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          💬 Entrar no Grupo de WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Instrução 2 */}
                <div className="group relative p-8 rounded-2xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        2
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        Preencha o Formulário Estratégico
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Compartilhe as informações sobre você e seu curso ou mentoria. Isso nos ajudará a personalizar sua implementação e garantir o máximo de sucesso.
                      </p>
                      <p className="text-sm text-foreground/60">
                        ⏱️ Tempo estimado: 5-10 minutos
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instrução 3 */}
                <div className="group relative p-8 rounded-2xl border-2 border-primary bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                  <div className="flex gap-6">
                    <div className="shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        3
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-foreground">
                        Entre ao VIVO na Implementação MEC
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        Participe do nosso encontro ao vivo onde implementaremos seu projeto pedagógico e responderemos todas as suas dúvidas.
                      </p>
                      <div className="flex items-center gap-2 text-lg font-bold text-primary">
                        <Calendar size={24} />
                        <span>12 de Fevereiro • 19h • Online e ao Vivo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             3. CONTATO SECTION
        ========================================= */}
        <section className="py-24 bg-primary/5">
          <div className="container max-w-4xl">
            <div className="text-center space-y-12">
              <h2 className="text-4xl md:text-5xl font-black text-foreground">
                Precisa de Ajuda?
              </h2>

              {/* Contato Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* WhatsApp */}
                <div className="p-8 rounded-2xl bg-white border-2 border-primary">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">WhatsApp</h3>
                    <p className="text-foreground/70">Suporte rápido e direto</p>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-bold h-auto px-8 py-3 rounded-lg mt-4"
                      asChild
                    >
                      <a href="https://wa.me/5516997117597" target="_blank" rel="noopener noreferrer">
                        💬 (16) 99711-7597
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Email */}
                <div className="p-8 rounded-2xl bg-white border-2 border-primary">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Email</h3>
                    <p className="text-foreground/70">Dúvidas mais complexas</p>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-white font-bold h-auto px-8 py-3 rounded-lg mt-4"
                      asChild
                    >
                      <a href="mailto:elias@fabrani.com.br">
                        📧 elias@fabrani.com.br
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Important Note */}
              <div className="p-8 rounded-2xl bg-primary/10 border-2 border-primary">
                <p className="text-lg text-foreground font-semibold">
                  ⚠️ Fique atento às informações no grupo de WhatsApp. Enviaremos o link do encontro ao vivo e todas as informações sobre nosso projeto!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================
             4. WELCOME SECTION
        ========================================= */}
        <section className="py-24 bg-white">
          <div className="container max-w-4xl">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border-2 border-primary">
                <span className="text-2xl">🎓</span>
                <span className="text-lg font-bold text-primary uppercase tracking-wider">
                  Bem-vindo à FABRANI
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                FABRANI — Faculdade Brasileira de Negócios Inovadores
              </h2>

              <p className="text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
                Você agora faz parte de uma comunidade de empreendedores que estão transformando seus cursos e mentorias em educação formal reconhecida pelo MEC. Estamos aqui para apoiar você em cada passo dessa jornada.
              </p>

              <div className="pt-8">
                <p className="text-lg text-foreground font-semibold">
                  Até breve no encontro ao vivo! 🚀
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
