document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.main-content section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1'; // Ejemplo de propiedad de estilo
        }, index * 1000); // Retraso por cada sección
    });
});
