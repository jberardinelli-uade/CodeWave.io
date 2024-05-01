// Función para verificar si un elemento está en el área visible del navegador
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
    }

    // Función para aplicar la animación fade-in a los elementos que están en el área visible
    function fadeInElementsOnScroll() {
    var elements = document.querySelectorAll('.fadeIn'); // Selecciona todos los elementos con la clase 'fadeIn'
    elements.forEach(function(element) {
        if (isElementInViewport(element)) {
        element.classList.add('fade-in'); // Aplica la clase 'fade-in' para activar la animación
        }
    });
    }

    // Ejecutar la función al cargar la página y al hacer scroll
    document.addEventListener('DOMContentLoaded', fadeInElementsOnScroll);
    window.addEventListener('scroll', fadeInElementsOnScroll);