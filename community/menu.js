// Get the menu icon and submenu elements
const menuIcon = document.querySelector('.menu-icon');
const submenu = document.querySelector('.submenu');

// Function to toggle the submenu on menu icon click
function toggleSubmenu() {
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', toggleSubmenu);

var closeIcon = document.getElementById("close-icon");
var submenu2 = document.querySelector(".header nav .submenu");

closeIcon.addEventListener("click", function() {
  submenu2.style.display = "none";
});