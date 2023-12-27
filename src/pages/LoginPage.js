import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { user, login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    try {
      await login(email, password);
      setMessage('¡Inicio de sesión exitoso!');
      setError('');
    } catch (error) {
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        {!user ? (
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Inicio de Sesión
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            {message && <Typography color="primary">{message}</Typography>}
            <TextField
              label="Correo electrónico"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 24 }}>
              Login
            </Button>
          </form>
        ) : (
          <Box textAlign="center">
            <Typography variant="h5" component="h2" gutterBottom>
              Bienvenido, {user.name}!
            </Typography>
            <Typography variant="body1" gutterBottom>
              ¿Qué te gustaría hacer hoy?
            </Typography>
            <ul>
              <li>Escribir un artículo científico</li>
              <li>Acceder al carrito de compras</li>
            </ul>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default LoginPage;
