import { RemoveAllCategories } from "../../src/components/RemoveAllCategories";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Pruebas del componente RemoveAllCategories", () => {
  test("Cuando se hace click en el botón, se llama a la función onRemoveAllCategories", () => {
    const onRemoveAllCategories = jest.fn();
    render(
      <RemoveAllCategories onRemoveAllCategories={onRemoveAllCategories} />
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onRemoveAllCategories).toHaveBeenCalledTimes(1);
  });
});
