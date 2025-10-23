<<<<<<< HEAD
import React from 'react';
import { render, screen } from '@testing-library/react';
import Productos from '../src/pages/Productos';

it('renderiza al menos un botón de "Agregar al carrito"', () => {
  const productosDePrueba = [{ id: 1, nombre: 'Test', precio: 100 }];
  const mockOnAdd = () => {};

  render(<Productos productos={productosDePrueba} onAdd={mockOnAdd} />);

  const botones = screen.getAllByRole("button", { name: /Agregar al carrito/i });

  expect(botones[0]).toBeInTheDocument();
});
=======
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"
import Productos from "../src/pages/Productos";


it('renderiza el botón "Validar"', () => {render(<Productos />);
expect(screen.getByRole("button", { name: /Agregar al carrito/i})).toBeInTheDocument();});
>>>>>>> 64c4456147db47a7bea9f67480f1d93fae75ea9e
