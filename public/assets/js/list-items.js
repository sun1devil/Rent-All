

$(".rentThisItem").on("click", function (event) {
  event.preventDefault();

  var item_id = $(this).attr("data-id");

  var start_date = $("#item-date-" + item_id).attr("data-start");
  var end_date = $("#item-date-" + item_id).attr("data-end");

  $("#avail_start_date").text(start_date);
  $("#avail_end_date").text(end_date);

  $("#avail_start_date").attr("data-start", start_date);
  $("#avail_end_date").attr("data-end", end_date);

  $("#submitRent").attr("data-id", item_id);

  $("#rentModal").modal("show");
});



$("#submitRent").on("click", function (event) {
  event.preventDefault();

  var item_id = $("#submitRent").attr("data-id");

  var avail_start = $("#avail_start_date").attr("data-start");
  var moment_avail_start = moment(avail_start, "YYYY-MM-DD");

  var avail_end = $("#avail_end_date").attr("data-end");
  var moment_avail_end = moment(avail_end, "YYYY-MM-DD");

  var input_start = $("#trans_start").val();
  var moment_input_start = moment(input_start, "YYYY-MM-DD");

  var input_end = $("#trans_end").val();
  var moment_input_end = moment(input_end, "YYYY-MM-DD");

  // console.log(moment_avail_start.diff(moment_input_start));

  var applyRental = true;

  if (input_end === "" || input_start === ""){
    //One of the input dates are blank.
    // console.log("Input date is blank.");
    applyRental = false;
  }


  if (moment_avail_start.diff(moment_input_start) > 0) {
    //The input start date is too low, compared to the available date.
    // console.log("Input start date too low.")
    applyRental = false;
  }


  if (moment_avail_end.diff(moment_input_end) < 0) {
    //The input end date is too low, compared to the available date.
    // console.log("Input end date is too high.")
    applyRental = false;
  }

  if (moment_input_end.diff(moment_input_start) < 0) {
    //The input start date is greater than the input end date.
    // console.log("Input start date is greater than input end date");
    applyRental = false;
  }

  var rentalInfo = {
    item_id: item_id,
    avail_start: avail_start,
    avail_end: avail_end,
    input_start: input_start,
    input_end: input_end
  };


  if (applyRental === true) {

    alert("Congratulations you just rented out this item!");

    $.ajax({
      type: "PUT",
      url: "/search/update/" + item_id,
      data: rentalInfo
    }).then(function () {
      window.location.href = "/search/";

    });
  }

});
