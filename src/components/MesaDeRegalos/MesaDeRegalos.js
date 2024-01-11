//import React from 'react';
import { Box, Container, Typography } from "@mui/material";

const styles = {
  text: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    with: "100%",
    top: "85%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
  },
  imagenContenedor: {
    position: "relative",
    with: "100%",
    border:
      "2px solid #CBB197" /* Ajusta el color y ancho del borde según tus preferencias */,
    borderRadius: "10px",
  },
};

const MesaDeRegalos = () => {
  return (
    <Container
      sx={{
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Para centrar verticalmente
        alignItems: "center",
        color: "white",
        marginTop: "0",
        marginBottom: "15px",
        gap: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          //marginBottom: "5px",
        }}
      >
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "80vw" }}
        ></div>
      </Box>
      <Typography variant="horaP">MESA DE REGALOS</Typography>
      <div
        style={{
          borderBottom: "0.3px solid #7D5730",
          width: "80vw",
          //marginTop: "5px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h3">
          Su presencia y compañía siempre serán nuestro
        </Typography>
        <Typography variant="h3">
          mejor regalo. Sin embargo, si desean obsequiarnos
        </Typography>
        <Typography variant="h3">
          algo más, pueden hacerlo a través de estas sugerencias.
        </Typography>
      </div>
      <div style={styles.imagenContenedor}>
        <img src="/img/7.png" alt="logo" width="320" height="160" />
        <Box sx={styles.text}>
          <Typography variant="h11">Num. Evento</Typography>
        </Box>
      </div>
      <div style={styles.imagenContenedor}>
        <img src="/img/7.1.png" alt="Imagen 1" width="320" height="160" />
        <Box sx={styles.text}>
          <Typography variant="h11">Num. Evento</Typography>
        </Box>
      </div>
      <div
        style={{
          padding:"20px", 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">SANTANDER</Typography>
        <Typography variant="h3">ANDREA HDZ ACEBO</Typography>
        <Typography variant="h3">5579070128662353</Typography>
      </div>
    </Container>
  );
};

export default MesaDeRegalos;
