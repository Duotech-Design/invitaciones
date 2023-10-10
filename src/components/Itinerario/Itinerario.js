import { Container, Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  box: {
    //color: "D9D9D9",
    height: "200px",
    width: "100%",
    backgroundColor: "#D9D9D9",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  box2: {
    height: "60%",
    width: "100%",
    backgroundColor: "#D9D9D9",
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  iglesia: {
    //position: "relative",
    //textAlign: "center",
    margin: "0px 0px",
    maxWidth: "30%",
    maxHeight: "30%",
  },
};

function ColorsTimeline() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //height:"100%"
        }}
      >
        <img
          src="/img/iglesia.svg"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={styles.iglesia}
        />
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
          <Typography variant="h11">CEREMONIA RELIGIOSA</Typography>
          <Typography>6:00 PM</Typography>
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Typography variant="h11"> Parroquia maria madre</Typography>
            <Typography variant="h11">de la divina gracia</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //height:"100%"
        }}
      >
        <img
          src="/img/copas.svg"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={styles.iglesia}
        />
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
          <Typography variant="h11">RECEPCIÓN</Typography>
          <Typography>9:00 PM</Typography>
          <Box sx={{display:"flex", flexDirection:"column"}}>
            <Typography variant="h11"> SALÓN DE EVENTOS</Typography>
            <Typography variant="h11">TALLER 2560</Typography>
          </Box>
        </Box>
      </Box>
     
    </Box>
  );
}
const Itinerario = () => {
  const matches = useMediaQuery('(min-width:600px)');
  console.log(matches, "media query")
  return (
    <>
      <Container
        sx={{
          height: "600px",
          width: "100%",
          display: "flex",
          paddingLeft: "0px",
          paddingRight: "0px",
          flexDirection: "column",

          //alignItems: "center",
          //color: "white",
          marginTop: "0",
        }}
      >
        <div style={styles.box}></div>
        <Box sx={{ display: "flex" }}>
          {matches ? <Box sx={{ flex: "1" }} >

            <div style={styles.box2}></div>
          </Box> : null}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              //gap: "0.2rem",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              backgroundImage: "url('/img/fondo.svg')",
            }}
          >
            <Typography
              variant="h2"
              sx={{ marginTop: "20px", marginBottom: "10px" }}
            >
              {" "}
              ITINERARIO{" "}
            </Typography>
           
            <ColorsTimeline />
            <Typography
              variant="h2"
              sx={{ marginTop: "20px", marginBottom: "10px" }}
            >
              {" "}
              A.D{" "}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Itinerario;
