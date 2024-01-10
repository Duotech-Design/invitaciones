// import React from 'react';
import { Container, Button, Box, Typography } from "@mui/material";

const styles = {
  container: {
    height: "auto",
    width: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Para centrar verticalmente
    alignItems: "center",
    marginBottom: "15px",
    marginTop: "15px",
  },
  box: {
    background: "#E6D4C2",
    height: "auto",
    width: "80%",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    marginTop: "10px",
    marginBottom: "20px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    gap: "20px",
    padding:"20px"
  },
  typographyHoraP: {
    textAlign: "center",
  },
  typographyH2: {
    textAlign: "center",
  },
  button: {
    width: "auto",
    height: "auto",
    borderRadius: "50px",
    backgroundColor: "#F4EBE2",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: `clamp(12px, 0.8rem, 0.9rem)`,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginBottom: "10px",
    color: "#7D5730",
  },
};

const Confirmacion = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.box}>
        <Box sx={styles.boxContent}>
          <Typography variant="horaP" sx={styles.typographyHoraP}>
            CONFIRMACION DE ASISTENCIA
          </Typography>
          <Typography variant="h2" sx={styles.typographyH2}>
            FAM. HERNANDEZ ACEBO
          </Typography>
          <Box sx={{ textAlign: "center" }}>
            <Button variant="contained" sx={styles.button}>
              Confirmar Asistencia
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Confirmacion;
