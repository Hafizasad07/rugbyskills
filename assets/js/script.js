document.addEventListener("DOMContentLoaded", function() {
    var path = window.location.pathname;
    var page = path.split("/").pop();
    
    // Get all nav links
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function(link) {
      // If the link href matches the current page, add the 'active' class
      if (link.getAttribute("href") === page) {
        link.classList.add("active");
      }
    });
  });

   // JavaScript to toggle icons and body visibility
   const faqIcons = document.querySelectorAll('.faq-icon');

   faqIcons.forEach(icon => {
     icon.addEventListener('click', function () {
       const iconElement = this.querySelector('i');
       const collapseTarget = this.getAttribute('data-bs-target');
       const collapseElement = document.querySelector(collapseTarget);
 
       // Toggle plus and minus icon
       if (iconElement.classList.contains('fa-plus')) {
         iconElement.classList.remove('fa-plus');
         iconElement.classList.add('fa-minus');
       } else {
         iconElement.classList.remove('fa-minus');
         iconElement.classList.add('fa-plus');
       }
 
       // Show or hide other icons
       faqIcons.forEach(otherIcon => {
         if (otherIcon !== this) {
           const otherIconElement = otherIcon.querySelector('i');
           otherIconElement.classList.remove('fa-minus');
           otherIconElement.classList.add('fa-plus');
         }
       });
     });
   });