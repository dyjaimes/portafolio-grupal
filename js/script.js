
// Obtener el formulario y el campo de texto por sus ID
document.getElementById('messageForm').addEventListener('submit', function(event) {
    // Prevenir el comportamiento por defecto (recarga de la página)
    event.preventDefault();
    
    // Obtener el campo de texto (input)
    var messageInput = document.querySelector('.message-form input');
    
    // Borrar el contenido del campo de texto
    messageInput.value = '';

    // Opcional: Agregar alguna acción adicional (por ejemplo, mostrar un mensaje de "mensaje enviado")
    console.log('Mensaje enviado (sin recargar la página)');
});
