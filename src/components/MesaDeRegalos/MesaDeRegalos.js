import React, { forwardRef } from 'react';
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
    position: "relative",
    border: "2px solid #CBB197",
    borderRadius: "10px",
    width: "50%",
    margin: "auto",
    marginBottom: "5px", // Ajusta el espacio entre la imagen y el texto
    marginTop: "5px", // Ajusta la posición vertical de la imagen
  },
};

const MesaDeRegalos = (props, ref) => {
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

      ref={ref}
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
      <div style={styles.imagenContenedor}>
        <img src="/img/7.png" alt="logo" width="100%" height="auto" />
        <Box sx={styles.text}>
          <Typography variant="h11">Número de Evento: 51201601</Typography>
          <Link href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51201601">
            <Typography variant="h11">VER MESA DE REGALOS</Typography>
          </Link>
        </Box>
      </div>
      <div style={styles.imagenContenedor}>
  <img src="/img/7.1.png" alt="Imagen 1" width="95%" height="auto" />
  <Box sx={{ ...styles.text, marginTop: "5px", marginBottom: "5px" }}>
    <Typography variant="h11">Número de Evento: 380437</Typography>
    <Link href="https://www.elpalaciodehierro.com/buscar?eventId=380437">
      <Typography variant="h11">VER MESA DE REGALOS</Typography>
    </Link>
  </Box>
</div>

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
        <Typography variant="h3">ANDREA HDZ ACEBO</Typography>
        <Typography variant="h3">5579070128662353</Typography>
      </div>
    </Container>
  );
};

export default forwardRef(MesaDeRegalos);
