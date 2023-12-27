import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';

describe('NavBar Component', () => {
  test('debe mostrar el título de la aplicación', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    const titulo = screen.getByText(/Blog oficial de Mile 3D/i);
    expect(titulo).toBeInTheDocument();
  });

  test('debe tener enlaces de navegación', () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    expect(screen.getByText(/Registrate/i)).toBeInTheDocument();

  });
});
