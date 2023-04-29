$(function () {
    const header_menu = $(".header_nav_ul_items a");
    header_menu.click(function () {
        console.log("OK")
        header_menu.removeClass("is-action");
        $(this).addClass("is-action");
        return false;
    });
});