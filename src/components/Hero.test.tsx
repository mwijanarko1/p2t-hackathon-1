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
      screen.getByText(/A one-week hackathon where your landing page has one job:/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Make the AI invest\./i)).toBeInTheDocument();
  });

  it("renders both primary calls to action", () => {
    render(<Hero />);
    expect(
      screen.getByRole("link", { name: /Submit Your Project/i }),
    ).toHaveAttribute("href", "https://forms.gle/B2TWXBt3zaWcEVEG8");
    expect(screen.getByRole("link", { name: /Learn More/i })).toHaveAttribute(
      "href",
      "#how-it-works",
    );
  });

  it("discloses Google Form submission and data handling", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Submitting opens a Google Form/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Google processes responses/i)).toBeInTheDocument();
  });
});
