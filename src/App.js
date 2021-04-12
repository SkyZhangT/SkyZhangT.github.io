import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import ResponsiveDrawer from './components/drawer'
import './App.css';

const theme = createMuiTheme({
  
})

function App() {
  return (
    <div className="App">
      <ThemeProvider theme=theme>
      </ThemeProvider>
    </div>
  );
}

export default App;
