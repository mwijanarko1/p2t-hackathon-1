import { fireEvent, render, screen } from "@testing-library/react";
import { FAQ } from "./FAQ";

describe("FAQ", () => {
  it("exposes accordion semantics for answers", () => {
    render(<FAQ />);

    const firstQuestion = screen.getByRole("button", {
      name: /Do I need to build a full product\?/i,
    });

    expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
    expect(firstQuestion).toHaveAttribute("aria-controls");

    fireEvent.click(firstQuestion);

    expect(firstQuestion).toHaveAttribute("aria-expanded", "true");

    const panelId = firstQuestion.getAttribute("aria-controls");
    expect(panelId).not.toBeNull();

    const answerPanel = document.getElementById(panelId!);
    expect(answerPanel).not.toBeNull();
    expect(answerPanel).toHaveAttribute("role", "region");
    expect(answerPanel).toHaveAttribute("aria-labelledby", firstQuestion.id);
    expect(answerPanel).not.toHaveAttribute("hidden");
    expect(screen.getByText(/You only need to build a landing page\./i)).toBeVisible();
  });
});
