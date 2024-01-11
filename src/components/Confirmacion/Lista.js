
import Checkbox from '@mui/material/Checkbox';
import { Container, Box, Typography } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Lista() {
  return (
    <Container sx={{display:"flex", justifyContent:"space-between", alignItems:"center", background:"#F4EBE2", color:"#7D572E"}}>
      <Typography>Alison Rangel</Typography>
      <Checkbox {...label} color="default" />
      
    </Container>
  );
}

export default Lista