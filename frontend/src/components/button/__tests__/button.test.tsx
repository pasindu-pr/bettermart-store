import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../button";

describe("Button component test", () => {
  test("renders the button with title passed by props", () => {
    const handleClick = jest.fn();
    render(<Button title="Button" onClick={handleClick} type="button" />);
    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument();
  });

  test("should click handleclick once when click", () => {
    const handleClick = jest.fn();
    render(<Button title="Button" onClick={handleClick} type="button" />);
    const button = screen.getByText("Button");

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
