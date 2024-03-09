$(document).ready(function() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log(isMobile);

    let slidesToShow = isMobile ? 1 : 3;

    setTimeout(function() {
        $(".dot-spinner").hide();
        $(".cts-main-wrapper").show();
    }, "1000")

    var swiper = new Swiper(".swiperSlider", {
        slidesPerView: slidesToShow,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".cts-main-wrapper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".cts-main-wrapper .swiper-button-next",
            prevEl: ".cts-main-wrapper .swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
            // disableOnInteraction: false,
        },
    });
});

cssLibrary('fontAwesomeSource','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css');

function cssLibrary(id, url) {
    if (!document.getElementById(id)) {
        let head = document.getElementsByTagName('head')[0];
        let link = document.createElement('link');
        link.id = id;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.crossOrigin = 'anonymous';
        head.appendChild(link);
    }
}

//DISABLE RIGHT CLICK
$(document).on("contextmenu", function(e) {
    e.preventDefault();
});

//DISABLE INSPECT ELEMENT
$(document).on("keydown", function(e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
        e.keyCode === 86 ||
        e.keyCode === 85 ||
        e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
});