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