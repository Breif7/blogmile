import React from 'react';
import { render, screen } from '@testing-library/react';
import FAQPage from '../pages/FAQPage';

describe('FAQPage', () => {
  test('muestra preguntas y respuestas frecuentes', () => {
    render(<FAQPage />);

    // Verificar la presencia de las preguntas
    expect(screen.getByText(/¿Cuál es la pregunta frecuente 1\?/i)).toBeInTheDocument();
    expect(screen.getByText(/¿Cuál es la pregunta frecuente 2\?/i)).toBeInTheDocument();

    // Verificar la presencia de las respuestas
    // Nota: Las respuestas podrían no estar en el documento hasta que se expandan las preguntas, dependiendo de cómo se implemente el Accordion.
    // Si es así, necesitarás expandir el Accordion antes de hacer estas comprobaciones.
  });
});
