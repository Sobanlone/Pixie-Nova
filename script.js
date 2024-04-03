document.addEventListener("DOMContentLoaded", function() {
    // Retrieve username and user icon from local storage
    var username = localStorage.getItem('username');
    var userIcon = localStorage.getItem('icon');

    // Update the username element
    var usernameElement = document.getElementById('username');
    if (username) {
        usernameElement.textContent = username;
    } else {
        usernameElement.textContent = 'Guest'; // Default if username not found
    }

    // Update the user icon element
    var userIconElement = document.getElementById('user-icon');
    if (userIcon) {
        userIconElement.src = userIcon;
    }

    // Add click event listener to the user icon
    userIconElement.addEventListener('click', function() {
        // Redirect the user to the profile adjustment page
        window.location.href = 'profile.html';
    });
});
