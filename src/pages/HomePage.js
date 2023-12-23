import React from 'react';
import styled from 'styled-components';
import { Typography, Button, Container } from '@mui/material';

const Hero = styled.div`
  background: url("your-background-image.jpg") center/cover no-repeat;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  color: white;
  padding: 20px;
  z-index: 2;
`;

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Hero>
        <Overlay />
        <HeroContent>
          <Typography variant="h2" gutterBottom>Bienvenido a la Página Principal</Typography>
          <Typography variant="h5" gutterBottom>Explore our collection of scientific articles and innovative products.</Typography>
          <Button variant="contained" color="primary">View Catalog</Button>
        </HeroContent>
      </Hero>

      {/* Other sections would go here */}

    </Container>
  );
};

export default HomePage;
