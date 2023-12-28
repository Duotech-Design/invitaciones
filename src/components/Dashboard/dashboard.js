import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import TablaPrincipal from "./tabla";

export default function Dashboard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          background: `url("/img/FondoLogin.svg")`,

          //height: 128,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{display:"flex", justifyContent: "center", alignContent: "center", flexDirection:"column", alignItems:"center"}}
      >
        <h1> Registro de invitados </h1>
        <TablaPrincipal />
      </Paper>
    </Box>
  );
}
