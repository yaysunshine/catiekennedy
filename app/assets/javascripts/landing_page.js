$(document).ready(function() {
  alert("hereeee");

  jQuery.fn.shake = function() {
      this.each(function(i) {
          $(this).css({ "position" : "relative" });
          for (var x = 1; x <= 3; x++) {
              $(this).animate({ left: -25 }, 10).animate({ left: 0 }, 50).animate({ left: 25 }, 10).animate({ left: 0 }, 50);
          }
      });
      return this;
  }

  $("#shaker").hover(function() {
      $(this).shake();
  });
});