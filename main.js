let products = [];
let cart = [];

function addProduct(event){
event.preventDefault();
const name = document.getElementById('name').value;
const price = parseFloat(document.getElementById('price').value);
const quantity = parseInt(document.getElementById('quantity').value);

if (name && quantity > 0 && price >= 0) {
    const product = { name, price, quantity, totalPrice: quantity * price};
    
};
products.push(product);
event.target.reset();
displayProducts();
}

function displayProducts(){
    const tbody = document.querySelector('#productTable tbody');
    tbody.innerHTML = '';
    products.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
            <td>${product.totalPrice.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });

}