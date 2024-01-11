
import Checkbox from '@mui/material/Checkbox';
import { Container, Box, Typography } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Lista({guest, check, handleCheck}) {

  return (
    <div style={{display:"flex",justifyContent:"space-between", alignItems:"center",}}>
      <Typography>{guest}</Typography>
      <Checkbox 
        {...label} 
        color="default" 
        checked={check}
        onChange={handleCheck}
        />
    </div>
  );
}

export default Lista