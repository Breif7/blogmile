import React from 'react';
import { render, screen } from '@testing-library/react';
import CatalogPage from '../pages/CatalogPage';

describe('CatalogPage', () => {
  test('muestra los productos correctamente', () => {
    render(<CatalogPage />);

    // Asume que tienes tres productos codificados como ejemplo
    const productos = [
      { description: 'Producto 1', price: 100 },
      { description: 'Producto 2', price: 200 },
    ];

    productos.forEach(producto => {
      // Verifica la descripción y el precio de cada producto
      expect(screen.getByText(producto.description)).toBeInTheDocument();
      expect(screen.getByText(`Precio: $${producto.price}`)).toBeInTheDocument();
    });
  });
});
