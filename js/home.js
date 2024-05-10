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
setTimeout(img1, 3000);
setTimeout(img2, 6000);
setTimeout(img3, 9000);

function gall1(){
    const image=document.getElementById("mainimg");
    image.src="../images/people2.jpg";
}

function gall2(){
    const image=document.getElementById("mainimg");
    image.src="../images/people1.jpg";
}

function gall3(){
    const image=document.getElementById("mainimg");
    image.src="../images/test1.jpg";
}

function gall4(){
    const image=document.getElementById("mainimg");
    image.src="../images/people4.jpg";
}

function gall5(){
    const image=document.getElementById("mainimg");
    image.src="../images/people3.jpg";
}

function gall6(){
    const image=document.getElementById("mainimg");
    image.src="../images/test2.jpg";
}

