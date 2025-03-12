window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Evita que el formulario se envíe normalmente

        // Envía los datos del formulario a través del servicio y la plantilla configurada en EmailJS
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(() => {
                console.log('SUCCESS!');  // Mensaje de éxito
            }, (error) => {
                console.log('FAILED...', error);  // Mensaje de error
            });
    });
}
