const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const successMessage = document.querySelector('.success-message');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default submission
  let isValid = true;

  // Clear previous messages
  successMessage.textContent = '';
  const errorMessages = form.querySelectorAll('.error-message');
  errorMessages.forEach(msg => msg.textContent = '');

  // Name validation
  if(nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required');
    isValid = false;
  }

  // Email validation
  if(emailInput.value.trim() === '') {
    showError(emailInput, 'Email is required');
    isValid = false;
  } else if(!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Enter a valid email');
    isValid = false;
  }

  // Message validation
  if(messageInput.value.trim() === '') {
    showError(messageInput, 'Message cannot be empty');
    isValid = false;
  }

  // If all valid
  if(isValid) {
    successMessage.textContent = 'Your message has been submitted successfully!';
    form.reset();
  }
});

// Function to show error messages
function showError(input, message) {
  const error = input.nextElementSibling;
  error.textContent = message;
}

// Email regex validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
