// Find navigation button
const sunsLogoButton = document.getElementById('suns-logo-container');
const navMenu = document.getElementById('nav-menu');

// Perform action on click
sunsLogoButton.addEventListener("click", showNavMenuOnClick);

// Menu navigation
function showNavMenuOnClick() {
    if(!navMenu.style.display) { // equal to (navMenu.style.display === '')
        navMenu.style.display = 'flex'
    } else {
        navMenu.style.display = '';
    }
}