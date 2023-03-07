import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Technologies from './Technologies'


const Skills = ({ title, dark, id }) => {
  const classes = useStyles()

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id}>
        <Typography variant='h4'>{title}</Typography>
        <Technologies />
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
    marginTop: theme.spacing(3),
    '& h4': {
      marginBottom: theme.spacing(6),
      marginLeft: theme.spacing(3),
    }
  }
}))

export default Skills