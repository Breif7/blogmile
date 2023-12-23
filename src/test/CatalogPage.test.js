import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CatalogPage from '../pages/CatalogPage';


beforeEach(() => {
  fetch.mockClear();
  fetch.mockResolvedValue({
    ok: true,
    json: () => Promise.resolve([
      { ProductId: 1, Description: 'Producto 1', Price: 100, ImageURLs: 'url1' },
      { ProductId: 2, Description: 'Producto 2', Price: 200, ImageURLs: 'url2' },
    ]),
  });
});


beforeEach(() => {
  // Clear all mocks between tests
  fetch.mockClear();
});

describe('CatalogPage', () => {
  test('displays products correctly', async () => {
  render(<CatalogPage />);

  // Wait for the products to be fetched
  const products = await waitFor(() => screen.findAllByTestId('product-card'));

      expect(products.length).toBeGreaterThan(0);
    });

    // Mocked products as we have them in the mock fetch response
    const productos = [
      { Description: 'Producto 1', Price: 100 },
      { Description: 'Producto 2', Price: 200 },
    ];

    productos.forEach(producto => {
      // Verify the description and price of each product
      expect(screen.getByText(producto.Description)).toBeInTheDocument();
      expect(screen.getByText(`Precio: $${producto.Price}`)).toBeInTheDocument();
    });
  });
});
