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
$("#add-account").on("click", function(event) {
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
    // $.post("/api/newAccount", newAccount)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a  with an alert window
        alert("Adding ...");
      });
  
    // empty each input box by replacing the value with an empty string
    
      first_name: $("#inputFirst").val("")
      last_name: $("#inputLast").val("").
      street: $("inputStreet").val("")
      city: $("#inputCity").val("")
      state: $("#inputState").val("")
      zip: $("#inputZip").val("")
      balance: $("#inputBalance").val("")
      email: $("#inputEmail").val("")
      phone: $("#inputPhone").val("")
      rating: $("#inputRating").val("")
  
  });
  