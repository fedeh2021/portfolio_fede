import React from 'react'
import { Button, makeStyles, Paper, TextField, Typography } from '@material-ui/core'
import {useForm} from 'react-hook-form'

const Contact = ({ title, dark, id }) => {
  const classes = useStyles()
  const {register, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = data => {
    console.log(data)
  }

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}><div className={classes.sectionContent} id={id}>
      <Typography className={classes.title} variant='h3'>{title}</Typography>
      <Paper className={classes.root} >
        <Typography variant='h5'>Contactame</Typography>
        <form className={classes.form} autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <TextField label='Tu nombre' {...register('name', {required: true })}/>
          {errors.name && <span>Este campo es requerido</span>}
          <TextField label='Tu email' {...register('email', {required: true, pattern: /^\S+@\S+$/i })}/>
          {errors.email?.type === 'required' && <span>Este campo es requerido</span>}
          {errors.email?.type === 'pattern' && <span>Ingresa un email válido</span>}
          <TextField label='Tu mensaje' {...register('message', {required: true })}/>
          {errors.message && <span>Este campo es requerido</span>}
          <Button type='submit' variant='contained'>Enviar</Button>
        </form>
      </Paper>
    </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: '100vh',
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
    background: '#bcb7ab',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing(4),
    '& button': {
      backgroundColor: '#fff',
      color: '#1e6495',
      fontWeight: 900,
      fontSize: '1rem',
      marginTop: theme.spacing(4)
    },
    '& button:hover': {
      backgroundColor: '#1e6495',
      color: '#fff',
    }
  },
  title: {
    paddingTop: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& input': {
      marginBottom: theme.spacing(1)
    }
  }
}))

export default Contact