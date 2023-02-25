$(".hamburgericon").on("click", function (e) {
    e.preventDefault();
    $(".hamburgericon").toggleClass("is-active");
    $(".drawer_background").toggleClass("is-active");
    $(".drawer_nav").toggleClass("is-active");
    return false;
});