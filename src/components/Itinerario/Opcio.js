import { Box, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%', // Ajusta según tus necesidades
  },
  box: {
    padding: '0px, 0px',
    flex: "1",
    backgroundImage: `url("/img/5.1.svg"), url("/img/5.1.svg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center", // Centro por defecto
  },

  box2: {
    height: "100%",
    width: "100%",
    background: `url("/img/5.1.svg")`,
    backgroundPosition: 'top center', // Mueve la imagen completamente arriba
    backgroundSize: 'cover',  // Ajusta a 'cover' para ocupar el espacio sin distorsionarse
    padding: '0px 0px',
    flex: "1",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
};

const Opcio = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <div
        sx={{
          height: "auto",
          display: "flex",
          flexDirection: "column",
          marginTop: "0",
        }}
      >
        <div
          style={{
            ...styles.box,
            backgroundPosition: matches ? '50% 50%' : '70% -90%',
            objectFit: matches ? '' : 'cover',
            objectPosition: matches ? '' : "center",
            height: matches ? '350px' : "300px",
            backgroundAttachment: matches ? "fixed" : '',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {matches && (
          <div
            style={{
              ...styles.box,
              backgroundImage: 'url("/img/5.1.svg")',
              backgroundPosition: matches ? '50% 20%' : '50% 10%', // Ajusta la posición para móvil
              objectFit: 'cover',
              objectPosition: 'center',
              height: matches ? '350px' : '100%', // Ajusta la altura para móvil
              backgroundAttachment: 'fixed',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>
        )}
        <Box sx={{ display: "flex", padding: '0px 0px' }}>
          {matches ? (
            <Box sx={{ flex: "1", padding: '0px 0px' }}>
              <div style={styles.box2}></div>
            </Box>
          ) : null}
          <Box
            sx={{
              flex: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
              backgroundImage: "url('/img/5.4.png')",
              padding: "0px 0px",
            }}
          >
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Opcio;

