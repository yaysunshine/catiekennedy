$(document).ready(function() {

  console.log("hereeee");

  animateDiv();

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
    $("#scuba").toggle();
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

function makeNewPosition(){

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh,nw];

}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}