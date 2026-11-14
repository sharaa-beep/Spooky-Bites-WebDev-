const restaurantName = "Spooky Bites";
let isOpen = true;
let customerName = "";
let mealPrice = 0;
let quantity = 1;
let total = 0;

const prices = {
  "Spider Pizza": 150,
  "Pumpkin Pasta": 180,
  "Ghost Burger": 120
};

const status = document.getElementById("status");
const result = document.getElementById("result");

function displayStatus() {
  status.textContent = isOpen ? "We are OPEN!" : "We are CLOSED!";
}

function toggleStatus() {
  isOpen = !isOpen;
  displayStatus();
  if (!isOpen) {
    result.textContent = "Notice: The restaurant is now CLOSED.";
  } else {
    result.textContent = "Notice: The restaurant is now OPEN!";
  }
}

function showPersonalGreeting() {
  customerName = document.getElementById("customer").value.trim();
  if (!customerName) {
    result.textContent = "Please enter your name first!";
    return;
  }
  result.textContent = "Happy Halloween, " + customerName + "! Welcome to Yummy Spooky Bites! 🦇";
}

function getRecommendation(totalAmount) {
  if (totalAmount >= 350) {
    return " Recommendation: Add a Vampire Blood Smoothie to complete your feast!";
  } else if (totalAmount >= 200) {
    return " Recommendation: Try pairing it with our Monster Eyeball Cupcakes!";
  } else {
    return " Recommendation: Upgrade your meal with extra spooky creamy cheese!";
  }
}

function placeOrder() {
  customerName = document.getElementById("customer").value.trim();
  const selectedMeal = document.getElementById("meal").value;
  quantity = Number(document.getElementById("quantity").value);

  if (!customerName) {
    result.textContent = "Please enter your name first!";
    return;
  }

  if (!Number.isInteger(quantity) || quantity < 1) {
    result.textContent = "Please enter a valid quantity.";
    return;
  }

  if (!isOpen) {
    result.textContent = "Sorry! The restaurant is closed.";
    return;
  }

  mealPrice = prices[selectedMeal];
  let subtotal = mealPrice * quantity;
  let discount = 0;
  let discountMessage = "";


  if (subtotal >= 300) {
    discount = subtotal * 0.10;
    discountMessage = " (Includes a 10% spooky discount!)";
  }

  total = subtotal - discount;

  const confirmOrder = confirm("Hello " + customerName + ", confirm your order of " + quantity + " " + selectedMeal + "(s) for ₱" + total + "?");
  
  if (!confirmOrder) {
    result.textContent = "Order process cancelled.";
    return;
  }

  let recommendationText = getRecommendation(total);

  result.textContent =
    "Thank you, " + customerName + "! Your order: " +
    quantity + " " + selectedMeal + "(s). Total: ₱" +
    total + discountMessage + ". Enjoy your spooky meal!" + recommendationText;
}

function showMenuMessage() {
  alert("Welcome to " + restaurantName + "! Choose your spooky meal.");
}

displayStatus();

document.getElementById("orderBtn").addEventListener("click", placeOrder);
document.getElementById("greetingBtn").addEventListener("click", showPersonalGreeting);
document.getElementById("toggleStatusBtn").addEventListener("click", toggleStatus);
document.querySelector('a[href="#menu"]').addEventListener("click", showMenuMessage);
