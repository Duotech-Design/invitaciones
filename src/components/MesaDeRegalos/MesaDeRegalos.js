//import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const styles = {
  box: {
    //color: "D9D9D9",
    height: "50px",
    width: "60%",
    backgroundColor: "#D9D9D9",
    paddingLeft: "0px",
    paddingRight: "0px",
  }}

const MesaDeRegalos = () => {
  return (
    <Container sx={{
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
          style={{ borderBottom: "0.3px solid #7D5730", width: "300px" }}
        ></div>
      </Box>
      <Typography variant="h14" component="h1">
        MESA DE REGALOS
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
      <Typography variant="h3">
      Su presencia y compañía siempre serán nuestro
      </Typography>
      <Typography variant='h3'>
      mejor regalo. Sin embargo, si desean obsequiarnos 
      </Typography>
      <Typography variant='h3'>
      algo más, pueden hacerlo a través de estas 
      </Typography>
      <Typography variant='h3'>
      sugerencias.
      </Typography>
      </div>
      <div style={styles.box}></div>
      <Typography variant='h3'>
      Click en LOGO
      </Typography>
      <Typography variant='h3'>
      NUM. Evento
      </Typography>
    </Container>
  );
}

export default MesaDeRegalos;
