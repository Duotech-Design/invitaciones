import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Link from '@mui/material/Link';

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
    borderBottom: "1px solid #7D5730",
    width: "50vw",
  },
  title: {
    marginTop: "30px",
    marginBottom: "5px",
    fontSize: "2rem",
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
    fontSize: "1rem", // Tamaño de letra ajustado para ambos contenedores
    textAlign: "center",
    margin: "5px 0",
  },
};

const MesaDeRegalos = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.divider} />
      <Typography variant="horaP" sx={styles.title}>
        MESA DE REGALOS
      </Typography>
      <Box sx={styles.divider} />
      {/* Resto del código */}
      <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51201601">
        <div style={styles.imagenContenedor}>
          <img src="/img/7.png" alt="logo" width="100%" height="auto" style={styles.imagen} />
          <Box sx={{...styles.text, ...styles.desktopText}}>
            <Typography variant="h3">Núm. de Evento: 51201601</Typography>
            <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51201601">
              <Typography variant="h11">VER MESA DE REGALOS</Typography>
            </Link>
          </Box>
        </div>
      </Link>
      <Link href="https://www.elpalaciodehierro.com/buscar?eventId=380437">
        <div style={{...styles.imagenContenedor, width: '80%'}}>
          <img src="/img/7.1.png" alt="Imagen 1" width="100%" height="auto" style={styles.imagen} />
          <Box sx={{...styles.text, ...styles.desktopText}}>
            <Typography variant="h3">Núm. de Evento: 380437</Typography>
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
        <Typography variant="h3">SANTANDER</Typography>
        <Typography variant="h11">ANDREA HERNÁNDEZ ACEBO</Typography>
        <Typography variant="h3">5579070128662353</Typography>
      </div>
    </Container>
  );
};

export default MesaDeRegalos;
