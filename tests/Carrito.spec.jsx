import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import Carrito from "../src/pages/carrito";


it("muestra mensaje al hacer clic en Validar", () => {render(<Carrito />);
const boton = screen.getByRole("button", { name: /Finalizar compra/i });
fireEvent.click(boton);expect(screen.getByRole("status")).toHaveTextContent("Validadocorrectamente");});