function validateRegistration() {
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Simple validation
    if (fullName === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
    } else {
        // Perform further validation or form submission
        alert('Form submitted!');
    }
}

function changehead(){
    const head=document.getElementById("heading");
    head.innerHTML='<h1 class="card-heading text-yellow text-center" id="heading">Registration Form</h1>'
}
setInterval(changehead,500);

function changehead1(){
    const head=document.getElementById("heading");
    head.innerHTML='<h1 class="card-heading text-dark text-center" id="heading">Registration Form</h1>'
}
setInterval(changehead1,1000);