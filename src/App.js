import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeddingInvitation from './components/invitacion/WeddingInvitation';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
//import Inicio from './pages/inicio'
//import InicioInvitacion from './pages/inicio';
import Inicio from './pages/inicio';
import NewNavbar from './components/Navbar/NewNavbar';
function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
      <Route path="/" element={<NewNavbar/>} />
      <Route path="/invitacion" element={<WeddingInvitation />} />
      <Route path="/inicio" element={<Inicio />} />
      </Routes>
    </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
