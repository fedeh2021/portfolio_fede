import { createTheme, makeStyles, MuiThemeProvider } from '@material-ui/core'
import Navbar from './components/Navbar';
import MyWork from './components/MyWork';
import MyInterview from './components/MyInterview';
import About from './components/About';
import Contact from './components/Contact';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#333'
  }
}))

const theme = createTheme({
  palette: {
    primary: { main: '#1e6495' },
    secondary: { main: '#333' }
  }
})

function App() {
  const classes = useStyles()
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Navbar />
        <About title='Sobre Mi' id='about' dark />
        <MyWork title='Mis Notas' id='work' dark />
        <MyInterview title='Mis Entrevistas' id='interview' dark />
        <Contact title='Contacto' id='contact' dark={false} />
      </div>
    </MuiThemeProvider>
  );
}

export default App;