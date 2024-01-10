import { Typography, Box } from "@mui/material";
//import fotoInicio from '@/public/img/fotoInicio.jpg';
import theme from "../../theme";

const styles = {
  container: {//cambie el container por un div
    background: `url("/img/1.jpg")`,
    position: "relative",
    margin: "0px 0px",
    backgroundPosition: '50% 10%',
    width: "100%",
    height: "100vh",
    //backgroundAttachment: "fixed",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    alignContent:'center',
    backgroundSize:'cover'
  },
  textTop: {
    position: "absolute",
    top: "0%", // Ajusta la posición vertical del texto "ANDREA & DIEGO"
    width: "100%",
    display: "flex",
    displayDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Para centrar verticalmente
    color: theme.palette.primary.main,
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: `clamp(2rem, 8vw, 6rem)`,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
    
  },
  textContainer: {
    position: "absolute",
    bottom: "20%", // Coloca el cuadro en la parte inferior
    left: "50%",
    transform: "translateX(-50%)", // Centra horizontalmente
    width: "64%",
    height: "auto", // Anchura del cuadro
    //backgroundColor: "#E6D4C2",
    background: `url("/img/1.1.png")`,
    padding: "5px",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textShadow: '2px 2px 4px rgba(125, 87, 46, 0.2)', //lo agregue el 2 enero
    paddingTop:'10px',
    paddingBottom:'10px',
    // fontSize: `clamp(5px, 5vw, 3.5rem)`,
  },
  numbersContainer: {
    position: "absolute",
    top: "83%", // Coloca el cuadro en la parte inferior
    paddingRight: '15px',
    paddingLeft: '15px',
    transform: "translateX(-50%)",
    width: "auto",
    display: "flex",
    //alignItems: "flex-start",
    textColor: "#FFFFFF",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",//lo agregue 2 enero
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius:'50px',
    backdropFilter: "blur(1px)",
  },
};

const Inicio = () => {
  return (
    <div style={styles.container}>
      <Typography variant="h1" component="h3" style={styles.textTop}>
        ANDREA & DIEGO
      </Typography>
      <Box>
      <Box style={styles.textContainer}>
        <div style={{ width: "50%" }}>
          <Typography variant="h3">VIERNES</Typography>
          <Typography variant="h3">21 DE ABRIL 2024</Typography>
        </div>
        <div style={{ borderLeft: "0.5px solid #7D5730", width: "50%" }}>
          <Typography variant="h3">SAN LUIS POTOSÍ,</Typography>
          <Typography variant="h3">S.L.P.</Typography>
        </div>
      </Box>
      <div style={styles.numbersContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "70px",
          }}
        >
          <Typography variant="reloj">23 </Typography>

          <Typography variant="reloj" style={{ width: "100%" }}>
            Días
          </Typography>
        </div>
        <Typography variant="reloj"> : </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            flexDirection: "column",
          }}
        >
          <Typography variant="reloj">30 </Typography>
          <Typography variant="reloj" style={{ marginLeft: "10px" }}>
            Horas
          </Typography>
          
        </div>
        <Typography variant="reloj"> : </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            flexDirection: "column",
          }}
        >
          <Typography variant="reloj">30 </Typography>
          <Typography variant="reloj" style={{ marginLeft: "10px" }}>
            Minutos
          </Typography>
        </div>
        <Typography variant="reloj"> : </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            flexDirection: "column",
          }}
        >
          <Typography variant="reloj">30 </Typography>
          <Typography variant="reloj" style={{ marginLeft: "10px" }}>
            Seg.
          </Typography>
        </div>
       
      </div>
      </Box>
    </div>
  );
};

export default Inicio;
