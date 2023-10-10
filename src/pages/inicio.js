import Inicio from "../components/Inicio/Inicio";
import { Box } from "@mui/material";
import IncioFamilia from "../components/Inicio/Familia"; 
import Ceremonia from "../components/Itinerario/Ceremonia.js.js";
import Recepcion from "../components/Itinerario/Recepcion";
import Itinerario from "../components/Itinerario/Itinerario";

const styles = {
  root: {
    background: "#F4EBE2",
  },
};

const InicioPages = () => {
  return (
    <>
      <Box sx={styles.root}>
        <Inicio />
        <IncioFamilia />
        <Ceremonia />
        <Recepcion />
     
        <Itinerario/>
      </Box>
    </>
  );
}

export default InicioPages;
