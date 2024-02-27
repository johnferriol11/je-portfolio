let videoGalleryList = [
    {
        vgImage: "https://randompicturegenerator.com/img/people-generator/g905a0b8ac8ec8254c7f2b337a5bb71cd98b26da516d3e36bd28ce7f8ddeed62c3739afc742587a61e7678b22e75906a7_640.jpg",
        vgTitle: "Son of a Gun",
        vgCategory: "Thriller",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randompicturegenerator.com/img/people-generator/g905a0b8ac8ec8254c7f2b337a5bb71cd98b26da516d3e36bd28ce7f8ddeed62c3739afc742587a61e7678b22e75906a7_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
    },
    {
        vgImage: "https://randompicturegenerator.com/img/lion-generator/g29567af594ef8c1964df1e9a69e9c31b64cd44056898f0140fb49e56f979c0a702c87f98b3f3ee2239609d733505c397_640.jpg",
        vgTitle: "Wild Goose Chase",
        vgCategory: "Adventure",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randompicturegenerator.com/img/lion-generator/g29567af594ef8c1964df1e9a69e9c31b64cd44056898f0140fb49e56f979c0a702c87f98b3f3ee2239609d733505c397_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
    },
    {
        vgImage: "https://randompicturegenerator.com/img/national-park-generator/g709061b49d4f0df7033480c9da3e3825b0ebdc7eeaa3a31901353e84e9b87685a3964173f199fdcadf818e45abe321b4_640.jpg",
        vgTitle: "Greased Lightning",
        vgCategory: "Thriller",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randompicturegenerator.com/img/national-park-generator/g709061b49d4f0df7033480c9da3e3825b0ebdc7eeaa3a31901353e84e9b87685a3964173f199fdcadf818e45abe321b4_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
    },
    {
        vgImage: "https://randompicturegenerator.com/img/love-generator/g5c81fd5830bb742a3cec9563d7a031fcd82862b809766394c1306e4caa9238c89e029a61681f24b0ba40844a36f82251_640.jpg",
        vgTitle: "Virgin Territory",
        vgCategory: "Romance",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randompicturegenerator.com/img/love-generator/g5c81fd5830bb742a3cec9563d7a031fcd82862b809766394c1306e4caa9238c89e029a61681f24b0ba40844a36f82251_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
    },
    {
        vgImage: "https://randompicturegenerator.com/img/love-generator/gbb707fe12b5895979870625065cdc4c65bf67cff1b76b2ecc4bb9b4949daad37c588ba8ee3a196a5fd90204650d81477_640.jpg",
        vgTitle: "Cut The Mustard",
        vgCategory: "Romance",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randompicturegenerator.com/img/love-generator/gbb707fe12b5895979870625065cdc4c65bf67cff1b76b2ecc4bb9b4949daad37c588ba8ee3a196a5fd90204650d81477_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
    },
    {
        vgImage: "https://randomwordgenerator.com/img/picture-generator/54e1dd47434faa0df7c5d57bc32f3e7b1d3ac3e45659764c7c2672dd92_640.jpg",
        vgTitle: "Flaming Creatures",
        vgCategory: "Drama",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randomwordgenerator.com/img/picture-generator/54e1dd47434faa0df7c5d57bc32f3e7b1d3ac3e45659764c7c2672dd92_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
    },
    {
        vgImage: "https://randomwordgenerator.com/img/picture-generator/57e1dc454b56a914f1dc8460962e33791c3ad6e04e50744172287ad1934ac0_640.jpg",
        vgTitle: "Burst Your Bubble",
        vgCategory: "Drama",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randomwordgenerator.com/img/picture-generator/57e1dc454b56a914f1dc8460962e33791c3ad6e04e50744172287ad1934ac0_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
    },
    {
        vgImage: "https://randomwordgenerator.com/img/picture-generator/55e1d74b4853af14f1dc8460962e33791c3ad6e04e507440712b7bd29744c3_640.jpg",
        vgTitle: "Goody Two-Shoes",
        vgCategory: "Adventure",
        vgLink: "https://www.youtube.com/",
        thumbnail: "https://randomwordgenerator.com/img/picture-generator/55e1d74b4853af14f1dc8460962e33791c3ad6e04e507440712b7bd29744c3_640.jpg",
        vidSource: "https://www.html5rocks.com/en/tutorials/video/basics/devstories.mp4"
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
