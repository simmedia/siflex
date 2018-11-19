const drpToggler = $("#dropdownMenuToggler");
const drpDown = $("#dropdown-menu");

const menuBtn = $("#menuToggler");
const resNav = $("#responsive-nav");

$("#menuToggler").click(function() {
  $("#responsive-nav").slideToggle();
});

$(drpToggler).hover(function() {
  $(drpDown).toggleClass("open");
});
