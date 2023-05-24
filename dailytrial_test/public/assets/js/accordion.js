$(function () {
    $('.p-qa__accordion__question').click(function () {
        //クリックされた.question_accordion_headerに隣接する.question_accordion_answerが開いたり閉じたりする。
        $(this).next('.p-qa__accordion__answer').slideToggle();
        $(this).toggleClass('is-active');
    });
});