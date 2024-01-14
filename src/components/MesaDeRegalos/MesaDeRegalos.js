import React from 'react';
import { Box, Container, Typography } from "@mui/material";
import Link from '@mui/material/Link';

const styles = {
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
    position: "relative",  // Establecer la posición relativa
    border: "1.2px solid #CBB197",
    borderRadius: "10px",
    width: "50%",
    margin: "auto",
    marginBottom: "5px",
    marginTop: "5px",
  },
  imagen: {
    width: "95%",
    height: "auto",
    margin: "10px 0",  // Ajustar el margen vertical
  }, // Ajusta el margen según sea necesario
  };


const MesaDeRegalos = () => {
  return (
    <Container
      sx={{
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <div style={{ borderBottom: "1px solid #7D5730", width: "50vw" }}></div>
      </Box>
      <Typography variant="horaP">MESA DE REGALOS</Typography>
      <div style={{ borderBottom: "1px solid #7D5730", width: "50vw" }}></div>
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
          algo más, ponemos a su disposición
        </Typography>
      </div>
      <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51201601">
      <div style={styles.imagenContenedor}>
       
          <img src="/img/7.png" alt="logo" width="100%" height="auto" style={styles.imagen} />
       
        <Box sx={styles.text}>
          <Typography variant="h3">Núm. de Evento: 51201601</Typography>
          <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51201601">
            <Typography variant="h11">VER MESA DE REGALOS</Typography>
          </Link>
        </Box>
      </div>
      </Link>
      <Link href="https://www.elpalaciodehierro.com/buscar?eventId=380437">
      <div style={styles.imagenContenedor}>
       
          <img src="/img/7.1.png" alt="Imagen 1" width="95%" height="auto" style={styles.imagen} />
      
        <Box sx={styles.text}>
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
