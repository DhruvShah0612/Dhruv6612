document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent the form from submitting

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var correctUsername = "admin"; // replace with the correct username
    var correctPassword = "1234"; // replace with the correct password

    if (username !== correctUsername || password !== correctPassword) {
        // show the error message
        document.getElementById('error-message').style.display = 'block';
    } else {
        // hide the error message
        document.getElementById('error-message').style.display = 'none';
    }
});