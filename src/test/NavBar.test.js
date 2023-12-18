import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar Component', () => {
  test('debe mostrar el título de la aplicación', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const titulo = screen.getByText(/Mi Aplicación/i);
    expect(titulo).toBeInTheDocument();
  });

  test('debe tener enlaces de navegación', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Página 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Página 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Página 3/i)).toBeInTheDocument();

  });
});
