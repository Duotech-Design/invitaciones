//import React from 'react';
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Container>
      <Box
        style={{
          width: "150px",
          height: "50px",
          //padding: '10px',

          backgroundColor: "#F4EBE2",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            width: "150px",
            height: "50px",
            //padding: '10px',

            backgroundColor: "#F4EBE2",
          }}
        >
          © {new Date().getFullYear()} Alison, Zoy. Todos los derechos
          reservados.
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;
