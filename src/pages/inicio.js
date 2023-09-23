import Inicio from "../components/Inicio/Inicio";
import { Box } from "@mui/material";
import IncioFamilia from "../components/Inicio/Familia"; 
import Itinerario from "../components/Itinerario/Itinerario";
import Itinerario2 from "../components/Itinerario/itinerario2";

const styles = {
  root: {
    background: "#F4EBE2",
  },
};

export default function InicioInvitacion() {
  return (
    <>
      <Box sx={styles.root}>
        <Inicio />
        <IncioFamilia/>
       <Itinerario/>
        <Itinerario2/>
      </Box>
    </>
  );
}
