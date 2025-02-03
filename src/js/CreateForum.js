const crearDivBtn = document.getElementById('crear-div');
const inputTexto = document.getElementById('input-texto');
const contenedor = document.getElementById('contenedor');

crearDivBtn.addEventListener('click', function() {
    const texto = inputTexto.value.trim();

    if (texto !== "" && !contenedor.querySelector('.contenido')) {
        const nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'contenido';
        nuevoDiv.innerHTML = `
            <div class="contenedor">
                <div class="cont">
                    <button class="eliminar">Eliminar</button>
                    <p>${texto}</p>
                </div>

                <div class="enviar">
                    <input type="text" class="mensaje-input" placeholder="Escribe un mensaje">
                    <button class="enviar-mensaje">Enviar Mensaje</button>
                </div>
            </div>

            <div class="mensajes"></div>`;
        contenedor.appendChild(nuevoDiv);
        inputTexto.value = '';

        // Modificar el estilo en JavaScript
        const content = nuevoDiv.querySelector('.contenedor');
        content.style.backgroundColor = '';
        content.style.display = 'flex';
        content.style.flexDirection = 'column';
        content.style.justifyContent = 'center';
        content.style.alignItems = 'center';
        content.style.width = '100%';
        content.style.padding = '0';

        const container = nuevoDiv.querySelector('.cont')
        container.style.textAlign = 'center';
        
        const boton = nuevoDiv.querySelector('.eliminar');
        boton.style.backgroundColor = '#ff6633';
        boton.style.border = 'none';
        boton.style.padding = '10px';
        boton.style.borderRadius = '5px';
        boton.style.margin = '5%';

        const send = nuevoDiv.querySelector('.enviar');
        send.style.width = '90%';
        send.style.display = 'flex';
        send.style.flexDirection = 'column';
        send.style.justifyContent = 'center';
        send.style.alignItems = 'center';

        const mensajeInput = nuevoDiv.querySelector('.mensaje-input');
        mensajeInput.style.backgroundColor = '#f0f0f0';
        mensajeInput.style.border = 'none';
        mensajeInput.style.borderRadius = '5px';
        mensajeInput.style.padding = '10px';
        mensajeInput.style.marginTop = '2%';
        mensajeInput.style.width = '100%';

        const botton = nuevoDiv.querySelector ('.enviar-mensaje');
        botton.style.backgroundColor = 'wheat'
        botton.style.marginTop = '2%';
        botton.style.padding = '10px';
        botton.style.borderRadius = '5px';
        botton.style.border = 'none';

        const mensaje = nuevoDiv.querySelector('.mensajes');
        mensaje.style.padding = '10px';
        mensaje.style.overflow ='auto';
        mensaje.style.height = '300px';


        // Añadir funcionalidad para eliminar el foro
        nuevoDiv.querySelector('.eliminar').addEventListener('click', function() {
        contenedor.removeChild(nuevoDiv);
        });

        // Añadir funcionalidad para enviar mensajes
        nuevoDiv.querySelector('.enviar-mensaje').addEventListener('click', function() {
        const mensajeInput = nuevoDiv.querySelector('.mensaje-input');
        const mensajesDiv = nuevoDiv.querySelector('.mensajes');
        const mensajeTexto = mensajeInput.value.trim();

        if (mensajeTexto !== "") {
            const mensajeElement = document.createElement('div');
            mensajeElement.className = 'mensaje';
            mensajeElement.textContent = mensajeTexto;

            // Modificar el estilo del mensaje en JavaScript
            mensajeElement.style.backgroundColor = 'white';
            mensajeElement.style.color = 'black';
            mensajeElement.style.border = 'none';
            mensajeElement.style.padding = '10px';
            mensajeElement.style.margin = '2% 0';
            mensajeElement.style.borderRadius = '5px';

            mensajesDiv.appendChild(mensajeElement);
            mensajeInput.value = '';
            mensajesDiv.scrollTop = mensajesDiv.scrollHeight; // Desplazar hacia abajo
        }
        });
    }
});
