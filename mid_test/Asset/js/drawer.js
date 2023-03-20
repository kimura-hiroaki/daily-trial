$(".header_icon").on("click", function (e) {
    e.preventDefault();
    $(".header_icon").toggleClass("is-active");
    $(".drawer_background").toggleClass("is-active");
    $(".drawer_nav").toggleClass("is-active");
    return false;
});
$(".drawer_nav_item").on("click", function (e) {
    e.preventDefault();
    $(".header_icon").toggleClass("is-active");
    $(".drawer_background").toggleClass("is-active");
    $(".drawer_nav").toggleClass("is-active");
    return false;
});