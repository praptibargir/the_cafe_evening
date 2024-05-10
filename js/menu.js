function lightMode() {
    const theme = document.getElementById("body");
    theme.className = "theme-light";
}

function darkMode() {
    const theme = document.getElementById("body");
    theme.className = "theme-dark";
}

function offer() {
    let span = document.getElementById('offer');
    if (span.style.display === 'none') {
      span.style.display = 'inline';
    } else {
      span.style.display = 'none'; 
    }
  }
  
  setInterval(offer, 1000);