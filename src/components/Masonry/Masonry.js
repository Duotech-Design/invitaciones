import { Typography, Box } from "@mui/material";

function ImageMasonry() {

  return (
    <Box
      sx={{
        width: "auto",
        position: "relative",
        //borderRadius: "50%",
        overflow: "hidden",
        marginBottom: "10px",
      }}
    >
      <img
        srcSet="/img/ADfoto3.jpg?w=162&auto=format&dpr=2 1x"
        src="/img/ADfoto3.jpg?w=162&auto=format"
        alt="Fern"
        loading="lazy"
        style={{
          display: "block",
          objectFit: 'cover',
          width: "100%",
          height:"500px"
        }}
      />

      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "75%", // Ajusta la posición vertical del texto "ANDREA & DIEGO"
          width: "100%",
          display: "flex",
          displayDirection: "column",
          alignItems: "center",
          justifyContent: "center", // Para centrar verticalmente
          fontSize: `clamp(2.2rem, 8vw, 6rem)`,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
        }}
      >
    
      </Typography>
    </Box>
  );
}

export default ImageMasonry;
