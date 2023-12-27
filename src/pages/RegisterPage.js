import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Container, TextField, Button, Box, Typography } from '@mui/material';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password || !name) {
      setError('Por favor, completa todos los campos.');
      return;
    }
    try {
      await register(name, email, password);
      // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito.
    } catch (error) {
      setError('Hubo un problema con el registro. Inténtalo de nuevo.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
        <Typography variant="h4" component="h1" gutterBottom>
          Registrarse
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          {error && <Typography color="error">{error}</Typography>}
          <TextField
            label="Nombre completo"
            type="text"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            Registrarse
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default RegisterPage;
