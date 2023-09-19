import Inicio from '../components/Inicio/Inicio';
import { Box } from '@mui/material';

const styles = {
  root: {
 
    background: '#F4EBE2',
  },
};

export default function InicioInvitacion() {
  return (
    <>
      <Box sx={styles.root}>
   <Inicio/>
      </Box>
    </>
  );
}
