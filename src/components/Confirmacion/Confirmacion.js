//import React from 'react';
import { Container, Button, Box, Typography } from "@mui/material";

const styles = {
  button : {
    //color: "D9D9D9",
    width: `clamp(7rem, 8.5rem, 13rem)`,
    height: `clamp(1.8rem, 2.5rem, 3.5rem)`,
    borderRadius: "40px",
    backgroundColor: "#F4EBE2",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize:`clamp(12px, 0.8rem, 0.9rem)`,
    fontStyle: "normal",
    fontWeight: "400px",
    lineHeight: "normal",
    marginBottom:"10px", 
    color: "#7D5730",
  },}
const Confirmacion = () => {
  return (
    <Container   sx={{
      height: "100%",
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
      <Box
        sx={{
          background: "#E6D4C2",
          height: "200px",
          width: "80%",
          //display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          marginTop: "40px",
          marginBottom: "40px",

          borderTopLeftRadius: "15px",
          borderTopRightRadius: "15px",
          borderBottomLeftRadius: "15px",
          borderBottomRightRadius: "15px",
        }}
      >
         <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
            gap: "10px",
            //alignItems: "center",
          }}
        >
        <Typography variant="hora" sx={{ textAlign: "center" }}>CONFIRMACION DE ASISTENCIA</Typography>

        <Typography variant="h2" sx={{ textAlign: "center" }}>FAM. HERNANDEZ ACEBO</Typography>
        <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" sx={{...styles.button, textAlign: "center"}}>
          Confirmar Asistencia
        </Button>
        </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Confirmacion;
