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
    name: "Coffe",
    description: "Chill out with our refreshing cold coffee at Café Evening – a delightful blend of bold flavors to energize your day!",
    cost: "₹80/-",
    image: "../images/coldCoffe.jpg",
    type: "drink"
  },
  {
    name: "Mocktails",
    description: "Elevate your evening with our exquisite mocktails at Café Evening – crafted to perfection for a taste of sophistication in every sip!",
    cost: "varies",
    image: "../images/mocktail2.jpg",
    type: "drink"
  }
];
function createMenuItems1() {
  let menuContainer = document.getElementById("menu1");

  menuItems1.forEach(function (item) {
    let menuItem = document.createElement("a");
    menuItem.classList.add("menu-item", "card", "d-flex", "flex-row", "text-decoration-none", "menu-list");
    menuItem.href = item.name.toLowerCase().replace(' ', '') + '.html';
    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.name} class="img">
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
    type: "food"
  },
  {
    name: "Pizza",
    description: "Indulge in our irresistible pizzas at Café Evening – crafted with the finest ingredients to satisfy your cravings!",
    cost: "₹250/-",
    image: "../images/pizza1.jpg",
    type: "food"
  },
  {
    name: "Fries",
    description: "Craving a crispy delight? Dive into our golden fries at Café Evening – the perfect side to elevate your meal experience!",
    cost: "₹150/-",
    image: "../images/fries1.jpg",
    type: "food"
  },
  {
    name: "Roll",
    description: "Delight in savory rolls at Café Evening – where each bite is a flavorful journey!",
    cost: "₹150/-",
    image: "../images/roll1.jpg",
    type: "food"
  }
];


function createMenuItems2() {
  let menuContainer = document.getElementById("menu2");

  menuItems2.forEach(function (item) {
    let menuItem = document.createElement("a");
    menuItem.classList.add("menu-item", "card", "d-flex", "flex-row", "text-decoration-none", "menu-list");
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

function calculateTotal1() {
  let quantity = document.getElementById("quantity1").value;
  let totalCost = quantity * 350;
  document.getElementById("total1").innerText = "₹" + totalCost;
}

function calculateTotal2() {
  let quantity = document.getElementById("quantity2").value;
  let totalCost = quantity * 150;
  document.getElementById("total2").innerText = "₹" + totalCost;
}

function calculateTotal3() {
  let quantity = document.getElementById("quantity3").value;
  let totalCost = quantity * 120;
  document.getElementById("total3").innerText = "₹" + totalCost;
}

function calculateTotal4() {
  let quantity = document.getElementById("quantity4").value;
  let totalCost = quantity * 80;
  document.getElementById("total4").innerText = "₹" + totalCost;
}

function calculateTotal5() {
  let quantity = document.getElementById("quantity5").value;
  let totalCost = quantity * 180;
  document.getElementById("total5").innerText = "₹" + totalCost;
}

function inc() {
  const quantityText = document.getElementById("quant");
  let quantity = parseInt(quantityText.innerText);
  if (quantity < 12) {
    quantityText.innerText = ++quantity;
  }
  imagechange(quantity);

  let quantitybef=quantity-1;
  imagebef(quantitybef);

  
  let quantityaft=quantity+1;
  imageaft(quantityaft);
}

function dec() {
  const quantityText = document.getElementById("quant");
  let quantity = parseInt(quantityText.innerText);
  if (quantity > 1) {
    quantityText.innerText = --quantity;
  }
  imagechange(quantity);

  let quantityaft=quantity+1;
  imageaft(quantityaft);

  let quantitybef=quantity-1;
  imagebef(quantitybef);
}

function imagechange(quantity) {
  const image = document.getElementById("menuimg2");
  switch (quantity) {
    case 1:
      image.src = "../images/menu2.jpg";
      break;
    case 2:
      image.src = "../images/menu3.jpg";
      break;
    case 3:
      image.src = "../images/menu4.jpg";
      break;
    case 4:
      image.src = "../images/menu5.jpg";
      break;
    case 5:
      image.src = "../images/menu6.jpg";
      break;
    case 6:
      image.src = "../images/menu7.jpg";
      break;
    case 7:
      image.src = "../images/menu8.jpg";
      break;
    case 8:
      image.src = "../images/menu9.jpg";
      break;
    case 9:
      image.src = "../images/menu10.jpg";
      break;
    case 10:
      image.src = "../images/menu11.jpg";
      break;
    case 11:
      image.src = "../images/menu12.jpg";
      break;
    case 12:
      image.src = "../images/menu13.jpg";
      break;
  }
}

function imagebef(quantitybef) {
  const image = document.getElementById("menuimg1");
  switch (quantitybef) {
    case 1:
      image.src = "../images/menu2.jpg";
      break;
    case 2:
      image.src = "../images/menu3.jpg";
      break;
    case 3:
      image.src = "../images/menu4.jpg";
      break;
    case 4:
      image.src = "../images/menu5.jpg";
      break;
    case 5:
      image.src = "../images/menu6.jpg";
      break;
    case 6:
      image.src = "../images/menu7.jpg";
      break;
    case 7:
      image.src = "../images/menu8.jpg";
      break;
    case 8:
      image.src = "../images/menu9.jpg";
      break;
    case 9:
      image.src = "../images/menu10.jpg";
      break;
    case 10:
      image.src = "../images/menu11.jpg";
      break;
    case 11:
      image.src = "../images/menu12.jpg";
      break;
    case 12:
      image.src = "../images/menu13.jpg";
      break;
  }
}


function imageaft(quantityaft) {
  const image = document.getElementById("menuimg3");
  switch (quantityaft) {
    case 1:
      image.src = "../images/menu2.jpg";
      break;
    case 2:
      image.src = "../images/menu3.jpg";
      break;
    case 3:
      image.src = "../images/menu4.jpg";
      break;
    case 4:
      image.src = "../images/menu5.jpg";
      break;
    case 5:
      image.src = "../images/menu6.jpg";
      break;
    case 6:
      image.src = "../images/menu7.jpg";
      break;
    case 7:
      image.src = "../images/menu8.jpg";
      break;
    case 8:
      image.src = "../images/menu9.jpg";
      break;
    case 9:
      image.src = "../images/menu10.jpg";
      break;
    case 10:
      image.src = "../images/menu11.jpg";
      break;
    case 11:
      image.src = "../images/menu12.jpg";
      break;
    case 12:
      image.src = "../images/menu13.jpg";
      break;
  }
}

const eventDate = new Date('2024-09-15T00:00:00+05:30');
function updateCountdown() {
  const currentDate = new Date();
  const difference = eventDate - currentDate;
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdown();
setInterval(updateCountdown, 1000);

function offer1() {
  let blink = document.getElementById('offer1');
  if (blink.style.display === 'none') {
    blink.style.display = 'inline';
  } else {
    blink.style.display = 'none';
  }
}
setInterval(offer1, 1500);

function img3(){
  const quantity=document.getElementById("quant");
  let quant= parseInt(quantity)+1;
  images(quant);
}