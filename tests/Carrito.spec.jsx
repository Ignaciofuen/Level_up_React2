<<<<<<< HEAD

import { render, screen, fireEvent } from "@testing-library/react"
import Carrito from "../src/pages/carrito";


describe('Componente Carrito', () => {
  it('renderiza el título correctamente', () => {
    render(<Carrito items={[]} />);
  expect(screen.getByText("Carrito")).toBeInTheDocument();
  });
});
=======
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import Carrito from "../src/pages/carrito";


it("muestra mensaje al hacer clic en Validar", () => {render(<Carrito />);
const boton = screen.getByRole("button", { name: /Finalizar compra/i });
fireEvent.click(boton);expect(screen.getByRole("status")).toHaveTextContent("Validadocorrectamente");});
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
