import { ENV } from "./_core/env";

interface UnnichatContact {
  name: string;
  phone: string;
  email?: string;
  customFields?: Record<string, string>;
}

interface UnnichatResponse {
  success: boolean;
  contactId?: string;
  error?: string;
}

/**
 * Create or update a contact in Unnichat
 */
export async function createUnnichatContact(
  contact: UnnichatContact
): Promise<UnnichatResponse> {
  if (!ENV.unnichatApiKey || !ENV.unnichatApiUrl) {
    console.warn("[Unnichat] API credentials not configured");
    return {
      success: false,
      error: "Unnichat credentials not configured",
    };
  }

  try {
    const response = await fetch(`${ENV.unnichatApiUrl}/api/v1/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ENV.unnichatApiKey}`,
      },
      body: JSON.stringify({
        name: contact.name,
        phone: contact.phone,
        email: contact.email,
        customFields: contact.customFields || {},
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[Unnichat] Failed to create contact:", error);
      return {
        success: false,
        error: `Unnichat API error: ${response.status}`,
      };
    }

    const data = await response.json();
    return {
      success: true,
      contactId: data.id || data.contactId,
    };
  } catch (error) {
    console.error("[Unnichat] Error creating contact:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Send a message to a contact in Unnichat
 */
export async function sendUnnichatMessage(
  contactId: string,
  message: string
): Promise<UnnichatResponse> {
  if (!ENV.unnichatApiKey || !ENV.unnichatApiUrl) {
    console.warn("[Unnichat] API credentials not configured");
    return {
      success: false,
      error: "Unnichat credentials not configured",
    };
  }

  try {
    const response = await fetch(
      `${ENV.unnichatApiUrl}/api/v1/contacts/${contactId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ENV.unnichatApiKey}`,
        },
        body: JSON.stringify({
          message,
          type: "text",
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("[Unnichat] Failed to send message:", error);
      return {
        success: false,
        error: `Unnichat API error: ${response.status}`,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    console.error("[Unnichat] Error sending message:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
