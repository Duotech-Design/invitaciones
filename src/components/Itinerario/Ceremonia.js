import { Typography, Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  button: {
    width: `clamp(7rem, 8.5rem, 13rem)`,
    height: `clamp(1.8rem, 2.5rem, 3.5rem)`,
    borderRadius: "50px",
    border: "1px solid #7D5730",
    background: "rgba(255, 255, 255, 0.00)",
    color: "#7D5730",
    textAlign: "center",
    fontFamily: "Cinzel",
    fontSize:`clamp(12px, 0.8rem, 0.9rem)`,
    fontStyle: "normal",
    fontWeight: "400px",
    lineHeight: "normal",
    marginBottom:"10px"
  },
};

const Ceremonia = () => {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <>
     <img
          src="/img/A&D.jpg"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={{
            width: "100%",
            height: matches ? '450px' : '120px',
            objectFit: 'cover',  // Puedes cambiar a 'contain' si prefieres mostrar toda la imagen
            objectPosition: "center",
          }}
        />
        
    <div
      style={{
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
          src="/img/FOTOPrueba.jpg"
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
          gap:'0.2rem',
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
        <Typography variant="hora" sx={{ marginBottom: "10px" }}>
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
          <Typography variant="h11" sx={{ textAlign: "center" }}> RINCÓN DE FRASCATI 100, </Typography>
          <Typography variant="h11" sx={{ marginBottom: "10px", textAlign: "center" }}> NUEVA RINCONADA DE LOS ANDRES. </Typography>
        </div>
        <button style={styles.button}>¿COMO LLEGAR?</button>
      </Box>
    </div>
    
      </>
  );
};

export default Ceremonia;
