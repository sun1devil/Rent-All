console.log("Query.js loaded");

    $(".change-rent").on("click", function(event) {
        event.preventDefault();

      var id = $(this).data("id");
      var newRent = $(this).data("newrent");

      var newRentState = {
        availability: newRent
      };

      // Send the PUT request.
      $.ajax("/post-items/update" + id, {
        type: "PUT",
        data: newRentState
      }).then(
        function() {
          console.log("changed availability to: ", newRent);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
