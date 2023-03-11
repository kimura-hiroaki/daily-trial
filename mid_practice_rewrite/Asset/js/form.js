const form = $('#js-form');
form.submit(function (e) {
    $.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: 'POST',
        dataType: 'xml',
        statusCode: {
            0: function () {
                //送信に成功したときの処理
                form.slideUp();
                $('#js-success').slideDown();
            },
            200: function () {
                //送信に失敗したときの処理
                form.slideUp();
                $('#js-error').slideDown();
            }
        }
    });
    return false;
});

const submit_button = $(".contact_submit_btn");
$("#js-form input,#js-form textarea").on("change", function () {
    if ($('#js-form input[type="text"]').val() !== ""
        && $('#js-form input[type="email"]').val() !== ""
        && $('#js-form input[name="entry.134745909"]').prop("checked") === true) {
        submit_button.prop("disabled", false);
        submit_button.addClass("is-active");
    }
    else {
        console.log($('#js-form input[type="text"]').val());
        console.log($('#js-form input[type="email"]').val());
        console.log($('#js-form input[name="entry.134745909"]').prop("checked"));
        submit_button.prop("disabled", true);
        submit_button.removeClass("is-active");
    }

});