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
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
    {
        image: "https://images.pexels.com/photos/9638689/pexels-photo-9638689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        altText: "Hot Air Balloon",
        video: "https://irt-cdn.multiscreensite.com/md/pexels/videos/free-video-1526909-v.mp4",
        title: "Title",
        subtext: "This is a text area for titles and paragraphs.",
        btnText: "Learn More",
        btnLink: "#"
    },
];
let galleryLayout = "vertical"; //vertical, horizontal
let galleryType = "image"; //image, video
let scrollbarThickness = "5";
let scrollbarThumbColor = "#febf10";
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
