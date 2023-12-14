//Traveller Increment/decrement button
jQuery(document).ready(function () {
  // This button will increment the value
  $('[data-quantity="plus"]').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("data-field");
    // Get its current value
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    // If is not undefined
    if (!isNaN(currentVal)) {
      // Increment
      $("input[name=" + fieldName + "]").val(currentVal + 1);
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val(0);
    }
  });
  // This button will decrement the value till 0
  $('[data-quantity="minus"]').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    fieldName = $(this).attr("data-field");
    // Get its current value
    var currentVal = parseInt($("input[name=" + fieldName + "]").val());
    // If it isn't undefined or its greater than 0
    if (!isNaN(currentVal) && currentVal > 0) {
      // Decrement one
      $("input[name=" + fieldName + "]").val(currentVal - 1);
    } else {
      // Otherwise put a 0 there
      $("input[name=" + fieldName + "]").val(0);
    }
  });

  // Update total travellers number
  function updateTotalTravellers() {
    var totalAdults = parseInt($("input[name=onewayAdult]").val()) || 0;
    var totalChildren = parseInt($("input[name=onewayChild]").val()) || 0;
    var totalInfants = parseInt($("input[name=onewayInfant]").val()) || 0;

    var totalTravellers = totalAdults + totalChildren + totalInfants;

    $("#totalTravellerInfoOneway").text(totalTravellers);

    var selectedClass = $('input[name="class"]:checked').val();
    $("#cabinTravellerInfoOneway").text(selectedClass);

    $("#totalTravellerInfoReturn").text(totalTravellers);

    var selectedClass = $('input[name="class"]:checked').val();
    $("#cabinTravellerInfoReturn").text(selectedClass);

    $("#totalTravellerInfoMulti").text(totalTravellers);

    var selectedClass = $('input[name="class"]:checked').val();
    $("#cabinTravellerInfoMulti").text(selectedClass);
  }

  // fuction call
  $('[data-quantity="plus"], [data-quantity="minus"]').click(function (e) {
    updateTotalTravellers();
  });

  // add function call while changing flight class
  $('input[name="class"]').change(function () {
    updateTotalTravellers();
  });
});

//Traveller Box not close on inside click
$("#myDD, #myDDReturn, #myDDRound").on("click", function (event) {
  event.stopPropagation();
});
