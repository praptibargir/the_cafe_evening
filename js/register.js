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