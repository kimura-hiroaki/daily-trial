$(function () {
    $('.question_accordion_header').click(function () {
        //クリックされた.question_accordion_headerに隣接する.question_accordion_answerが開いたり閉じたりする。
        $(this).next('.question_accordion_answer').slideToggle();
        $(this).children('.question_accordion_header_item').toggleClass('is-open');
    });
});