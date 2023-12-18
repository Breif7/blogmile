// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import QuoteCalculator from '../components/QuoteCalculator';

// describe('QuoteCalculator', () => {
//   test('calcula el volumen basado en las dimensiones ingresadas', async () => {
//     render(<QuoteCalculator />);
    
//     // Obtiene los elementos input
//     const inputLength = screen.getByTestId('input-length');
//     const inputWidth = screen.getByTestId('input-width');
//     const inputHeight = screen.getByTestId('input-height');
//     const submitButton = screen.getByTestId('submit-button');
    
//     // Simula la entrada del usuario
//     await userEvent.type(inputLength, '10');
//     await userEvent.type(inputWidth, '5');
//     await userEvent.type(inputHeight, '2');
    
//     // Simula el clic en el botón de envío
//     userEvent.click(submitButton);
    
//     // Espera y verifica el resultado
//     expect(await screen.findByTestId('result')).toHaveTextContent('100 cm³');
//   });
// });

import { render, screen } from '@testing-library/react';
import App from '../App';

test('muestra el título de bienvenida en la página principal', () => {
  render(<App />);
  const titulo = screen.getByText(/Bienvenido a la Página Principal/i);
  expect(titulo).toBeInTheDocument();
});

