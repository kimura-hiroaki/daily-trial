$(function () {
    const course_botton = $(".header_nav_item_course")
    course_botton.click(function () {
        const toggle_item = $(".header_toggle")
        toggle_item.toggle();
    });
});

