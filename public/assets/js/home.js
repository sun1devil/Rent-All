
// on click of each button with AJAX call based on predefined routes - look into Google doc for routes


// when user clicks search button
$("#search-item").on("click", function (event) {
  event.preventDefault();

  console.log("Entering search")

  window.location.href = "/search/"

});


$("#post-item").on("click", function (event) {
  event.preventDefault();

  console.log("Entering search")

  window.location.href = "/post-items/new"
  
});
$("#sign-up").on("click", function (event) {
  event.preventDefault();

  console.log("Entering search")

  window.location.href = "/accounts/new"
  
});
