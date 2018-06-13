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

  if(newAccount.first_name.length > 0 && newAccount.first_name.length > 0){
    $.ajax({
      type: "post",
      url: "/accounts/new",
      data: newAccount
    }).then(function (data) {
      console.log(data)
      window.location.href = "/accounts/view/" + data.id + "/" + data.key;
    });
   
  }
 


  // $.ajax("/accounts/new", {
  //   type: "POST",
  //   data: newAccount
  // }).then(function () {
  //   // console.log("creating new pokemon");
  //   // location.reload();
  // })





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

    .then(function (data) {
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



$("#delete-account").on("click", function (event) {
  event.preventDefault();
  $("#err-msg").empty("");
  $("#delete-account-modal").modal("show");
});

$("#confirm-delete").on("click", function(event) {
  var deleteAccount = {
    account_id: $("#account_id").val().trim(),
    account_key: $("#account_password").val().trim(),
    }
    console.log(deleteAccount);
    if(deleteAccount.account_id.length >0 && deleteAccount.account_key.length>0){
      $.ajax("/accounts/"+ deleteAccount.account_id +"/"+ deleteAccount.account_key, {
        type: "DELETE"
      }).then(
        function(){
          console.log("deleted account", deleteAccount.account_id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }else {
      console.log("fill out entire form");
      $("#err-msg").empty("").text("fill out entire form");
    }
   
  });
  
  

 


