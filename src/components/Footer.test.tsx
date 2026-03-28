import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("discloses Google Form submission near the submit CTA", () => {
    render(<Footer />);
    expect(
      screen.getByText(/Submitting opens a Google Form/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Google processes responses/i)).toBeInTheDocument();
  });
});
