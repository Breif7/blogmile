import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Blog oficial de Mile 3D
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
          <Button color="inherit" component={RouterLink} to="/blog">Blog educativo</Button>
          <Button color="inherit" component={RouterLink} to="/quote">Cotizador en linea</Button>
          <Button color="inherit" component={RouterLink} to="/catalog">Catalogo de productos y servicios</Button>
          <Button color="inherit" component={RouterLink} to="/contact">Contactanos</Button>
          <Button color="inherit" component={RouterLink} to="/FAQ">FAQ</Button>
          <Button color="inherit" component={RouterLink} to="/login">Inicio de sesion</Button>
          <Button color="inherit" component={RouterLink} to="/cart">Carrito</Button>
          <Button color="inherit" component={RouterLink} to="/register">Registrate</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
