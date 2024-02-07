import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { interviewData } from "../interviewData";

const MyInterview = ({ title, dark, id }) => {
  const classes = useStyles();
  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id}>
        <Typography variant="h3">{title}</Typography>
        <Grid container className={classes.gridContainer}>
          {interviewData.map(({ title, image, link, date, media }, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  image={image}
                  className={classes.cover}
                  title="cover"
                />
                <CardContent>
                  <Typography
                    component="a"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.link}
                  >
                    {title}
                  </Typography>
                  <Typography className={classes.typography}>{date}</Typography>
                  <Typography className={classes.typography}>
                    {media}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
  },
  sectionDark: {
    background: "#333",
    color: "#fff",
  },
  sectionContent: {
    maxWidth: "80vw",
    margin: "0 auto",
    padding: theme.spacing(5),
  },
  gridContainer: {
    marginTop: theme.spacing(10),
  },
  card: {
    maxWidth: 345,
    minHeight: 275,
    margin: theme.spacing(3),
  },
  cover: {
    height: 0,
    paddingTop: "56.25%",
  },
  link: {
    fontWeight: "bold",
    textDecoration: "none",
    color: "#333",
  },
  typography: {
    fontSize: "0.9rem",
    marginTop: theme.spacing(1),
  },
}));


export default MyInterview;