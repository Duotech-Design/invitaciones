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
  },
box2:{
  height: "400px",
  width: "100%",
  backgroundColor: "#D9D9D9",
  paddingLeft: "0px",
  paddingRight: "0px",
}}
const Confirmacion = () => {
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
      <Box
        sx={{
          background: "#E6D4C2",
          height: "200px",
          width: "80%",
          //display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          marginTop: "10px",
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
        <Typography variant="horaP" sx={{ textAlign: "center" }}>CONFIRMACION DE ASISTENCIA</Typography>

        <Typography variant="h2" sx={{ textAlign: "center" }}>FAM. HERNANDEZ ACEBO</Typography>
        <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" sx={{...styles.button, textAlign: "center"}}>
          Confirmar Asistencia
        </Button>
        </Box>
        </Box>
      </Box>
      <Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom:"5px" }}
      >
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "300px" }}
        ></div>
        
      </Box>
      <Typography variant="h14"  sx={{ textAlign: "center" }}>
          CÓDIGO DE VESTIMENTA
        </Typography>
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "300px" , marginTop:"5px"}}
        ></div>
          <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px", marginBottom:"5px" , flexDirection:"column"}}
      >
        <Typography variant="h2"  sx={{ textAlign: "center", marginTop:"5px" }}>
          FORMAL
        </Typography>
        <div
          style={{  width: "100%" , marginTop:"5px", display:"flex", alignItems:"flex-end", justifyContent:"center"}}
        > 
<Typography variant="h8"  sx={{ textAlign: "center" }}>
          HOMBRES: 
        </Typography>

<Typography variant="h2"  sx={{ textAlign: "center", marginLeft:"5px" }}>
          Traje con corbata 
        </Typography>
        </div>
        <div
          style={{  width: "100%" , marginTop:"5px", display:"flex", alignItems:"flex-end", justifyContent:"center"}}
          > 
<Typography variant="h8"  sx={{ textAlign: "center", marginTop:"5px" }}>
          MUJERES: 
        </Typography>

<Typography variant="h2"  sx={{ textAlign: "center" , marginLeft:"5px"}}>
          Vestido largo
        </Typography>
        </div>
        
        
        
      </Box>
       
      </Box>
    </Container>
  );
};

export default Confirmacion;
