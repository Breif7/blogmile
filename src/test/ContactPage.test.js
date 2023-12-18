import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '../pages/ContactPage';

describe('ContactPage', () => {
  test('muestra campos del formulario y enlaces de contacto', () => {
    render(<ContactPage />);

    // Verificar la presencia de los campos del formulario
    expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Correo electrónico/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mensaje/i)).toBeInTheDocument();

    // Verificar el botón de enviar
    expect(screen.getByRole('button', { name: /Enviar/i })).toBeInTheDocument();

    // Verificar los enlaces de contacto directo
    expect(screen.getByText(/miguelmtzo1701@gmail.com/i).closest('a')).toHaveAttribute('href', 'mailto:miguelmtzo1701@gmail.com');
    expect(screen.getByText(/WhatsApp: \+523322730427/i).closest('a')).toHaveAttribute('href', 'https://wa.me/523322730427');
  });
});
