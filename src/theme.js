import { createTheme } from '@mui/material/styles';

const theme = createTheme({
 
  palette: {
    primary: {
      main: "#F4EBE2", // Color principal
    },
    secondary: {
      main: "#E6D4C2", // Color secundario
    },
    tertiary: {
      main: "#CBB197", // Tercer color
    },
    quaternary: {
      main: "#A68563", // Cuarto color
    },
    quinary: {
      main: "#7D572E", // Quinto color
    },
    text: {
      primary: "#000000", // Color de texto principal (negro)
    },
  },
  typography: {
    fontFamily: "Roboto", // Fuente de respaldo en caso de que las fuentes personalizadas no se carguen
    // Utiliza las fuentes personalizadas desde Google Fonts
    h1: {
      fontFamily:"Cormorant, cursive", // Cambia a Dancing Script
      fontSize: "3em",
      fontWeight: 700,
      color: "#F4EBE2",
    },
    h2: {
      fontFamily: "Cormorant, cursive", // Cambia a Zeyada
      fontSize: "4em",
      fontWeight: 600,
      color: "#000000",
    },
    h3: {
        fontFamily: "Cinzel, cursive",
        fontSize: '0.6em',
        fontWeight: 500,
        color: '#000000', // Color de texto negro
      },
    // Define otras fuentes personalizadas según sea necesario
  },
  
});

export default theme;