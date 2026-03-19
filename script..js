let products = [];
let filtered = [];
let cart = [];

// Loader
const loader = document.getElementById("loader");

// Fetch API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    products = data;
    filtered = data;
    loader.style.display = "none";
    displayProducts(filtered);
  })
  .catch(() => {
    loader.innerText = "❌ Failed to load products";
  });

// Display Products
function displayProducts(data) {
  let container = document.getElementById("products");
  container.innerHTML = "";

  data.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}" />
        <h4>${p.title.substring(0,50)}</h4>
        <p>₹${p.price}</p>
        <p>${p.category}</p>
        <p>⭐ ${p.rating.rate}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

// Search (title + category)
document.getElementById("search").addEventListener("input", e => {
  let value = e.target.value.toLowerCase();

  filtered = products.filter(p =>
    p.title.toLowerCase().includes(value) ||
    p.category.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

// Category Filter
document.getElementById("category").addEventListener("change", e => {
  let val = e.target.value;

  if (val === "all") {
    filtered = products;
  } else {
    filtered = products.filter(p => p.category === val);
  }

  displayProducts(filtered);
});

// Sorting
document.getElementById("low").onclick = () => {
  filtered.sort((a,b) => a.price - b.price);
  displayProducts(filtered);
};

document.getElementById("high").onclick = () => {
  filtered.sort((a,b) => b.price - a.price);
  displayProducts(filtered);
};

// Add to Cart
function addToCart(id) {
  let item = products.find(p => p.id === id);

  let exist = cart.find(c => c.id === id);

  if (exist) {
    exist.qty++;
  } else {
    cart.push({...item, qty:1});
  }

  updateCart();
}

// Update Cart UI
function updateCart() {
  let cartDiv = document.getElementById("cart");
  let count = document.getElementById("cartCount");
  let total = document.getElementById("total");

  cartDiv.innerHTML = "";

  cart.forEach(item => {
    cartDiv.innerHTML += `
      <div class="cart-item">
        <span>${item.title.substring(0,20)} (x${item.qty})</span>
        <span>₹${item.price * item.qty}</span>
        <button onclick="removeItem(${item.id})">❌</button>
      </div>
    `;
  });

  count.innerText = cart.reduce((sum,i)=> sum + i.qty, 0);

  total.innerText = cart.reduce((sum,i)=> sum + (i.price*i.qty), 0);
}

// Remove Item
function removeItem(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}