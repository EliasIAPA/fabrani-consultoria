/**
 * Facebook Pixel Helper
 * Dispara eventos do Pixel do Facebook no navegador
 */

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void;
  }
}

/**
 * Dispara o evento InitiateCheckout quando o usuário clica no botão de compra
 */
export function trackInitiateCheckout(value: number = 97, currency: string = "BRL") {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "InitiateCheckout", {
      value: value,
      currency: currency,
      content_name: "Consultoria FABRANI",
      content_category: "Consultoria",
    });
    console.log("[FB Pixel] InitiateCheckout event fired");
  }
}

/**
 * Dispara o evento Lead quando o usuário demonstra interesse
 */
export function trackLead() {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "Consultoria FABRANI",
    });
    console.log("[FB Pixel] Lead event fired");
  }
}

/**
 * Dispara o evento ViewContent quando o usuário visualiza uma seção importante
 */
export function trackViewContent(contentName: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "ViewContent", {
      content_name: contentName,
    });
    console.log("[FB Pixel] ViewContent event fired:", contentName);
  }
}

/**
 * Dispara evento customizado
 */
export function trackCustomEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("trackCustom", eventName, params);
    console.log("[FB Pixel] Custom event fired:", eventName, params);
  }
}
