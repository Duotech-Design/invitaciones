import Inicio from "../Inicio/Inicio";
import Itinerario from "../Itinerario/Itinerario.js";
import Sugerencias from "../Sugerencias/Sugerencias";
import Confirmacion from "../Confirmacion/Confirmacion";
import MesaDeRegalos from "../MesaDeRegalos/MesaDeRegalos";
import Footer from "../Footer/Footer";
import IncioFamilia from "../Inicio/Familia";
import NewNavbar from "../Navbar/NewNavbar";
import Ceremonia from "../Itinerario/Ceremonia.js";
import Recepcion from "../Itinerario/Recepcion.js";
import Vestimenta from "../Confirmacion/Vestimenta.js";
import ImageMasonry from "../Masonry/Masonry.js";
import SugerenciasHotel from "../Sugerencias/SugerenciaHotel.js";


const WeddingMap = {
  '65a0b97fc7f02cbbbee982c5': test,
  '65a1f541f10a9d50430ce58b': test,
}

export function GetWeddings(weddingData, refs, navbarHandler) {
  return WeddingMap[weddingData.wedding._id](weddingData, refs, navbarHandler) || <div>Wedding not found</div>;
}

function test(data, refs, navbarHandler) {
  return (
    <>
      <NewNavbar handler={navbarHandler}/>
      <Inicio ref={refs?.inicio}/>
      <IncioFamilia/>
      <Ceremonia/>
      <Recepcion/>
      <Itinerario ref={refs?.itinerario}/>
      <Confirmacion ref={refs?.confirmacion} invite={data.invite}/>
      <Vestimenta/>
      <Sugerencias ref={refs?.sugerencias}/> 
      <SugerenciasHotel/>
      <MesaDeRegalos ref={refs?.mesaDeRegalos}/>
      {/*<Galeria />*/}
      {/*<SectionUno />*/}
      <ImageMasonry/>
      <Footer />
      </>
  )
}