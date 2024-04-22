/*global Swal*/
import React, { useState } from "react";
import {
  Button,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const Contact = ({ title, dark, id }) => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const serviceId = "service_i5a120c";
    const templateId = "template_ufz6pds";
    const userId = "7iGnqHQrT21OOvVAL";

    setIsSubmitting(true);
    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        "#myForm",
        userId
      );
      console.log(response.text);
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarme",
        icon: "success",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: classes.alert,
        },
      });
      reset();
    } catch (error) {
      console.log(error.text);
      Swal.fire({
        title: "Lo siento, hubo un error al enviar tu mensaje.",
        text: "Por favor intenta de nuevo.",
        icon: "error",
        confirmButtonText: "OK",
        buttonsStyling: false,
        customClass: {
          confirmButton: classes.alert,
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`${classes.section} ${dark && classes.sectionDark}`}>
      <div className={classes.sectionContent} id={id}>
        <Typography className={classes.title} variant="h3">
          {title}
        </Typography>
        <Paper className={classes.root}>
          <Typography variant="h5">Contactame</Typography>
          <form
            className={classes.form}
            autoComplete="off"
            id="myForm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label="Tu nombre"
              {...register("from_name", { required: true })}
            />
            {errors.from_name && <span>Este campo es requerido</span>}
            <TextField
              label="Tu email"
              {...register("reply_to", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
            />
            {errors.reply_to?.type === "required" && (
              <span>Este campo es requerido</span>
            )}
            {errors.reply_to?.type === "pattern" && (
              <span>Ingresa un email válido</span>
            )}
            <TextField
              label="Tu mensaje"
              {...register("message", { required: true })}
            />
            {errors.message && <span>Este campo es requerido</span>}
            <Button type="submit" variant="contained" disabled={isSubmitting}>
              Enviar
            </Button>
          </form>
        </Paper>
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
  },
  root: {
    marginTop: theme.spacing(4),
    background: "#bcb7ab",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(4),
    "& button": {
      backgroundColor: "#fff",
      color: "#1e6495",
      fontWeight: 900,
      fontSize: "1rem",
      marginTop: theme.spacing(4),
    },
    "& button:hover": {
      backgroundColor: "#1e6495",
      color: "#fff",
    },
  },
  title: {
    paddingTop: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    "& input": {
      marginBottom: theme.spacing(1),
    },
  },
  alert: {
    background: "#1e6495",
    color: "#fff",
    fontWeight: 600,
    fontSize: "14px",
    border: "none",
    boxShadow: "none",
    borderRadius: "5px",
    padding: "10px 24px",
    margin: 0,
    cursor: "pointer",
  },
}));

export default Contact;
