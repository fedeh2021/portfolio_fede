### Portfolio personal Federico Hirsch

-Aplicación React que utiliza el framework de diseño Material-UI para crear una aplicación web con una barra de navegación y tres secciones: "Sobre Mi", "Mis Notas" y "Contacto". El archivo de la barra de navegación se importa como "Navbar", mientras que los archivos de las tres secciones se importan como "About", "MyWork" y "Contact", respectivamente.

-Se define un tema de Material-UI utilizando la función createTheme, que establece la paleta de colores primaria y secundaria. Luego, se utiliza la función useStyles de Material-UI para definir un objeto de estilos para la aplicación.

-La función App devuelve un componente de la aplicación que envuelve los componentes Navbar, About, MyWork y Contact en un componente de Material-UI llamado MuiThemeProvider. Se establece el tema creado anteriormente como el tema para la aplicación.

-El componente llamado Contact que representa un formulario de contacto. El formulario se compone de tres campos: "Tu nombre", "Tu email" y "Tu mensaje". Cuando el usuario envía el formulario, se valida que los campos requeridos estén completos y que el campo de correo electrónico tenga un formato válido. Luego, se envía el mensaje a través de la API de emailjs y se muestra un mensaje de éxito o error usando la librería Sweetalert.

-El componente usa varios elementos y hooks de Material-UI, incluyendo Button, Paper, TextField y Typography. También importa la librería react-hook-form para manejar el estado del formulario y la librería emailjs-com para enviar el correo electrónico. El componente utiliza el makeStyles hook para aplicar estilos personalizados y define algunas variables de estado usando useState hook.