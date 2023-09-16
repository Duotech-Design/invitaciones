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
      fontFamily: "Dancing Script, cursive", // Cambia a Dancing Script
      fontSize: "6rem",
      fontWeight: 700,
      color: "#000000",
    },
    h2: {
      fontFamily: "Cormorant, cursive", // Cambia a Zeyada
      fontSize: "4rem",
      fontWeight: 600,
      color: "#000000",
    },
    h3: {
        fontFamily: 'Great Vibes, cursive',
        fontSize: '3rem',
        fontWeight: 500,
        color: '#000000', // Color de texto negro
      },
    // Define otras fuentes personalizadas según sea necesario
  },
  
});

export default theme;