


const menu = document.getElementById('menu');
const cartItems = document.getElementById('cart-items');
const total = document.getElementById('total');
const checkout = document.getElementById('checkout');
let cartTotal = 0;

// Sample data for menu items including image URLs
const menuItems = [
  { name: "Pizza", price: 10, image: "pizza.jpg" },
  { name: "Burger", price: 8, image: "burger.jpg" },
  { name: "Salad", price: 6, image: "salad.jpg" },
  { name: "Sushi", price: 12, image: "sushi.jpg" },
  { name: "Pasta", price: 9, image: "pasta.jpg" },
  { name: "Sandwich", price: 7, image: "sandwich.jpg" },
  { name: "Fries", price: 5, image: "fries.jpg" }, // Adding more food items
  { name: "Chicken Wings", price: 11, image: "wings.jpg" },
  { name: "Ice Cream", price: 4, image: "ice-cream.jpg" },
  { name: "Smoothie", price: 6, image: "smoothie.jpg" }
];

// Function to display menu items
function displayMenu() {
  menuItems.forEach(item => {
    const foodItem = createFoodItem(item);
    menu.appendChild(foodItem);
  });
}

// Function to create a food item element
function createFoodItem(item) {
  const foodItem = document.createElement('div');
  foodItem.classList.add('food-item');
  
  const image = document.createElement('img');
  image.src = item.image;
  image.alt = item.name;
  foodItem.appendChild(image);
  
  const name = document.createElement('h2');
  name.textContent = item.name;
  foodItem.appendChild(name);
  
  const price = document.createElement('p');
  price.textContent = `$${item.price}`;
  foodItem.appendChild(price);
  
  const addButton = document.createElement('button');
  addButton.textContent = 'Add to Cart';
  addButton.addEventListener('click', () => addToCart(item));
  foodItem.appendChild(addButton);
  
  return foodItem;
}

// Function to add item to cart
function addToCart(item) {
  const cartItem = document.createElement('li');
  cartItem.textContent = `${item.name} - $${item.price}`;
  cartItems.appendChild(cartItem);
  
  cartTotal += item.price;
  total.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

// Function to clear the cart and total
function clearCart() {
  cartItems.innerHTML = '';
  cartTotal = 0;
  total.textContent = 'Total: $0.00';
}

// Initialize the app
displayMenu();

// Event listener for checkout button
checkout.addEventListener('click', () => {
  alert(`Total amount: $${cartTotal.toFixed(2)}. Thank you for your order!`);
  clearCart();
});


