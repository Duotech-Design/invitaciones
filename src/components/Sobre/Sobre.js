import { Box } from "@mui/material";

const styles = {
  sobre: {
    //position: "relative",
    //textAlign: "center",
    margin: "0px 0px",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    //maxWidth: "70%",
    //maxHeight: "70%",
  },
};

function Sobre() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        backgroundImage: "url('/img/Sobre.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "38% 50%",
      }}
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
