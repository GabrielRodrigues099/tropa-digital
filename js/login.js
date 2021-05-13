const passwordInput = document.querySelector('[data-input="password"]');
const hideButton = document.querySelector('[data-hide]');
const submitButton = document.querySelector('[data-submit]');
const inputs = document.querySelectorAll('[data-input]');

function hidePassword() {
    if (passwordInput.type == 'password') {
        passwordInput.removeAttribute('type', 'password');
        passwordInput.setAttribute('type', 'text');
    } else {
        passwordInput.removeAttribute('type', 'text');
        passwordInput.setAttribute('type', 'password');
    }
}

hideButton.addEventListener('click', hidePassword);





