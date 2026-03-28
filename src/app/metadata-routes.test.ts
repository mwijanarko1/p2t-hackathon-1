import { afterEach, describe, expect, it, vi } from "vitest";

describe("robots and sitemap routes", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("robots allows indexing and points sitemap at canonical origin", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://example.com");
    vi.resetModules();
    const { default: robots } = await import("./robots");
    const out = robots();
    expect(out.rules).toEqual({ userAgent: "*", allow: "/" });
    expect(out.sitemap).toBe("https://example.com/sitemap.xml");
  });

  it("sitemap emits only the root URL", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://example.com");
    vi.resetModules();
    const { default: sitemap } = await import("./sitemap");
    const entries = sitemap();
    expect(entries).toHaveLength(1);
    expect(entries[0]?.url).toBe("https://example.com");
    expect(entries[0]?.changeFrequency).toBe("weekly");
    expect(entries[0]?.priority).toBe(1);
  });
});
