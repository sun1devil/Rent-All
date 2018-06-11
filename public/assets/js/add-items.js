// Code here handles what happens when a user submits a new item.

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
    //   .then(function(data) {
    //     // log the data we found
    //     console.log(data);
    //     // tell the user we're adding a  with an alert window
    //     alert("Adding Item...");
    //   });
  
    // empty each input box by replacing the value with an empty string
          
      $("#inputItemName").val(""),
      $("#inputDescription").val(""),
      $("inputStart").val(""),
      $("#inputEnd").val(""),
      $("#inputPrice").val(""),
      $("#inputPhoto").val(""),
  
  });
  