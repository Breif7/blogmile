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
          Mi Aplicación
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
          <Button color="inherit" component={RouterLink} to="/pagina1">Página 1</Button>
          <Button color="inherit" component={RouterLink} to="/pagina2">Página 2</Button>
          <Button color="inherit" component={RouterLink} to="/pagina3">Página 3</Button>
          <Button color="inherit" component={RouterLink} to="/blog">Blog</Button>
          <Button color="inherit" component={RouterLink} to="/quote">Cotizador en linea</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
