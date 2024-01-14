import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function Sobre({ onClick }) {
  const matches = useMediaQuery("(min-width:900px)");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "90vh",
        backgroundImage: "url('/img/0.1-min.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: matches ? "50% 50%" : "50% 50%",
        transform: matches ? "scale(1.2)" : "scale(0.9)",
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
