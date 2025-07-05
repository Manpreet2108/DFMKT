const sampleProducts = [
  {
    id: 1,
    title: "Sales Data 2024",
    description: "Monthly sales by region",
    owner: "Team A",
    price: 50,
  },
  {
    id: 2,
    title: "Customer Insights",
    description: "Behavioral clustering data",
    owner: "Team B",
    price: 80,
  },
];

let currentUser = null;
let cart = [];

function login() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) return alert("Invalid email");
  currentUser = { email };
  document.getElementById("user-info").innerText = `Logged in as: ${email}`;
  document.getElementById("login-section").classList.add("hidden");
  document.getElementById("product-list").classList.remove("hidden");
  document.getElementById("cart").classList.remove("hidden");
  document.getElementById("upload-section").classList.remove("hidden");
  document.getElementById("chatbot").classList.remove("hidden");
  showProducts();
}

function showProducts() {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  sampleProducts.forEach((product) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3 contenteditable="true">${product.title}</h3>
      <p contenteditable="true">${product.description}</p>
      <p><strong>Owner:</strong> ${product.owner}</p>
      <p><strong>Price:</strong> $<span contenteditable="true">${product.price}</span></p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = sampleProducts.find(p => p.id === id);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  const ul = document.getElementById("cart-items");
  ul.innerHTML = "";
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = `${item.title} - $${item.price}`;
    ul.appendChild(li);
  });
}

function sendChat() {
  const input = document.getElementById("chat-input");
  const msg = input.value;
  const chat = document.getElementById("chat-window");
  const botResponse = "I'm a bot 🤖. Try again later.";
  chat.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
  chat.innerHTML += `<div><strong>Bot:</strong> ${botResponse}</div>`;
  input.value = "";
}
