//import React from 'react';
import { Container, Typography, Box } from '@mui/material';
//import fotoInicio from '@/public/img/fotoInicio.jpg';
import theme from '../../theme';

const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  textTop: {
    position: 'absolute',
    top: '10%', // Ajusta la posición vertical del texto "ANDREA & DIEGO"
    left: '65%',
    transform: 'translateX(-50%)',
    display: "flex",
    displayDirection: "column",
    alignItems: "center",
    width: "100%",
    textAlign: "center", 
    justifyContet: "center", 
    
    //color: theme.palette.primary.main,
    //fontWeight: theme.typography.h1.fontWeight,
  },
  textContainer: {
    position: 'absolute',
    bottom: '75px', // Coloca el cuadro en la parte inferior
    left: '50%',
    transform: 'translateX(-50%)', // Centra horizontalmente
    width: '60%', // Anchura del cuadro
    backgroundColor: '#E6D4C2',
    padding: '20px',
    borderRadius: '40px',
    display: "flex",
    justifyContent: "space-around"
  },
};

const Inicio = () => {
  return (
    <Container style={styles.container} >
     <img
        src='/img/fotoInicio.jpg'
        alt="Imagen de inicio" // Propiedad alt para describir la imagen
        style={styles.image}
      />
    
      <Typography variant="h1" component="h3" style={styles.textTop}>
      ANDREA   &  DIEGO
      </Typography>
      <Box style={styles.textContainer} >
      <div >
        <Typography variant='h3'>
        VIERNES
          </Typography> 
          <Typography variant='h3'>
     21 DE ABRIL 2024
          </Typography> 
          </div>
          <div style={{borderLeft:"1px solid black"}}>
          <Typography style={{ paddingLeft:"15px"}} variant='h3'>
        SAN LUIS POTOSÍ, 
          </Typography> 
          <Typography variant='h3'>
    S.L.P.
          </Typography> 
          </div>

      </Box>
    <Box>
      <div>
        <Typography>

        </Typography>
      </div>
   
    </Box>
      <Typography variant="body1">
        Texto de bienvenida e información sobre la boda.
      </Typography>
    </Container>
  );
}

export default Inicio;

