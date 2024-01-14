import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%', // Ajusta según tus necesidades
      },
      box: {
        padding: '0px, 0px',
        flex: "1",
        backgroundImage: `url("/img/5P.svg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center", // Centro por defecto
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
<Typography variant="h11"> Parroquia María Madre</Typography>
<Typography variant="h11">de la Divina Gracia</Typography>
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
<Typography variant="horaP">7:30 PM</Typography>
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
              backgroundPosition: matches ? '50% 50%' : '70% -90%',
              objectFit: matches ? '' : 'cover',
              objectPosition: matches ? '' : "center",
              height: matches ? '350px' : "300px",
              backgroundAttachment: matches ? "fixed" : '',
              backgroundSize: "cover", // Ajusta el tamaño de la imagen para cubrir el contenedor
              backgroundRepeat: "no-repeat", // Evita que la imagen se repita
            }}
          ></div>
          <Box sx={{ display: "flex", padding: '0px 0px' }}>
            {matches ? (
              <Box sx={{ flex: "1", padding: '0px 0px' }}>
                <div style={styles.box2}></div>
              </Box>
            ) : null}
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
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