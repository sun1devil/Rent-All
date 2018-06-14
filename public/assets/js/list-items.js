$("#submitRent").on("click", function (event) {
    event.preventDefault();

    var newUpdateItem ={
        item_name: req.body.item_name,
        description: req.body.description,
        price: req.body.price,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        picture_link: req.body.picture_link,
        owner_id: req.body.owner_id,
        available: req.body.available
    }

    // var id = $(this).data("id");
    // var newRent = $(this).data("newrent");
  
    // var newRentState = {
    //   availability: newRent
    // };
  
    // Send the PUT request.
    
    $.ajax({
      type: "PUT",
      url: "/post-items/update/" + id,
      data: newUpdatetItem
    }).then(
      function () {
        console.log("changed item to: ", newUpdateItem);
        // $("#rentModal").modal("hide");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  
  });
  