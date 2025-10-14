import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import Productos from "../src/pages/Productos";


it('renderiza el botón "Validar"', () => {render(<Productos />);
expect(screen.getByRole("button", { name: /Agregar al carrito/i})).toBeInTheDocument();});