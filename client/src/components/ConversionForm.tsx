import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { trpc } from "@/lib/trpc";

export function ConversionForm() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    revenue: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  // tRPC mutation for submitting leads
  const submitLeadMutation = trpc.leads.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      
      // Redirecionar para escala.fabrani.com.br/agenda com dados como URL params após 2 segundos
      setTimeout(() => {
        const params = new URLSearchParams({
          name: formData.name,
          whatsapp: formData.whatsapp,
          email: formData.email,
          revenue: formData.revenue,
        });
        window.location.href = `https://escala.fabrani.com.br/agenda?${params.toString()}`;
      }, 2000);
    },
    onError: (err) => {
      setError(err.message || "Erro ao enviar formulário. Tente novamente.");
    },
  });

  // Função para formatar telefone APENAS para exibição
  const formatPhoneForDisplay = (digits: string): string => {
    if (digits.length === 0) return "";
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    // Para 8-11 dígitos: (XX) 9XXXX-XXXX
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
  };

  // Função para extrair apenas números
  const extractDigits = (value: string): string => {
    return value.replace(/\D/g, "");
  };

  // Função para validar e-mail em tempo real
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email) {
      setEmailError("");
    } else if (!emailRegex.test(email)) {
      setEmailError("E-mail inválido");
    } else {
      setEmailError("");
    }
  };

  const revenueOptions = [
    { value: "0", label: "Ainda não vendo meu treinamento" },
    { value: "1", label: "Até 1 mil reais" },
    { value: "2", label: "De 1 mil até 5 mil reais" },
    { value: "3", label: "De 5 mil até 10 mil reais" },
    { value: "4", label: "De 10 mil até 50 mil" },
    { value: "5", label: "De 50 até 100 mil" },
    { value: "6", label: "De 100 mil até 500 mil" },
    { value: "7", label: "Acima de 500 mil" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "whatsapp") {
      // Extrair apenas números
      const digits = extractDigits(value);
      
      // Limitar a 11 dígitos
      if (digits.length > 11) {
        return; // Não atualiza se exceder 11 dígitos
      }
      
      // Armazenar apenas os dígitos
      setFormData((prev) => ({ ...prev, [name]: digits }));
    } else if (name === "email") {
      setFormData((prev) => ({ ...prev, [name]: value }));
      validateEmail(value);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    
    setError("");
  };

  const handleRevenueChange = (value: string) => {
    setFormData((prev) => ({ ...prev, revenue: value }));
    setError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Por favor, insira seu nome");
      return false;
    }
    if (!formData.whatsapp || formData.whatsapp.length !== 11) {
      setError("Por favor, insira um WhatsApp válido (11 dígitos)");
      return false;
    }
    if (!formData.email.trim() || emailError) {
      setError("Por favor, insira um e-mail válido");
      return false;
    }
    if (!formData.revenue) {
      setError("Por favor, selecione seu faturamento mensal");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    
    try {
      // Submit lead via tRPC
      await submitLeadMutation.mutateAsync({
        name: formData.name,
        whatsapp: formData.whatsapp,
        email: formData.email,
        revenue: formData.revenue,
      });

      // Disparar evento no Meta Pixel
      if (window.fbq) {
        window.fbq("track", "Lead", {
          value: formData.revenue,
          currency: "BRL",
        });
      }
    } catch (err) {
      setError("Erro ao enviar formulário. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 md:py-12 px-4">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16 text-primary animate-bounce" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            ✅ Cadastro Realizado com Sucesso!
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Redirecionando para agendamento...
          </p>
          <div className="flex justify-center mt-4">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-6 md:py-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none rounded-3xl" />

      <div className="relative z-10 space-y-5">
        {/* Headline */}
        <div className="text-center space-y-2">
          <h2 className="text-xl md:text-3xl font-black text-foreground leading-tight">
            Cadastre-se para Receber sua <span className="text-primary">Avaliação Acadêmica</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Análise completa do seu curso em 60 minutos com um consultor especializado da FABRANI
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nome */}
          <div className="space-y-1">
            <label htmlFor="name" className="block text-xs md:text-sm font-semibold text-foreground">
              Nome Completo
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
              className="h-10 md:h-12 bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors text-sm md:text-base text-foreground placeholder:text-muted-foreground/50"
              disabled={loading}
            />
          </div>

          {/* WhatsApp */}
          <div className="space-y-1">
            <label htmlFor="whatsapp" className="block text-xs md:text-sm font-semibold text-foreground">
              WhatsApp
            </label>
            <Input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formatPhoneForDisplay(formData.whatsapp)}
              onChange={handleChange}
              inputMode="numeric"
              className="h-10 md:h-12 bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors text-sm md:text-base text-foreground placeholder:text-muted-foreground/50"
              disabled={loading}
            />
            {formData.whatsapp.length > 0 && formData.whatsapp.length < 11 && (
              <p className="text-xs text-amber-600 mt-1">
                {11 - formData.whatsapp.length} dígito(s) faltando
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="block text-xs md:text-sm font-semibold text-foreground">
              E-mail
            </label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={`h-10 md:h-12 bg-background border-2 transition-colors text-sm md:text-base text-foreground placeholder:text-muted-foreground/50 ${
                  emailError
                    ? "border-red-500 hover:border-red-500/70 focus:border-red-500"
                    : "border-border hover:border-primary/50 focus:border-primary"
                }`}
                disabled={loading}
              />
              {emailError && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <AlertCircle className="w-5 h-5 text-red-500" />
                </div>
              )}
            </div>
            {emailError && (
              <p className="text-xs text-red-500 mt-1">{emailError}</p>
            )}
          </div>

          {/* Revenue Select */}
          <div className="space-y-1">
            <label htmlFor="revenue" className="block text-xs md:text-sm font-semibold text-foreground">
              Seu Faturamento Mensal
            </label>
            <Select value={formData.revenue} onValueChange={handleRevenueChange} disabled={loading}>
              <SelectTrigger className="h-10 md:h-12 bg-background border-2 border-border hover:border-primary/50 focus:border-primary transition-colors text-sm md:text-base text-foreground">
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {revenueOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value} className="text-sm text-foreground">
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-500">{error}</p>
            </div>
          )}

          {/* CTA Button */}
          <Button
            type="submit"
            disabled={loading || submitLeadMutation.isPending}
            className="w-full h-12 md:h-14 text-sm md:text-base font-bold bg-gradient-to-r from-primary to-orange-600 hover:from-primary/90 hover:to-orange-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
          >
            {loading || submitLeadMutation.isPending ? (
              <span className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Processando...
              </span>
            ) : (
              <span className="text-xs md:text-base">🔥 AGENDAR AGORA</span>
            )}
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 pt-2 md:pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">✓ Dados 100% Seguros</span>
            <span className="flex items-center gap-1">✓ Sem Compromisso</span>
            <span className="flex items-center gap-1">✓ Resposta em 24h</span>
          </div>
        </form>
      </div>
    </div>
  );
}
