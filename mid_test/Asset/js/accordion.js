$(function () {
    $('.qa_accordion_header').click(function () {
        //クリックされた.question_accordion_headerに隣接する.question_accordion_answerが開いたり閉じたりする。
        $(this).next('.qa_accordion_answer').slideToggle();
        $(this).children('.qa_accordion_header_icon').toggleClass('is-open');
    });
});