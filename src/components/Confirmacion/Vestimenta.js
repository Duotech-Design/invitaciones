//import React from 'react';
import { Container, Box, Typography } from "@mui/material";


const Vestimenta = () => {
  return (
    <Container
      sx={{
        height: "auto",
        width: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Para centrar verticalmente
        alignItems: "center",
        color: "white",
        marginTop: "0",
        marginBottom: "15px",
        gap: "10px",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "5px",
           
          }}
        >
          <div
            style={{ borderBottom: "0.3px solid #7D5730", width: "50vw" }}
          ></div>
        </Box>
        <Typography variant="horaP" sx={{ textAlign: "center" }}>
          CÓDIGO DE VESTIMENTA
        </Typography>
        <div
          style={{
            borderBottom: "0.3px solid #7D5730",
            width: "50vw",
            marginTop: "5px",
          }}
        ></div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
            marginBottom: "5px",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="horaP"
            sx={{ textAlign: "center", marginTop: "5px" }}
          >
            FORMAL
          </Typography>
          <div
            style={{
              width: "100%",
              marginTop: "15px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Typography variant="h8" sx={{ textAlign: "center" }}>
              HOMBRES:
            </Typography>

            <Typography
              variant="h3"
              sx={{ textAlign: "center", marginLeft: "5px" }}
            >
              Traje con corbata
            </Typography>
          </div>
          <div
            style={{
              width: "100%",
              marginTop: "5px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h8"
              sx={{ textAlign: "center", marginTop: "5px" }}
            >
              MUJERES:
            </Typography>

            <Typography
              variant="h3"
              sx={{ textAlign: "center", marginLeft: "5px" }}
            >
              Vestido largo
            </Typography>
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Vestimenta;
