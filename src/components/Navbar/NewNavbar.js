import { NavbarStyles } from "./styles";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

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
        background: `url("/img/foto2.jpg")`,
        backgroundSize: "100%",
        backgroundRepeat: 'no-repeat',
        //backgroundPosition: '50% 50%',
        width: '200px',
        height: "100px",
        //backgroundAttachment: "fixed",
        
      }
}

const NewNavbar = () => {

    return (
      <>
        <Box style={{
              display: "flex",
              width: '96%',
              padding: '20px',
              justifyContent:'space-around',
              backgroundColor: "#F4EBE2",
            }}>

          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >

            <Box style={{  textAlign: "center", padding: '20px', }}>
              <Typography variant="h2">ANDREA & DIEGO</Typography>
            </Box>
            <Box style={styles.textContainer}>
              <div style={{  textAlign: "center", display:'flex', flexDirection:'column',padding: '10px' }}>
                <Typography variant="h9">VIERNES</Typography>
                <Typography variant="h9">21 DE ABRIL 2024</Typography>
              </div>
              <div
                style={{
                  borderLeft: "1px solid black",
                  textAlign: "center",
                  
                  padding: '10px'
                }}
              >
                <Typography variant="h9">SAN LUIS POTOSÍ, </Typography>
                <Typography variant="h9">S.L.P.</Typography>
              </div>
            </Box>

          </Box>

          <div style={styles.section}>

          </div>
        </Box>

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
      </>
    );
}

export default NewNavbar;