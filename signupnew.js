const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');
const confirmPasswordError = document.querySelector('#confirm-password-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Validate name
    if (!nameInput.value) {
        nameError.textContent = 'Name is required';
    }

    // Validate email
    if (!emailInput.value) {
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email address';
    }

    // Validate password
    if (!passwordInput.value) {
        passwordError.textContent = 'Password is required';
    } else if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
    }

    // Validate confirm password
    if (!confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Please confirm your password';
    } else if (confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match';
    }
});
