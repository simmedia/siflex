$(document).ready(function() {
  $("#menuToggler").click(function() {
    $("#responsive-nav").slideToggle();
    $(this).toggleClass("toggler-active");
  });

  $("#dropdownMenuToggler").hover(function() {
    $("#dropdown-menu").toggleClass("open");
  });
});
