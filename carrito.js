carrito.js
document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.querySelector(".cart-count");
    let cartCount = 0;

    // Manejar clics en botones de "Agregar al Carrito"
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCountElement.textContent = cartCount;
            alert(`${button.dataset.product} agregado al carrito!`);
        });
    });
});

//carrusel
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    let currentIndex = 0;

    function showSlide(index) {
        const container = document.querySelector('.carousel-container');
        const slideWidth = slides[0].clientWidth;
        container.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    // Mostrar la primera imagen al cargar
    showSlide(currentIndex);
});
