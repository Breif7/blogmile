import React from 'react';
import { TextField, Button, Link } from '@mui/material';

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar un correo electrónico
    alert('Formulario enviado (simulado para esta prueba).');
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="Nombre" required fullWidth margin="normal" />
        <TextField label="Correo electrónico" type="email" required fullWidth margin="normal" />
        <TextField label="Mensaje" multiline rows={4} required fullWidth margin="normal" />
        <Button type="submit" variant="contained" color="primary">Enviar</Button>
      </form>
      <p>O contáctame directamente en:</p>
      <Link href="mailto:miguelmtzo1701@gmail.com">miguelmtzo1701@gmail.com</Link>
      <br />
      <Link href="https://wa.me/523322730427" target="_blank">WhatsApp: +523322730427</Link>
    </div>
  );
}

export default ContactPage;
