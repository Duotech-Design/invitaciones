import * as React from 'react';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import theme from '../../theme';


export default function LogIn() {
  return (
    <Box sx={{backgroundColor: '#D8DCDD', height:"80%"}}>
    <Box
    component="form"
    sx={{ 
      '& > :not(style)': { m: 1, width: '35ch' },
      
    }}
    noValidate
    autoComplete="off"
  >

    <TextField label="Filled success" variant="filled" sx={{color:"#806B4B"}} focused />
    <TextField id="standard-basic" label="Standard" variant="standard" />
  </Box>
  </Box>
  );
}
    
