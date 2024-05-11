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


let menuItems = [
  {
    name: "Cold Coffe",
    description: "Chill out with our refreshing cold coffee at Café Evening – a delightful blend of bold flavors to energize your day!",
    cost: "₹80/-",
    image: "../images/coldCoffe.jpg"
},
{
    name: "Mocktails",
    description: "Elevate your evening with our exquisite mocktails at Café Evening – crafted to perfection for a taste of sophistication in every sip!",
    cost: "varies",
    image: "../images/mocktail2.jpg"
},
{
    name: "Burger",
    description: "Savor the juiciest burgers in town at Café Evening – where every bite is a flavor explosion!",
    cost: "₹350/-",
    image: "../images/burger.jpg"
},
{
    name: "Pizza",
    description: "Indulge in our irresistible pizzas at Café Evening – crafted with the finest ingredients to satisfy your cravings!",
    cost: "₹250/-",
    image: "../images/pizza.jpg"
},
{
    name: "Fries",
    description: "Craving a crispy delight? Dive into our golden fries at Café Evening – the perfect side to elevate your meal experience!",
    cost: "₹150/-",
    image: "../images/fries.jpg"
}
];

function createMenuItems() {
  let menuContainer = document.getElementById("menu");

  menuItems.forEach(function (item) {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item", "card", "d-flex", "flex-row");
    menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <div class="menu-item-content card-body">
              <h3 class="card-title">${item.name}</h3>
              <p class="card-text">${item.description}</p>
              <p class="card-text">Cost: ${item.cost}</p>
          </div>
      `;
    if (item.offer) {
      let offerBadge = document.createElement("span");
      offerBadge.classList.add("badge", "rounded-pill", "bg-warning", "text-white", "mr-2");
      offerBadge.textContent = "Offer";
      offerBadge.id = "offer";
      menuItem.querySelector(".menu-item-content").insertBefore(offerBadge, menuItem.querySelector("h3"));
    }
    menuContainer.appendChild(menuItem);
  });
}
createMenuItems();