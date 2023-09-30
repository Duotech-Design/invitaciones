import { Container, Typography, Box } from "@mui/material";

const styles = {
  button: {
    width: "138px",
    height: "40px",
    borderRadius: "50px",
    border: "1px solid #7D5730",
    background: "rgba(255, 255, 255, 0.00)",
    color: "#7D5730",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400px",
    lineHeight: "normal",
  },
};

const Itinerario = () => {
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
          gap:'2rem',
          //justifyContent: "space-around",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography variant="h2" sx={{ marginBottom: "10px" }}>
          {" "}
          CEREMONIA RELIGIOSA{" "}
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
            PARROQUIA MARIA MADRE
          </Typography>
          <Typography variant="h8"> DE LA DIVINA GRACIA </Typography>
        </div>
        <Typography variant="h8" sx={{ marginBottom: "10px" }}>
          {" "}
          18:30 hrs.{" "}
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
          <Typography variant="h2"> Rincón de Frascati 100, </Typography>
          <Typography variant="h2"> Nueva Rinconada de los Andes. </Typography>
        </div>
        <button style={styles.button}>¿COMO LLEGAR?</button>
      </Box>
    </Container>
  );
};

export default Itinerario;
