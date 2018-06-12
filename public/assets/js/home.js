
// on click of each button with AJAX call based on predefined routes - look into Google doc for routes
  

// when user clicks search button
$("#search-item").on("click", function(event) {
    event.preventDefault();

    var listItems = {
        items: $("#search-item").val().trim()
    };

 // Send the GET request.
 $.ajax("/items", {
    type: "GET",
    data: listItems
  }).then(
    function() {
      console.log("List of Items for Rent");
      // Reload the page to get the updated list
      location.reload();
    }
  )
});

