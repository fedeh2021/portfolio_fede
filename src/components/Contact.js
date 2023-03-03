import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'



const Contact = ({ title, dark, id }) => {
  const classes = useStyles()
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}><div className={classes.sectionContent} id={id}>
      <Typography variant='h3'>{title}</Typography>
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
  }
}))

export default Contact