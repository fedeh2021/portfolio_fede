import { makeStyles } from '@material-ui/core'
import Navbar from './components/Navbar';
import MyWork from './components/MyWork';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Navbar />
      <About title='About Me' id='about' dark/>
      <Skills title='Mi proyecto' id="skills" dark={false}/>
      <MyWork title='mis trabajos' id='work' dark/>
      <Contact title='contacto' id='contact' dark={false}/>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red'
  }
}))


export default App;
