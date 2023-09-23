import { Box, Typography } from "@mui/material";

const styles = {
  image: {
    height: "20%",
    width: "20%",
    color: "#FFFFFF",
  },
  column: {
    //flex: "1",
    flexBasis: "20%",
    flexGrow: "99",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "40%",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  image2: {
    maxWidth: "100%",
    maxHeight: "100%",
  },
};
export default function IncioFamilia() {
  return (
    <Box
      sx={{
        background: "#E6D4C2",
        height: "450px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        marginTop: "0",
      }}
    >
      <Typography variant="h5" sx={{ marginTop: "2%" }}>
        CON LA BENDICION DE DIOS Y DE
      </Typography>
      <Typography variant="h5"> LA MANO DE NUESTROS PADRES </Typography>
      <Box sx={styles.row}>
        <div style={styles.column}>
          <Typography variant="h6">Leticia Acebo Martínez</Typography>
          <Typography variant="h6">David Hernandez Escobar</Typography>
        </div>
        <div style={styles.column}>
          <img
            src="/img/arco blanco.png"
            alt="Arco flores" // Propiedad alt para describir la imagen
            style={styles.image}
          />
        </div>
        <div style={styles.column}>
          <Typography variant="h6">Verónica Carbajal Treto </Typography>
          <Typography variant="h6">Carlos Toranzo Noriega</Typography>
        </div>
      </Box >

      <Typography variant="h7" sx={{ marginTop: "5%" }}>
        ESTAMOS FELICES DE COMPARTIR
      </Typography>
      <Typography variant="h7">ESTE DÍA TAN ESPECIAL CON</Typography>
      <Typography variant="h7">USTEDES, Y NOS COMPLACE</Typography>
      <Typography variant="h7">INVITARLOS A NUESTRA BODA</Typography>
      <Box  sx={{ marginTop: "5%" }}>
        <img
        
         src="/img/foto2.jpg"
         alt="Imagen de inicio" // Propiedad alt para describir la imagen
         style={styles.image2}
       />
 
      </Box>
    </Box>
  );
}
