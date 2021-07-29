/* When user clicks on the button,
toggle between hiding and showing dropdown content */
function myFunction() {
    document.getElementById("fullMenu").classList.toggle("show");
  }
  
  // Close dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
      var dropdowns = document.getElementsByClassName("menu-options");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  } 