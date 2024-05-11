function lightMode() {
  const theme = document.getElementById("body");
  theme.className = "theme-light";
}

function darkMode() {
  const theme = document.getElementById("body");
  theme.className = "theme-dark";
}

function offer() {
  let blink = document.getElementById('offer');
  if (blink.style.display === 'none') {
    blink.style.display = 'inline';
  } else {
    blink.style.display = 'none';
  }
}
setInterval(offer, 1000);


let menuItems1 = [
  {
    name: "Cold Coffe",
    description: "Chill out with our refreshing cold coffee at Café Evening – a delightful blend of bold flavors to energize your day!",
    cost: "₹80/-",
    image: "../images/coldCoffe.jpg",
    type:"drink"
},
{
    name: "Mocktails",
    description: "Elevate your evening with our exquisite mocktails at Café Evening – crafted to perfection for a taste of sophistication in every sip!",
    cost: "varies",
    image: "../images/mocktail2.jpg",
    type:"drink"
}
];
function createMenuItems1() {
  let menuContainer = document.getElementById("menu1");

  menuItems1.forEach(function(item) {
    let menuItem = document.createElement("a");
    menuItem.classList.add("menu-item", "card", "d-flex", "flex-row","text-decoration-none", "menu-list");
    menuItem.href = item.name.toLowerCase().replace(' ', '') + '.html';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-item-content card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-text">${item.description}</p>
        <p class="card-text">Cost: ${item.cost}</p>
      </div>
    `;

    menuContainer.appendChild(menuItem);
  });
}
createMenuItems1();

let menuItems2 = [
{
    name: "Burger",
    description: "Savor the juiciest burgers in town at Café Evening – where every bite is a flavor explosion!",
    cost: "₹350/-",
    image: "../images/burger4.jpg",
    type:"food"
},
{
    name: "Pizza",
    description: "Indulge in our irresistible pizzas at Café Evening – crafted with the finest ingredients to satisfy your cravings!",
    cost: "₹250/-",
    image: "../images/pizza1.jpg",
    type:"food"
},
{
    name: "Fries",
    description: "Craving a crispy delight? Dive into our golden fries at Café Evening – the perfect side to elevate your meal experience!",
    cost: "₹150/-",
    image: "../images/fries1.jpg",
    type:"food"
},
{
    name: "Roll",
    description: "Delight in savory rolls at Café Evening – where each bite is a flavorful journey!",
    cost: "₹150/-",
    image: "../images/roll1.jpg",
    type:"food"
}
];


function createMenuItems2() {
  let menuContainer = document.getElementById("menu2");

  menuItems2.forEach(function(item) {
    let menuItem = document.createElement("a");
    menuItem.classList.add("menu-item", "card", "d-flex", "flex-row","text-decoration-none", "menu-list");
    menuItem.href = item.name.toLowerCase().replace(' ', '') + '.html';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="menu-item-content card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-text">${item.description}</p>
        <p class="card-text">Cost: ${item.cost}</p>
      </div>
    `;

    menuContainer.appendChild(menuItem);
  });
}
createMenuItems2();

function calculateTotal() {
  let quantity = document.getElementById("quantity").value;
  let totalCost = quantity * 250;
  document.getElementById("total").innerText = "₹" + totalCost;
}
