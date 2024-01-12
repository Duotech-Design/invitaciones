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
import Ceremonia from "../Itinerario/Ceremonia.js";
import Recepcion from "../Itinerario/Recepcion.js";
import Vestimenta from "../Confirmacion/Vestimenta.js";
import Sobre from "../Sobre/Sobre.js";
import { useState } from "react";
import ImageMasonry from "../Masonry/Masonry.js";

const WeddingMap = {
  '65a0b97fc7f02cbbbee982c5': test,
}

export function GetWeddings(weddingData) {
  console.log(weddingData)
  return WeddingMap[weddingData.wedding._id](weddingData) || <div>Wedding not found</div>;
}

function test(data) {
  console.log('Data On Test', data);
  return (
    <>
      <NewNavbar />
      <Inicio />
      <IncioFamilia />
      <Ceremonia />
      <Recepcion />
      <Itinerario />
      <Confirmacion invite={data.invite}/>
      <Vestimenta/>
      <Sugerencias />
      <MesaDeRegalos />
      {/*<Galeria />*/}
      {/*<SectionUno />*/}
      <ImageMasonry/>
      <Footer />
    </>
  )
}