$(document).ready(function() {

  console.log("hereeee");

  jQuery.fn.shake = function() {
      this.each(function(i) {
          $(this).css({ "position" : "relative" });
          for (var x = 1; x <= 3; x++) {
              $(this).animate({ left: -25 }, 10).animate({ left: 0 }, 50).animate({ left: 25 }, 10).animate({ left: 0 }, 50);
          }
      });
      return this;
  }

  $("#shaker").click(function() {
      $(this).shake();
  });

  $("#bubbles").click(function() {
    $(".scuba").toggle();
  });

  $("#baby").click(function() {
    $("#swim").toggle();
  });

  $("#red").click(function() {
    $("#paddle").toggle();
  });

  $("#avid").click(function() {
    $(".traveler").toggle();
  });

});

