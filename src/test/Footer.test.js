import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  test('contiene enlaces de contacto', () => {
    render(<Footer />);

    // Verificar los enlaces de contacto
    expect(screen.getByText(/miguelmtzo1701@gmail.com/i).closest('a')).toHaveAttribute('href', 'mailto:miguelmtzo1701@gmail.com');
    expect(screen.getByText(/WhatsApp: \+523322730427/i).closest('a')).toHaveAttribute('href', 'https://wa.me/523322730427');
  });
});
