function lightMode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
}

function darkMode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
}

function inc(){
    const num=document.getElementById("num1");
    let number=parseInt(num.innerText);
    if (number<1000){
      num.innerText=++number;
      alert("Thankyou For Liking");
    } 
  }
  
  function dec(){
    const num=document.getElementById("num2");
    let number=parseInt(num.innerText);
    if (number<=1000){
      num.innerText=++number;  
      alert("We apologise for your inconvenience");  
    }
  }

function event1() {
    const event = document.getElementById("imgss");
    event.innerHTML = '<div id="imgss" class="gall mx-4 my-5"><div class="option"><img src="../images/bday1.jpg" class="gall-sm" onclick="gall1()" /><img src="../images/bday2.jpg" class="gall-sm" onclick="gall2()" /><img src="../images/bday3.jpg" class="gall-sm" onclick="gall3()" /></div><img src="../images/bday1.jpg" class="main-img" id="mainimg" /></div>'
}

function cafe() {
    const event = document.getElementById("imgss");
    event.innerHTML = '<div id="imgss" class="gall mx-4 my-5"><div class="option"><img src="../images/cafe4.jpg" class="gall-sm" onclick="gall4()" /><img src="../images/cafe6.jpg" class="gall-sm" onclick="gall5()" /><img src="../images/cafe1.jpg" class="gall-sm" onclick="gall6()" /></div><img src="../images/cafe6.jpg" class="main-img" id="mainimg" </div><div class="option"><img src="../images/cafe8.jpg" class="gall-sm" onclick="gall7()" /><img src="../images/drinks.jpg" class="gall-sm" onclick="gall8()" /><img src="../images/cafe7.jpg" class="gall-sm" onclick="gall9()" /></div>'
}

function rooftop() {
    const event = document.getElementById("imgss");
    event.innerHTML = '<div class="m-1"><video class="main-img" controls autoplay muted><source src="../video/roofTop.mp4" type="video/mp4" /></video></div><div><video height="480px" class="main-vdo" controls autoplay muted><source src="../video/rooftopnight.mp4" type="video/mp4" /></video></div>'
}

function gall1() {
    const image = document.getElementById("mainimg");
    image.src = "../images/bday1.jpg";
}

function gall2() {
    const image = document.getElementById("mainimg");
    image.src = "../images/bday2.jpg";
}

function gall3() {
    const image = document.getElementById("mainimg");
    image.src = "../images/bday3.jpg";
}

function gall4() {
    const image = document.getElementById("mainimg");
    image.src = "../images/cafe4.jpg";
}

function gall5() {
    const image = document.getElementById("mainimg");
    image.src = "../images/cafe6.jpg";
}

function gall6() {
    const image = document.getElementById("mainimg");
    image.src = "../images/cafe1.jpg";
}

function gall7() {
    const image = document.getElementById("mainimg");
    image.src = "../images/cafe8.jpg";
}

function gall8() {
    const image = document.getElementById("mainimg");
    image.src = "../images/drinks.jpg";
}

function gall9() {
    const image = document.getElementById("mainimg");
    image.src = "../images/cafe7.jpg";
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


