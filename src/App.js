import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeddingInvitation from './components/invitacion/WeddingInvitation';
import Inicio from './pages/Inicio'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
//import InicioInvitacion from './pages/inicio';

function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
      <Route path="/" element={<h1>Para ir a la invitacion agrega /invitacion en la url</h1>} />
      <Route path="/invitacion" element={<WeddingInvitation />} />
      <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
