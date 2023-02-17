var navitems = document.querySelector(".navitems")
var active = document.querySelector(".active")
var passive = document.querySelector(".passive")

document.querySelector('.navitems').addEventListener('click', function (event) {
  event.preventDefault();
  var target = document.querySelector('.navitems');
  if (target.classList.contains('active')) {
    target.classList.remove('active');
  } else {
    target.classList.add('active');
  }
});