// =======================================
// JQUERY READY FUNCTION WITH STRICT MODE
// ========================================
(function ($) {
    "use strict";
    // all jquery codes are written from below=========


})(jQuery);


//  =========FOR RESPONSIVE MENU============
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})