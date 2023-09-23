//import React from 'react';
import { Container, Typography, Box } from "@mui/material";

const Itinerario2 = () => {
  return (
    <Container
      sx={{
    
        height: "388px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "white",
        marginTop: "0",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <img
          src="/img/fotoInicio.jpg"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={{
            height: "90%",
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography variant="h2"> CEREMONIA RELIGIOSA </Typography>
        <Typography variant="h2" sx={{ typography: "bold" }}>
          {" "}
          Parroquia maria madre{" "}
        </Typography>
        <Typography variant="h2"> de la divina gracia </Typography>

        <Typography variant="h2"> 18:30 hrs. </Typography>
        <Typography variant="h2"> Rincón de Frascati 100, </Typography>
        <Typography variant="h2"> Nueva Rinconada de los Andes. </Typography>
        <button> ¿COMO LLEGAR?</button>
      </Box>
    </Container>
  );
};

export default Itinerario2;
