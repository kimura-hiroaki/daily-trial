$(function () {
    let pagetop = $(".totop");
    $('a[href^="#"]').click(function () {
        // headerの高さ取得
        let header_height = $(".header").innerHeight();
        // 移動速度を指定（ミリ秒）
        let speed = 300;
        // hrefで指定されたidを取得
        let id = $(this).attr("href");
        // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
        let target = jQuery("#" == id ? "html" : id);
        // ページのトップを基準にターゲットの位置を取得
        // let position = 0;
        // if (id != "#") {
        //     position = $(id).offset().top - header_height;
        // }
        let position = $(target).offset().top - header_height;
        // ターゲットの位置までspeedの速度で移動
        $('body, html').animate({ scrollTop: position }, speed);
        return false;
    });
    pagetop.hide();
    $(window).scroll(function () {
        // let scroll_y = $(window).scrollTop();
        let scroll_y = window.pageYOffset;
        if (scroll_y > 100) {
            pagetop.fadeIn(300);
        } else {
            pagetop.fadeOut(300);
        }
    });
});