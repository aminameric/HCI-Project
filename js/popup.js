function openPopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  event.preventDefault();
}


function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}

function submitForm(event) {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  var emailInput = document.getElementById("emailInput").value;
  var captchaInput = document.getElementById("captchaInput").value;
  var captchaErrorMessage = document.getElementById("captchaErrorMessage");

  if (captchaInput === "XKWDN") {
    closePopup();
  } else {
    captchaErrorMessage.textContent = "Please enter the correct captcha.";
    captchaErrorMessage.style.display = "block";
    setTimeout(function() {
      captchaErrorMessage.style.display = "none";
    }, 3000); // Display the error message for 3 seconds
  }
}

//for login
function myFunction(event){
  event.preventDefault();
  window.location.href = "first_page.html";
}