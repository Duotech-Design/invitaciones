import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeddingInvitation from './components/invitacion/WeddingInvitation';
import { ThemeProvider } from '@mui/material/styles';
import Dashboard from './components/Dashboard/dashboard';
import theme from './theme';
//import Inicio from './pages/inicio'
//import InicioInvitacion from './pages/inicio';
import Inicio from './pages/inicio';
import NewNavbar from './components/Navbar/NewNavbar';
import LogIn from './components/LogIn/LogIn';
function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path="/" element={<NewNavbar/>} />
      <Route path="/invitacion" element={<WeddingInvitation />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path='/logIn' element={<LogIn/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </ThemeProvider>
    </Router>
  );
}

export default App;
