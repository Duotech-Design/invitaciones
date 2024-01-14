import { NavbarStyles } from "./styles";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

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
    backgroundSize: "contain",
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
};

const NewNavbar = () => {

  const [menu, setMenu] = useState(false);
  const matches = useMediaQuery('(min-width:900px)');
  const handdleClickExpand = () => {
    setMenu(!menu);
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          background: `url("/img/1.1.png")`,
        }}
      >

        <div style={styles.section}>
          <img
            src="/img/1.2.png"
            alt="iglesia"
            style={{
              height: "70%",
              width: "70%",
              color: "white",
              borderRadius: "50px",
              objectFit:"cover",
              
            }}
          />
        </div>
        {!matches ? 
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
        </Box> : 
         <AppBar position="static" sx={NavbarStyles.nav_desk}>
         
           <Toolbar sx={NavbarStyles.toolbar_desk}>
             <Typography variant="h14_2" sx={NavbarStyles.content_desk}>
               INICIO
             </Typography>
             <Typography variant="h14_2" sx={NavbarStyles.content_desk}>
               ITINERARIO
             </Typography>
             <Typography variant="h14_2" sx={NavbarStyles.content_desk}>
               SUGERENCIAS
             </Typography>
             <Typography variant="h14_2" sx={NavbarStyles.content_desk}>
               CONFIRMACIÓN
             </Typography>
             <Typography variant="h14_2" sx={NavbarStyles.content_desk}>
               GALERÍA
             </Typography>
             <Typography variant="h14_2" sx={NavbarStyles.content_desk}>
               MESA DE REGALOS
             </Typography>
           </Toolbar>
         
         </AppBar>
       }

      </Box>
      <AppBar position="static" sx={NavbarStyles.nav}>
        {menu && !matches ? (
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
