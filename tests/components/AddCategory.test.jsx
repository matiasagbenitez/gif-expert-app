import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


describe("Pruebas en <AddCategory />", () => {

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "Hola Mundo" } });
    expect(input.value).toBe("Hola Mundo");
  });

  test("Debe de llamar el onNewCategory y limpiar la caja de texto", () => {

    const inputValue = "Saitama";

    // TODO ???

    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.change(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");

    
  });

});