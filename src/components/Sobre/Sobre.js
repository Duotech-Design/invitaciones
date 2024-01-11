import { Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';



function Sobre({onClick}) {
  
    const matches = useMediaQuery('(min-width:900px)');
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
        backgroundImage: "url('/img/Sobre.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: matches ? "50% 50%" : "38% 50%",
        transform: matches ? "scale(1.2)" : 'scale(1)'
      }}
      onClick={onClick}
    >
      
      {/*}  <img
        src="/img/Sobre.png"
        alt="Imagen de inicio" // Propiedad alt para describir la imagen
        style={styles.sobre}
    />*/}
    </Box>
  );
}
export default Sobre;
