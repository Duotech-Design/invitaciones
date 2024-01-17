import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from '@mui/material/Container';
import TablaPrincipal from "./tabla";
import { useState, useEffect } from 'react';
import { fetchAllInvite } from "../../services/dashboard";
import useAuth from "../../utils/auth";
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
const formatData = (datos) => {
  let newData = [];
  if (datos && Array.isArray(datos)) {
    newData = datos.map((data) => {
      return {
        id: data._id,
        nombre: data.name ? data.name.split(" ")[0] : "",
        apellido: data.name ? data.name.split(" ").slice(1).join(" ") : "",
        size: data.guest
          ? `${
              data.guest.filter(
                (guest) => guest.confirmation.status === "confirmed"
              ).length ?? 0
            }/${data.size ?? 0}`
          : "0/0",
        //numero_mesa: 0,
        whatsapp: data.guest && data.guest[0] ? data.guest[0].whatsapp : "",
        notificaciones: data?.notification[0].result,
        invitacionEnviada:
          data.guest && data.guest[0] ? data.guest[0].sendInvitation : false,
        confirmacion: data.guest
          ? data.guest[0].confirmation.status === "confirmed"
            ? "Confirmado"
            : data.guest[0].confirmation.status === "pending"
            ? "Pendiente"
            : "Cancelado"
          : "Sin datos de invitados",
          link: <a href={`https://andreaydiego.website/w/boda?invite=${data?._id}`}>Ir a invitacion web</a>
      };
    });
  }
  return newData;
};


export default function Dashboard() {

  const [ dataInvite, setDataInvite ] = useState([]);
  const [loadOnce, setLoadOnce] = useState(false);
  const [ objetoStatus, setObjetoStatus ] = useState({
    totalConfirmados:0,
    totalPendientes:0,
    principalConfirmados:0,
  });
  const [ suma, setSuma ] = useState(null);
  const navigate = useNavigate();
  
  useAuth();
  useEffect(() => {
    const getWedding = async () => {
      if (loadOnce) return;
      try {
        setLoadOnce(true);
        const weddingResponse = await fetchAllInvite();
        if (weddingResponse.status === 401) return navigate('/login');
        if (weddingResponse.data) {
          const temporal = weddingResponse.data;
          let suma = 0;
          temporal.forEach((obj) => {
            suma += obj.size;
          });
          const totalConfirmados = temporal
            .flatMap((obj) => obj.guest)
            .filter(
              (guest) => guest.confirmation.status === "confirmed"
            ).length;
          const principalConfirmados = temporal
            .filter((obj) => obj.guest[0].confirmation.status === "confirmed").length;
          
          const totalPendientes = temporal
            .flatMap((obj) => obj.guest)
            .filter((guest) => guest.confirmation.status === "pending").length;
          setSuma(suma);
          setObjetoStatus({
            totalConfirmados,
            totalPendientes,
            principalConfirmados
          });
          setDataInvite(formatData(weddingResponse.data));
        }
      } catch (error) {
        console.error("Error fetching wedding data:", error);
        // Puedes manejar el error de otra manera (mostrar un mensaje, etc.)
      }
    };

    getWedding();
  }, [loadOnce]);


  const handleLogout = () => {
    localStorage.removeItem('usuarioLogeado');
    //setIsLoggedIn(false);
    //handleClose();
    navigate('/login');
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width:"100%",
        paddingLeft:"0px",
        paddingRigth:"0px",
        "& > :not(style)": {
          m: 1,
          width: "100%",
          background: `url("/img/1.1.png")`,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{display:"flex", flexDirection:"column", alignItems:"center", width:"100%", paddingLeft:"0px",
        paddingRigth:"0px",}}
      >
        <div style={{width:"100%", display:"flex", justifyContent:"flex-start", alignItems:"center", }} onClick={handleLogout}>
          <Button sx={{width:"10%", display:"flex", justifyContent:"center", alignItems:"center", border:"2px solid #4a331c", color:"#4a331c", borderRadius:"10px", padding:"0px"}}>
          <CloseIcon/><h3>Salir</h3>
          </Button>
       
        </div>
        

        <Container sx={{width:"100%", height:'auto', paddingLeft:"0px",
          paddingRigth:"0px" }}>
            
        {
           
          dataInvite &&
        
       
          <TablaPrincipal datos={dataInvite} objetoStatus={objetoStatus} suma={suma} setLoadOnce={setLoadOnce}/>
         
        }
        
        </Container>
      </Paper>
    </Box>
  );
}
