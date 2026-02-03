import { useState, useEffect, useCallback } from "react";

const COOKIE_NAME = "fabrani_first_visit";
const TIMER_DURATION = 20 * 60; // 20 minutos em segundos
const EXPIRED_REDIRECT_PATH = "/time";

interface TimeLeft {
  minutes: number;
  seconds: number;
}

interface UseUrgencyTimerReturn {
  timeLeft: TimeLeft;
  isExpired: boolean;
  hasVisitedBefore: boolean;
}

// Função para obter cookie
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(";").shift() || null;
  }
  return null;
}

// Função para definir cookie (expira em 30 dias)
function setCookie(name: string, value: string, days: number = 30): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
}

// Função para verificar se está na página /time
function isOnTimePage(): boolean {
  return window.location.pathname === EXPIRED_REDIRECT_PATH;
}

// Função para verificar se está na página /obrigado
function isOnThankYouPage(): boolean {
  return window.location.pathname === "/obrigado";
}

export function useUrgencyTimer(): UseUrgencyTimerReturn {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ minutes: 20, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [hasVisitedBefore, setHasVisitedBefore] = useState(false);

  // Inicialização - verificar cookie e calcular tempo restante
  useEffect(() => {
    // Se está na página /time ou /obrigado, não precisa do timer
    if (isOnTimePage() || isOnThankYouPage()) {
      setHasVisitedBefore(true);
      setIsExpired(true);
      return;
    }

    const existingVisit = getCookie(COOKIE_NAME);
    
    if (existingVisit) {
      // Usuário já visitou antes - calcular tempo restante
      const firstVisitTime = parseInt(existingVisit, 10);
      const now = Date.now();
      const elapsedSeconds = Math.floor((now - firstVisitTime) / 1000);
      const remainingSeconds = TIMER_DURATION - elapsedSeconds;

      if (remainingSeconds <= 0) {
        // Tempo expirou - redirecionar para /time
        setIsExpired(true);
        setHasVisitedBefore(true);
        window.location.href = EXPIRED_REDIRECT_PATH;
        return;
      }

      // Ainda tem tempo - definir tempo restante
      setHasVisitedBefore(true);
      setTimeLeft({
        minutes: Math.floor(remainingSeconds / 60),
        seconds: remainingSeconds % 60,
      });
    } else {
      // Primeira visita - definir cookie com timestamp atual
      setCookie(COOKIE_NAME, Date.now().toString());
      setHasVisitedBefore(false);
      setTimeLeft({ minutes: 20, seconds: 0 });
    }
  }, []);

  // Timer countdown
  useEffect(() => {
    if (isExpired || isOnTimePage() || isOnThankYouPage()) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          // Tempo esgotou - redirecionar
          clearInterval(timer);
          setIsExpired(true);
          window.location.href = EXPIRED_REDIRECT_PATH;
          return { minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExpired]);

  return {
    timeLeft,
    isExpired,
    hasVisitedBefore,
  };
}

// Hook para verificar se o usuário deve estar na página /time
export function useCheckExpiredAccess(): boolean {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Se está na página principal, verificar se o tempo já expirou
    if (!isOnTimePage()) {
      const existingVisit = getCookie(COOKIE_NAME);
      
      if (existingVisit) {
        const firstVisitTime = parseInt(existingVisit, 10);
        const now = Date.now();
        const elapsedSeconds = Math.floor((now - firstVisitTime) / 1000);
        
        if (elapsedSeconds >= TIMER_DURATION) {
          setShouldRedirect(true);
          window.location.href = EXPIRED_REDIRECT_PATH;
        }
      }
    }
  }, []);

  return shouldRedirect;
}
