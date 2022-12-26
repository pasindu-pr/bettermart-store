import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Input from "../input";

describe("Input Component Test", () => {
  test("renders the input and value should be equal to passed value", () => {
    const handleChange = jest.fn();
    render(
      <Input
        id="sampleinput"
        label="Sample Input"
        name="sample"
        value="sample value"
        onChange={handleChange}
        type="text"
      />
    );

    const inputComponent = screen.getByLabelText("Sample Input");

    expect(inputComponent).toBeInTheDocument();
    expect(inputComponent).toHaveValue("sample value");
  });

  test("On change should call when typing", () => {
    const handleChange = jest.fn();
    render(
      <Input
        id="sampleinput"
        label="Sample Input"
        name="sample"
        onChange={handleChange}
        type="text"
      />
    );

    const inputComponent = screen.getByLabelText("Sample Input");
    fireEvent.change(inputComponent, { target: { value: "v" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test("should be disabled when pass disabled as true", () => {
    const handleChange = jest.fn();
    render(
      <Input
        id="sampleinput"
        label="Sample Input"
        name="sample"
        onChange={handleChange}
        type="text"
        disabled={true}
      />
    );

    const inputComponent = screen.getByLabelText("Sample Input");
    expect(inputComponent).toBeDisabled();
  });
});
