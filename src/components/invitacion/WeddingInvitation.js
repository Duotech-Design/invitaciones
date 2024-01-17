import { Box } from "@mui/material";
//import Navbar from '../Navbar/Navbar';
import Inicio from "../Inicio/Inicio";
import Itinerario from "../Itinerario/Itinerario.js";
import Sugerencias from "../Sugerencias/Sugerencias";
import Confirmacion from "../Confirmacion/Confirmacion";
import Galeria from "../Galeria/Galeria";
import MesaDeRegalos from "../MesaDeRegalos/MesaDeRegalos";
import Footer from "../Footer/Footer";
import IncioFamilia from "../Inicio/Familia";
import SectionUno from "../Sections/Section";
import NewNavbar from "../Navbar/NewNavbar";
import { weddingInvitationStyles } from "./styles"; // Importa los estilos
import Ceremonia from "../Itinerario/Ceremonia.js";
import Recepcion from "../Itinerario/Recepcion.js";
import Vestimenta from "../Confirmacion/Vestimenta.js";
import Sobre from "../Sobre/Sobre.js";
import { useEffect, useRef, useState } from "react";
import ImageMasonry from "../Masonry/Masonry.js";
import { GetWeddings } from "../Weddings/Weddings.js";
import { fetchWedding } from "../../services/wedding.js";
import { useParams } from 'react-router';
import { useSearchParams } from "react-router-dom";
import SugerenciasHotel from "../Sugerencias/SugerenciaHotel.js";

const WeddingInvitation = (props) => {
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();
  const [click, setClick] = useState(false)
  const [wedding, setWedding] = useState({});

  // scroll refs
  const refs = {
    inicio: useRef(null),
    itinerario: useRef(null),
    confirmacion: useRef(null),
    sugerencias: useRef(null),
    mesaDeRegalos: useRef(null),
  }

  let loadOnce = false

  const navbarHandler = (refType) => {
    refs[refType]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const getWedding = async () => {
      if (loadOnce) return;
      loadOnce = true;

      const weddingResponse = await fetchWedding(params.weddingAlias, searchParams.get('invite'));
      const weddingObj = weddingResponse.data.wedding || { _id: '0' };
      setWedding(weddingResponse.data)
    }

    getWedding()
  }, [])

  const handdleClick = () => {
    setClick(true)
  }
  return (
    <Box style={weddingInvitationStyles.container}>
      {click ? 
      GetWeddings(wedding, refs, navbarHandler)
    : <Sobre onClick = {handdleClick}/> }
    </Box>
  );
};

export default WeddingInvitation;
