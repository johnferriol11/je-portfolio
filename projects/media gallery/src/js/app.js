let dmAPI = {
    runOnReady: (functionName, callback) => {
        if (functionName) {
            callback();
        } else {
            console.error("Please Enter Function Name!");
        }
    },
    loadScript: (url, callback) => {
        var fjs = document.getElementsByTagName("script")[0];
        script = document.createElement("script");
        script.src = url;
        fjs.parentNode.insertBefore(script, fjs);
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else { //Others
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        fjs.parentNode.insertBefore(script, fjs);
    }
};

let galleryList = [
    {
        image: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4", //https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4
        title: "Mountains",
        subtext: "Explore the majestic beauty and rugged terrain of mountains, from snow-capped peaks to lush valleys.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Beaches",
        subtext: "Relax and unwind on sandy shores, listen to the soothing sounds of waves, and enjoy breathtaking ocean views.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Forests",
        subtext: "Immerse yourself in the tranquility of dense forests, surrounded by towering trees, diverse wildlife, and fresh air.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/1352196/pexels-photo-1352196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Deserts",
        subtext: "Experience the vast expanse of desert landscapes, with their unique ecosystems, dunes, and dramatic sunsets.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/788200/pexels-photo-788200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Waterfalls",
        subtext: "Marvel at the beauty and power of cascading waterfalls, as they carve through rugged terrain and create natural wonders.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Lakes",
        subtext: "Discover the serenity of crystal-clear lakes, surrounded by picturesque scenery and offering opportunities for recreation.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/2438/nature-forest-waves-trees.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Rivers",
        subtext: "Follow the meandering paths of rivers as they flow through diverse landscapes, providing life and sustenance along their banks.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/11183944/pexels-photo-11183944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Canyons",
        subtext: "Witness the grandeur of deep canyons carved by the forces of nature over millions of years, revealing stunning geological formations.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/1574547/pexels-photo-1574547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Fields",
        subtext: "Enjoy the simplicity and beauty of vast fields, adorned with colorful flowers, crops, or grasslands stretching to the horizon.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/16373205/pexels-photo-16373205/free-photo-of-anchored-yacht-with-waterfront-apartments-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Coastlines",
        subtext: "Experience the dynamic intersection of land and sea along coastlines, with rocky cliffs, sandy beaches, and hidden coves.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/4784433/pexels-photo-4784433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Tropical Islands",
        subtext: "Escape to tropical paradises with palm-fringed beaches, turquoise waters, and lush vegetation teeming with exotic wildlife.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/2341830/pexels-photo-2341830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Urban Landscapes",
        subtext: "Explore the dynamic and ever-changing landscapes of cities, with their skyscrapers, bustling streets, and cultural landmarks.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/461769/pexels-photo-461769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Tundra",
        subtext: "Discover the stark beauty of the tundra, with its treeless landscapes, permafrost, and unique adaptations of flora and fauna.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Volcanoes",
        subtext: "Experience the raw power and geological significance of volcanoes, with their towering peaks, lava flows, and volcanic landscapes.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/6825795/pexels-photo-6825795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Landscape",
        video: "http://vjs.zencdn.net/v/oceans.mp4",
        title: "Glaciers",
        subtext: "Marvel at the icy wonders of glaciers, as they carve through mountains, shape landscapes, and contribute to global climate systems.",
        btnText: "Learn More",
        btnLink: "#"
    },
];
let galleryLayout = "vertical"; //vertical, horizontal
let galleryType = "image"; //image, video
let scrollbarThickness = "5";
let scrollbarThumbColor = "#A5DD9B";
let scrollbarTrackColor = "#DDE6ED";
let scrollbarRadius = "20";
let numCols = "col-3";

let widget_id = Math.random().toString(36).substr(2, 9); //`id-${$(element).attr("id")}`;

let sources = {
    youtube: 'https://youtube.com/embed/',
    vimeo: 'https://player.vimeo.com/video/',
    dailymotion: 'https://www.dailymotion.com/embed/video/'
};

let defaultVideo = {
    videoUrl: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
    poster: "https://irt-cdn.multiscreensite.com/md/pexels/dms3rep/multi/free-video-1526909.v2.0000000.jpg",
    type: "cdn"
}

init();
function init() {
    dmAPI.runOnReady('init', function () { 
        setTimeout(preloader(), 2000);
    
        if(galleryLayout === "vertical") {
            let output = `<div class="vertical-wrapper ${numCols}"></div>`;
            $(".gallery-main-wrapper").html(output);
        }else {
            let output = `<div class="horizontal-wrapper ${numCols}"></div>`;
            $(".gallery-main-wrapper").html(output);
        }
    
        dmAPI.loadScript("https://unpkg.com/scroll-out/dist/scroll-out.min.js",function() {
            galleryStructure();
            mountVideo();
            
            document.querySelector(':root').style.setProperty('--scrollbar-thickness', `${scrollbarThickness}px`);
            document.querySelector(':root').style.setProperty('--scrollbar-thumb-Color', scrollbarThumbColor);
            document.querySelector(':root').style.setProperty('--scrollbar-track-Color', scrollbarTrackColor);
            document.querySelector(':root').style.setProperty('--scrollbar-radius', `${scrollbarRadius}px`);
            
            $(".horizontal-wrapper").addClass(widget_id);
            
            if( galleryLayout === "vertical" ) {
                ScrollOut({ 
                    threshhold: 0.5, 
                    cssProps: { 
                        visibleY: true 
                    } 
                });
            }else {
                ScrollOut({
                    scrollingElement: $(".horizontal-wrapper"),
                    targets: $(".gallery-col"),
                    cssProps: { 
                        visibleX: true 
                    },
                    threshold: 0
                });
                
                // EVENTS
                let scrollContainer = document.querySelector(`.${widget_id}`);
                let isDown = false;
                let startX;
                let scrollLeft;
                
                setItemStatus();
                
                scrollContainer.addEventListener("scroll", (e) => {
                    setItemStatus();
                });
            
                scrollContainer.addEventListener("wheel", (e) => {
                    e.preventDefault();
                    scrollContainer.scrollLeft += e.deltaY;
                    
                    setItemStatus();
                });
                
                scrollContainer.addEventListener('mousedown', (e) => {
                    isDown = true;
                    scrollContainer.classList.add('active');
                    startX = e.pageX - scrollContainer.offsetLeft;
                    scrollLeft = scrollContainer.scrollLeft;
                    
                    setItemStatus();
                });
                
                scrollContainer.addEventListener('mouseleave', () => {
                    isDown = false;
                    scrollContainer.classList.remove('active');
                    
                    setItemStatus();
                });
                
                scrollContainer.addEventListener('mouseup', () => {
                    isDown = false;
                    scrollContainer.classList.remove('active');
                    
                    setItemStatus();
                });
                
                scrollContainer.addEventListener('mousemove', (e) => {
                    if(!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - scrollContainer.offsetLeft;
                    const walk = (x - startX) * 3; //scroll-fast
                    scrollContainer.scrollLeft = scrollLeft - walk;
                    console.log(walk);
                    
                    setItemStatus();
                }); 
            }
        });
    });
}

$(".selectLayout, .selectMediaType").change(function() {
    galleryLayout = !!$(".selectLayout").val() ? $(".selectLayout").val() : 'vertical';
    galleryType = !!$(".selectMediaType").val() ? $(".selectMediaType").val() : 'image';
    init();
});

function preloader() {
    $('div.widget-Loader-Container').fadeOut().remove();
    $('div.gallery-main-wrapper').fadeIn();
}

function setItemStatus() {
    Array.from(document.querySelectorAll('.horizontal-wrapper div[data-scroll]')).map(function(el) {
        let visibleX = $(el).css("--visible-x");
        
        parseFloat(visibleX) > 0 ? $(el).attr("data-status", "in") : $(el).attr("data-status", "out");
    });
}

function galleryStructure() {
    let output = "";
    
    galleryList.map(function(i, id) {
        let buttonLink = typeof i.btnLink == "object" ? i.btnLink.href : i.btnLink;
        let conditions = ["http://", "https://", "mailto:", "tel:"];
        let itemLink = conditions.some(el => !!buttonLink && buttonLink.includes(el)) ? buttonLink : !!window.location.href && window.location.href.includes("123") ? `/site/${"123"}${buttonLink}?preview=true&insitepreview=true&dm_device=${"desktop"}` : buttonLink;

        if(galleryType === "image") {
            output += `
            <div class="gallery-col" data-scroll>
                <div class="image-wrapper" style="background-image: url(${i.image});">
                    <div class="content-container">
                        <h3>${i.title}</h3>
                        <p>${i.subtext}</p>
                        <a class="btnLink" href="${itemLink}">
                            <span class="text">${i.btnText}</div>
                        </a>
                    </div>
                </div>
            </div>
            ` 
        }else {
            output += `
            <div class="gallery-col" data-scroll>
                <div class="video-wrapper" >
                    <div class="wb-innerVideo video-${id}"></div>
                </div>
            </div>
            `;
        }
    });
    
    galleryLayout === "vertical" ? $(".vertical-wrapper").html(output) : $(".horizontal-wrapper").html(output);
}

function mountVideo() {
    galleryList.map(function(i, id) {
        if(galleryType === "video") {
            console.log(i.video);
            let video = typeof i.video === "object" && !!i.video ? i.video : defaultVideo;
            let type = video.type;
            let url = new URL(video.videoUrl);
            
            if (type === 'cdn') {
                return cdnVideo(url, id);
            }
            
            hostedVideo(url, type, id);
        }
    });
}

function buildFrame (src) {
    var iframe = document.createElement('iframe');
    iframe.frameBorder = 0;
    iframe.allowFullScreen = true;
    iframe.src = src
    return iframe;
}

function hostedVideo (url, type, videoID) {
    let container = document.querySelector(`.wb-innerVideo.video-${videoID}`);
    var domain = sources[type];
    if (!domain) return console.error('Unknown video source.');
    
    var id = url.pathname.split('/').pop();
    var src = domain + id;
    var iframe = buildFrame(src);
    container.appendChild(iframe);
}

function cdnVideo (url, videoID) {
    let container = document.querySelector(`.wb-innerVideo.video-${videoID}`);
    var video = document.createElement('video');
    video.src = url;
    video.controls = true;
    container.appendChild(video);
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