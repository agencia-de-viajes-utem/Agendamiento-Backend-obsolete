import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './navBar';

test('renders Navbar with expected elements', () => {
  // Renderiza el componente NavBar
  render(<NavBar />);

  // Verifica si el logotipo y el enlace de "Paquetes" están presentes
  const logoElement = screen.getByText(/Logo/i);
  const paquetesLink = screen.getByText(/Paquetes/i);

  // Verifica si el logotipo y el enlace de "Paquetes" están en el DOM
  expect(logoElement).toBeInTheDocument();
  expect(paquetesLink).toBeInTheDocument();

  // También puedes realizar otras verificaciones necesarias
  // Por ejemplo, verificar la presencia de otros elementos como "Ayuda" e "Ingresar"

  // const ayudaLink = screen.getByText(/Ayuda/i);
  // const ingresarButton = screen.getByText(/Ingresar/i);

  // expect(ayudaLink).toBeInTheDocument();
  // expect(ingresarButton).toBeInTheDocument();
});
