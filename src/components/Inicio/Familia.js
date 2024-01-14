import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

export default function IncioFamilia() {
  const matches = useMediaQuery('(min-width:600px)');
  
  return (
    <Box
    sx={{
      margin: 0,
      background: `url("/img/12.svg")`,
      backgroundSize: matches ? "100% 100%" : "contain", // Ajusta el tamaño según el media query
      backgroundPosition: matches ? "center" : "50% 10%", // Ajusta la posición según el media query
      backgroundRepeat: "no-repeat",
      objectFit: matches ? '' : 'contain',  // Puedes cambiar a 'cover' si prefieres cubrir el contenedor
      objectPosition: matches ? '' : "center",
      height: matches ? "630px" : "215px",
      display: "flex",
      width:"100%",
      flexDirection: "column",
      alignItems: "center",
      color: "white",
      marginTop: "0",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    }}
    >
      {/* No necesitas el resto del contenido, ya que estás utilizando la imagen de fondo */}
    </Box>
  );
}
