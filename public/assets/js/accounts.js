// Code here handles what happens when a user submits a new account.


console.log("Accounts.js loaded");


// when user clicks add-btn
$("#add-account").on("click", function (event) {
  event.preventDefault();

  console.log("Entere'd add account button.")
  // make a newAccount obj
  var newAccount = {
    first_name: $("#inputFirst").val().trim(),
    last_name: $("#inputLast").val().trim(),
    street: $("#inputStreet").val().trim(),
    city: $("#inputCity").val().trim(),
    state: $("#inputState").val().trim(),
    zip: $("#inputZip").val().trim(),
    balance: $("#inputBalance").val().trim(),
    email: $("#inputEmail").val().trim(),
    phone: $("#inputPhone").val().trim(),
    account_key: $("#inputPassword").val().trim()
    
  };

  // send an AJAX POST-request with jQuery

  // $.post("/accounts/new", newAccount)
  
  //   // on success, run this callback
  //   .then(function (data) {
  //     // log the data we found
  //     console.log(data);
  //     $("#message").val("<h2> Account Added! </h2>");
  //   });

  $.ajax({
    type: "post",
    url: "/accounts/new",
    data: newAccount
  }).then(function (data) {
    console.log(data)
    window.location.href = "/accounts/view/"+ data.id +"/"+ data.key;
    //     // log the data we found
    //     console.log(data);
    //     $("#message").val("<h2> Account Added! </h2>");
    //   })

  // empty each input box by replacing the value with an empty string


  // $("#inputFirst").val("")
  // $("#inputLast").val("")
  // $("inputStreet").val("")
  // $("#inputCity").val("")
  // $("#inputState").val("")
  // $("#inputZip").val("")
  // $("#inputBalance").val("")
  // $("#inputEmail").val("")
  // $("#inputPhone").val("")
  // $("#inputRating").val("")
  // $("#inputAccount").val("")
});
})


// $("#view-account").on("click", function () {
//   $("#account-info").modal("show");


//   // Save Account Search
//   var passwordEntry = $("passwordEntry")
//     .val()
//     .trim();
//   var accountEntry = $("#accountEntry")
//     .val()
//     .trim();

//   // Using a RegEx Pattern to remove spaces from searchedAccount
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   viewAccount = viewAccount.replace(/\s+/g, "").toLowerCase();

//   // run an AJAX GET-request for our servers api,

//   $.get("/api/" + accountEntry, + passwordEntry, function (data) {
//     // log the data to our console
//     console.log(data);
//     // empty fields before adding new content
//     $("#inputFirst").val("")
//     $("#inputLast").val("")
//     $("inputStreet").val("")
//     $("#inputCity").val("")
//     $("#inputState").val("")
//     $("#inputZip").val("")
//     $("#inputBalance").val("")
//     $("#inputEmail").val("")
//     $("#inputPhone").val("")
//     $("#inputRating").val("")

//     // if the data is not there, then return an error message
//     if (!data) {
//       $("#message").val("<h2> Please enter a valid account number. </h2>");
//     }
//     else {
//       // append the account info
//       $("#inputFirst").val(first_name)
//       $("#inputLast").val(last_name)
//       $("inputStreet").val(street)
//       $("#inputCity").val(city)
//       $("#inputState").val(state)
//       $("#inputZip").val(zip)
//       $("#inputBalance").val(balance)
//       $("#inputEmail").val(email)
//       $("#inputPhone").val(phone)
//       $("#inputRating").val(rating)
//       $("#inputAccount").val(id)
//     }
//   });
// });


$("#update-account").on("click", function (event) {
  event.preventDefault();

  // capture All changes
  var changeAccount = {
    first_name: $("#inputFirst").val().trim(),
    last_name: $("#inputLast").val().trim(),
    street: $("#inputStreet").val().trim(),
    city: $("#inputCity").val().trim(),
    state: $("#inputState").val().trim(),
    zip: $("#inputZip").val().trim(),
    balance: $("#inputBalance").val().trim(),
    email: $("#inputEmail").val().trim(),
    phone: $("#inputPhone").val().trim(),
    account_key: $("#inputPassword").val().trim()
  };

  // send an AJAX Put-request with jQuery

  $.put("/accounts/:account_id/:account_key", changeAccount)

    .then(function(data) {
      // log the data we found
      console.log(data);
      
       $("#view-message").val("<h2> Account info changed. </h2>");
    });

  // empty each input box by replacing the value with an empty string


  // $("#inputFirst").val("")
  // $("#inputLast").val("")
  // $("inputStreet").val("")
  // $("#inputCity").val("")
  // $("#inputState").val("")
  // $("#inputZip").val("")
  // $("#inputBalance").val("")
  // $("#inputEmail").val("")
  // $("#inputPhone").val("")
  // $("#inputRating").val("")
  // $("#inputAccount").val("")
});