//import React from 'react';
import { Container, Typography } from '@mui/material';

const Itinerario = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Itinerario de la boda
      </Typography>
      <ul>
        <li>Horario y detalles del evento.</li>
        <li>Información sobre la ceremonia y la recepción.</li>
        {/* Agrega más detalles del itinerario aquí */}
      </ul>
    </Container>
  );
}

export default Itinerario;

