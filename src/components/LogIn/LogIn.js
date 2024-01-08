import * as React from "react";
import { Button, Box } from "@mui/material";

import TextField from "@mui/material/TextField";

const styles = {
  button: {
    //color: "D9D9D9",
    //width: `clamp(2rem, 6rem, 8rem)`,
    height: `clamp(1.8rem, 2.5rem, 3.5rem)`,
    borderRadius: "40px",
    backgroundColor: "#7D5730",
    textAlign: "center",
    fontFamily: "Cinzel",
    //fontSize:`clamp(12px, 0.8rem, 0.9rem)`,
    fontStyle: "normal",
    fontWeight: "400px",
    lineHeight: "normal",
    marginBottom: "10px",
    color: "#F4EBE2",
  },

  logoContainer: {
    position: "absolute",
    top: "20px", // Ajusta la posición vertical según tus necesidades
    background: `url("/img/logoSinF.png")`,
    height: "auto", // Ajusta la altura del logo según tus necesidades
    backgroundSize: "contain",
    backgroundRepeat:"no-repeat",
    marginBottom:"20px" // Ajusta el tamaño de fondo del logo
  },
};

export default function LogIn() {
  return (
    <Box
      sx={{
        background: `url("/img/fondoNavbar.svg")`,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        position: "relative",
        alignContent: "center",
        alignItems:"center"
      }}
    >
      <Box style={styles.logoContainer}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "35ch" },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            marginTop: "250px",
            alignItems: "center"
          }}
          noValidate
          autoComplete="off"
        >
          <TextField label="Correo" variant="filled" color="quinary" focused />
          <TextField
            label="Contraseña"
            variant="filled"
            color="quinary"
            focused
          />
          <Button
            variant="contained"
            sx={{ ...styles.button, textAlign: "center" }}
          >
            INGRESAR
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
