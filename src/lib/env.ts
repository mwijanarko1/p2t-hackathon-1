import { z } from "zod";

const DEFAULT_APP_URL = "http://localhost:3000";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  /** Raw optional value; URL validation happens in getSiteUrl. */
  NEXT_PUBLIC_APP_URL: z.string().optional(),
});

export type Env = z.infer<typeof envSchema>;

function normalizeAppUrl(raw: string | undefined): string | undefined {
  if (raw == null) return undefined;
  const trimmed = raw.trim();
  if (trimmed === "") return undefined;
  return trimmed.replace(/\/+$/, "");
}

function isDisallowedProductionHost(hostname: string): boolean {
  const h = hostname.toLowerCase();
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "::1";
}

/**
 * Validates environment variables at runtime. Import and call where env is needed
 * (e.g. in API routes, server components). Extend the schema when adding services.
 */
export function getEnv(): Env {
  const parsed = envSchema.safeParse({
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: normalizeAppUrl(process.env.NEXT_PUBLIC_APP_URL),
  });

  if (!parsed.success) {
    console.error("Invalid environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid environment variables");
  }

  return parsed.data;
}

/**
 * Canonical site origin for metadata (metadataBase, OG URLs, sitemap).
 * - development / test: defaults to http://localhost:3000 when unset or invalid
 * - production: required, must be a valid absolute URL and must not be localhost
 */
export function getSiteUrl(): string {
  const nodeEnv = (process.env.NODE_ENV ?? "development") as Env["NODE_ENV"];
  const raw = normalizeAppUrl(process.env.NEXT_PUBLIC_APP_URL);

  if (nodeEnv === "production") {
    if (!raw) {
      throw new Error(
        "NEXT_PUBLIC_APP_URL is required in production. Set it to your deployed origin (e.g. https://example.com).",
      );
    }
    const urlCheck = z.string().url().safeParse(raw);
    if (!urlCheck.success) {
      throw new Error("NEXT_PUBLIC_APP_URL must be a valid absolute URL in production.");
    }
    let host: string;
    try {
      host = new URL(raw).hostname;
    } catch {
      throw new Error("NEXT_PUBLIC_APP_URL must be a valid absolute URL in production.");
    }
    if (isDisallowedProductionHost(host)) {
      throw new Error("NEXT_PUBLIC_APP_URL must not point to localhost in production.");
    }
    return raw;
  }

  if (raw) {
    const urlCheck = z.string().url().safeParse(raw);
    if (urlCheck.success) {
      return raw;
    }
  }

  return DEFAULT_APP_URL;
}
