// **
//    * Toggle mobile nav dropdowns
//    */
  document.querySelectorAll('.navbar .navlink ').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      
      e.stopImmediatePropagation();
    });
  });
