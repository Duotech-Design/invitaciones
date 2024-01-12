import { Container, Button, Box, Typography } from "@mui/material";
import Lista from "./Lista";
import React, { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';

const styles = {
  container: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", // Para centrar verticalmente
    alignItems: "center",
    marginBottom: "15px",
    marginTop: "15px",
  },
  box: {
    background: "#E6D4C2",
    height: "auto",
    //maxWidth: "1000px",
    width:"auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    marginTop: "10px",
    marginBottom: "20px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
  },
  boxContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "100%",
    width:"90%",
    gap: "20px",
    padding:"20px"
  },
  typographyHoraP: {
    textAlign: "center",
  },
  enviada: {
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    textAlign: "center",
    backgroundColor: "#F4EBE2",
    padding:"10px",
    borderRadius:"10px"
  },
  typographyH2: {
    textAlign: "center",
  },
  button: {
    width: "auto",
    height: "auto",
    borderRadius: "50px",
    backgroundColor: "#F4EBE2",
    textAlign: "center",
    fontFamily: "Cormorant",
    fontSize: `clamp(15px, 2.5vw, 1.8rem)`,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    marginBottom: "10px",
    color: "#7D5730",
  },
};

const Confirmacion = (props) => {
  console.log('PROPS', props.invite.guest);
  const [guests, setGuests] = useState(props.invite.guest);
  const [isChecked, setIsChecked] = useState([true]);
  const [cantidad, setCantidad] = useState(isChecked.filter(elemento => elemento === true).length);
  const [ confirmacion, setConfirmación] = useState(null);

  const handleCheckboxChange = (index) => {
    const newArray = [...isChecked];
    newArray[index] = !newArray[index];
    const newCantidad = newArray.filter(elemento => elemento === true).length;
    setIsChecked(newArray);
    setCantidad(newCantidad);
    setConfirmación(!confirmacion)
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Box sx={styles.boxContent}>
          
          <Typography variant="horaP" sx={styles.typographyHoraP}>
            CONFIRMACION DE ASISTENCIA
          </Typography>
          
          <Typography variant="h2" sx={styles.typographyH2}>
            { props.invite.name }
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent:"center",
              alignContent:"center",
              //background: "#F4EBE2",
              color: "#7D572E",
              borderRadius:"10px",
              background: `url("/img/1.1.png")`,
            }}
          >
            {guests?.map((guest, index) => (
              <Lista
                key={guest.name}
                guest={guest}
                check={isChecked[index]}
                handleCheck={() => handleCheckboxChange(index)}
                confirmacion={confirmacion}
                text={"Confirmar"}
              />
            ))}
          </Container>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#F4EBE2",
              color: "#7D572E",
              borderRadius:"10px"
            }}
          >
            <Typography variant="h17">Total de asistentes</Typography>
            <Typography
              sx={{
                padding:'10px'
              }}
              variant="h17"
            >
              { props.invite.size }
            </Typography>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Confirmacion;
