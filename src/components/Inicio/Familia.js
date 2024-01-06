import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Por defecto, se muestra en columna
  },
  row: {
    display: "flex",
    justifyContent: "center",//"space-between"
    alignItems: "center",
    flexWrap: "wrap",
    maxWidth: '100%',
    //border: '1px solid black',
  },
  column: {
    flex: 1,
    //border: '1px solid black',
    //flexBasis: "0%",//33.3%
    //flexGrow: "99",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    //minMax: "33.1%",
    minWidth: `clamp(240px, 240px, 350px)`,
  },
  image: {
    //height: "20%",
    //width: "20%",
    //color: "#FFFFFF",
    //flex: 1,
    
    minWidth: `clamp(200px, 15%, 20%)`,
    maxWidth: '30%', //20%
  },
  image2: {
    width: "100%",
    height: "100%",
  },
};
export default function IncioFamilia() {
  const matches = useMediaQuery('(min-width:900px)');
  
  return (
    <Box
      sx={{
        background: "#E6D4C2",
        //background: `url("/img/fondoNavbar2.svg")`,
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        marginTop: "0",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)"
      }}
    >
      <Typography variant="h5" sx={{ marginTop: "2%" }}>
        CON LA BENDICION DE DIOS Y DE
      </Typography>
      <Typography variant="h5"> 
        LA MANO DE NUESTROS PADRES 
      </Typography>
       {/* El Box contiene 3 div texto imagen texto*/}

      <div style={styles.row}>
        <div style={styles.column}>
          <Typography variant="h15">Leticia Acebo Martínez</Typography>
          <Typography variant="h15">David Hernandez Escobar</Typography>
        </div>
       
          <img
            src="/img/arco blanco.png"
            alt="Arco flores" // Propiedad alt para describir la imagen
            style={styles.image}
          />
     
        <div style={styles.column}>
          <Typography variant="h15">Verónica Carbajal Treto </Typography>
          <Typography variant="h15">Carlos Toranzo Noriega</Typography>
        </div>
      </div>
      
      <Typography variant="h7" sx={{ marginTop: "5%" }}>
        ESTAMOS FELICES DE COMPARTIR ESTE DÍA TAN ESPECIAL CON
      </Typography>
      <Typography variant="h7">
       
      </Typography>
      <Typography variant="h7">
        USTEDES, Y NOS COMPLACE INVITARLOS A NUESTRA BODA
      </Typography>
      <Typography variant="h7" sx={{marginBottom:"15px "}}>
        
      </Typography>
      
      {/* El Box contiene a la imagen*/}
   {/*}   <Box sx={{ marginTop: "5%", width: "91%", height: "100%" }}>
        <img
          src="/img/foto2.jpg" //Foto de Fondo abajo del texto
          alt="Imagen de inicio" // Propiedad alt para describir la imagen
          style={styles.image2}
        />
      </Box>
    */}
    </Box>
  );
}
