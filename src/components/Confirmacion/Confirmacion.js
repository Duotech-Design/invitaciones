import { Container, Button, Box, Typography } from "@mui/material";
import Lista from "./Lista";
import React, { useState, useEffect } from 'react';

const styles = {
  container: {
    height: "auto",
    width: "100%",
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
    width: "100%",
    display: "flex",
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
    width:"80%",
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
    fontSize: `clamp(20px, 0.8rem, 0.9rem)`,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
    marginBottom: "10px",
    color: "#7D5730",
  },
};

const guests = [
  "Alison Rangel",
  "Zoy Mendoza",
  "Escareño"
]

const Confirmacion = () => {
  const [isChecked, setIsChecked] = useState(Array(guests.length).fill(true));
  const [cantidad, setCantidad] = useState(isChecked.filter(elemento => elemento === true).length);
  
  const handleCheckboxChange = (index) => {
    const newArray = [...isChecked];
    newArray[index] = !newArray[index];
    const newCantidad = newArray.filter(elemento => elemento === true).length;
    setIsChecked(newArray);
    setCantidad(newCantidad);
  };
  
  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Box sx={styles.boxContent}>
          <Typography variant="horaP" sx={styles.typographyHoraP}>
            CONFIRMACION DE ASISTENCIA
          </Typography>
          <Typography variant="h2" sx={styles.typographyH2}>
            FAM. HERNANDEZ ACEBO
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              background: "#F4EBE2",
              color: "#7D572E",
            }}
          >
            {guests.map((guest, index) => (
              <Lista
                key={guest}
                guest={guest}
                check={isChecked[index]}
                handleCheck={() => handleCheckboxChange(index)}
              />
            ))}
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#F4EBE2",
              color: "#7D572E",
            }}
          >
            <Typography>Total de asistentes</Typography>
            <Typography
              sx={{
                padding:'15px'
              }}
            >
              {cantidad}
            </Typography>
          </Container>
          <Button variant="contained" sx={styles.button}>
            Confirmar Asistencia
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Confirmacion;
