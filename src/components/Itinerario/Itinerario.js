//import React from 'react';
import { Container, Typography, Box } from "@mui/material";

const styles = {
  button: {
    width: "128px",
height: "38px",
borderRadius: "20px",
border: "1px solid #7D5730",
background: "rgba(255, 255, 255, 0.00)",
color: "#7D5730",
textAlign: "center",
fontFamily: "Cinzel",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "400px",
lineHeight: "normal",
  }
}

const Itinerario = () => {
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
          height:"60%"
        }}
      >
        <Typography variant="h2" > CEREMONIA RELIGIOSA </Typography>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Typography variant="h8" sx={{ typography: "bold" }}>
          PARROQUIA MARIA MADRE 
        </Typography>
        <Typography variant="h8"> DE LA DIVINA GRACIA  </Typography>
        </div>
        <Typography variant="h8"> 18:30 hrs. </Typography>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Typography variant="h2"> Rincón de Frascati 100, </Typography>
        
        <Typography variant="h2"> Nueva Rindonada de los Andes. </Typography>
        </div>
        <button  style={styles.button}> ¿COMO LLEGAR?</button>
      </Box>
    </Container>
  );
};

export default Itinerario;
