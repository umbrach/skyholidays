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
