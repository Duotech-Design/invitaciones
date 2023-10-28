import { Box } from '@mui/material';
//import Navbar from '../Navbar/Navbar';
import Inicio from '../Inicio/Inicio';
import Itinerario from '../Itinerario/Ceremonia.js.js';
import Sugerencias from '../Sugerencias/Sugerencias';
import Confirmacion from '../Confirmacion/Confirmacion';
import Galeria from '../Galeria/Galeria';
import MesaDeRegalos from '../MesaDeRegalos/MesaDeRegalos';
import Footer from '../Footer/Footer';
import IncioFamilia from '../Inicio/Familia';
import SectionUno from '../Sections/Section';
import NewNavbar from '../Navbar/NewNavbar';
import { weddingInvitationStyles } from './styles'; // Importa los estilos

const WeddingInvitation = () => {
  return (
    <Box style={weddingInvitationStyles.container}>
      <NewNavbar />
      <Inicio />
      <IncioFamilia />
      <Itinerario />
      <Sugerencias />
      <Confirmacion />
      <Galeria />
      <MesaDeRegalos />
      <SectionUno/>
      <Footer />
    </Box>
  );
}

export default WeddingInvitation;