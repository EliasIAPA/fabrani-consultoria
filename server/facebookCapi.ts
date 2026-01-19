import { createHash } from "crypto";

/**
 * Facebook Conversions API (CAPI) Helper
 * Envia eventos do servidor para o Facebook, contornando bloqueadores de anúncios
 */

const PIXEL_ID = process.env.FB_PIXEL_ID || "2419105295112897";
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN || "";
const API_VERSION = "v18.0";

interface UserData {
  client_ip_address?: string;
  client_user_agent?: string;
  em?: string; // email (hashed)
  ph?: string; // phone (hashed)
  fn?: string; // first name (hashed)
  ln?: string; // last name (hashed)
  ct?: string; // city (hashed)
  st?: string; // state (hashed)
  zp?: string; // zip code (hashed)
  country?: string; // country (hashed)
  external_id?: string; // external user ID (hashed)
  fbc?: string; // Facebook click ID (from _fbc cookie)
  fbp?: string; // Facebook browser ID (from _fbp cookie)
}

interface EventData {
  event_name: string;
  event_time: number;
  event_id: string;
  event_source_url: string;
  action_source: "website";
  user_data: UserData;
  custom_data?: Record<string, unknown>;
}

/**
 * Hash data using SHA256 (required by Facebook CAPI)
 */
function hashData(data: string): string {
  return createHash("sha256").update(data.toLowerCase().trim()).digest("hex");
}

/**
 * Send event to Facebook Conversions API
 */
export async function sendFacebookEvent(event: EventData): Promise<{ success: boolean; error?: string }> {
  if (!ACCESS_TOKEN) {
    console.warn("[Facebook CAPI] Access token not configured. Event not sent.");
    return { success: false, error: "Access token not configured" };
  }

  const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [event],
        access_token: ACCESS_TOKEN,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("[Facebook CAPI] Error:", result);
      return { success: false, error: result.error?.message || "Unknown error" };
    }

    console.log("[Facebook CAPI] Event sent successfully:", event.event_name);
    return { success: true };
  } catch (error) {
    console.error("[Facebook CAPI] Request failed:", error);
    return { success: false, error: String(error) };
  }
}

/**
 * Generate unique event ID for deduplication
 */
export function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}

/**
 * Hash user data fields for privacy compliance
 */
export function hashUserData(data: Partial<UserData>): UserData {
  const hashed: UserData = {};

  if (data.client_ip_address) hashed.client_ip_address = data.client_ip_address;
  if (data.client_user_agent) hashed.client_user_agent = data.client_user_agent;
  if (data.em) hashed.em = hashData(data.em);
  if (data.ph) hashed.ph = hashData(data.ph);
  if (data.fn) hashed.fn = hashData(data.fn);
  if (data.ln) hashed.ln = hashData(data.ln);
  if (data.ct) hashed.ct = hashData(data.ct);
  if (data.st) hashed.st = hashData(data.st);
  if (data.zp) hashed.zp = hashData(data.zp);
  if (data.country) hashed.country = hashData(data.country);
  if (data.external_id) hashed.external_id = hashData(data.external_id);
  if (data.fbc) hashed.fbc = data.fbc; // Not hashed
  if (data.fbp) hashed.fbp = data.fbp; // Not hashed

  return hashed;
}

export { hashData };
