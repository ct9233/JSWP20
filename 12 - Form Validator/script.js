const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    message.textContent = 'Please fill out all fields.';
    message.style.color = '#7c1d1d';
    messageContainer.style.borderColor = '#7c1d1d';
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);