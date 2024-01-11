//import React from 'react';
import { Container, Typography, Box } from "@mui/material";
const styles = {
section: {
  backgroundSize: "cover",
  width: "120px",
  height: "100px",
  borderRadius: "50px",
},
};

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#F4EBE2",
        display: "flex",
        justifyContent: "center",
      }}
    >
        <div style={styles.section}>
          <img
            src="/img/1.2.png"
            alt="iglesia"
            style={{
              height: "100%",
              width: "100%",
              color: "white",
              borderRadius: "50px",
            }}
          />
        </div>
      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection:"column",

          //padding: '10px',

          backgroundColor: "#F4EBE2",
        }}
      >
       
        <Typography
          variant="h3"
          sx={{
            width: "100%",
            textAlign:"center",

            //padding: '10px',

            backgroundColor: "#F4EBE2",
          }}
        > © {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
