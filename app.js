let cart = []
let totalAmount = 0;

function addToCart(productName, price,) {
    cart.push({name: productName, price: price});
    totalAmount += price;

    // Update cart UI
    displayCart();
}

// Function to display the cart
function displayCart() {
    const cartDiv = document.getElementById('cart');
    const totalDiv = document.getElementById('total');

    // Clear previous cart items
    cartDiv.innerHTML = '';

    // Add each cart item to the cart div
    cart.forEach(item =>{
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price}`;
        cartDiv.appendChild(itemDiv);
    });

    // update the total amount
    totalDiv.innerText = `Total: $${totalAmount}`;
}