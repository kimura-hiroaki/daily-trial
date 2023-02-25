// jQuery
$(function () {
    const scroll_top = $(".totop");
    scroll_top.hide();
    $(window).scroll(function () {
        let scroll_y = window.pageYOffset;
        if (scroll_y > 80) {
            scroll_top.fadeIn(300);
        }
        else {
            scroll_top.fadeOut(300);
        }
    });
    scroll_top.click(function () {
        const top_position = 0;
        const move_time = 1000;
        $("html,body").animate({ scrollTop: top_position }, move_time);
    });
});