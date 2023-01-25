$(function () {
    const course_image = $(".course-card_image");
    const expansion_card = $(".expansion_card");

    course_image.click(function () {
        const expansion_image = $(".expansion_card_image");
        const image_src = $(this).attr("src");
        expansion_image.attr("src", image_src);
        expansion_card.fadeIn(300).css('display', 'flex');
    });

    expansion_card.click(function () {
        expansion_card.fadeOut(300);
    });

});