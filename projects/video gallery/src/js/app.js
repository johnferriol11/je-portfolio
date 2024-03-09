let videoGalleryList = [
    {
        vgImage: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "Introduction to Machine Learning",
        vgCategory: "Technology",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    },
    {
        vgImage: "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "Cooking Masterclass: Italian Cuisine",
        vgCategory: "Cooking",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    },
    {
        vgImage: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "Yoga for Beginners",
        vgCategory: "Health & Fitness",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    },
    {
        vgImage: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "Financial Planning 101",
        vgCategory: "Finance",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    },
    {
        vgImage: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "Travel Vlog: Exploring Japan",
        vgCategory: "Travel",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    },
    {
        vgImage: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "Guitar Tutorial: Learn Basic Chords",
        vgCategory: "Music",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    },
    {
        vgImage: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "DIY Home Décor Ideas",
        vgCategory: "Home & Garden",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    },
    {
        vgImage: "https://images.pexels.com/photos/828380/pexels-photo-828380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vgTitle: "Photography Tips for Beginners",
        vgCategory: "Photography",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://images.pexels.com/photos/828380/pexels-photo-828380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        vidSource: "http://vjs.zencdn.net/v/oceans.mp4"
    }
];

let linkType = "popup"; //page
let controls = true ? "controls" : "";
let autoplay = true ? "autoplay" : "";
let download = true ? "download" : "nodownload";
let list;
let filter = "";

if(linkType == "popup") {
    $('.videoGallery-Wrapper').on("click", ".videoGallery-Content", function (e) {
        let itemID = $(this).data("id");
        createPopup(list, itemID);
    });   
    
    $('.videoGallery-PopupContainer').on("click", ".videoGallery-Popup>.close", function (e) {
        $(".videoGallery-Popup").remove();
        $(".videoGallery-PopupContainer").css("display","none");
    }); 
}

function refinedDB() {
    return videoGalleryList.map(function (i, index) {
        return {
            'id': index,
            'image': i.vgImage,
            'title': i.vgTitle,
            'category': i.vgCategory,
            'pageLink': i.vgLink,
            'thumbnail': i.thumbnail,
            'vidSource': i.vidSource
        } 
    });
}

initializedData();

function initializedData(){
    list = refinedDB();
    
    sortArray(removeDuplicates(list, "category"), "category").map(function(i) {
        filter += `
            <span class="filterCategory" data-category="${i.category.toLowerCase()}">${i.category}</span>
        `;
    });
    
    if(filter != "") {
        $(".videoGallery-Filter").append(`
            <span class="filterCategory all active" data-category="">ALL</span>
            ${filter}
        `); 
        
        $(".filterCategory").click(function() {
            $(".filterCategory").removeClass("active");
            $(this).addClass("active");
            let category = $(this).data("category");
            console.log(category);
            
            $(".videoGallery-Content").remove();
            createDOM(singleFilter(list, category));
        });
    }
    
    createDOM(list);
}

function createDOM(list) {
    let imagesPerRow = "col4";
    let output = "";
    list.map(function(i) {
        output += `
            <div class="videoGallery-Content ${imagesPerRow}" data-id="${i.id}">
                ${linkType != "popup" ? `<a class="link" href="${i.pageLink}"></a>` : ""}
                <div class="videoGallery-Text">
                    <h3 class="title">${i.title}</h3>
                    <h5 class="category">${i.category}</h5>
                </div>
                <div class="videoGallery-Image" style="background-image: url(${i.image});"></div>
            </div>
        `;
    });
    
    $(".videoGallery-Wrapper").append(output);
}

function createPopup(list, id) {
    $(".videoGallery-PopupContainer").css("display","flex");
    let output = "";
    list.map(function(i) {
        if(i.id == id) {
            output += `
                <div class="videoGallery-Popup">
                    <div class="close">X</div>
                    <h3 class="popupTitle">${i.title}</h3>
                    <h5 class="popupCategory">${i.category}</h5>
                    <video id="popup-video" controlsList="${download}" ${controls} ${autoplay} poster="${i.thumbnail}">
                        <source src="${i.vidSource}" type="video/webm">
                        <source src="${i.vidSource}" type="video/mp4">
                        <source src="${i.vidSource}" type="video/ogg">
                    </video>
                </div>
            `;
        }
    });
    
    $(".videoGallery-PopupContainer").append(output);
}

function removeDuplicates(array, key) {
    return array.reduce(function (arr, item) {
        const removed = arr.filter(function (i) {
            return i[key] !== item[key];
        });
        return [...removed, item];
    }, []);
}

function singleFilter(list, category) {
    return list.filter(function (eachObj) {
        let categ = eachObj.category.toLowerCase();
        if(categ.includes(category)) {
            return eachObj;
        }
    });
}

function multiFilter(list, filters) {
    const filterKeys = Object.keys(filters);
    return list.filter(function (eachObj) {
        return filterKeys.every(function (eachKey) {
            if (!filters[eachKey].length) {
                return true;
            }
            if (eachObj[eachKey].includes(filters[eachKey])) {
                return eachObj;
            }
        });
    });
}

function sortArray(list){
    return list.sort((a,b)=>{
        if(a.category.toLowerCase() < b.category.toLowerCase()) { return -1; }
        if(a.category.toLowerCase() > b.category.toLowerCase()) { return 1; }
        return 0; 
    });
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