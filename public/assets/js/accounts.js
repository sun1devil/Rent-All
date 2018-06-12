// Code here handles what happens when a user submits a new account.

// -- 	first_name varchar(30) NOT NULL,
// -- 	last_name varchar(30) NOT NULL,
// -- 	street varchar(30) NOT NULL,
// -- 	city varchar(30) NOT NULL,
// -- 	state varchar(2) NOT NULL,
// -- 	zip int(5) NOT NULL,
// -- 	balance decimal(12,2) DEFAULT NULL,
// -- 	email varchar(100) NOT NULL,
// -- 	phone int NOT NULL,
// -- 	rating decimal(3,2) DEFAULT NULL,
// -- 	account_key varchar(8) NOT NULL,
// -- 	PRIMARY KEY (id)
// -- ); --}}




// when user clicks add-btn
$("#add-account").on("click", function (event) {
  event.preventDefault();

  // make a newAccount obj
  var newAccount = {
    first_name: $("#inputFirst").val().trim(),
    last_name: $("#inputLast").val().trim(),
    street: $("inputStreet").val().trim(),
    city: $("#inputCity").val().trim(),
    state: $("#inputState").val().trim(),
    zip: $("#inputZip").val().trim(),

    balance: $("#inputBalance").val().trim(),

    email: $("#inputEmail").val().trim(),
    phone: $("#inputPhone").val().trim(),
    rating: $("#inputRating").val().trim(),
  };

  // send an AJAX POST-request with jQuery

  $.post("/accounts/new", newAccount)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
      $("#message").val("<h2> Account Added! </h2>");
    });

  // empty each input box by replacing the value with an empty string


  $("#inputFirst").val("")
  $("#inputLast").val("")
  $("inputStreet").val("")
  $("#inputCity").val("")
  $("#inputState").val("")
  $("#inputZip").val("")
  $("#inputBalance").val("")
  $("#inputEmail").val("")
  $("#inputPhone").val("")
  $("#inputRating").val("")
  $("#inputAccount").val("")
});


$("#view-account").on("click", function () {
  $("#account-info").modal("show");


  // Save Account Search
  var passwordEntry = $("passwordEntry")
    .val()
    .trim();
  var accountEntry = $("#accountEntry")
    .val()
    .trim();

  // Using a RegEx Pattern to remove spaces from searchedAccount
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  viewAccount = viewAccount.replace(/\s+/g, "").toLowerCase();

  // run an AJAX GET-request for our servers api,

  $.get("/api/" + accountEntry, + passwordEntry, function (data) {
    // log the data to our console
    console.log(data);
    // empty fields before adding new content
    $("#inputFirst").val("")
    $("#inputLast").val("")
    $("inputStreet").val("")
    $("#inputCity").val("")
    $("#inputState").val("")
    $("#inputZip").val("")
    $("#inputBalance").val("")
    $("#inputEmail").val("")
    $("#inputPhone").val("")
    $("#inputRating").val("")

    // if the data is not there, then return an error message
    if (!data) {
      $("#message").val("<h2> Please enter a valid account number. </h2>");
    }
    else {
      // append the account info
      $("#inputFirst").val(first_name)
      $("#inputLast").val(last_name)
      $("inputStreet").val(street)
      $("#inputCity").val(city)
      $("#inputState").val(state)
      $("#inputZip").val(zip)
      $("#inputBalance").val(balance)
      $("#inputEmail").val(email)
      $("#inputPhone").val(phone)
      $("#inputRating").val(rating)
      $("#inputAccount").val(id)
    }
  });
});


$("#update-account").on("click", function (event) {
  event.preventDefault();

  // capture All changes
  var changeAccount = {
    first_name: $("#inputFirst").val().trim(),
    last_name: $("#inputLast").val().trim(),
    street: $("inputStreet").val().trim(),
    city: $("#inputCity").val().trim(),
    state: $("#inputState").val().trim(),
    zip: $("#inputZip").val().trim(),

    balance: $("#inputBalance").val().trim(),

    email: $("#inputEmail").val().trim(),
    phone: $("#inputPhone").val().trim(),
    rating: $("#inputRating").val().trim(),
  };

  // send an AJAX Put-request with jQuery

  // $.put("/api/????", newAccount)

  //   .then(function(data) {
  //     // log the data we found
  //     console.log(data);
  //     
  //      $("#message").val("<h2> Account info changed. </h2>");
  //   });

  // empty each input box by replacing the value with an empty string


  $("#inputFirst").val("")
  $("#inputLast").val("")
  $("inputStreet").val("")
  $("#inputCity").val("")
  $("#inputState").val("")
  $("#inputZip").val("")
  $("#inputBalance").val("")
  $("#inputEmail").val("")
  $("#inputPhone").val("")
  $("#inputRating").val("")
  $("#inputAccount").val("")
});