// ABRE MODAL CARRINHO
const button = document.querySelector('.cart-btn');
button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.showModal();
});
// FECHA MODAL CARRINHO
const closeButton = document.querySelector('.close-cart');
closeButton.addEventListener('click', () => {
    const modalId = closeButton.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    modal.close();
});