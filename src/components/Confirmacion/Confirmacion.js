import { Container, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Lista from "./Lista";
import React, { useState } from 'react';
import Swal from 'sweetalert2'

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
  confirm: {
    width: "160px",
    height: "auto",
    borderRadius: "15px",
    backgroundColor: "#E6D4C2",
    textAlign: "center",
    fontFamily: "Cormorant",
    fontSize: `clamp(12px, 2vw, 1.3rem)`,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#7D5730",
  },
  confirm_2: {
    width: "160px",
    height: "auto",
    borderRadius: "15px",
    backgroundColor: "#F4EBE2",
    textAlign: "center",
    fontFamily: "Cormorant",
    fontSize: `clamp(12px, 2vw, 1.3rem)`,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#7D5730",
  },
  cancel: {
    width: "160px",
    height: "auto",
    borderRadius: "15px",
    backgroundColor: "#F4EBE2",
    textAlign: "center",
    fontFamily: "Cormorant",
    fontSize: `clamp(12px, 2vw, 1.3rem)`,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#7D5730",
    border: "1px solid #7D5730",
    boxShadow: "none"
  },
  cancel_2: {
    width: "160px",
    height: "auto",
    borderRadius: "15px",
    backgroundColor: "#F4EBE2",
    textAlign: "center",
    fontFamily: "Cormorant",
    fontSize: `clamp(12px, 2vw, 1.3rem)`,
    fontStyle: "normal",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#7D5730",
    border: "1px solid #7D5730",
    boxShadow: "none",
    display:"none"
  },
};

const guests = [
  "Alison Rangel",
  "Zoy Mendoza",
  "Escareño"
]

const Confirmacion = () => {
  const [isChecked, setIsChecked] = useState(Array(guests.length).fill(false));
  const [cantidad, setCantidad] = useState(isChecked.filter(elemento => elemento === true).length);
  const [ validacion, setValidacion ] = useState(null);

  const handleCheckboxChange = (index) => {
    const newArray = [...isChecked];
    if (newArray[index]) {
      Swal.fire({
        title: "Cancelar tu asistencia?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#A68563",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, Cancelare!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Gracias!",
            text: "Muchas gracias por avisar!",
            icon: "success",
            confirmButtonColor: "#A68563",
          });
          newArray[index] = !newArray[index];
          const newCantidad = newArray.filter(
            (elemento) => elemento === true
          ).length;
          setIsChecked(newArray);
          setCantidad(newCantidad);
        }
      });
    } else {
      Swal.fire({
        title: "Confirmas tu asistencia?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#A68563",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, asistire!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Confirmado!",
            text: "Muchas gracias!",
            icon: "success",
            confirmButtonColor: "#A68563",
          });

          newArray[index] = !newArray[index];
          const newCantidad = newArray.filter(
            (elemento) => elemento === true
          ).length;
          setIsChecked(newArray);
          setCantidad(newCantidad);
        }
      });
    }
  };
  
  const handleNoAsistencia = () => {
    Swal.fire({
      title: "¿No podrás asistir?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#A68563",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmo"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Gracias!",
          text: "Muchas gracias por avisar",
          icon: "success",
          confirmButtonColor: "#A68563",
        });
        setValidacion(true)
      }
    });
      
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Box sx={styles.boxContent}>
          <Typography variant="horaP" sx={styles.typographyHoraP}>
            CONFIRMACION DE ASISTENCIA
          </Typography>

          <Typography variant="h2" sx={styles.typographyH2}>
            FAM. HERNANDEZ ACEBO
          </Typography>
          <Typography variant="h2" sx={styles.typographyH2}>
          Da clic en el botón
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
              //background: "#F4EBE2",
              color: "#7D572E",
              borderRadius: "10px",
              background: `url("/img/1.1.png")`,
            }}
          >
            
            {validacion ? 
            <>
            <Typography variant="h2" sx={{height:'20px', paddingTop:"30px" }}>Gracias por avisar</Typography>
            <Typography variant="h2" sx={{height:'20px', paddingBottom:"30px" }}>Si cambias de opinión, favor de comunicarte con la planeadora</Typography> 
            </>
            :guests.map((guest, index) => (
              <Lista
                key={guest}
                guest={guest}
                check={isChecked[index]}
                handleCheck={() => handleCheckboxChange(index)}
                

              />
            ))}
            
            <div
              style={{
                with: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                alignItems: "center",
                color: "#7D572E",
                borderRadius: "10px",
              }}
            >
              <Typography variant="h17">Total de asistentes:</Typography>
              <Typography
                variant="h17"
                sx={{
                  width: "160px",
                  height: "auto",
                  borderRadius: "15px",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {cantidad}
              </Typography>
            </div> 
          
          </Container>
          <div
              style={{
                with: "100%",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                color: "#7D572E",
                borderRadius: "10px",
              }}
            >
              <Button
            variant="contained"
            onClick={handleNoAsistencia}
            sx={!validacion ? styles.confirm_2 : styles.cancel_2}
          >
            No podre asistir
          </Button>
            </div> 
        </Box>
      </Box>
    </Box>
  );
};

export default Confirmacion;
