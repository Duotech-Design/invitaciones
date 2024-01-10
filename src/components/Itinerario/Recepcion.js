import { Typography, Box } from "@mui/material";

const styles = {
  button: {
    width: "auto",
    height: "auto",
    borderRadius: "50px",
    border: "1px solid #7D5730",
    background: "rgba(255, 255, 255, 0.00)",
    color: "#7D5730",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize: `clamp(2.5px, 3vw, 1.5rem)`,
    fontStyle: "normal",
    fontWeight: "500",
    padding:"10px 15px 10px 15px",
  },
};

const Recepcion = () => {
  return (
    <>
      <div
       style={{
        height: "100%",
        width: "100%",
        display: "flex",
        color: "white",
        marginTop: "0",
        //marginBottom: "15px"
        }}
      >
        <Box sx={{ flex: "1", height:'auto' }}>
          <img
            src="/img/ADfoto4.jpg"
            alt="Imagen de inicio" // Propiedad alt para describir la imagen
            style={{
              height: "100%",
              width: "100%",
              objectFit: 'cover',  // Puedes cambiar a 'contain' si prefieres mostrar toda la imagen
              objectPosition: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap:'0.2rem',
            alignItems: "center",
            justifyContent:"space-around",
            paddingTop:"15px",
            paddingBottom:"15px",
            height: "auto",
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
              marginBottom: "10px"
            }}
          >
            <Typography variant="h8"> SOLO ADULTOS </Typography>
            <Typography
              variant="h11"
              sx={{ marginBottom: "10px", textAlign: "center" }}
            >
              LLEVAR IDENTIFIACIÓN OFICIAL.
            </Typography>
          </div>
          <Typography variant="hora" sx={{ marginBottom: "10px" }}>
            {" "}
            20:00 hrs.{" "}
          </Typography>
          <Typography
            variant="h11"
            sx={{ marginBottom: "10px", textAlign: "center" }}
          >
            {" "}
            AV. CONSTITUCIÓN 2560, CONSTITUYENTES 2DA SECC. 78622.
          </Typography>
          <button style={styles.button}>¿COMO LLEGAR?</button>
        </Box>
      </div>
      
    </>
  );
};

export default Recepcion;
