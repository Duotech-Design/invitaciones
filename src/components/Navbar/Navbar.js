//import React from 'react';
import { NavbarStyles } from "./styles";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  //position="fixed" para que el nabvar siga el scroll
  return (
    <AppBar position="static" sx={NavbarStyles.nav}>
      <Typography variant="h10" sx={NavbarStyles.iniciales}>
        A & D
      </Typography>
      <Toolbar sx={NavbarStyles.toolbar}>
        <Typography variant="h9" sx={NavbarStyles.content}>
          INICIO
        </Typography>
        <Typography variant="h9" sx={NavbarStyles.content}>
          ITINERARIO
        </Typography>
        <Typography variant="h9" sx={NavbarStyles.content}>
          SUGERENCIAS
        </Typography>
        <Typography variant="h9" sx={NavbarStyles.content}>
          CONFIRMACION
        </Typography>
        <Typography variant="h9" sx={NavbarStyles.content}>
          GALERIA
        </Typography>
        <Typography variant="h9" sx={NavbarStyles.content}>
          MESA DE REGALOS
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
