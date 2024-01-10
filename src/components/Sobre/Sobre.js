import { Box, Typography } from "@mui/material";


const styles = {
  sobre: {
    //position: "relative",
    //textAlign: "center",
    margin: "0px 0px",
    maxWidth: "70%",
    maxHeight: "70%",
  },
};

function Sobre() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/img/Sobre.png"
        alt="Imagen de inicio" // Propiedad alt para describir la imagen
        style={styles.sobre}
      />
    </Box>
  );
}
export default Sobre;
