import { Container, Typography, Box } from "@mui/material";

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
          justifyContent: "space-around",
          alignItems: "center",
          height: "60%",
        }}
      >
        <Typography variant="h2"> CEREMONIA RELIGIOSA </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h8" sx={{ typography: "bold" }}>
            PARROQUIA MARIA MADRE
          </Typography>
          <Typography variant="h8"> DE LA DIVINA GRACIA </Typography>
        </div>
        <Typography variant="h8"> 18:30 hrs. </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2"> Rincón de Frascati 100, </Typography>
          <Typography variant="h2"> Nueva Rinconada de los Andes. </Typography>
        </div>
        <button style={{ borderRadius: "15%", padding: "15px" }}>
          {" "}
          ¿COMO LLEGAR?
        </button>
      </Box>
    </Container>
  );
};

export default Itinerario;
