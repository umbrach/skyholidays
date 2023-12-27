// hero title changer
$(document).ready(function () {
  $("#flight-tab, #hotel-tab, #package-tab").on("click", function () {
    var tabText = $(this).text();

    $("#page-heading").text(tabText);
  });
});

// ------------Date pickers---------------

// multiple datepicker
$('input[name="dates"]').daterangepicker({
  autoUpdateInput: false,
  autoApply: true,
  showDropdowns: true,
  opens: "right",
  drops: "auto",
});

$('input[name="dates"]').on("apply.daterangepicker", function (ev, picker) {
  $(this).val(
    picker.startDate.format("MM/DD/YYYY") +
      " - " +
      picker.endDate.format("MM/DD/YYYY")
  );
});

$('input[name="dates"]').on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});

// single datepicker
$(function () {
  $("#datepicker").datepicker();
  // multi
  $("#datepicker1").datepicker();
  $("#datepicker2").datepicker();
  $("#datepicker3").datepicker();
  $("#datepicker4").datepicker();
});

// ------------End Date pickers---------------

// Additional services checkboxes-------------

function toggleHiddenCheckbox() {
  // Getting references to elements
  // let hiddenCheckboxLabel = document.getElementById("hiddenCheckbox");
  let hiddenCheckbox = document.getElementById("hiddenCheckbox");

  // Checking the state of the first checkbox
  if (document.getElementById("mainCheckbox").checked) {
    // If selected, show the hidden button
    hiddenCheckbox.style.display = "block";
  } else {
    // If not selected, hide the hidden button
    hiddenCheckbox.style.display = "none";
    // Resetting the state of the hidden checkbox
    hiddenCheckbox.checked = false;
  }
}

// price range slider
$(function () {
  $("#slider-range").slider({
    range: true,
    min: 50,
    max: 1000,
    values: [130, 650],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});
