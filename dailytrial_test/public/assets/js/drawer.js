$(".p-header__hamburgericon").on("click", function (e) {
    e.preventDefault();
    $(".p-header").toggleClass("is-active");
    $(".p-header__hamburgericon").toggleClass("is-active");
    $(".p-drawer").toggleClass("is-active");
    return false;
});
$(".p-drawer__nav--link").on("click", function (e) {
    e.preventDefault();
    $(".p-header").toggleClass("is-active");
    $(".p-header__hamburgericon").toggleClass("is-active");
    $(".p-drawer").toggleClass("is-active");
    return false;
});