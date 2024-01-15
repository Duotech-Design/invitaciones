import { Container, Box, Typography } from "@mui/material";
import { Button } from "@mui/material";
import Lista from "./Lista";
import React, { useState } from 'react';
import Swal from 'sweetalert2'
import { cancelAttendance, confirmAttendance, declineAttendance } from "../../services/wedding";

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
    width: "220px",
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

const Confirmacion = (props) => {
  console.log('PROPS', props.invite.guest);
  const [guests, setGuests] = useState(props.invite.guest);
  const [isChecked, setIsChecked] = useState(props.invite.guest.map((guest) => guest.confirmation.status === 'confirmed' ));
  const [validacion, setValidacion] = useState(props.invite.guest.some((elemento) => elemento.confirmation.status === 'declined' ));

  const handleCheckboxChange = (guestId, index) => {
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
        position: 'center',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const res = await cancelAttendance(props.invite._id, guestId);
  
          if (res.status !== 200) {
            return Swal.showValidationMessage(`Hubo un error al intentar confirmar la asistencia, intentalo más tarde.`);
          }
  
          newArray[index] = !newArray[index];
          setIsChecked(newArray);
          return res.data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
          title: "Gracias!",
            text: "Muchas gracias por avisar!",
            icon: "success",
            confirmButtonColor: "#A68563",
            position: 'center',
          });
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
        position: 'center',
        showLoaderOnConfirm: true,
        preConfirm: async () => {
          const res = await confirmAttendance(props.invite._id, guestId);

          if (res.status !== 200) {
            return Swal.showValidationMessage(`Hubo un error al intentar confirmar la asistencia, intentalo más tarde.`);
          }

          newArray[index] = !newArray[index];
          setIsChecked(newArray);
          return res.data;
        },
        allowOutsideClick: () => !Swal.isLoading(),
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Confirmado!",
            text: "Muchas gracias!",
            icon: "success",
            confirmButtonColor: "#A68563",
            position: 'center',
          });
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
      confirmButtonText: "Confirmo",
      position: 'center',
      showLoaderOnConfirm: true,
      preConfirm: async () => {
        const res = await declineAttendance(props.invite._id);

        if (res.status !== 200) {
          return Swal.showValidationMessage(`Hubo un error al intentar confirmar la asistencia, intentalo más tarde.`);
        }

        setValidacion(true);
        return res.data;
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Gracias!",
          text: "Muchas gracias por avisar",
          icon: "success",
          confirmButtonColor: "#A68563",
          position: 'center',
        });
      }
    });
  };

  const canConfirmInvite = () => {
    return !isChecked[0]; // 0 is the principal guy
  }

  return (
    <Box sx={styles.container}>
      <Box sx={styles.box}>
        <Box sx={styles.boxContent}>
          <Typography variant="horaP" sx={styles.typographyHoraP}>
           R.S.V.P 
          </Typography>

          <Typography variant="h2" sx={styles.typographyH2}>
            { props.invite.name }
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
            {validacion ? (
              <>
                <Typography
                  variant="h2"
                  sx={{ height: "20px", paddingTop: "30px" }}
                >
                  Gracias por avisar
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ paddingBottom: "30px", paddingTop: "30px" }}
                >
                  Si cambias de opinión, favor de comunicarte con la planeadora
                </Typography>
              </>
            ) : (
              guests.map((guest, index) => (
                <Lista
                  key={guest._id}
                  guest={guest}
                  check={isChecked[index]}
                  canConfirm={ canConfirmInvite() }
                  isPrimary={guest.isPrimaryContact}
                  handleCheck={() => handleCheckboxChange(guest._id, index)}
                />
              ))
            )}

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
                { isChecked.filter((elemento) => elemento === true).length } / { props.invite.size }
              </Typography>
            </div>
          </Container>
          {validacion || isChecked.some((elemento) => elemento === true) ? null :
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
              sx={styles.confirm_2}
            >
              No asistiré
            </Button>
          </div>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default Confirmacion;
