<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["mail"];
    $comentario = $_POST["comentario"];
    $destino= "alojamientoelnomada@gmail.com";

    $asunto="nuevo mensaje";
    $cuerpo="Nombre: $nombre\nApellido: $apellido\nCorreo electrónico: $correo\nMensaje:\n$comentario";
    if (@mail($destino, $asunto, $cuerpo)){
        echo "¡El formulario se envió correctamente!";
      } else {
        echo "Hubo un error al enviar el formulario.";
      }

}

?>