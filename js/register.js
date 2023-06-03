// Get references to the HTML elements
const emailInput = document.getElementById('exampleInputEmail1');
const form = document.querySelector('form');
const errorMessage = document.getElementById('errorMessage');

// Function to validate the email
function validateEmail(event) {
  if (event) {
    event.preventDefault(); // Prevent the default form submission
  }

  // Get the user's input
  const email = emailInput.value;

  console.log('Email:', email); // Add this line for debugging

  // Check if the email contains the "@" symbol
  if (email.includes('@')) {
    // Email is valid, navigate to the first_page
    console.log('Email is valid');
    window.location.href = 'first_page.html';
  } else {
    // Email is invalid, display the error message
    console.log('Email is invalid');
    errorMessage.textContent = 'Please enter a valid email address. You are missing @';
  }
}

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
  validateEmail(event);
});







