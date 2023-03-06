import React from 'react'
import logo from '../images/20210214_114250.png'
import Timeline from '@material-ui/lab/Timeline'
import { Typography, makeStyles, Paper } from '@material-ui/core'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import StarRating from './StarRating'

const Technologies = () => {

  const skills = [
    {
      year: '2010',
      src: logo,
      title: 'lo que aprendiste',
      stars: 4,
    },
    {
      year: '2013',
      src: logo,
      title: 'lo que aprendiste',
      stars: 4,
    },
    {
      year: '2014',
      src: logo,
      title: 'lo que aprendiste',
      stars: 4,
    },
    {
      year: '2015',
      src: logo,
      title: 'lo que aprendiste',
      stars: 4,
    },
    {
      year: '2019',
      src: logo,
      title: 'lo que aprendiste',
      stars: 4,
    },
  ]

  const classes = useStyles()

  return (
    <Timeline align='left'>
      {
        skills.map(({ year, src, title, stars }, index) => (
          <TimelineItem key={index} >
            <TimelineOppositeContent>
              <Typography variant='h6' color='textSecondary'>
                {year}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <img src={src} alt={title} className={classes.customLogo} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent >
              <Paper elevation={6} className={classes.paper}>
                <Typography variant='h6' component='h1'>
                  {title}
                </Typography>
                <StarRating stars={stars}></StarRating>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))
      }
    </Timeline>
  )
}

const useStyles = makeStyles((theme) => ({
  customLogo: {
    width: '25px',
  },
  paper: {
    padding: '6px 16px',
    maxWidth: '200px',
  },
}))

export default Technologies