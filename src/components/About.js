import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import profile from '../images/profileFedericoHirsch.png'
import TypeWriterEffect from 'react-typewriter-effect'
import cv from '../images/CV Federico J Hirsch Veloso - Lic RRII.pdf'

const About = ({ title, dark, id }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id}>
        <Typography variant='h3' className={classes.title}>{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={profile} title='profile' className={classes.cardMedia} />
          <CardContent className={classes.cardContent}>
            <TypeWriterEffect
              text='Hola! Soy Federico Hirsch Veloso'
              textStyle={{ fontSize: '2rem', fontWeight: '700px', color: '#1e6495' }}
              startDelay={100}
              cursorColor='black'
              typeSpedd={100}
            />
            <Typography className={classes.subtitle}>
              Soy licenciado en Relaciones Internacionales. Mi vocación por lo social y mi pasión por América Latina me motivaron a escribir distintas notas periodísticas acerca de la realidad política de la región.
            </Typography>
            <Typography variant='h6' color='textSecondary'>
              En la sección mis notas podrán encontrar los artículos y haciendo click podrán descargar mi curriculum:
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant='contained' className={classes.pdfButton}>
              <a href={cv} download>
                Descargar CV
              </a>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh'
  },
  sectionDark: {
    background: "#333",
    color: "#fff",
  },
  sectionContent: {
    maxWidth: "80vw",
    margin: '0 auto',
  },
  card: {
    height: '70vh',
    display: 'flex',
    marginTop: theme.spacing(6),
    position: 'relative',
  },
  cardMedia: {
    width: '550px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
    margin: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto'
    }
  },
  cardContent: {
    marginTop: theme.spacing(2),
    "& h6": {
      marginTop: theme.spacing(6),
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      }
    }
  },
  title: {
    paddingTop: theme.spacing(2)
  },
  subtitle: {
    fontSize: '1.2rem',
    fontWeight: '500px',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  pdfButton: {
    position: 'absolute',
    bottom: '3.5rem',
    right: '4rem',
    [theme.breakpoints.down('sm')]: {
      bottom: '2.5rem',
      right: '0.4rem'
    },
    [theme.breakpoints.down('md')]: {
      bottom: '1rem'
    },
    backgroundColor: '#1e6495',
    padding: theme.spacing(3),
    "&: hover": {
      backgroundColor: '#fff',
    },
    "& a": {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 700
    },
    "& a:hover": {
      color: '#1e6495'
    }
  },
}))


export default About