//Traveller Increment/decrement button
jQuery(document).ready(function(){
  // This button will increment the value
  $('[data-quantity="plus"]').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('data-field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
          $('input[name='+fieldName+']').val(currentVal + 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
  // This button will decrement the value till 0
  $('[data-quantity="minus"]').click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('data-field');
      // Get its current value
      var currentVal = parseInt($('input[name='+fieldName+']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
          // Decrement one
          $('input[name='+fieldName+']').val(currentVal - 1);
      } else {
          // Otherwise put a 0 there
          $('input[name='+fieldName+']').val(0);
      }
  });
});

//Traveller Box not close on inside click
$("#myDD").on("click", function (event) {
  // The event won't be propagated up to the document NODE and
  // therefore delegated events won't be fired
  event.stopPropagation();
});

//Traveller Box not close on inside click
$("#myDDReturn").on("click", function (event) {
  // The event won't be propagated up to the document NODE and
  // therefore delegated events won't be fired
  event.stopPropagation();
});

$("#myDDRound").on("click", function (event) {
  // The event won't be propagated up to the document NODE and
  // therefore delegated events won't be fired
  event.stopPropagation();
});

