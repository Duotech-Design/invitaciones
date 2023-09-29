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
    marginBottom:"10px" 
  },
};

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
          height: "60%",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "10px" }}>
          {" "}
          RECEPCIÓN{" "}
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
            SALON DE EVENTOS
          </Typography>
          <Typography
            variant="h8"
            sx={{ typography: "bold", marginBottom: "10px" }}
          >
            TALLER 2560
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h8"> SOLO ADULTOS </Typography>
          <Typography variant="h11"  sx={{ marginBottom: "10px", textAlign: "center" }}>
            LLEVAR IDENTIFIACIÓN OFICIAL.
          </Typography>
        </div>
        <Typography variant="h2" sx={{ marginBottom: "10px" }}>
          {" "}
          20:00 HRS.{" "}
        </Typography>
        <Typography variant="h11" sx={{ marginBottom: "10px", textAlign: "center" }}>
          {" "}
          AV. CONSTITUCIÓN 2560,
          CONSTITUYENTES 2DA SECC. 78622.
        </Typography>
        <button style={styles.button}>¿COMO LLEGAR?</button>
      </Box>
    </Container>
  );
};

export default Itinerario2;
