import { render, screen } from '@testing-library/react';
import App from '../App';

test('muestra el título de bienvenida en la página principal', () => {
  render(<App />);
  const titulo = screen.getByText(/Bienvenido a la Página Principal/i);
  expect(titulo).toBeInTheDocument();
});
