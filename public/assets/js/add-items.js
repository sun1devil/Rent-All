// Code here handles what happens when a user submits a new account.

// {{!-- name varchar(60) NOT NULL, 
//     -- 	description varchar(255) NOT NULL,
//     -- 	price decimal(8,2) DEFAULT NULL,
//     -- 	start_date datetime NOT NULL,
//     -- 	end_date datetime NOT NULL,
//     -- 	picture_link varchar(255) NOT NULL, --}}




// when user clicks add-btn
$("#add-item").on("click", function(event) {
    event.preventDefault();
  
    // make a newAccount obj
    var newItem = {
      name: $("#inputItemName").val().trim(),
      description: $("#inputDescription").val().trim(),
      start_date: $("inputStart").val().trim(),
      end_date: $("#inputEnd").val().trim(),
      price: $("#inputPrice").val().trim(),
      Photo: $("#inputPhoto").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    // $.post("/api/newItem", newAccount)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a  with an alert window
        alert("Adding Item...");
      });
  
    // empty each input box by replacing the value with an empty string
    
      
      $("#inputItemName").val(""),
      $("#inputDescription").val(""),
      $("inputStart").val(""),
      $("#inputEnd").val(""),
      $("#inputPrice").val(""),
      $("#inputPhoto").val(""),
  
  });
  