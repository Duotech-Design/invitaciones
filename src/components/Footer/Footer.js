//import React from 'react';
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        backgroundColor: "#F4EBE2",
        display: "flex",
        justifyContent: "center",
      }}
    >
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
          variant="h12"
          sx={{
            width: "100%",
            textAlign:"center",

            //padding: '10px',

            backgroundColor: "#F4EBE2",
          }}
        >
          A.D © {new Date().getFullYear()}
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
