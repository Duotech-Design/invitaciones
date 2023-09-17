//import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Container>
      <Typography variant="body2">
        © {new Date().getFullYear()} Alison, Zoy. Todos los derechos reservados.
      </Typography>
    </Container>
  );
}

export default Footer;
