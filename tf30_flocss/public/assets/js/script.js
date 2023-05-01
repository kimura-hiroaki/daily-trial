/* Drawer */
jQuery("#js-drawer-icon").on("click", function () {
  jQuery("#js-drawer-icon").toggleClass("is-open");
  jQuery("#js-drawer-content").toggleClass("is-open");
});

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-to-top-button").show();
  } else {
    jQuery("#js-to-top-button").hide();
  }
});

/* Smooth Scroll */
jQuery('a[href^="#"]').click(function () {
  var header = 0;
  var speed = 300;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id);
  var position = jQuery(target).offset().top - header;
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("body").addClass("is-footer-sns-fixed");
  } else {
    jQuery("body").removeClass("is-footer-sns-fixed");
  }
});
