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
import { useState } from "react";
import ImageMasonry from "../Masonry/Masonry.js";
import SugerenciasHotel from "../Sugerencias/SugerenciaHotel.js";


const WeddingInvitation = () => {
  const [click, setClick] = useState(false)
  const handdleClick = () => {
    setClick(true)
  }
  return (
    
    <Box style={weddingInvitationStyles.container}>
      {click ? 
      <>
      <NewNavbar />
      <Inicio />
      <IncioFamilia />
      <Ceremonia />
      <Recepcion />
      <Itinerario />
      <Confirmacion />
      <Vestimenta/>
      <Sugerencias /> 
      <SugerenciasHotel/>
    
      <MesaDeRegalos />
      {/*<Galeria />*/}
      {/*<SectionUno />*/}
      <ImageMasonry/>
      <Footer />
      </>
    : <Sobre onClick = {handdleClick}/> }
    </Box>
  );
};

export default WeddingInvitation;
