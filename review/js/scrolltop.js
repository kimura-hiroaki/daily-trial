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