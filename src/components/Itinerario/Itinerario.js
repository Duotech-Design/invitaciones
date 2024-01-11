import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  box: {
    //color: "D9D9D9",
    //height: "350px",
    //width: "100%",
    background: `url("/img/5.jpg")`,
   
    //backgroundSize: "100%",
    //backgroundRepeat: 'no-repeat',
    padding:'0px, 0px',
    flex: "1",
    
    //objectFit: 'cover',
    backgroundAttachment: "fixed",
  },
  box2: {
    height: "100%",
    width: "100%",
    background: `url("/img/5.1.jpg")`,
    //transform: 'scaleX(-1)',
    backgroundPosition: '50% 50%',
    padding:'0px 0px',
    flex: "1",
    
    backgroundAttachment: "fixed",
    
    
  },
  iglesia: {
    //position: "relative",
    //textAlign: "center",
    margin: "0px 0px",
    maxWidth: "40%",
    maxHeight: "40%",
  },
  copas: {
    //position: "relative",
    //textAlign: "center",
    margin: "0px 0px",
    maxWidth: "40%",
    maxHeight: "40%",
},
}

function ColorsTimeline() {
  return (
    <Box sx={{padding:'0px'}}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/img/5.2.png"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={styles.iglesia}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",

          }}
        >
          <Typography variant="h11">CEREMONIA RELIGIOSA</Typography>
          <Typography variant="horaP">6:00 PM</Typography>
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
          src="/img/5.3.png"
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={styles.copas}
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
          <Typography  variant="horaP">7:30 PM</Typography>
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
  //console.log(matches, "media query")
  return (
    <>
      <div
        sx={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "0",
        }}
      >
        <div
          style={{
            ...styles.box,
            backgroundPosition: matches ? "50% 50%" : "-65% -80%",
            objectFit: matches ? "contain" : "cover", // Puedes cambiar a 'cover' si prefieres cubrir el contenedor
            objectPosition: matches ? "" : "center",
            height: matches ? "350px" : "300px",
            backgroundAttachment: matches ? "fixed" : "",
          }}
        ></div>
        <Box sx={{ display: "flex", padding: "0px 0px" }}>
          {matches ? (
            <Box sx={{ flex: "1", padding: "0px 0px" }}>
              <div style={styles.box2}></div>
            </Box>
          ) : null}
          <Box
           sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            //gap: "0.2rem",
            justifyContent: "center",
            //alignItems: "center",
            height: "100%",
            backgroundImage: "url('/img/5.4.png')",
            padding: "0px 0px",
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
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Itinerario;
