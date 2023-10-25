//import React from 'react';
import { Box, Container, Typography,  } from '@mui/material';

const Sugerencias = () => {
  return (
    <Container>
      <Box>
         <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "300px" }}
        ></div>
        
      </Box>
      <Typography variant="h2"  sx={{ textAlign: "center" }}>
          CÓDIGO DE VESTIMENTA
        </Typography>
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "300px" , marginTop:"5px"}}
        ></div>
      <Typography variant="h4" component="h1">
        Sugerencias para la boda
      </Typography>
      <Typography variant="body1">
        Consejos para los invitados, cómo llegar, regalos, etc.
      </Typography>
      
    </Container>
  );
}

export default Sugerencias;

