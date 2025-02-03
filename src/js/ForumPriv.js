const mensajeInput = document.querySelector('.mensaje-input');
const mensajesDiv = document.querySelector('.mensajes');
const enviarMensajeBtn = document.querySelector('.enviar-mensaje');

enviarMensajeBtn.addEventListener('click', function() {
    const mensajeTexto = mensajeInput.value.trim();

    if (mensajeTexto !== "") {
        const mensajeElement = document.createElement('div');
        mensajeElement.className = 'mensaje';
        mensajeElement.textContent = mensajeTexto;

        // Modificar el estilo del mensaje en JavaScript
        mensajeElement.style.backgroundColor = '#ffffff';
        mensajeElement.style.padding = '10px';
        mensajeElement.style.margin = '2% 0';
        mensajeElement.style.borderRadius = '5px';
        mensajeElement.style.color = '#000000';

        mensajesDiv.appendChild(mensajeElement);
        mensajeInput.value = '';
        mensajesDiv.scrollTop = mensajesDiv.scrollHeight; // Desplazar hacia abajo
    }
});
