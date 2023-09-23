import { Container, Typography, Box } from "@mui/material";

const styles = {
  button: {
    width: "128px",
height: "38px",
borderRadius: "20px",
border: "1px solid #7D5730",
background: "rgba(255, 255, 255, 0.00)",
color: "#7D5730",
textAlign: "center",
fontFamily: "Cinzel",
fontSize: "12px",
fontStyle: "normal",
fontWeight: "400px",
lineHeight: "normal",
  }
}

const Itinerario2 = () => {
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "white",
        marginTop: "0",
      }}
    >
      <Box sx={{ flex: "1" }}>
        <img
          src="/img/fotoInicio.jpg"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={{
            height: "90%",
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height:"60%"
        }}
      >
        <Typography variant="h2"> RECEPCIÓN  </Typography>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Typography variant="h8" sx={{ typography: "bold" }}>
          SALON DE EVENTOS 
        </Typography>
        <Typography variant="h8" sx={{ typography: "bold" }}>
        TALLER 2560 
        </Typography>
        </div>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <Typography variant="h8"> SOLO ADULTOS </Typography>
        <Typography variant="h2"> LLEVAR IDENTIFIACIÓN OFICIAL. </Typography>
        </div>
        <Typography variant="h2"> 20:00 HRS. </Typography>
        <Typography variant="h2"> Av. Constitución 2560, Constituyentes 2da Secc, 78622 </Typography>
        <button sx={styles.button}> ¿COMO LLEGAR?</button>
      </Box>
    </Container>
  );
};

export default Itinerario2;
