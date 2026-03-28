import { existsSync } from "node:fs";
import { join } from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
}));

describe("root layout metadata", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("resolves metadataBase, canonical, OG image, and copy for production", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://example.com/");
    vi.resetModules();
    const { metadata } = await import("./layout");
    expect(metadata.metadataBase?.href).toBe("https://example.com/");
    expect(metadata.alternates?.canonical).toBe("/");
    const og = metadata.openGraph?.images?.[0];
    expect(og).toMatchObject({
      url: "/og-image.png",
      width: 1200,
      height: 630,
    });
    expect(metadata.title).toBeTruthy();
    expect(typeof metadata.title).toBe("string");
    expect(metadata.description).toBeTruthy();
    expect(metadata.twitter?.images).toEqual(["/og-image.png"]);
  });

  it("references an existing OG image file", () => {
    const ogPath = join(process.cwd(), "public", "og-image.png");
    expect(existsSync(ogPath)).toBe(true);
  });
});
