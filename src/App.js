import WeddingInvitation from './components/WeddingInvitation';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <WeddingInvitation/>
    </div>
    </ThemeProvider>
  );
}

export default App;
