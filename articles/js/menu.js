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


const body = document.querySelector('body');
const submenu3 = document.querySelector('.submenu');
const overlay = document.querySelector('.overlay');

// Function to show the submenu and overlay
function showSubmenu() {
  submenu.style.display = 'block';
  overlay.style.display = 'block';
  body.classList.add('overlay-active');
}

// Function to hide the submenu and overlay
function hideSubmenu() {
  submenu3.style.display = 'none';
  overlay.style.display = 'none';
  body.classList.remove('overlay-active');
}

// Event listeners to toggle the submenu and overlay
header.addEventListener('mouseenter', showSubmenu);
header.addEventListener('mouseleave', hideSubmenu);




