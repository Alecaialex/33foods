$(document).ready(function() {
    $("#contact-form").submit(function(e) {
      e.preventDefault(); // Prevenir el envío del formulario por defecto
      $("#enviar").prop("disabled", true); // Deshabilita el botón para evitar envíos duplicados
  
      // Envía el formulario de forma asíncrona
      $.ajax({
        url: "https://formspree.io/f/xqkvngwe",
        method: "POST",
        data: $("#contact-form").serialize(),
        dataType: "json",
        success: function() {
          // Muestra el mensaje de agradecimiento
          $("#confirmation-message").show();
        }
      });
    });
  });
  