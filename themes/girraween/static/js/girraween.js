/* Responsive Navbar */

function hideNavDropDowns() {
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function showButton(buttonId) {
  var alreadyShowing = false;
  var button = document.getElementById(buttonId);
  if (button.classList.contains('show')) {
    alreadyShowing = true;
  }

  hideNavDropDowns();
  if (!alreadyShowing) {
    button.classList.toggle("show");
  }
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    hideNavDropDowns();
  }
}
