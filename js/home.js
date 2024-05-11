function lightMode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
}

function darkMode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
}


function img1() {
    const slider = document.getElementById("slider");
    slider.innerHTML = '<div class="card-group" id="slider"><div class="card"><img src="images/slider1.jpg" class="img1 card-img-top" alt="..."></div></div>'
}

function img2() {
    const slider = document.getElementById("slider");
    slider.innerHTML = '<div class="card-group" id="slider"><div class="card"><img src="images/slider1.jpg" class="card-img-top" alt="..."></div><div class="card"><img src="images/slider2.jpeg" class="card-img-top" alt="..."></div><div class="card"></div></div>'
}

function img3() {
    const slider = document.getElementById("slider");
    slider.innerHTML = '<div class="card-group" id="slider"><div class="card"><img src="images/slider1.jpg" class="card-img-top" alt="..."></div><div class="card"><img src="images/slider2.jpeg" class="card-img-top" alt="..."></div><div class="card"><img src="images/slider3.jpeg" class="card-img-top" alt="..."></div></div>'
}
setTimeout(img1, 5000);
setTimeout(img2, 7000);
setTimeout(img3, 9000);


let menuItems = [
    {
        name: "Cold Coffe",
        description: "Chill out with our refreshing cold coffee at Café Evening – a delightful blend of bold flavors to energize your day!",
        cost: "₹80/-",
        image: "../images/coldCoffe.jpg"
    },
    {
        name: "Mocktails",
        description: "Elevate your evening with mocktails at Café Evening – crafted to perfection for a taste of sophistication in every sip!",
        cost: "varies",
        image: "../images/mocktail2.jpg"
    },
    {
        name: "Burger",
        description: "Experience burger bliss at Café Evening – where each bite ignites a symphony of flavors and melody of taste!",
        cost: "₹350/-",
        image: "../images/burger4.jpg"
    },
    {
        name: "Fries",
        description: "Craving a crispy delight? Dive into our golden fries at Café Evening – the perfect side to elevate your meal experience!",
        cost: "₹150/-",
        image: "../images/fries1.jpg"
    }

];
function createMenuItems() {
    let menuContainer = document.getElementById("menu");

    menuItems.forEach(function (item) {
        let menuItem = document.createElement("div");
        menuItem.classList.add("col-md-3");
        menuItem.innerHTML = `
            <div class="menu-item">
                <img src="${item.image}" alt="${item.name}" class="img-fluid mb-2">
                <h3>${item.name}</h3>
                <p class="text-muted">${item.description}</p>
                <p>Cost: ${item.cost}</p>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

createMenuItems();

function change1() {
    const image = document.getElementById("image-abt");
    image.src = "../images/abt1.jpg";
}

function change2() {
    const image = document.getElementById("image-abt");
    image.src = "../images/abt2.jpg";
}

function gall1() {
    const image = document.getElementById("mainimg");
    image.src = "../images/people2.jpg";
}

function gall2() {
    const image = document.getElementById("mainimg");
    image.src = "../images/people1.jpg";
}

function gall3() {
    const image = document.getElementById("mainimg");
    image.src = "../images/people5.jpg";
}

function gall4() {
    const image = document.getElementById("mainimg");
    image.src = "../images/people4.jpg";
}

function gall5() {
    const image = document.getElementById("mainimg");
    image.src = "../images/people3.jpg";
}

function gall6() {
    const image = document.getElementById("mainimg");
    image.src = "../images/people6.jpg";
}

function test1() {
    const image = document.getElementById("test-image");
    const subheading = document.getElementById("test-subheading");
    const text = document.getElementById("test-text");
    const name = document.getElementById("test-name");
    image.src = "../images/test1.jpg";
    subheading.innerText = "Great place";
    text.innerText = "The ambiance at Café Evening is simply magical. From the soft glow of the lights to the cozy seating arrangements, it's the perfect place to unwind after a long day.And let's not forget the coffee – absolutely divine!";
    name.innerText = "~Anjali Dhamdhere";
}

function test2() {
    const image = document.getElementById("test-image");
    const subheading = document.getElementById("test-subheading");
    const text = document.getElementById("test-text");
    const name = document.getElementById("test-name");
    image.src = "../images/test3.webp";
    subheading.innerText = "Amazing Taste";
    text.innerText = "As a coffee enthusiast, I've tried countless cafés, but none compare to Café Evening. The quality of their brews is unmatched, and the friendly staff always make me feel welcome. It's become my go-to spot for caffeine fixes and relaxation.";
    name.innerText = "~Saurabh Sharma";
}

function test3() {
    const image = document.getElementById("test-image");
    const subheading = document.getElementById("test-subheading");
    const text = document.getElementById("test-text");
    const name = document.getElementById("test-name");
    image.src = "../images/test2.jpg";
    subheading.innerText = "Memorable Birthday";
    text.innerText = "Birthday celebrations at Café Evening are pure magic! The cozy atmosphere, delicious treats, and friendly staff made my special day unforgettable. Highly recommend!!";
    name.innerText = "~Nikita Satav";
}

function test4() {
    const image = document.getElementById("test-image");
    const subheading = document.getElementById("test-subheading");
    const text = document.getElementById("test-text");
    const name = document.getElementById("test-name");
    image.src = "../images/test4.webp";
    subheading.innerText = "Inviting Atmosphere";
    text.innerText = "At Café Evening, every moment feels like a celebration. Whether it's a quiet afternoon spent with a good book or a lively gathering with friends, the café's inviting atmosphere sets the stage for memorable experiences";
    name.innerText = "~Ajay Kajale";
}


