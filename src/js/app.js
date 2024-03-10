"use strict";

import about from "../components/about.js";
import banner from "../components/banner.js";
import contact from "../components/contact.js";
import experience from "../components/experience.js";
import footer from "../components/footer.js";
import header from "../components/header.js";
import preloader from "../components/preloader.js";
import projects from "../components/projects.js";
import skills from "../components/skills.js";

//*APPEND STRUCTURE
(function() {
    $("#ms-root").html(`
        ${ preloader() }
        ${ header() }
        <main class="ms-site-wrapper">
            ${ banner() }
            ${ about() }
            ${ experience() }
            ${ skills() }
            ${ projects() }
            ${ contact() }
        </main>
        ${ footer() }
    `);
})();

const projectList = [
    {
        image: 'src/images/todolist-image.png',
        title: 'To Do List',
        description: 'An app that can help to increase productivity, manage tasks effectively and avoid forgetting things.',
        tags: 'HTML, CSS, JavaScript, React, Airtable API',
        link: 'https://johnferriol11.github.io/todolist/'
    },
    {
        image: 'src/images/event-listing.png, src/images/event-calendar-image.png',
        title: 'Event Listing',
        description: 'An app that showcase different types of events with a search and filter feature to easily navigate the specific event.',
        tags: 'HTML, CSS, JavaScript, Mixitup, FullCalendar',
        link: 'projects/event listing'
    },
    {
        image: 'src/images/mortgage-image.png',
        title: 'Mortgage Calculator',
        description: 'An automated tools that enable users to determine the financial implications of changes in one or more variables in a mortgage financing arrangement.',
        tags: 'HTML, CSS, JavaScript, Chart',
        link: 'projects/mortgage calculator'
    },
    {
        image: 'src/images/thumbnail-icon-slider.png',
        title: 'Thumbnail Icon Slider',
        description: 'Web feature incorporating a thumbnail icon slider, enabling effortless navigation through a visual array of content.',
        tags: 'HTML, CSS, JavaScript, Slick',
        link: 'projects/thumbnail slider'
    },
    {
        image: 'src/images/testimonial-slider.png',
        title: 'Testimonial Slider',
        description: 'An interactive web element showcasing a dynamic carousel of authentic user experiences and glowing reviews.',
        tags: 'HTML, CSS, JavaScript, Swiper',
        link: 'projects/testimonial slider'
    },
    {
        image: 'src/images/video-gallery.png',
        title: 'Video Gallery',
        description: 'An interactive web element offering a captivating showcase of diverse videos for an immersive viewing experience.',
        tags: 'HTML, CSS, JavaScript',
        link: 'projects/video gallery'
    },
    {
        image: 'src/images/flipbox.png',
        title: 'Flip Box',
        description: 'An interactive web element showcasing information or images on both sides with engaging flipping motion and additional animations for a dynamic user experience.',
        tags: 'HTML, CSS, JavaScript',
        link: 'projects/flipbox'
    },
    {
        image: 'src/images/side-tabulation.png',
        title: 'Side Tabulation',
        description: 'An interactive web element offering quick and easy content organization for an enhanced browsing experience.',
        tags: 'HTML, CSS, JavaScript',
        link: 'projects/side tabulation'
    },
    {
        image: 'src/images/animated-media-gallery-vertical-image.png, src/images/animated-media-gallery-horizontal-image.png, src/images/animated-media-gallery-vertical-video.png, src/images/animated-media-gallery-horizontal-video.png',
        title: 'Animated Media Gallery',
        description: 'An engaging multimedia gallery featuring an animated scrolling effect.',
        tags: 'HTML, CSS, JavaScript',
        link: 'projects/media gallery'
    }
];

$(document).ready(function() {
    //HIDE PRELOADER ON LOAD
    setTimeout(function() { 
        $(".ms-preloader-wrapper").addClass("polygonOut");
    }, 3000);

    //SCROLL TO TOP WHEN RELOAD
    $("html, body").animate({ scrollTop: 0 }, "slow");

    //SET DEFAULT THEM ON RELOAD
    setThemeColor(true);
});

$(document).mousemove(function(event) {
    setTimeout(function() {
        $("#magicMouseCursor").show();
        $("#magicPointer").show();
    }, 100);
});

//*MOUNT PROJECT STRUCTURE
projectsPagination();
let projectsWrapperTop = $(".ms-main-projects-wrapper").offset().top;
let headerHeight = $(".ms-header").outerHeight();

//*INITIATE CURSOR
let cursorOptions = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "pointer-blur",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};
magicMouse(cursorOptions);

//*INITIALIZE SWIPER SLIDER
swiperInit();
function  swiperInit() {
        let swiper = new Swiper(".mySwiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2000
        }
    });
}

//*INITIALIZE BANNER PARTICLES
let particlesColor = $('body').hasClass('light-mode') ? "#B39B78" : "#00fff5";
initializeParticlesJS(particlesColor);

//*INITIALIZE ANIMATION ON SCROLL
AOS.init();

//*INITIALIZE TEXTILLATE
$('.animated-text').textillate({ 
    selector: '.texts',
    in: { effect: 'fadeInLeftBig' },
    out: { effect: 'fadeOutRight', reverse: true },
    loop: true
});

//*INITIALIZE TILT
$(".ms-image-background").tilt({
    maxTilt: 15,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.1,
    scale: 1.04
});

