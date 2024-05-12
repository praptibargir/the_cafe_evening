function validateLogin() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Simple validation
    if (email === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // Perform further validation or form submission
        alert('Form submitted!');
        email.value = "";
        password.value = "";
    }
}


function changehead(){
    const head=document.getElementById("heading");
    head.innerHTML='<h1 class="card-heading text-yellow text-center" id="heading">Login Form</h1>'
}
setInterval(changehead,500);

function changehead1(){
    const head=document.getElementById("heading");
    head.innerHTML='<h1 class="card-heading text-dark text-center" id="heading">Login Form</h1>'
}
setInterval(changehead1,1000);