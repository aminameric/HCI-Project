function showLogoutPopup() {
    var popup = document.getElementById("logoutPopup");
    var overlay = document.createElement("div");
    overlay.classList.add("overlay");
    document.body.appendChild(overlay);
    popup.style.display = "block";
  }
  
  function confirmLogout() {
    // Add logic for logging out the user
    window.location.href = "landingPage.html";
  }
  
  function cancelLogout() {
    var popup = document.getElementById("logoutPopup");
    var overlay = document.getElementsByClassName("overlay")[0];
    document.body.removeChild(overlay);
    popup.style.display = "none";
  }
  