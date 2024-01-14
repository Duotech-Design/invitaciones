import React, { useState, useEffect } from 'react';
import { Typography, Box } from "@mui/material";
import theme from "../../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // La fecha objetivo ha pasado
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={styles.numbersContainer}>
      <div style={styles.timeUnit}>
        <Typography variant="reloj">{timeLeft.days}</Typography>
        <Typography variant="reloj" style={{ width: "100%" }}>Días</Typography>
      </div>
      <Typography variant="reloj"> : </Typography>
      <div style={styles.timeUnit}>
        <Typography variant="reloj">{timeLeft.hours}</Typography>
        <Typography variant="reloj" style={{ marginLeft: "10px" }}>Horas</Typography>
      </div>
      <Typography variant="reloj"> : </Typography>
      <div style={styles.timeUnit}>
        <Typography variant="reloj">{timeLeft.minutes}</Typography>
        <Typography variant="reloj" style={{ marginLeft: "10px" }}>Minutos</Typography>
      </div>
      <Typography variant="reloj"> : </Typography>
      <div style={styles.timeUnit}>
        <Typography variant="reloj">{timeLeft.seconds}</Typography>
        <Typography variant="reloj" style={{ marginLeft: "10px" }}>Seg.</Typography>
      </div>
    </div>
  );
};

const styles = {
  container: {//cambie el container por un div
    background: `url("/img/1.jpg")`,
    position: "relative",
    margin: "0px 0px",
    backgroundPosition: '50% 10%',
    width: "100%",
    height: "100vh",
    //backgroundAttachment: "fixed",
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    alignContent:'center',
    backgroundSize:'cover'
  },
  textTop: {
    position: "absolute",
    top: "5px",
  // Ajusta la posición vertical del texto "ANDREA & DIEGO"
    //width: "110%",
    margin: "0 auto",
    display: "flex",
    displayDirection: "column",
    alignItems: "center",
    justifyContent: "center", // Para centrar verticalmente
    color: theme.palette.primary.main,
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: `clamp(2rem, 8vw, 6rem)`,
    textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
    
  },
  textContainer: {
    position: "absolute",
    bottom: "20%", // Coloca el cuadro en la parte inferior
    left: "50%",
    transform: "translateX(-50%)", // Centra horizontalmente
    width: "64%",
    height: "auto", // Anchura del cuadro
    //backgroundColor: "#E6D4C2",
    background: `url("/img/1.1.png")`,
    padding: "5px",
    borderTopLeftRadius: "50px",
    borderTopRightRadius: "50px",
    borderBottomLeftRadius: "50px",
    borderBottomRightRadius: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    textShadow: '2px 2px 4px rgba(125, 87, 46, 0.2)', //lo agregue el 2 enero
    paddingTop:'10px',
    paddingBottom:'10px',
    // fontSize: `clamp(5px, 5vw, 3.5rem)`,
  },
  numbersContainer: {
    position: "absolute",
    top: "83%", // Coloca el cuadro en la parte inferior
    paddingRight: '15px',
    paddingLeft: '15px',
    transform: "translateX(-50%)",
    width: "auto",
    display: "flex",
    //alignItems: "flex-start",
    textColor: "#FFFFFF",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",//lo agregue 2 enero
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius:'50px',
    backdropFilter: "blur(1px)",
  }, timeUnit: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "70px",
  },
};

const Inicio = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const targetDate = new Date('2024-03-09T18:00:00').getTime();
  return (
    <div style={styles.container}>
    <div style={matches ? ({ ...styles.textTop, width: "40%" }) : ({ ...styles.textTop, width: "110%" })}>
<img src="/img/AD.svg" alt="Andrea & Diego" style={{ width: "100%" }} />
</div>

      <Box>
      <Box style={styles.textContainer}>
        <div style={{ width: "50%" }}>
          <Typography variant="h3">SÁBADO</Typography>
          <Typography variant="h3">09 de MARZO 2024</Typography>
        </div>
        <div style={{ borderLeft: "0.5px solid #7D5730", width: "50%" }}>
          <Typography variant="h3">SAN LUIS POTOSÍ,</Typography>
          <Typography variant="h3">S.L.P.</Typography>
        </div>
      </Box>
      <Countdown targetDate={targetDate}/>
      </Box>
    </div>
  );
};

export default Inicio;
