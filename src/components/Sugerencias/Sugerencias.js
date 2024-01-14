//import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Link from "@mui/material/Link";

const styles = {
  logo: {
    maxWidth: "45%",
    maxHeight: "45%",
  },
  circle: {
    width: "100px",
    height: "100px",
    border:"3px solid #FFF",
    borderRadius: "50%",
    backgroundColor: "white",
    position: "relative",
    top: "10px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    alignContent: "center" // Ajusta la posición vertical según tus necesidades
  },
  largeLogo: {
    width:"130px",
    height:"135px"
  }
 
};

const Sugerencias = () => {
  return (
    <Container
      sx={{
        height: "600px",
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
          style={{ borderBottom: "0.3px solid #7D5730", width: "50vw" }}
        ></div>
      </Box>
      <Typography variant="horaP" sx={{ textAlign: "center" }}>
        SUGERENCIAS PEINADO Y MAQUILLAJE
      </Typography>
      <div
        style={{
          borderBottom: "0.3px solid #7D5730",
          width: "50vw",
          marginTop: "5px",
        }}
      ></div>

      {/* Contenedor de círculo e imágenes */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          width: "50vw",
          justifyContent: "space-between",
        }}
      >
        {/* Primer conjunto de círculo e imágenes */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            flex: "1",
          }}
        >
          {/* Círculo blanco */}
          <div style={styles.circle}>
            <img src="/img/9.png" alt="Imagen 9" style={styles.largeLogo} />
          </div>

          {/* Imágenes */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              marginTop: "2px",
            }}
          >
            <img src="/img/6.png" alt="Instagram" style={styles.logo} />
            <img src="/img/6.1.png" alt="Whatsapp" style={styles.logo} />
          </div>
        </div>
        <div style={{ borderLeft: "0.5px solid #7D5730", flex: "1" }}>
          {/* Segundo conjunto de círculo e imágenes */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Círculo blanco */}
            <div style={styles.circle}></div>

            {/* Imágenes */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                marginTop: "2px",
              }}
            >
              {/* Imágenes con tamaño diferente */}
              <img src="/img/6.png" alt="Instagram" style={styles.logo} />
              <img src="/img/6.1.png" alt="Whatsapp" style={styles.logo} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Sugerencias;
