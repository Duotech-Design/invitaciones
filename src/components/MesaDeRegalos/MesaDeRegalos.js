import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Link from '@mui/material/Link';
import useMediaQuery from '@mui/material/useMediaQuery';


const styles = {
  container: {
    height: "auto",
    width: "100%",
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
    width: "50vw",
    
  },
  title: {
    textAlign: "center",
    fontSize: "2rem", // Tamaño de fuente para modo desktop
    marginBottom: "5px",
  },
  subtitle: {
    borderBottom: "1px solid #7D5730",
    width: "50vw",
    marginBottom: "5px",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    bottom: "0",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "1",
    textAlign: "center",
    width: "100%",
  },
  imagenContenedor: {
    position: "relative",
    border: "1.2px solid #CBB197",
    borderRadius: "10px",
    width: "80%", // Ajustar el ancho según sea necesario
    margin: "auto",
    marginBottom: "5px",
    marginTop: "5px",
  },
  imagen: {
    width: "100%",
    height: "auto",
    margin: "10px 0",
  },
  desktopText: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "165px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "1",
    textAlign: "center",
    width: "100%",
  },
  mobileTitle: {
    fontSize: "1rem", // Ajusta el tamaño de fuente para modo mobile
    marginBottom: "5px",
  },
};

const MesaDeRegalos = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Container sx={styles.container}>
      <Box sx={styles.divider} />
      <Typography variant="horaP" sx={{
          ...styles.title,
          '@media (max-width: 599px)': styles.mobileTitle,
        }}>
        MESA DE REGALOS
      </Typography>
      <Box sx={styles.divider} />
      {/* Resto del código */}
      <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51201601">
        <div style={styles.imagenContenedor}>
          <img src="/img/7.png" alt="logo" width="100%" height="auto" style={styles.imagen} />
          <Box sx={matches ? styles.desktopText : styles.text  }>
            <Typography variant="h11">Núm. de Evento: 51201601</Typography>
            <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51201601">
              <Typography variant="h11">VER MESA DE REGALOS</Typography>
            </Link>
          </Box>
        </div>
      </Link>
      <Link href="https://www.elpalaciodehierro.com/buscar?eventId=380437">
        <div style={{...styles.imagenContenedor, width: '80%'}}>
          <img src="/img/7.1.png" alt="Imagen 1" width="100%" height="auto" style={styles.imagen} />
          <Box sx={matches ? styles.desktopText : styles.text }>
            <Typography variant="h11">Núm. de Evento: 380437</Typography>
            <Link href="https://www.elpalaciodehierro.com/buscar?eventId=380437">
              <Typography variant="h11">VER MESA DE REGALOS</Typography>
            </Link>
          </Box>
        </div>
      </Link>

      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{fontSize:"1.8rem"}} variant="h2">SANTANDER</Typography>
        <Typography variant="h11">ANDREA HERNÁNDEZ ACEBO</Typography>
        <Typography sx={{fontSize:"1.8rem"}} variant="h17">5579070128662353</Typography>
      </div>
    </Container>
  );
};

export default MesaDeRegalos;
