import { afterEach, describe, expect, it, vi } from "vitest";

describe("getSiteUrl", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it("defaults to localhost in development when unset", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "");
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  it("defaults to localhost in test when unset", async () => {
    vi.stubEnv("NODE_ENV", "test");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", undefined);
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(getSiteUrl()).toBe("http://localhost:3000");
  });

  it("uses a valid explicit URL in development", async () => {
    vi.stubEnv("NODE_ENV", "development");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://preview.example.com/path/");
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(getSiteUrl()).toBe("https://preview.example.com/path");
  });

  it("strips trailing slash from production URL", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://example.com/");
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(getSiteUrl()).toBe("https://example.com");
  });

  it("trims whitespace from URL", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "  https://example.com  ");
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(getSiteUrl()).toBe("https://example.com");
  });

  it("throws in production when NEXT_PUBLIC_APP_URL is missing", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "");
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(() => getSiteUrl()).toThrow(/NEXT_PUBLIC_APP_URL is required/);
  });

  it("throws in production when URL is invalid", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "not-a-url");
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(() => getSiteUrl()).toThrow(/valid absolute URL/);
  });

  it("throws in production for localhost", async () => {
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_APP_URL", "http://localhost:3000");
    vi.resetModules();
    const { getSiteUrl } = await import("./env");
    expect(() => getSiteUrl()).toThrow(/localhost/);
  });
});
