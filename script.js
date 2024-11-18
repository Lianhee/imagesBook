// Cargar la lista de imágenes desde el archivo JSON
fetch('imagenes.json')
    .then(response => response.json())  // Convertir la respuesta en JSON
    .then(images => {
        const galeria = document.getElementById('galeria');  // Contenedor de la galería
        
        // Recorrer la lista de imágenes
        images.forEach(image => {
            // Crear un nuevo contenedor para cada imagen
            const div = document.createElement('div');
            div.classList.add('imagen');
            
            // Crear la etiqueta <img> y configurarla
            const img = document.createElement('img');
            img.src = `images/${image}`;  // Ruta a la carpeta de imágenes
            img.alt = image;  // Texto alternativo con el nombre del archivo
            img.classList.add('imagen-item');
            
            // Añadir un evento de clic para ver la imagen ampliada
            img.addEventListener('click', () => {
                mostrarImagenDetalle(`images/${image}`);
            });

            // Agregar la imagen al contenedor
            div.appendChild(img);
            
            // Agregar el contenedor de la imagen a la galería
            galeria.appendChild(div);
        });
    })
    .catch(error => console.error('Error al cargar las imágenes:', error));

// Función para mostrar la imagen ampliada al hacer clic
function mostrarImagenDetalle(imagenUrl) {
    const imagenDetalle = document.getElementById('imagenDetalle');
    const imagenAmpliada = document.getElementById('imagenAmpliada');

    imagenAmpliada.src = imagenUrl;  // Establece la URL de la imagen ampliada
    imagenDetalle.classList.add('show');  // Muestra el contenedor de la imagen ampliada

    // Añadir un evento para cerrar la vista ampliada al hacer clic
    imagenDetalle.addEventListener('click', () => {
        imagenDetalle.classList.remove('show');  // Oculta la imagen ampliada
    });
}
