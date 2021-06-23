var progress = document.querySelector(".progress");
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");
var circles = document.querySelectorAll(".circle");

var currentactive = 0;
next.addEventListener('click', function() {
  // removeactiveclasses();
  currentactive++;

  for (var i = 0; i < circles.length; i++) {
    if (currentactive >= 3) {
      currentactive = 3;
      next.disabled = true;
    }
    prev.disabled = false;

    circles[currentactive].classList.add("active");
    var actives = document.querySelectorAll(".active");
    console.log(actives.length,circles.length);
    progress.style.width = (actives.length-1 ) / (circles.length-1 ) * 100 + "%";


  }

});

prev.addEventListener('click', function() {
  // removeactiveclasses();
  // currentactive--;

  for (var i = 0; i < circles.length; i++) {
    if (currentactive < 2) {
      currentactive = 1;
      prev.disabled = true;
    }
    next.disabled = false;


    circles[currentactive].classList.remove("active");
    var actives = document.querySelectorAll(".active");
    console.log(actives.length,circles.length);
    progress.style.width = (actives.length-1 ) / (circles.length-1 ) * 100 + "%";

  }
  currentactive--;

});

function removeactiveclasses() {
  circles.forEach(circle => {
    circle.classList.remove("active");
  });
}
