$(document).ready(function () {

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScypl2dxDHS93yvUf5J0-JwkJcVdiUA7JA9FDf5E_yaw-_QhA/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".end-message").slideDown();
                    $(".submit-btn").fadeOut();
                    //window.location.href = "thanks.html";
                },
                200: function () {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});