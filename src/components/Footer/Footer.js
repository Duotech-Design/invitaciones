import React from 'react';
import { Container, Typography, Box } from "@mui/material";

const styles = {
  section: {
    width: "120px",
    height: "100px",
    borderRadius: "50px",
    overflow: "hidden",  // Añadido para asegurar que la imagen esté completamente dentro del div
  },
};

const Footer = () => {
  const currentDate = new Date();

  return (
    <Container
      sx={{
        backgroundColor: "#F4EBE2",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column", // Agregado para centrar la imagen y la fecha verticalmente
        alignItems: "center",     // Agregado para centrar la imagen y la fecha horizontalmente
      }}
    >
      <div style={styles.section}>
        <img
          src="/img/1.2.png"
          alt="iglesia"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",  // Ajuste para asegurar que la imagen se ajuste correctamente
          }}
        />
      </div>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#F4EBE2",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            width: "100%",
            textAlign: "center",
            backgroundColor: "#F4EBE2",
          }}
        >
          © {currentDate.getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
