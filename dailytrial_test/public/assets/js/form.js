/*
const form = jQuery('#js-form');
form.submit(function (e) {
    jQuery.ajax({
        url: form.attr('action'),
        data: form.serialize(),
        type: 'POST',
        dataType: 'xml',
        statusCode: {
            0: function () {
                //送信に成功したときの処理
                form.slideUp();
                jQuery('#js-success').slideDown();
            },
            200: function () {
                //送信に失敗したときの処理
                form.slideUp();
                jQuery('#js-error').slideDown();
            }
        }
    });
    return false;
});
*/

const dl_submit_button = jQuery(".download_submit_btn");
jQuery("#js-dl-form input").on("change", function () {
    if (jQuery('#js-dl-form input[id="your_name"]').val() !== ""
        && jQuery('#js-dl-form input[id="your_ruby"]').val() !== ""
        && jQuery('#js-dl-form input[type="email"]').val() !== ""
        && jQuery('#js-dl-form input[type="checkbox"]').prop("checked") === true) {
        console.log("2");
        dl_submit_button.prop("disabled", false);
        dl_submit_button.addClass("is-active");
        console.log("3");
    }
    else {
        dl_submit_button.prop("disabled", true);
        dl_submit_button.removeClass("is-active");
        console.log("1");
    }
});

const submit_button = jQuery(".contact_submit_btn");
jQuery("#js-form input, #js-form textarea, #js-form select").on("change", function () {
    if (jQuery('#js-form input[id="your_name"]').val() !== ""
        && jQuery('#js-form input[id="your_ruby"]').val() !== ""
        && jQuery('#js-form input[type="tel"]').val() !== ""
        && jQuery('#js-form input[type="email"]').val() !== ""
        && jQuery('#js-form select').val() !== ""
        && jQuery('#js-form textarea').val() !== ""
        && jQuery('#js-form input[type="checkbox"]').prop("checked") === true) {
        submit_button.prop("disabled", false);
        submit_button.addClass("is-active");
    }
    else {
        console.log($('#js-form input[type="text"]').val());
        console.log($('#js-form input[type="email"]').val());
        console.log($('#js-form input[name="entry.1833175559"]').prop("checked"));
        submit_button.prop("disabled", true);
        submit_button.removeClass("is-active");
    }
});