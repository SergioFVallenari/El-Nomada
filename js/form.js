document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se envíe el formulario por defecto
  
    // Obtiene los valores de los campos
    var name = document.getElementById("nombre").value;
    var surname = document.getElementById("apellido").value;
    var email = document.getElementById("mail").value;
    var message = document.getElementById("comentario").value;
  
    // Construye el contenido del correo electrónico
    var body = "Nombre: " + name + "\n" +
               "Correo electrónico: " + email + "\n" +
               "Mensaje: " + message;
  
    // Envía el formulario por correo electrónico
    window.open("mailto:alojamientoelnomada@gmail.com?subject=Formulario de contacto&body=" + encodeURIComponent(body));
  
    // Limpia los campos del formulario
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  });