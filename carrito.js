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
