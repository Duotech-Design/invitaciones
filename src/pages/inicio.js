import Inicio from '../components/Inicio/Inicio';
import { Box , Typography} from '@mui/material';

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
   <Box sx={{ background: "#E6D4C2",
    height: "200px",
    width: "375px",
    display: "flex",
   flexDirection: "column",
    alignItems: "center",
    color: "white",
    marginTop: "0",}}>
       
      </Box>
      </Box>
      
    </>
  );
}
