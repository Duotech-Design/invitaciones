import Inicio from "../components/Inicio/Inicio";
import { Box } from "@mui/material";
import IncioFamilia from "../components/Inicio/Familia"; 

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
      </Box>
    </>
  );
}