//*INITIALIZE MAP
(function() {
    let map = L.map('map', {
        center: [13.941876, 121.1644198],
        zoom: 13
    });
    
    let tiles = new L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', minZoom: '13'}).addTo(map);
    
    var customIcon = L.icon({
        iconUrl: 'src/images/location-man.png',
        iconSize: [50, 50],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    let marker = L.marker([13.941876, 121.1644198], { 
        icon: customIcon,
        draggable: true,
        title: "",
        opacity: 1
    });
    
    marker.addTo(map);
    // marker.addTo(map).bindPopup("<p1><b>Lipa City</b><br>Lipa, officially the City of Lipa, is a 1st class component city in the province of Batangas, Philippines. According to the 2020 census, it has a population of 372,931 people. It is the first city charter in the province and one of five cities in Batangas alongside Batangas City, Calaca, Santo Tomas, and Tanauan.</p1>") .openPopup();    
})();

//*INITIALIZE PARALLAX SCROLLING EFFECT
let rellax = new Rellax('.rellax', {
    breakpoints: [576, 768, 1201]
});

//*STICKY HEADER ON SCROLL
$(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
        $('.ms-header').addClass('ms-onScroll');
    }
    else {
        $('.ms-header').removeClass('ms-onScroll');
    }
});

//*LIGHT/DARK MODE TOGGLE
$('.ui-switch').click(function() {
    let isDarkMode = $('.ui-switch input').is(":checked");
    setThemeColor(isDarkMode);
    let primary_color = isDarkMode ? "#00fff5" : "#B39B78";
    initializeParticlesJS(primary_color);
});

//*HAMBURGER MENU TOGGLE
$(".hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".ms-menu-wrapper").toggleClass("is-active");
});

$(".ms-navigation-container a").click(function() {
    $(".hamburger").removeClass("is-active");
    $(".ms-menu-wrapper").removeClass("is-active");
});

//*SEND EMAIL
$(".ms-contact .ms-form .ms-button").click(function() {
    let name = $("#ms-form-name").val();
    let email = $("#ms-form-email").val();
    let subject = $("#ms-form-subject").val();
    let message = $("#ms-form-message").val();

    Email.send({
        SecureToken : "0d3d73c8-178c-4546-a607-b8c2ea8cb3d5",
        To : 'ferriol194@gmail.com',
        From : 'ferriol194@gmail.com',
        Subject : subject,
        Body : `<br>Name: ${name}
                <br>Email: ${email}
                <br>Subject: ${subject}
                <br>Message: ${message}`
    }).then(function(message) {
        console.log(message);
        if(message.toLowerCase() == 'ok') {
            $('.ms-success').show();
            $('.ms-input-wrapper').hide();
            $('.ms-field-wrapper').hide();
            $('.ms-button').hide();
        }else {
            $('.ms-error').show();
            $('.ms-input-wrapper').hide();
            $('.ms-field-wrapper').hide();
            $('.ms-button').hide();
        }
    });
});

function initializeParticlesJS(particlesColor) {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 60,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": particlesColor
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 180,
                "color": particlesColor,
                "opacity": 1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                    "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}

function reinitMagicMouse() {
    $('#magicMouseCursor:not(:first-child), #magicPointer:not(:first-child)').slice(0).remove();

    $(".paginationjs-pages").addClass("no-cursor");

    magicMouse(cursorOptions);

    $("#magicMouseCursor").hide();
    $("#magicPointer").hide();

    window.scrollTo({
        top: parseInt(projectsWrapperTop) - parseInt(headerHeight),
        behavior: 'smooth'
    });
}

function projectsPagination() {
    $('.ms-project-list-wrapper').pagination({
        dataSource: projectList,
        pageSize: 3,
        callback: function(data, pagination) {
            let project_structure = projectStructure(data);
            $('.ms-main-projects-wrapper').html(project_structure);
        },
        afterPageOnClick: function() {
            swiperInit();
            reinitMagicMouse();
        },
        afterPreviousOnClick: function() {
            swiperInit();
            reinitMagicMouse();
        },
        afterNextOnClick: function() {
            swiperInit();
            reinitMagicMouse();
        }
    });

    $(".paginationjs-pages").addClass("no-cursor");
}

function projectStructure(data) {
    let output = '';

    data.map(function(i) {
        output += `
            <div class="ms-projects-wrapper">
                <div class="ms-column lg-cols-6 sm-cols-12 ms-project-image-wrapper">
                    ${imageSliderStructure(i.image)}
                </div>
                <div class="ms-column lg-cols-6 sm-cols-12 ms-project-content-wrapper">
                    <h3>${i.title}</h3>
                    <p>${i.description}</p>
                    <div class="ms-projects-tags-wrapper">
                        ${tagsStructure(i.tags)}
                    </div>
                    <a class="ms-button magic-hover magic-hover__square" href="${i.link}" target="_blank">
                        <span class="text">Preview</span>
                    </a>
                </div>
            </div>
        `;
    });

    return output;
}

function tagsStructure(tags) {
    let tagsArray = tags.split(",");
    let output = '';

    tagsArray.map(function(tag) {
        output += `
            <div class="ms-projects-tags">${tag.trim()}</div>
        `;
    });

    return output;
}

function imageSliderStructure(images) {
    let imageArray = images.split(',');
    let output = '';

    imageArray.map(function(imageUrl) {
        output += `
            <div class="swiper-slide no-cursor">
                <img src="${imageUrl}" alt="laptop" />
            </div>
        `;
    });

    let sliderOutput = `
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            ${output}
        </div>
    </div>`;

    return sliderOutput;
}

function setThemeColor(isDarkMode) {
    isDarkMode ? $('body').removeClass('light-mode') : $('body').addClass('light-mode');
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