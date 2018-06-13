
// on click of each button with AJAX call based on predefined routes - look into Google doc for routes


// when user clicks search button
$("#search-item").on("click", function (event) {
  event.preventDefault();

  $("#search-item").animateCss('hinge', function () {
    //callback (things to do after all animations are done)
    window.location.href = "/search/"
  });

});


$("#post-item").on("click", function (event) {
  event.preventDefault();

  $("#post-item").animateCss('hinge', function () {
    window.location.href = "/post-items/new"
  });
});


$("#sign-up").on("click", function (event) {
  event.preventDefault();

  $("#sign-up").animateCss('hinge', function () {
    window.location.href = "/accounts/new"
  });
});
