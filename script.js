document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.querySelector('.cart-list');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.querySelector('.checkout');
    let cartItems = [];
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.parentElement;
            const productName = product.querySelector('h2').innerText;
            const productPrice = parseFloat(product.querySelector('p').innerText.replace('R$ ', ''));

            // Verifica se o item já está no carrinho
            const existingItem = cartItems.find(item => item.name === productName);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push({ name: productName, price: productPrice, quantity: 1 });
            }

            // Atualiza o carrinho e o total
            updateCart();
        });
    });

    function updateCart() {
        cartList.innerHTML = '';
        total = 0;

        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${item.name}</span>
                <span>${item.quantity} x R$ ${item.price.toFixed(2)}</span>
            `;

            cartList.appendChild(listItem);

            total += item.price * item.quantity;
        });

        totalElement.innerText = total.toFixed(2);
    }

    checkoutButton.addEventListener('click', function () {
        // Adicione aqui a lógica para o checkout, como redirecionar para uma página de pagamento.
        alert('Implemente a lógica de checkout aqui!');
    });
});