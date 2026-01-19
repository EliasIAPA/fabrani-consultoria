import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { sendFacebookEvent, generateEventId, hashUserData } from "./facebookCapi";

export const appRouter = router({
  // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Facebook Conversions API (CAPI) Router
  tracking: router({
    /**
     * Send PageView event via server-side CAPI
     * This works in parallel with browser Pixel for maximum data accuracy
     */
    pageView: publicProcedure
      .input(
        z.object({
          eventId: z.string().optional(),
          sourceUrl: z.string(),
          fbc: z.string().optional(), // _fbc cookie
          fbp: z.string().optional(), // _fbp cookie
        })
      )
      .mutation(async ({ input, ctx }) => {
        const eventId = input.eventId || generateEventId();
        
        // Get user data from request headers
        const clientIp = ctx.req.headers["x-forwarded-for"]?.toString().split(",")[0] || 
                         ctx.req.socket?.remoteAddress || "";
        const userAgent = ctx.req.headers["user-agent"] || "";

        const userData = hashUserData({
          client_ip_address: clientIp,
          client_user_agent: userAgent,
          fbc: input.fbc,
          fbp: input.fbp,
        });

        const result = await sendFacebookEvent({
          event_name: "PageView",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: input.sourceUrl,
          action_source: "website",
          user_data: userData,
        });

        return {
          success: result.success,
          eventId,
          error: result.error,
        };
      }),

    /**
     * Send InitiateCheckout event when user clicks CTA button
     */
    initiateCheckout: publicProcedure
      .input(
        z.object({
          eventId: z.string().optional(),
          sourceUrl: z.string(),
          fbc: z.string().optional(),
          fbp: z.string().optional(),
          value: z.number().optional(),
          currency: z.string().optional(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const eventId = input.eventId || generateEventId();
        
        const clientIp = ctx.req.headers["x-forwarded-for"]?.toString().split(",")[0] || 
                         ctx.req.socket?.remoteAddress || "";
        const userAgent = ctx.req.headers["user-agent"] || "";

        const userData = hashUserData({
          client_ip_address: clientIp,
          client_user_agent: userAgent,
          fbc: input.fbc,
          fbp: input.fbp,
        });

        const result = await sendFacebookEvent({
          event_name: "InitiateCheckout",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: input.sourceUrl,
          action_source: "website",
          user_data: userData,
          custom_data: {
            value: input.value || 97,
            currency: input.currency || "BRL",
            content_name: "Consultoria FABRANI",
          },
        });

        return {
          success: result.success,
          eventId,
          error: result.error,
        };
      }),
  }),
});

export type AppRouter = typeof appRouter;
