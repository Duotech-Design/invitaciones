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
    nav: {
      main: "#7D5730",
    },
    text: {
      primary: "#000000", // Color de texto principal (negro)
    },
   
  },
  typography: {
    fontFamily: "Roboto", // Fuente de respaldo en caso de que las fuentes personalizadas no se carguen
    // Utiliza las fuentes personalizadas desde Google Fonts
    h1: {
      fontFamily: "Cormorant, cursive", // Cambia a Dancing Script
      fontSize: `clamp(5px, 5vw, 2rem)`,
      fontWeight: 700,
      color: "#F4EBE2",
    },
    h2: {
      fontFamily: "Cormorant", // Cambia a Zeyada
      fontSize: `clamp(3px, 3.5vw, 2.5rem)`,
      fontWeight: 400,
      color: "#7D5730",
    },

    h3: {
      fontFamily: "Cinzel",
      fontSize: `clamp(5px, 2.5vw, 2rem)`,
      fontWeight: 300,
      color: "#7D5730",
      // Color de texto negro
    },
    h4: {
      fontFamily: "Poppins",
      //Glacial Indifference
      fontSize: `clamp(4px, 2.0vw, 2rem)`,
      fontWeight: 400,
      color: "#FFFFFF",
      // Color de texto negro
    },
    reloj: {
      fontFamily: "Poppins",
      //Glacial Indifference
      fontSize: `clamp(8px, 2.0vw, 2rem)`,
      fontWeight: 400,
      color: "#FFFFFF",
      // Color de texto negro
    },
    h5: {
      fontFamily: "Cormorant, cursive", // Cambia a Zeyada
      fontSize: `clamp(3.5px, 3.5vw, 2rem)`,
      fontWeight: 400,
      color: "#FFFFFF",
    },
    h6: {
      fontFamily: "Allura, cursive", // Cambia a Zeyada
      fontSize: `clamp(22px, 3.5vw, 2.5rem)`,
      fontWeight: 600,
      color: "#FFFFFF",
    },
    h7: {
      fontFamily: "Cormorant, cursive", // Cambia a Zeyada
      fontSize: `clamp(3px, 3vw, 1.4rem)`,
      fontWeight: 400,
      color: "#FFFFFF",
    },
    h8: {
      fontFamily: "Cormorant",
      fontSize: `clamp(8px, 3vw, 2.5rem)`,
      fontWeight: 700,
      color: "#7D5730",
      // Color de texto negro
    },
    hora: {
      fontFamily: "Cormorant",
      fontSize: `clamp(18px, 3.5vw, 2.5rem)`,
      fontWeight: 700,
      color: "#7D5730",
      // Color de texto negro
    },
    horaP: {
      fontFamily: "Cormorant",
      fontSize: `clamp(15px, 3vw, 2rem)`,
      fontWeight: 600,
      color: "#7D5730",
      // Color de texto negro
    },
    h9: {
      fontFamily: "Cinzel, cursive",
      fontSize: `clamp(10px, 1.2vw, 2vw)`,
      fontWeight: 500,
      color: "#7D5730",
      // Color de texto negro
    },
    h10: {
      fontFamily: "Cormorant", // Cambia a Zeyada
      fontSize: `clamp(15px, 3.5vw, 4vw)`,
      fontWeight: 700,
      color: "#FFF4F4",
    },
    h11: {
      fontFamily: "Cormorant", // Cambia a Zeyada
      fontSize: `clamp(2.5px, 3vw, 1.5rem)`,
      fontWeight: 300,
      color: "#7D5730",
    },
    h12: {
      fontFamily: "Zeyada", // Cambia a Zeyada
      fontSize: `clamp(40px, 3.5vw, 4rem)`,
      fontWeight: 600,
      color: "#7D5730",
    },
    h13: {
      fontFamily: "Great Vibes",
      fontSize: `clamp(5px, 2.5vw, 2rem)`,
      fontWeight: 300,
      color: "#7D5730",
      // Color de texto negro
    },
    h14: {
      fontFamily: "Cormorant", // Cambia a Zeyada
      fontSize: `clamp(16px, 0.8rem, 0.9rem)`,
      fontWeight: 400,
      color: "#7D5730",
    },
    // Define otras fuentes personalizadas según sea necesario
  },
});

export default theme;