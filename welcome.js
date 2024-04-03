function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('login-username').value;
    var password = document.getElementById('login-password').value;

    // Check if fields are empty
    if (!username || !password) {
        document.getElementById('popup-text').innerText = 'Please enter both username and password.';
        document.getElementById('popup').style.display = 'block';
        return;
    }

    // Simulating authentication (replace with actual backend logic)
    // Here, we'll check if the username exists and if the password matches
    // For simplicity, let's assume the username is the email for this example
    var savedUsername = localStorage.getItem('signupUsername'); // Retrieve signup username
    var savedPassword = localStorage.getItem('password');

    if (username === savedUsername && password === savedPassword) {
        alert('Login successful! Redirecting...');
        // Redirect to home page
        window.location.href = 'Home.html';
    } else {
        document.getElementById('popup-text').innerText = 'Invalid username or password.';
        document.getElementById('popup').style.display = 'block';
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('signup-username').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var confirmPassword = document.getElementById('signup-confirm-password').value;

    // Check if fields are empty
    if (!username || !email || !password || !confirmPassword) {
        document.getElementById('popup-text').innerText = 'Please fill in all fields.';
        document.getElementById('popup').style.display = 'block';
        return;
    }

    // Check if the username already exists (replace with actual backend logic)
    var existingUser = localStorage.getItem('signupUsername'); // Retrieve signup username
    if (existingUser === username) {
        document.getElementById('popup-text').innerText = 'Username is already taken.';
        document.getElementById('popup').style.display = 'block';
        return;
    }

    // Simulating password matching check (replace with actual validation logic)
    if (password !== confirmPassword) {
        document.getElementById('popup-text').innerText = 'Passwords do not match.';
        document.getElementById('popup').style.display = 'block';
        return;
    }

    // Simulating successful sign-up (replace with actual backend logic)
    // Here, we'll save the username (email) and password to localStorage
    localStorage.setItem('signupUsername', username); // Store signup username separately
    localStorage.setItem('password', password);

    alert('Sign up successful! Redirecting...');
    // Redirect to home page
    window.location.href = 'Home.html';
});

document.getElementById('login-container').addEventListener('click', function(event) {
    if (event.target.id === 'login-container') {
        this.classList.add('blur');
        this.style.pointerEvents = 'none'; // Disable pointer events on login container
        document.getElementById('signup-container').classList.remove('blur');
        document.getElementById('signup-container').style.pointerEvents = 'auto'; // Enable pointer events on signup container
        enableInputs('login-form');
    }
});

document.getElementById('signup-container').addEventListener('click', function(event) {
    if (event.target.id === 'signup-container') {
        this.classList.add('blur');
        this.style.pointerEvents = 'none'; // Disable pointer events on signup container
        document.getElementById('login-container').classList.remove('blur');
        document.getElementById('login-container').style.pointerEvents = 'auto'; // Enable pointer events on login container
        enableInputs('signup-form');
    }
});

function enableInputs(formId) {
    var inputs = document.getElementById(formId).getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false; // Enable input fields
    }
}
