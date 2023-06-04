//for courses buttons
function myFunction(event) {
    event.preventDefault();
    window.location.href = "coursePage.html";
  }
  

//for add new course
function myFunction1(event){
    event.preventDefault();
    window.location.href = "enrollMe.html";
}

//for assignments
function myFunction2(event){
    event.preventDefault();
    window.location.href = "assignment.html";
}

function togglePopup() {
    var popup = document.getElementById("popup");
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
  }
  
function openPopup() {
    var mainPopup = document.getElementById("popup");
    mainPopup.style.display = "block";
}
  
function closePopup() {
    var mainPopup = document.getElementById("popup");
    mainPopup.style.display = "none";
}
  
function openSortPopup() {
    var sortPopup = document.getElementById("sort-popup");
    sortPopup.style.display = "block";
}
  
function sortSubjects() {
    var dropdown = document.getElementById("sort-dropdown");
    var selectedOption = dropdown.value;
    
    if (selectedOption === "alphabetical") {
      console.log("Sorting subjects alphabetically");
    } else if (selectedOption === "lastUsed") {
      
      console.log("Sorting subjects by last used");
    }
}
  

 
  

  
  