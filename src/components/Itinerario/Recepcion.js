import { Typography, Box } from "@mui/material";
import Link from '@mui/material/Link';

import 'animate.css';

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
    '&:hover': {
      animation: 'headShake 1s',
    },
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
            src="/img/4.jpg"
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
              SALÓN DE EVENTOS
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
            19:30 hrs.{" "}
          </Typography>
          <Typography
            variant="h11"
            sx={{ marginBottom: "10px", textAlign: "center" }}
          >
            {" "}
            AV. CONSTITUCIÓN 2560, CONSTITUYENTES 2da secc. 78622.
          </Typography>
          <Link href="https://www.google.com.mx/maps/place/TALLER+2560/@22.1287662,-100.9645226,17z/data=!3m1!4b1!4m6!3m5!1s0x842aa26b3dbf9457:0x21eb5f451e3fb474!8m2!3d22.1287662!4d-100.9619423!16s%2Fg%2F11g7p3r9f2?entry=ttu">
        <button className="animate__animated animate__headShake" style={styles.button}>
          VER MAPA
        </button>
      </Link>
        </Box>
      </div>
      
    </>
  );
};

export default Recepcion;
