// Cargar la lista de imágenes desde el archivo JSON
fetch('imagenes.json')
	.then(response => response.json()) // Convertir la respuesta en JSON
	.then(images => {
		const galeria = document.getElementById('galeria') // Contenedor de la galería

		// Recorrer la lista de imágenes
		images.forEach(image => {
			// Crear un nuevo contenedor para cada imagen
			const div = document.createElement('div')
			div.classList.add('imagen')

			// Crear la etiqueta <img> y configurarla
			const img = document.createElement('img')
			img.src = `images/${image}` // Ruta a la carpeta de imágenes
			img.alt = image // Texto alternativo con el nombre del archivo
			img.classList.add('imagen-item')

			// Agregar la imagen al contenedor
			div.appendChild(img)

			// Agregar el contenedor de la imagen a la galería
			galeria.appendChild(div)
		})
	})
	.catch(error => console.error('Error al cargar las imágenes:', error))
