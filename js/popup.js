function openPopup(event) {
    event.preventDefault(); // Prevent form submission and page reload
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
  
function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}
  
function submitForm() {
    // Handle form submission here
    var emailInput = document.getElementById("emailInput");
    var captchaInput = document.getElementById("captchaInput");
  
    var email = emailInput.value.trim();
    var captcha = captchaInput.value.trim();
  
    var validEmail = validateEmail(email);
    var validCaptcha = validateCaptcha(captcha);
  
    if (validEmail && validCaptcha) {
      // Perform the login action here
      alert("Login successful!");
      // Redirect or perform other actions after successful login
    } else {
      if (!validEmail) {
        alert("Please enter a valid email. Try again.");
      } else {
        alert("Incorrect captcha. Try again.");
        refreshCaptcha(); // Reset the captcha
      }
    }
  }
  
  function validateEmail(email) {
    // Email validation logic (you can customize it based on your requirements)
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }
  
  function validateCaptcha(captcha) {
    // Captcha validation logic
    return captcha.toUpperCase() === "XKWDN";
  }
  
  function refreshCaptcha() {
    // Logic to refresh the captcha (e.g., generate a new random captcha)
    var captchaInput = document.getElementById("captchaInput");
    captchaInput.value = ""; // Clear the captcha input field
  }