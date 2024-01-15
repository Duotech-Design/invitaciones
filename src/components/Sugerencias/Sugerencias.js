import { Box, Container, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import Link from "@mui/material/Link";
import { forwardRef } from "react";

const styles = {
  logo: {
    maxWidth: "50%",
    maxHeight: "50%",
   
  },
  circle: {
    width: "130px",
    height: "130px",
    border: "3px solid #FFF",
    borderRadius: "50%",
    backgroundColor: "white",
    position: "relative",
    top: "40px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom:"3%"
  },
  circleDesktop: {
    width: "160px",
    height: "160px",
    border: "3px solid #FFF",
    borderRadius: "50%",
    backgroundColor: "white",
    position: "relative",
    top: "40px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom:"5px"
  },
  largeLogo: {
    width: "195px",
    height: "198px",
    top: "5px",
  },
  largeLogoMobile: {
    width: "160px", // Ajusta el tamaño para móvil según tus necesidades
    height: "165px", // Ajusta el tamaño para móvil según tus necesidades
    top: "5px",
  },
  largeLogo10: {
    width: "180px",
    height: "155px",
    top: "2px",
  },
  largeLogo10Mobile: {
    width: "160px", // Ajusta el tamaño para móvil según tus necesidades
    height: "165px", // Ajusta el tamaño para móvil según tus necesidades
    top: "2px",
  },
  largeLogo11Mobile: {
    width: "130px",
    height: "115px", // Ajusta la altura para móvil según tus necesidades
    top: "2px",
  },
};

const Sugerencias = (props, ref) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  console.log(isMobile)

  return (
    <Box
      sx={{
       
        // margin: "auto",
        height: "auto",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginTop: "50px",
        marginBottom: "15px",
        gap: "10px",
      }}

      ref={ref}
    >
      {/*
      por esta parte no se movera? por el box?
      */}
      <Box>
        <div
          style={{ borderBottom: "0.3px solid #7D5730", width: "50vw" }}
        ></div>
      </Box>
      <Typography variant="horaP" sx={{ textAlign: "center" }}>
        SUGERENCIAS PEINADO
      </Typography>
      <div>
        <Typography variant="horaP" sx={{ textAlign: "center" }}>
          Y MAQUILLAJE
        </Typography>
      </div>
      <div
        style={{
          borderBottom: "0.3px solid #7D5730",
          width: "50vw",
          marginTop: "2px",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1px",
          marginTop: isMobile ? "10px" : "10px",
          flex: "1",
         
        }}
      >
        {/* Círculo blanco */}
        
        <div style={isMobile ? styles.circle : styles.circleDesktop}>
          <img
            src="/img/9.png"
            alt="Imagen 9"
            style={isMobile ? styles.largeLogoMobile : styles.largeLogo}
          />
        </div>
      
        {/* Imágenes */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginTop: "0px",
          }}
        >
          <div style={{width:"50%", }}>
          <Link  href="https://www.instagram.com/salonmimislp/">
          <img src="/img/6.png" alt="Instagram" style={styles.logo} />
          </Link>
          <Link  href="https://api.whatsapp.com/send/?phone=5214441307380&text&type=phone_number&app_absent=0">
          <img src="/img/6.1.png" alt="Whatsapp" style={styles.logo} />
          </Link>
          </div>
        </div>
      </div>

      {/* Segundo conjunto de círculo e imágenes */}
      <div 
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1px",
          marginTop: isMobile ? "10px" : "10px",
          flex: "1",
        }}
      >
        {/* Círculo blanco */}
        <div style={isMobile ? styles.circle : styles.circleDesktop}>
          <img
            src="/img/10.png"
            alt="Imagen 10"
            style={isMobile ? styles.largeLogo10Mobile : styles.largeLogo10}
          />
        </div>

        {/* Imágenes */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginTop: "2px",
          }}
        >
            <div style={{width:"50%", }}>
          <Link sx={{flex:"1"}} href="https://www.instagram.com/ppdonjuan/">
          <img src="/img/6.png" alt="Instagram" style={styles.logo} />
          </Link>
          <Link sx={{flex:"1"}} href="https://api.whatsapp.com/send/?phone=524448113464&text&type=phone_number&app_absent=0">
          <img src="/img/6.1.png" alt="Whatsapp" style={styles.logo} />
          </Link>
        </div>
      </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1px",
          marginTop: isMobile ? "10px" : "10px",
          flex: "1",
        }}
      >
        {/* Círculo blanco */}
        
        <div style={isMobile ? styles.circle : styles.circleDesktop}>
          <img
            src="/img/11.png"
            alt="Imagen 9"
            style={isMobile ? styles.largeLogo11Mobile : styles.largeLogo10}
          />
        </div>
      
        {/* Imágenes */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            marginTop: "0px",
          }}
        >
            <div style={{width:"50%", }}>
          <Link sx={{flex:"1"}} href="https://www.instagram.com/alfredoescobarsalon/">
          <img src="/img/6.png" alt="Instagram" style={styles.logo} />
          </Link>
          <Link sx={{flex:"1"}} href="https://api.whatsapp.com/send/?phone=5214445472698&text&type=phone_number&app_absent=0">
          <img src="/img/6.1.png" alt="Whatsapp" style={styles.logo} />
          </Link>
        </div>
        </div>
      </div>

      {/* ... (resto del código) */}
    </Box>
  );
};

export default forwardRef(Sugerencias);
