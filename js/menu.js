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
