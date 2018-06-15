console.log("Home.js loaded");


// on click of each button with AJAX call based on predefined routes - look into Google doc for routes


// when user clicks search button
$("#search-item").on("click", function (event) {
  event.preventDefault();

  $("#search-item").animateCss('pulse', function () {
    //callback (things to do after all animations are done)
    window.location.href = "/search"
  });

});


$("#post-item").on("click", function (event) {
  event.preventDefault();

  $("#post-item").animateCss('pulse', function () {
    window.location.href = "/post-items/new"
  });
});


$("#sign-up").on("click", function (event) {
  event.preventDefault();

  $("#sign-up").animateCss('pulse', function () {
    window.location.href = "/signup"
  });
});


$("#sign-in-modal").on("click", function (event) {
  event.preventDefault();

  $("#account-info").modal("show");
});

$("#go-home").on("click", function (event) {
  event.preventDefault();
  console.log("hello")
  $("#go-home").animateCss('pulse', function () {
    window.location.href = "/"
  });
});

$("#sign-in").on("click", function (event) {
  event.preventDefault();

  var user = {
    email: $("#email").val().trim(),
    account_key: $("#account_password").val().trim()
  }
  
  $.post("/login", user, function(results){
    if(results){
       $(location).attr('href', '/accounts/view')
     }else {
      $("#account-info").modal("close");
      alert("oops something went wrong, please try again!");

     }
   
  })

});
