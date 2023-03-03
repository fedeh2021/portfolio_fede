import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core'
import profile from '../images/profile.png'
import TypeWriterEffect from 'react-typewriter-effect'
import cv from '../images/CV Federico J Hirsch Veloso.pdf'

const About = ({ title, dark, id }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id}>
        <Typography variant='h3'>{title}</Typography>
        <Card className={classes.card}>
          <CardMedia image={profile} title='profile' className={classes.cardMedia}/>
          <CardContent className={classes.cardContent}>
            <TypeWriterEffect 
            text='soy federico hirsch' 
            textStyle={{fontSize: '2rem', fontWeight: '700px', color: 'tomato'}}
            startDelay={100}
            cursorColor='black'
            typeSpedd={100}
            />
            <TypeWriterEffect 
            text='soy licenciado en relaciones internacionalies'
            textStyle={{fontSize: '1.2rem', fontWeight: '500px'}}
            startDelay={2500}
            typeSpedd={100}
            />
            <Typography variant='h6' color='textSecondary'>
              texto para rellenar con mi vida
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
    width: '250px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
    margin: theme.spacing(5)
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
  pdfButton: {
    position: 'absolute',
    bottom: '5rem',
    right: '4rem',
    [theme.breakpoints.down('sm')]: {
      bottom: '2.5rem',
      right: '1rem'
    },
    backgroundColor: 'red',
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
      color: 'tomato'
    }
  },
}))


export default About