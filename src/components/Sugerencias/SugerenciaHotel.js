//import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Link from '@mui/material/Link';

const styles = {
  logo: {
    maxWidth: "30%",
    maxHeight: "30%"
  },
    button: {
      width: "auto",
      height: "auto",
      borderRadius: "50px",
      border: "1px solid #7D5730",
      background: "rgba(255, 255, 255, 0.00)",
      color: "#7D5730",
      textAlign: "center",
      fontFamily: "Cinzel",
      fontSize: `clamp(2.5px, 3vw, 1.5rem)`,
      fontStyle: "normal",
      fontWeight: "500",
      padding:"10px 15px 10px 15px",
    },
  };
  


const SugerenciasHotel = () => {
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
          style={{ borderBottom: "0.3px solid #7D5730", width: "50vw" }}
        ></div>
      </Box>
      <Typography variant="horaP" sx={{ textAlign: "center" }}>
        SUGERENCIAS 
      </Typography>
      <div>
      <Typography variant="horaP" sx={{ textAlign: "center" }}>
      HOTELES
      </Typography>
      </div>
      <div
        style={{
          borderBottom: "0.3px solid #7D5730",
          width: "50vw",
          marginTop: "5px",
        }}
      ></div>
        <Typography
              variant="h3"
              sx={{ textAlign: "center", marginLeft: "5px" }}
            >
              Mencionar boda de Andrea y Diego
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
          <Typography variant="h8" sx={{ typography: "bold" }}>
            CITY EXPRESS PLUS PLAZA TANGENTE
          </Typography>
          <Typography variant="h3"> Código :ANYDI </Typography>
        </div>
        <Typography variant="hora" sx={{ marginBottom: "10px" }}>
       
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
          <Typography variant="h11" sx={{ textAlign: "center" }}> PlL. LOMAS LOTE 52,

LOMAS DEL TECNOLÓGICO, </Typography>
          <Typography variant="h11" sx={{ marginBottom: "10px", textAlign: "center" }}> San Luis Potosí, S.L.P. </Typography>
        </div>
        <Link href="https://www.google.com/maps/place/City+Express+Plus+San+Luis+Potos%C3%AD/@22.1300382,-101.032409,19.12z/data=!4m8!3m7!1s0x842a99cc41533565:0xeb7f6233789f133d!5m2!4m1!1i2!8m2!3d22.1298168!4d-101.0322726?coh=164777&entry=tt&shorturl=1">
        <button style={styles.button}>VER MAPA
       
        </button>
        </Link>
            
    </Container>
  );
};

export default SugerenciasHotel;
