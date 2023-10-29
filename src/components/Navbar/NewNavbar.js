import { NavbarStyles } from "./styles";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";

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
    backgroundColor: "#CBB197",
    //padding: '15px',
    //backgroundPosition: '50% 50%',
    width: "100px",
    height: "100px",
    //backgroundAttachment: "fixed",
  },
};

const NewNavbar = () => {
  const [menu, setMenu] = useState(false);
  const handdleClick = ()=> {
    setMenu(true) 
  }
console.log(menu)
  return (
    <>
      <Box
        style={{
          display: "flex",
          width: "100%",
          //padding: '10px',
          justifyContent: "space-between",
          backgroundColor: "#F4EBE2",
        }}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingLeft: "20px"
          }}
        >
          <Box style={{ textAlign: "center", padding: "5px" }}>
            <Typography variant="h14">ANDREA & DIEGO</Typography>
          </Box>
          <Box style={styles.textContainer}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Typography variant="h9">VIERNES</Typography>
              <Typography variant="h9">21 DE ABRIL 2024</Typography>
            </div>
            <div
              style={{
                borderLeft: "1px solid #7D5730",
                textAlign: "center",

                padding: "10px",
              }}
            >
              <Typography variant="h9">SAN LUIS POTOSÍ, </Typography>
              <Typography variant="h9">S.L.P.</Typography>
            </div>
          </Box>
        </Box>

        <div style={styles.section}>
          <img
            src="/img/imagenNavbar.svg"
            alt="iglesia"
            style={{
              height: "90%",
              width: "100%",
              marginTop: "5px",
              marginBottom: "5px",
              color: "white",
            }}
          />
        </div>
      </Box>

      <AppBar position="static" sx={NavbarStyles.nav}>
       {/*} <Typography variant="h10" sx={NavbarStyles.iniciales}>
          A & D
          </Typography>*/}
          {menu ? null :  <Toolbar sx={NavbarStyles.toolbar}>
        <CloseIcon onClick={handdleClick} sx={NavbarStyles.closing}/>
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
        </Toolbar>}
       
      </AppBar>
    </>
  );
};

export default NewNavbar;
