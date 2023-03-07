import React, { useState } from 'react'
import { Button, makeStyles, Paper, Radio, TextField, Typography } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'

const Contact = ({ title, dark, id }) => {
  const classes = useStyles()
  const [value, setValue] = useState('Say Hi')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}><div className={classes.sectionContent} id={id}>
      <Typography variant='h3'>{title}</Typography>
      <Paper className={classes.root} >
        <div className={classes.titleAndChoise}>
          <Typography variant='h5'>Contactame</Typography>
          <div className={classes.radioButtons}>
            <span>say hello</span>
            <Radio
              value='Say Hi'
              checked={value === 'Say Hi'}
              color='primary'
              onChange={handleChange}
            />
            <span>get a quote</span>
            <Radio
              value='get a quote'
              checked={value === 'get a quote'}
              color='primary'
              onChange={handleChange}
            />
          </div>
        </div>
        <form className={classes.form} autoComplete='off'>
          <TextField label='tu nombre' />
          <TextField label='email' />
          {
            value === 'get a quote' ? (
              <>
                <TextField label='servicio necesario' />
                <TextField label='estimated budget' />
              </>
            ) : null
          }
          <TextField label='tu mensaje' />
        </form>
        <Button variant='contained'>Submit</Button>
      </Paper>
    </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionDark: {
    background: "#333",
    color: "#fff",
  },
  sectionContent: {
    maxWidth: "80vw",
    margin: '0 auto',
    
  },
  root: {
    marginTop: theme.spacing(4),
    background: 'tomato',
    color: '#fff',
    fontSize: '1.2rem',
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    '& button': {
      backgroundColor: '#fff',
      color: 'tomato',
      fontWeight: 900,
      fontSize: '1.2rem',
      marginTop: theme.spacing(4) 
    },
    '& button:hover': {
      backgroundColor: purple[500],
      color: '#fff',
    }
  },
  titleAndChoise: {
    '& h5': {
      marginTop: theme.spacing(4),
    }
  },
  radioButtons: {

  }
}))

export default Contact