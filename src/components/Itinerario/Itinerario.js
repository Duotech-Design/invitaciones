//import React from 'react';
import { Container, Typography, Box } from "@mui/material";


const Itinerario = () => {
  return (
    <Container
      sx={{
        background: "#E6D4C2",
        height: "200px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "white",
        marginTop: "0",
      }}
    >
      <Box sx={{flex: "1"}}>
      <img
        src="/img/fotoInicio.jpg"
        alt="Imagen de inicio" // Propiedad alt para describir la imagen
        style={{
          resizeMode: 'contain',
          height: "90%",
          width: "100%",
          }}
      />
      </Box>
      <Box sx={{flex: "1", display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center"}}>
        <Typography variant="h3"> CEREMONIA RELIGIOSA </Typography>
        <Typography variant="h3"> Parroquia maria madre </Typography>
        <Typography variant="h3">  de la divina gracia  </Typography>
       
        <Typography variant="h3"> 18:30 hrs. </Typography>
        <Typography variant="h3"> Rincón de Frascati 100,  </Typography>
        <Typography variant="h3">  Nueva Rinconada de los Andes.  </Typography>
       
      </Box>
    </Container>
  );
};

export default Itinerario;
