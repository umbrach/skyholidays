
$(".main-content .owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  center: true,
  autoplayHoverPause: true,

  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
});

$(".main-content").on("changed.owl.carousel", function (event) {
  var currentIndex = event.item.index;
  var src = $(event.target)
    .find(".owl-item")
    .eq(currentIndex)
    .find("img")
    .attr("src");
  $(".main-image").attr("src", src);
});

function changeImage(newImage) {
  $(".main-image").attr("src", newImage);
}
