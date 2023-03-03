import React, { useState } from 'react'
import { AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, Toolbar } from "@material-ui/core"
import logo from "../images/20210214_114250.png"
import { makeStyles } from '@material-ui/core'
import { Link, animateScroll as scroll } from "react-scroll"
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone"
import EmojiObjectsTwoToneIcon from "@material-ui/icons/EmojiObjectsTwoTone"
import BuildTwoToneIcon from "@material-ui/icons/BuildTwoTone"
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone"
import MenuIcon from "@material-ui/icons/Menu"
import CancelIcon from "@material-ui/icons/Cancel"

const links = [
  {
    id: "about",
    text: "about me",
    icon: <InfoTwoToneIcon fontSize='large'/>
  },
  {
    id: "skills",
    text: "skills",
    icon: <EmojiObjectsTwoToneIcon fontSize='large'/>
  },
  {
    id: "work",
    text: "mywork",
    icon: <BuildTwoToneIcon fontSize='large'/>
  },
  {
    id: "contact",
    text: "contacto",
    icon: <ContactMailTwoToneIcon fontSize='large'/>
  },
]

const Navbar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <>
      <AppBar position='sticky' className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <img src={logo} className={classes.logo} alt="Logo" />
          <List className={classes.menu} >
            {links.map(({ id, text }, index) => (
              <Link
                key={index}
                to={id}
                activeClass="active"
                spy
                smooth
                duration={500}
                offset={-70}>
                {text}
              </Link>
            ))}
          </List>
          <IconButton edge='end' className={classes.menuButton} onClick={() => setOpen(!open)}>
            <MenuIcon fontSize='large' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <IconButton onClick={() => setOpen(false)} className={classes.cancelIcon}>
          <CancelIcon fontSize='large'/>
        </IconButton>
        <Divider />
        {links.map(({ id, text, icon }, index) => (
          <Link className={classes.sideBar}
            key={index}
            to={id}
            activeClass="active"
            spy
            smooth
            duration={500}
            offset={-70}>
            <ListItem component='h5'>
              <span><ListItemIcon>
                {icon}
              </ListItemIcon></span>{text}
            </ListItem>
          </Link>
        ))}
      </Drawer>
    </>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  toolbar: {
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height: "1.5rem",
    objectFit: "contain",
    "&:hover": {
      cursor: "pointer"
    }
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    },
    "& a": {
      color: "#333",
      fontSize: '1.4rem',
      fontWeight: "bold",
      marginLeft: theme.spacing(3)
    },
    "& a:hover": {
      cursor: 'pointer',
      color: "tomato",
      borderBottom: "3px solid tomato"
    }
  },
  menuButton: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      color: 'tomato',
      position: 'absolute',
      top: 0,
      right: 10
    }
  },
  cancelIcon: {
    color: 'tomato',
    position: 'absolute',
    top: 0,
    right: 10,
  },
  sideBar: {
    width: "40vw",
    [theme.breakpoints.down('sm')]: {
      width: '60vw'
    },
    "& h5": {
      margin: theme.spacing(10, 0, 0, 4),
      fontSize: "1.4rem",
      color: '#333',
      fontWeight: 'bold',
    },
    "& h5:hover": {
      color: 'tomato',
      cursor: 'pointer',
    }
  }
}))

export default Navbar