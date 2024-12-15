let quantity = 1;
const quantityElement = document.getElementById("quantity");

function increaseQuantity() {
  quantity++;
  quantityElement.textContent = quantity;
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
  }
}
