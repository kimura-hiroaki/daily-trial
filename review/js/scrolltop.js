// $(function () {
//     let pagetop = $(".scroll_top");
//     $('a[href^="#"]').click(function () {
//         // headerの高さ取得
//         let header_height = $(".header").innerHeight();
//         // 移動速度を指定（ミリ秒）
//         let speed = 300;
//         // hrefで指定されたidを取得
//         let id = $(this).attr("href");
//         // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
//         let target = jQuery("#" == id ? "html" : id);
//         // ページのトップを基準にターゲットの位置を取得
//         // let position = 0;
//         // if (id != "#") {
//         //     position = $(id).offset().top - header_height;
//         // }
//         let position = $(target).offset().top - header_height;
//         console.log(header_height, id, position);
//         // ターゲットの位置までspeedの速度で移動
//         $('body, html').animate({ scrollTop: position }, speed);
//         return false;
//     });
//     pagetop.hide();
//     $(window).scroll(function () {
//         // let scroll_y = $(window).scrollTop();
//         let scroll_y = window.pageYOffset;
//         if (scroll_y > 100) {
//             pagetop.fadeIn(300);
//         } else {
//             pagetop.fadeOut(300);
//         }
//     });
// });

// jQuery
$(function () {
    const scroll_top = $(".scroll_top");
    scroll_top.hide();
    $(window).scroll(function () {
        let scroll_y = window.pageYOffset;
        if (scroll_y > 80) {
            scroll_top.fadeIn(300);
        }
        else {
            scroll_top.fadeOut(300);
        }
    });
    scroll_top.click(function () {
        const top_position = 0;
        const move_time = 500;
        $("html,body").animate({ scrollTop: top_position }, move_time);
    });
});

// javascriptで書いてみた
// // .getElementsByClassNameは一致する要素のリストであり、要素自身ではない
// const top_botton = document.getElementsByClassName("scroll_top")[0]
// // const top_botton = document.querySelector(".scroll_top");

// // スクロールされたら表示
// window.addEventListener("scroll", scrollevent);

// function scrollevent() {
//     let scroll_y = window.pageYOffset;
//     if (scroll_y > 80) {
//         top_botton.classList.add("botton_appear");
//         top_botton.classList.remove("botton_hide");
//     }
//     else {
//         top_botton.classList.add("botton_hide");
//         top_botton.classList.remove("botton_appear");
//     }
// }

// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: 'smooth'
//     });
// }

// top_botton.addEventListener("click", scrollToTop);