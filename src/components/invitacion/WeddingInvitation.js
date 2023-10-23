import { Box } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import Inicio from '../Inicio/Inicio';
import Itinerario from '../Itinerario/Itinerario';
import Sugerencias from '../Sugerencias/Sugerencias';
import Confirmacion from '../Confirmacion/Confirmacion';
import Galeria from '../Galeria/Galeria';
import MesaDeRegalos from '../MesaDeRegalos/MesaDeRegalos';
import Footer from '../Footer/Footer';
import IncioFamilia from '../Inicio/Familia';
import SectionUno from '../Sections/Section';
import { weddingInvitationStyles } from './styles'; // Importa los estilos

const WeddingInvitation = () => {
  return (
    <Box style={weddingInvitationStyles.container}>
      <Navbar />
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