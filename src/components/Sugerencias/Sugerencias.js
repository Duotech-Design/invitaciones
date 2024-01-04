//import React from 'react';
import { Box, Container, Typography } from "@mui/material";

const Sugerencias = () => {
  return (
    <Container   sx={{
      height: "500px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center", // Para centrar verticalmente
      alignItems: "center",
      color: "white",
      marginTop: "0",
      marginBottom: "15px", 
      gap:"10px"
    }}>
      <Box>
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "300px" }}
        ></div>
      </Box>
      <Typography variant="h14" sx={{ textAlign: "center" }}>
        SUGERENCIAS PEINADO
      </Typography>
      <div>
      <Typography variant="h14" sx={{ textAlign: "center" }}>
        Y MAQUILLAJE
      </Typography>
      </div>
     

      <div
        style={{
          borderBottom: "0.3px solid #7D5730",
          width: "300px",
          marginTop: "5px",
        }}
      ></div>
     
    </Container>
  );
};

export default Sugerencias;
