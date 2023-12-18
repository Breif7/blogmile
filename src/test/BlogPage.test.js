import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPage from '../pages/BlogPage';

describe('BlogPage Component', () => {
test('se renderiza con al menos un artículo', () => {
  render(<BlogPage />);
  const articleElements = screen.getAllByTestId('blog-article'); // Cambia aquí a getAllByTestId
  expect(articleElements.length).toBeGreaterThan(0); // Verifica que haya al menos un elemento
});

  // Si tienes múltiples artículos puedes comprobar si todos se renderizan.
  test('se renderizan múltiples artículos', () => {
    render(<BlogPage />);
    const articles = screen.getAllByTestId('blog-article');
    expect(articles.length).toBeGreaterThan(1); // Asegúrate de que haya más de un artículo en la lista.
  });
});
