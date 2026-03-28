import { render, screen } from "@testing-library/react";
import { Hero } from "./Hero";

describe("Hero", () => {
  it("renders the main heading", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      /Build a startup\.\s*Convince an AI VC\./i,
    );
  });

  it("renders the event summary copy", () => {
    render(<Hero />);
    expect(
      screen.getByText(/A one-week challenge: one landing page\. One job — make the model invest\./i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Landing only · No backend required · Public URL/i)).toBeInTheDocument();
  });

  it("renders both primary calls to action", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /Submit your project/i }),
    ).toHaveAttribute("href", "https://forms.gle/B2TWXBt3zaWcEVEG8");
    expect(screen.getByRole("link", { name: /How it works/i })).toHaveAttribute(
      "href",
      "#how-it-works",
    );
  });
});
