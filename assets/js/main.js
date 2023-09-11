var fotosMiniatura = document.querySelectorAll('.foto-miniatura');
var vistaImagen = document.getElementById('vista-imagen');
var imagenGrande = document.getElementById('imagen-grande');

// Agregar un evento de clic a cada miniatura de imagen
fotosMiniatura.forEach(function(miniatura) {
    miniatura.addEventListener('click', function() {
        var rutaImagenGrande = this.src;
        imagenGrande.src = rutaImagenGrande;
        vistaImagen.style.display = 'block';
    });
});

// Agregar un evento de clic para ocultar la vista de imagen grande
vistaImagen.addEventListener('click', function() {
    vistaImagen.style.display = 'none';
});
