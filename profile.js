document.addEventListener("DOMContentLoaded", function() {
    // Retrieve and display current user information
    var currentEmail = localStorage.getItem('email');
    var currentUsername = localStorage.getItem('username');
    var currentIcon = localStorage.getItem('icon');

    document.getElementById('new-email').value = currentEmail;
    document.getElementById('new-username').value = currentUsername;
    document.getElementById('current-icon').src = currentIcon;

    // Function to update user's profile
    function updateProfile(event) {
        event.preventDefault();

        // Get updated values
        var newEmail = document.getElementById('new-email').value.trim();
        var newUsername = document.getElementById('new-username').value.trim();
        var newPassword = document.getElementById('new-password').value;
        var newIcon = document.getElementById('new-icon').files[0];

        // Update email if it's not empty and valid
        if (newEmail && isValidEmail(newEmail)) {
            localStorage.setItem('email', newEmail);
            alert('Email updated successfully!');
        }

        // Update username if it's not empty
        if (newUsername) {
            localStorage.setItem('username', newUsername);
            alert('Username updated successfully!');
        }

        // Update password if it's not empty
        if (newPassword) {
            localStorage.setItem('password', newPassword);
            alert('Password updated successfully!');
        }

        // Update icon if a new image is selected
        if (newIcon) {
            var reader = new FileReader();
            reader.onload = function(event) {
                var newIconSrc = event.target.result;
                localStorage.setItem('icon', newIconSrc);
                document.getElementById('current-icon').src = newIconSrc;
                alert('Icon updated successfully!');
            };
            reader.readAsDataURL(newIcon);
        }
    }

    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Add submit event listener to the profile form
    document.getElementById('profile-form').addEventListener('submit', updateProfile);
});
