
import Checkbox from '@mui/material/Checkbox';
import { Container, Box, Typography } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Lista({guest, check, handleCheck, confirmacion}) {

  return (
    <div style={{display:"flex",justifyContent:"space-between", alignItems:"center",}}>
      <Typography variant="horaP">{guest}</Typography>
      
      <Checkbox 
        {...label} 
        color="default" 
        checked={check}
        disabled={confirmacion}
        label="hola"
        onChange={handleCheck}
        />
    </div>
  );
}

export default Lista