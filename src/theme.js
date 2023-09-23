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
      fontSize: `clamp(5px, 5vw, 2rem)`,
      fontWeight: 700,
      color: "#F4EBE2",
    },
    h2: {
      fontFamily: "Cormorant", // Cambia a Zeyada
      fontSize: `clamp(3px, 3.5vw, 1.5rem)`,
      fontWeight: 400,
      color: "#7D5730",
    },
    
    h3: {
        fontFamily: "Cinzel, cursive",
        fontSize: `clamp(5px, 2.5vw, 2rem)`,
        fontWeight: 500,
        color: '#000000',
         // Color de texto negro
      },
      h4: {
        fontFamily: "Poppins",
        //Glacial Indifference
        fontSize: `clamp(5px, 2.5vw, 2rem)`,
        fontWeight: 500,
        color: '#FFFFFF',
         // Color de texto negro
      },h5: {
        fontFamily: "Cormorant, cursive", // Cambia a Zeyada
        fontSize: `clamp(4px, 3.5vw, 1.5rem)`,
        fontWeight: 600,
        color: "#FFFFFF",
      },
      h6: {
        fontFamily: "Great vibes", // Cambia a Zeyada
        fontSize: `clamp(10px, 3.9vw, 2rem)`,
        fontWeight: 600,
        color: "#FFFFFF",
      },
      h7: {
        fontFamily: "Cormorant, cursive", // Cambia a Zeyada
        fontSize: `clamp(3px, 3vw, 1rem)`,
        fontWeight: 500,
        color: "#FFFFFF",
      },
      h8: {
        fontFamily: "Cormorant",
        fontSize: `clamp(8px, 3vw, 2.5rem)`,
        fontWeight: 700,
        color: '#7D5730',
         // Color de texto negro
      },
    // Define otras fuentes personalizadas según sea necesario
  },
  
});

export default theme;