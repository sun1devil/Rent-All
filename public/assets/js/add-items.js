
$("#add-item").on("click", function (event) {
  event.preventDefault();
  console.log("Testing in add item button")
  addItem()
  function addItem() {
    // make a newAccount obj
    var newItem = {
      item_name: $("#inputItemName").val().trim(),
      description: $("#inputDescription").val().trim(),
      start_date: $("#inputStart").val().trim(),
      end_date: $("#inputEnd").val().trim(),
      price: $("#inputPrice").val().trim(),
      picture_link: $("#inputPhoto").val().trim()
    };

    // send an AJAX POST-request with jQuery
    $.post("/post-items/new", newItem)
      .then(function (data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a  with an alert window
        alert("Adding Item...");
      });

    // empty each input box by replacing the value with an empty string

    $("#inputItemName").val("")
    $("#inputItemName").val("")
    $("#inputDescription").val("")
    $("inputStart").val("")
    $("#inputEnd").val("")
    $("#inputPrice").val("")
    $("#inputPhoto").val("")
  };
});

