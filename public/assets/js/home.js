console.log("Home.js loaded");


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


$("#sign-in-modal").on("click", function (event) {
  event.preventDefault();

  $("#account-info").modal("show");
});

$("#go-home").on("click", function (event) {
  event.preventDefault();
  console.log("hello")
  window.location.href = "/"
});

$("#sign-in").on("click", function (event) {
  event.preventDefault();
  var account_id = $("#account_id").val();
  var account_password = $("#account_password").val();
  
  window.location.href = "/accounts/view/" + account_id + "/" + account_password


});
