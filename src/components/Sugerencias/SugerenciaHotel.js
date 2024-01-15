import React from 'react';
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import Link from '@mui/material/Link';

const styles = {
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginTop: "0",
    marginBottom: "15px",
    gap: "10px",
  },
  divider: {
    borderBottom: "0.3px solid #7D5730",
    width: "50%",
    marginBottom: "10px",
  },
  title: {
    textAlign: "center",
    fontSize: "2rem", // Tamaño de fuente para modo desktop
    marginBottom: "2px",
  },
  mobileTitle: {
    fontSize: "1rem", // Ajusta el tamaño de fuente para modo mobile
    marginBottom: "2px",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.2rem",
    marginBottom: "10px",
    '@media (max-width: 599px)': {
      fontSize: '0.9rem', // Tamaño de fuente para modo mobile
    },
  },
  hotelName: {
    fontFamily: "Cinzel",
    fontWeight: "bold",
    fontSize: "1.5rem", // Tamaño de fuente para modo desktop
    color: "#7D5730",
    marginBottom: "5px",
    '@media (max-width: 599px)': {
      fontSize: '1rem', // Tamaño de fuente para modo mobile
    },
  
  },
  hotelCode: {
    fontFamily: "Cinzel",
    fontSize: "1rem",
    marginBottom: "10px",
  },
  address: {
    textAlign: "center",
    marginBottom: "10px",
  },
  mapButton: {
    width: "auto",
    height: "auto",
    borderRadius: "50px",
    border: "1px solid #7D5730",
    background: "rgba(255, 255, 255, 0.00)",
    color: "#7D5730",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: "1rem",
    fontWeight: "500",
    padding: "10px 15px",
  },
    
  
};


const SugerenciasHotel = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.divider} />
      <Typography
        variant="horaP"
        sx={{
          ...styles.title,
          '@media (max-width: 599px)': styles.mobileTitle,
        }}
      >
        SUGERENCIAS
        <br />
        HOTELES
      </Typography>
      <Box sx={styles.divider} />
      <Typography variant="h3" sx={styles.subtitle}>
        Mencionar boda de Andrea y Diego
      </Typography>
      <div sx={{...styles.hotelInfo, '@media (max-width: 599px)': {textAlign: 'center'}}}>
        <Typography variant="h1" sx={styles.hotelName}>
          CITY EXPRESS PLUS
          <br /> 
          PLAZA TANGENTE
        </Typography>
        <Typography variant="hora" sx={{ marginBottom: "10px" }}></Typography>
        <Typography variant="h11" sx={styles.address}>
          PL. LOMAS LOTE 52,
          <br />
          LOMAS DEL TECNOLÓGICO,
          <br />
          San Luis Potosí, S.L.P.
        </Typography>
      </div>
      <Typography variant="hora" sx={{ marginBottom: "5px" }}></Typography>
      <div sx={styles.hotelInfo}>
        <Typography variant="h3" sx={styles.hotelCode}>
          Código : ANYDI
        </Typography>
      </div>
      <Link href="https://www.google.com/maps/place/City+Express+Plus+San+Luis+Potos%C3%AD/@22.1300382,-101.032409,19.12z/data=!4m8!3m7!1s0x842a99cc41533565:0xeb7f6233789f133d!5m2!4m1!1i2!8m2!3d22.1298168!4d-101.0322726?coh=164777&entry=tt&shorturl=1">
        <Button sx={styles.mapButton}>VER MAPA</Button>
      </Link>
    </Container>
  );
};

export default SugerenciasHotel;
