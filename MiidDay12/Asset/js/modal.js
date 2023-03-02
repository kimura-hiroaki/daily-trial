$(function () {
    const contact_policy_modal = $(".contact_policy_modal");
    const modal_card_close = $(".modal_card_close");
    const modal_card_button = $(".modal_card_button");
    const modal = $(".modal");

    contact_policy_modal.click(function (e) {
        e.preventDefault();
        //data-以下が「target」になってる属性の値（for-modal）を取得
        let target = $(this).data("target");
        //targetの値と同じクラス名を持った要素にis-showを追加
        $('.' + target).addClass('is-show');
        return false;
    });

    modal_card_button.click(function () {
        modal.removeClass("is-show");
    });

    modal_card_close.click(function () {
        modal.removeClass("is-show");
    });

});