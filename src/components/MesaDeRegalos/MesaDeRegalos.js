//import React from 'react';
import { Box, Container, Typography } from "@mui/material";

const styles = {
  box: {
    //color: "D9D9D9",
    //height: "50px",
    
    width: "60%",
    objectFit: "contain",
    //backgroundColor: `url("/img/liverpool.svg")`,
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  box2: {
    //color: "D9D9D9",
    height: "60%",
    width: "80%",
    objectFit: "cover",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  text: {
    position: "absolute",
    top: "75%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1",
  },
  imagenContenedor: {
    position: "relative",
    
  }
};

const MesaDeRegalos = () => {
  return (
    <Container
      sx={{
        height: "800px",
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
      <Box>
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "300px" }}
        ></div>
      </Box>
      <Typography variant="h14" component="h1">
        MESA DE REGALOS
      </Typography>
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
          algo más, pueden hacerlo a través de estas
        </Typography>
        <Typography variant="h3">sugerencias.</Typography>
      </div>
      <div style={styles.imagenContenedor}>
      <img src="/img/liverpool.svg" alt="logo" style={styles.box} />
      <Typography sx={styles.text} variant="h3">
        Click en LOGO
      </Typography>
      <Typography variant="h3">NUM. Evento</Typography>
      </div>
      <img src="/img/palaciodeHierro.svg" alt="logo" style={styles.box2} />
      <Typography variant="h3">Click en LOGO</Typography>
      <Typography variant="h3">NUM. Evento</Typography>
      <div
        sx={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">SANTANDER</Typography>
        <Typography variant="h3">ANDREA HDZ ACEBO</Typography>
        <Typography variant="h3">000000000000</Typography>
      </div>
      <div style={styles.box2}></div>
    </Container>
  );
};

export default MesaDeRegalos;
