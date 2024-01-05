import { NavbarStyles } from "./styles";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
//import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

const styles = {
  textContainer: {
    width: "100%",
    height: "50%", // Anchura del cuadro
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    // fontSize: `clamp(5px, 5vw, 3.5rem)`,
  },
  section: {
    backgroundSize: "cover",
    //backgroundRepeat: 'no-repeat',
    //backgroundColor: "#CBB197",
    //padding: '15px',
    //backgroundPosition: '50% 50%',
    width: "120px",
    height: "100px",
    borderRadius: "50px",
    //backgroundAttachment: "fixed",
  },
};

const NewNavbar = () => {

  const [menu, setMenu] = useState(false);
  
  const handdleClickExpand = () => {
    setMenu(!menu);
  };

  console.log(menu);

  return (
    <>
      <Box
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          background: `url("/img/fondoBeige.jpg")`,
        }}
      >
        <div style={styles.section}>
          <img
            src="/img/logo.png"
            alt="iglesia"
            style={{
              height: "100%",
              width: "100%",
              //marginTop: "5px",
              //marginBottom: "5px",
              color: "white",
              borderRadius: "50px",
            }}
          />
        </div>
        <Box
          sx={{
            height: "100%",
            width: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          {menu ? (
            <CloseIcon onClick={handdleClickExpand} sx={NavbarStyles.expand} />
          ) : (
            <MenuIcon onClick={handdleClickExpand} sx={NavbarStyles.expand} />
          )}
        </Box>
      </Box>
      <AppBar position="static" sx={NavbarStyles.nav}>
        {menu ? (
          <Toolbar sx={NavbarStyles.toolbar}>
            <Typography variant="h2" sx={NavbarStyles.content}>
              INICIO
            </Typography>
            <Typography variant="h2" sx={NavbarStyles.content}>
              ITINERARIO
            </Typography>
            <Typography variant="h2" sx={NavbarStyles.content}>
              SUGERENCIAS
            </Typography>
            <Typography variant="h2" sx={NavbarStyles.content}>
              CONFIRMACION
            </Typography>
            <Typography variant="h2" sx={NavbarStyles.content}>
              GALERIA
            </Typography>
            <Typography variant="h2" sx={NavbarStyles.content}>
              MESA DE REGALOS
            </Typography>
          </Toolbar>
        ) : null }
      </AppBar>
    </>
  );
};

export default NewNavbar;
