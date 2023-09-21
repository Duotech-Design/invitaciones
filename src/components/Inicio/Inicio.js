//import React from 'react';
import { Container, Typography, Box } from "@mui/material";
//import fotoInicio from '@/public/img/fotoInicio.jpg';
import theme from "../../theme";

const styles = {
  container: {
    position: "relative",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
  textTop: {
    position: "absolute",
    top: "10%", // Ajusta la posición vertical del texto "ANDREA & DIEGO"
    left: "65%",
    transform: "translateX(-50%)",
    display: "flex",
    displayDirection: "column",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    justifyContet: "center",
    color: theme.palette.primary.main,
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: `clamp(2rem, 8vw, 6rem)`,

    //color: theme.palette.primary.main,
    //fontWeight: theme.typography.h1.fontWeight,
  },
  textContainer: {
    position: "absolute",
    bottom: "10%", // Coloca el cuadro en la parte inferior
    left: "50%",
    transform: "translateX(-50%)", // Centra horizontalmente
    width: "60%",
    height: "9%", // Anchura del cuadro
    backgroundColor: "#E6D4C2",
    padding: "5px",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // fontSize: `clamp(5px, 5vw, 3.5rem)`,
  },

  numbersContainer: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "flex-start",
    bottom: "3%", // Coloca el cuadro en la parte inferior
    textColor: "#FFFFFF",

  },
};

const Inicio = () => {
  return (
    <Container style={styles.container}>
      <img
        src="/img/fotoInicio.jpg"
        alt="Imagen de inicio" // Propiedad alt para describir la imagen
        style={styles.image}
      />

      <Typography variant="h1" component="h3" style={styles.textTop}>
        ANDREA & DIEGO
      </Typography>

      <Box style={styles.textContainer}>
        <div style={{ width: "50%" }}>
          <Typography variant="h3">VIERNES</Typography>
          <Typography variant="h3">21 DE ABRIL 2024</Typography>
        </div>
        <div style={{ borderLeft: "1px solid black", width: "50%" }}>
          <Typography variant="h3">SAN LUIS POTOSÍ,</Typography>
          <Typography variant="h3">S.L.P.</Typography>
        </div>
      </Box>

      <div style={styles.numbersContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "70px",
          }}
        >
          <Typography variant="h4">12 </Typography>

          <Typography variant="h4" style={{ width: "100%" }}>
            Días
          </Typography>
        </div>
        <Typography variant="h4"> : </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">30 </Typography>
          <Typography variant="h4" style={{ marginLeft: "10px" }}>
            Horas
          </Typography>
          
        </div>
        <Typography variant="h4"> : </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">30 </Typography>
          <Typography variant="h4" style={{ marginLeft: "10px" }}>
            Minutos
          </Typography>
        </div>
        <Typography variant="h4"> : </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">30 </Typography>
          <Typography variant="h4" style={{ marginLeft: "10px" }}>
            Segundos
          </Typography>
        </div>
       
      </div>
    </Container>
  );
};

export default Inicio;
