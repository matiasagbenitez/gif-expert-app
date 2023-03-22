import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en el componente GifExpertApp", () => {
  test("Debe hacer match con el snapshot", () => {
    const wrapper = render(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
