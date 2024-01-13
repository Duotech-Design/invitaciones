import { Typography, Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from '@mui/material/Link';

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

const Ceremonia = () => {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <>
     <img
          src="/img/3.jpg"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={{
            width: "100%",
            height: matches ? '450px' : '220px',
            objectFit: 'cover',  // Puedes cambiar a 'contain' si prefieres mostrar toda la imagen
            objectPosition: "center",
          }}
        />
        
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        color: "white",
        marginTop: "0",    
      }}
    >
      <Box sx={{ flex: "1" }}>
        <img
          src="/img/3.1.jpg"
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
          18:00 hrs.{" "}
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
        <Link href="https://www.google.com.mx/maps/place/Parroquia+Mar%C3%ADa+Madre+de+la+Divina+Gracia/@22.1346992,-101.0417808,17.88z/data=!4m6!3m5!1s0x842a993a6f66b6fd:0x1068e79d07a99321!8m2!3d22.1352048!4d-101.0408903!16s%2Fg%2F11bwl3nt2s?entry=ttu">
        <button style={styles.button}>VER MAPA
       
        </button>
        </Link>
      </Box>
    </div>
    
      </>
  );
};

export default Ceremonia;
