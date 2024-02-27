let callbackAPI = {
    runOnReady: (functionName, callback) => {
        if (functionName) {
            callback();
        } else {
            console.error("Please Enter Function Name!");
        }
    },
    loadScript: (url, callback) => {
        let fjs = document.getElementsByTagName("script")[0];
        let script = document.createElement("script");
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

let layout = 'card'; //calendar
let showInvolvementType = true;
let showTitle = true;
let showCityRegion = true;
let showFullDate = true;
let showTargetAudience = true;
let showAgeRange = true;
let showLeaders = true;
let showGroupSize = true;
let showTags = true;
let showChildCare = true;

let group = [
    {
        title: 'Wedding Event',
        cityRegion: 'Armidale, NSW',
        fullDate: '10/05/2025',
        nextDate: '10/26/2025, 11/03/2025, 11/10/2025, 11/17/2025, 11/24/2025, 11/31/2025',
        eventDay: 'Monday',
        startTime: '07:00 AM',
        targetAudience: 'Married Couples',
        ageRange: '18-65',
        description: 'This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily. Make sure your titles stand out from the rest of the text.',
        heroImage: 'https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        leaders: 'Sample Leaders',
        addressRoom: 'Main 202',
        video: 'https://www.youtube.com/watch?v=NpEaa2P7qZI',
        groupSize: 'Less than 10',
        tags: 'Marriage',
        campus: 'Sample Campus',
        childcare: 'No',
        inpersonOnline: 'Both',
        languages: 'English',
        involvementType: 'Standard Event',
        registrationLink: '/',
        page_item_url: '/'
    },
    {
        title: 'Birthday Event',
        cityRegion: 'Tennant Creek, NT',
        fullDate: '10/05/2025',
        nextDate: '10/26/2025, 11/03/2025, 11/10/2025, 11/17/2025, 11/24/2025, 11/31/2025',
        eventDay: 'Monday',
        startTime: '07:00 AM',
        targetAudience: 'Family',
        ageRange: '18-65',
        description: 'This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily. Make sure your titles stand out from the rest of the text.',
        heroImage: 'https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        leaders: 'Sample Leaders',
        addressRoom: 'Main 202',
        video: 'https://www.youtube.com/watch?v=NpEaa2P7qZI',
        groupSize: 'Less than 10',
        tags: 'Party',
        campus: 'Sample Campus',
        childcare: 'No',
        inpersonOnline: 'Both',
        languages: 'English',
        involvementType: 'Standard Event',
        registrationLink: '/',
        page_item_url: '/'
    },
    {
        title: 'Concert Event',
        cityRegion: 'Loxton, SA',
        fullDate: '10/05/2025',
        nextDate: '10/26/2025, 11/03/2025, 11/10/2025, 11/17/2025, 11/24/2025, 11/31/2025',
        eventDay: 'Monday',
        startTime: '07:00 AM',
        targetAudience: 'Artist',
        ageRange: '18-65',
        description: 'This is a text area for titles and paragraphs. Writing in paragraphs lets your visitor find what they are looking for quickly and easily. Make sure your titles stand out from the rest of the text.',
        heroImage: 'https://images.pexels.com/photos/382297/pexels-photo-382297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        leaders: 'Sample Leaders',
        addressRoom: 'Main 202',
        video: 'https://www.youtube.com/watch?v=NpEaa2P7qZI',
        groupSize: 'Less than 10',
        tags: 'Party',
        campus: 'Sample Campus',
        childcare: 'No',
        inpersonOnline: 'Both',
        languages: 'English',
        involvementType: 'Standard Event',
        registrationLink: '/',
        page_item_url: '/'
    }
];
let defautlFilter = 'standard event'; //small group
let filterTargetAudience = '';
let filterCampus = '';
let filterTags = '';

let gradient1 = '#f7971e';
let gradient2 = '#ffd200';
let favicon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIHJIDMF7f_O8wo1GdqX9ABtUqKgeueN-qRg&usqp=CAU';
let dateList = ["January", "February","March","April","May","June","July","August","September","October","November","December"]
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

let groupList = group.map(function(i){
    let buttonLink = typeof i.page_item_url == "object" ? i.page_item_url.href : i.page_item_url;
    // let conditions = ["http://", "https://", "mailto:", "tel:"];
    // let itemLink = conditions.some(el => !!buttonLink && buttonLink.includes(el)) ? buttonLink : !!window.location.href && window.location.href.includes(data.siteId) ? `/site/${data.siteId}${!!buttonLink ? buttonLink : ""}?preview=true&insitepreview=true&dm_device=${data.device}` : buttonLink;
    
    return {
        'title': !!i.title ? i.title : 'n/a',
        'cityRegion': !!i.cityRegion ? i.cityRegion : 'n/a',
        'fullDate': !!i.fullDate ? i.fullDate : 'n/a',
        'nextDate': !!i.nextDate ? i.nextDate : 'n/a',
        'eventDay': !!i.eventDay ? i.eventDay : 'n/a',
        'startTime': !!i.startTime ? i.startTime : 'n/a',
        'targetAudience': !!i.targetAudience ? i.targetAudience : 'n/a',
        'ageRange': !!i.ageRange ? i.ageRange : 'n/a',
        'description': !!i.description ? i.description : 'n/a',
        'heroImage': !!i.heroImage ? i.heroImage : 'n/a',
        'leaders': !!i.leaders ? i.leaders : 'n/a',
        'addressRoom': !!i.addressRoom ? i.addressRoom : 'n/a',
        'video': !!i.video ? i.video : 'n/a',
        'groupSize': !!i.groupSize ? i.groupSize : 'n/a',
        'tags': !!i.tags ? i.tags.replaceAll(" ", "") : 'n/a',
        'campus': !!i.campus ? i.campus : 'n/a',
        'childcare': !!i.childcare ? i.childcare : 'n/a',
        'inpersonOnline': !!i.inpersonOnline ? i.inpersonOnline : 'n/a',
        'languages': !!i.languages ? i.languages : 'n/a',
        'involvementType': !!i.involvementType ? i.involvementType : 'n/a',
        'registrationLink': !!i.involvementType ? i.registrationLink : 'n/a',
        'itemLink': buttonLink
    }
});

let defaultFilterObj = {
    involvementType: !!defautlFilter ? defautlFilter : '',
    targetAudience: !!filterTargetAudience ? filterTargetAudience : '',
    campus: !!filterCampus ? filterCampus : '',
    tags: !!filterTags ? filterTags : ''
}

let filteredList = multiFilter(groupList, defaultFilterObj);

callbackAPI.runOnReady('groupListing', function(){
    filterStructure();
    cardCalendarStructure();
    getCategory(filteredList);
    
    if(layout == "card") {
        callbackAPI.loadScript('https://irt-cdn.multiscreensite.com/5775367238d847b8b62d126ce25c20de/files/uploaded/mixitup.min.js', function() {
            callbackAPI.loadScript('https://irt-cdn.multiscreensite.com/a4fddbba6e6f4d71b2bb406911fe4018/files/uploaded/mixitup-multifilter.min.js', function() { 
                callbackAPI.loadScript('https://irt-cdn.multiscreensite.com/a4fddbba6e6f4d71b2bb406911fe4018/files/uploaded/mixitup-pagination.min.js', function() { 
                    callbackAPI.loadScript('https://irp-cdn.multiscreensite.com/7c044735/files/uploaded/moment.min.js', function() { 
                        callbackAPI.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.23/moment-timezone.min.js', function() { 
                            //append all group 
                            let listSortByDate = sortArray(filteredList);
                            console.log(listSortByDate);
                            
                            $('.container .contents-box').html(createBox(listSortByDate));
                            
                            const mixer = mixitup(".container", {
                                multifilter: {
                                    enable: true,
                                    // parseOn: 'submit',
                                },
                                animation: {
                                    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
                                    animateResizeContainer: false
                                },
                                callbacks: {
                                    onMixStart: function(state, futureState) {
                                        // mixer.sort('published-date:asc');
                                        $(".reset-btn").click(function() {
                                            mixer.filter('.mix');
                                        });
                                    }
                                },
                                pagination: {
                                    limit: 6,
                                    maintainActivePage: false,
                                    loop: true,
                                    hidePageListIfSinglePage: true
                                },
                                controls: {
                                    live: true,
                                    toggleDefault: 'all'
                                }
                            });
                            
                            defautlFilter.toLowerCase() == "standard event" ? mixer.sort('published-date:asc') : mixer.sort('days:asc');
                            // mixer.sort('published-date:asc');
                            // mixer.sort('published-date:desc');
                            
                            let inputText;
                            let $matching = $();
                            
                            // Delay function
                            let delay = (function(){
                                let timer = 0;
                                return function(callback, ms){
                                    clearTimeout (timer);
                                    timer = setTimeout(callback, ms);
                                };
                            })();
                            
                            //ONCLICK SEARCH
                            $("#searchBar").keyup(function(){
                                delay(function(){
                                    inputText = !!$("#searchBar").val() ? $("#searchBar").val().toLowerCase() : '';
                                    
                                    if((inputText.length) > 0) {
                                        $('.mix').each(function() {
                                            if( $(this).find('.tags').text().toLowerCase().match(inputText) || $(this).find('.cbTitle').text().toLowerCase().match(inputText) || $(this).find('.cbLocation').text().toLowerCase().match(inputText) || $(this).find('.targetAud').text().toLowerCase().match(inputText) || $(this).find('.description').text().toLowerCase().match(inputText) || $(this).find('.campus').text().toLowerCase().match(inputText) || $(this).find('.leaders').text().toLowerCase().match(inputText)   ) {
                                                $matching = $matching.add(this);
                                            }
                                            else {
                                                $matching = $matching.not(this);
                                            }
                                        });
            
                                        mixer.filter($matching);
                                    } else {
                                        mixer.filter("all");
                                    }
                                }, 200);
                            });
                        });
                    });
                });
            });
        });
    }else {
        callbackAPI.loadScript('https://irp-cdn.multiscreensite.com/7c044735/files/uploaded/moment.min.js',function(){
            callbackAPI.loadScript('https://cdn.jsdelivr.net/npm/fullcalendar@5.1.0/main.js',function(){
                callbackAPI.loadScript('https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.23/moment-timezone.min.js',function(){
                    filterCalendarData();
                    
                    $('.selectTtitle, .selectChildcare, .filterCat input[type="checkbox"]').change(function() {
                        filterCalendarData();
                    });
                    
                    $(".reset-btn").click(function() {
                        $('.selectTtitle').val(''); 
                        $('.filterCat input[type="checkbox"]').prop('checked', false); 
                        filterCalendarData();
                    });
                    
                    $('.calCloseButton').click(function(){
                        $('.appendhere').removeClass('modalShow').addClass("modalHide");	
                    });
                });
            });    
        });
    }
});

//category accordion
$(".catName").click(function() {
    $(this).next( "fieldset" ).slideToggle();
    $(this).find('i').toggleClass('fa-plus');
    $(this).find('i').toggleClass('fa-minus');
    $(this).toggleClass('active-cat');
});

//show hide filters
$(".showfiltercon span" ).click(function() {
    $(".morefilters" ).slideToggle(500);
    $(this).text($(this).text() == 'Show Filters' ? 'Hide Filters' : 'Show Filters');
});

function filterStructure() {
    let output = `
    ${layout == 'card' ?
        `<div class="searchbar-con">
            <div class="filterSearch">
                <fieldset data-filter-group class="searchBar">
                    <input id="searchBar" type="text" data-search-attribute="class" placeholder="Search by keywords..."/>
                </fieldset>
            </div>
            <div class="btn-container" style="display: none">
                <button class="btn-con-link btn-search" type="submit" disabled>
                    <span class="link text">Search</span>
                </button>
            </div>
        </div>` : ''
    }
    
    <div class="showfiltercon"><span>Show Filters</span></div>
    <div class="morefilters">
        <div class="filterCon">
            
            ${showTitle ?
                `<div class="filterCat2">
                    <fieldset data-filter-group class="dropdownSel">
                        <select class="selectTtitle">
                            <option class="title-filter" value="">Title</option>
                        </select>
                    </fieldset>
                </div>` : ''
            }

            ${showCityRegion ?
                `<div class="filterCat">
                    <div class="catName">
                        <p>City/Region</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <fieldset data-filter-group class="cityRegion-filter multiple"></fieldset>
                </div>` : ''
            }    
            
            ${showTargetAudience ?
                `<div class="filterCat">
                    <div class="catName">
                        <p>Target Audience</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <fieldset data-filter-group class="targetAudience-filter multiple"></fieldset>
                </div>` : ''
            }
            
            ${showAgeRange ?
                `<div class="filterCat">
                    <div class="catName">
                        <p>Age Range</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <fieldset data-filter-group class="ageRange-filter multiple">
                    </fieldset>
                </div>` : ''
            }
            
            ${showLeaders ?
                `<div class="filterCat">
                    <div class="catName">
                        <p>Leaders</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <fieldset data-filter-group class="leaders-filter multiple">
                    </fieldset>
                </div>` : ''
            }
            
            ${showGroupSize ?
                `<div class="filterCat">
                    <div class="catName">
                        <p>Group Size</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <fieldset data-filter-group class="groupSize-filter multiple">
                    </fieldset>
                </div>` : ''
            }
            
            ${showTags ?
                `<div class="filterCat">
                    <div class="catName">
                        <p>Tags</p>
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <fieldset data-filter-group class="tags-filter multiple">
                    </fieldset>
                </div>` : ''
            }

            ${showChildCare ?
                `<div class="filterCat2">
                    <fieldset data-filter-group class="dropdownSel">
                        <select class="selectChildcare">
                            <option class="childcare-filter" value="">Child Care</option>
                            <option class="" value=".a-yes">Yes</option>
                            <option class="" value=".a-no">No</option>
                        </select>
                    </fieldset>
                </div>` : ''
            }
            
        </div>
        
        <div class="btn-container">
            <button class="btn-con-link reset-btn" type="reset">
                <span class="link">Clear Filters</span>
            </button>
        </div>
    </div>
    `;

    $(".filters-container").html(output);
}

function cardCalendarStructure() {
    let output = `
    ${layout == 'card' ?
        `<div class="container">
            <div class="contents-box"></div>
            <div class="pagination-container">
                <div class="mixitup-page-list"></div>
                <div class="mixitup-page-stats"></div>
            </div>
        </div>`
        :
        `<div class="appendhere modalHide">
            <i class="fa fa-times calCloseButton fa-size" style="color:#fff"></i>
            <div class="eventHeader">
                <h3 class="eventTitle"></h3>
                <p class="cwEventDate"></p>
            </div>
            <div class="eventContent">
                <div class="eventImage"></div>
                <p class="eventDescription"></p>
            </div>
            <div class="eventLink"></div>
        </div>
        
        <div id="calendarWidget"></div>`
    }`;

    $(".productMain").find(".container").remove();
    $(".productMain").find("#calendarWidget").remove();
    $(".productMain").append(output);
}

function filterCalendarData() {
    let selectTitle = $('.selectTtitle').val();
    let selectChildcare = $('.selectChildcare').val();
    
    let filters = {
        involvementType: "standard event",
        title: selectTitle.replace(".a-", "").replaceAll("-", " "),
        cityRegion: getCheckboxSelectedValue("cityRegion"),
        fullDate: getCheckboxSelectedValue("fullDate"),
        targetAudience: getCheckboxSelectedValue("targetAudience"),
        ageRange: getCheckboxSelectedValue("ageRange"),
        leaders: getCheckboxSelectedValue("leaders"),
        groupSize: getCheckboxSelectedValue("groupSize"),
        tags: getCheckboxSelectedValue("tags"),
        childcare: selectChildcare.replace(".a-", "").replaceAll("-", " ")
    };
    
    let calendarData = multiFilter(filteredList, filters);
    
    createCalendar(calendarData);
}

function getMonth(date){
    let getMonth = date.split("/");
    let m = getMonth[0];
    let ms = "";
    
    switch(m) {
        case "1":
        case "01":
            ms = "January";
        break;
        case "2":
        case "02":
            ms = "February";
        break;
        case "3":
        case "03":
            ms = "March";
        break;
        case "4":
        case "04":
            ms = "April";
        break;
        case "5":
        case "05":
            ms = "May";
        break;
        case "6":
        case "06":
            ms = "June";
        break;
        case "7":
        case "07":
            ms = "July";
        break;
        case "8":
        case "08":
            ms = "August";
        break;
        case "9":
        case "09":
            ms = "September";
        break;
        case "10":
            ms = "October";
        break;
        case "11":
            ms = "November";
        break;
        case "12":
            ms = "December";
        break;
        default:
    }
    return ms;
}

function getCheckboxSelectedValue(classname) {
    let selected = [];
    
    $(`.${classname}-filter input[type="checkbox"]:checked`).each(function() {
        selected.push($(this).attr('name'));
    });
    
    return selected.join(",");
}

function multiFilter(list, filters) { 
    const filterKeys = Object.keys(filters); 
    return list.filter(function (eachObj) { 
        return filterKeys.every(function (eachKey) { 
            if (!filters[eachKey].length) { 
                return true; // passing an empty filter means that filter is ignored. 
            } 
            
            let filterValue = filters[eachKey].toLowerCase();
            let objectKeyValue = eachObj[eachKey].toLowerCase();

            if(eachKey != 'tags' && eachKey != 'leaders') {
                if (objectKeyValue.includes(filterValue)) { 
                    return eachObj; 
                } 
            }else {
                let filterArray = filterValue.replaceAll(" ", "").split(",");
                return filterArray.some(filter => objectKeyValue.replaceAll(" ", "").includes(filter.toLowerCase()));
            }
        }); 
    }); 
}

function getCardEventData(data) {
    return {
        fullDate: data.fullDate,
        involvementType: data.involvementType,
        title: data.title,
        cityRegion: data.cityRegion,
        eventDay: data.eventDay,
        startTime: data.startTime,
        targetAudience: data.targetAudience,
        ageRange: data.ageRange,
        description: data.description,
        leaders: data.leaders,
        groupSize: data.groupSize,
        tags: data.tags,
        campus: data.campus,
        childcare: data.childcare,
        inpersonOnline: data.inpersonOnline,
        languages: data.languages,
        heroImage: data.heroImage,
        itemLink: data.itemLink
    }
}

function getCalendarEventData(data, daysIndex) {
    return {
        title: data.title,
        start: isNaN(new Date(data.fullDate)) ? '' : new Date(data.fullDate),
        end: isNaN(new Date(data.fullDate)) ? '' : new Date(data.fullDate),
        daysOfWeek: [daysIndex],
        extendedProps: {
            heroImage: data.heroImage,
            description: data.description,
            itemLink: data.itemLink,
            startTime: data.startTime
        }
    }
}

function createCalendar(calendarData){
    let events = [];
    let data = !!calendarData ? calendarData : filteredList; 
    
    data.map(function(i) {
        let daysIndex = !!i.eventDay ? days.indexOf(`${i.eventDay.toLowerCase()}`) : '';
        let eventData = getCalendarEventData(i, daysIndex);
        
        //NO DATA VALUE FOR "DATE" and "NEXT DATE" FIELD
        if(i.fullDate == 'n/a' && i.nextDate == 'n/a') {
            console.log("no date & next date");
            
            events.push(eventData);
        }
        
        //WITH DATA VALUE FOR "DATE" and "NEXT DATE" FIELD
        if(i.fullDate != 'n/a' && i.nextDate != 'n/a') {
            console.log("date & next date");
            
            let nextDateArray = i.nextDate.split(",");
            
            delete eventData.daysOfWeek;
            events.push(eventData);
            
            nextDateArray.map(function(nextDate) {
                let tempEventData = {...eventData};
                tempEventData.start = new Date(nextDate);
                tempEventData.end = new Date(nextDate);
                
                events.push(tempEventData);
            });
        }
        
        //ONLY "DATE" FIELD WITH VALUE
        if(i.fullDate != 'n/a' && i.nextDate == 'n/a') {
            console.log("only date");
            
            delete eventData.daysOfWeek;
            events.push(eventData);
        }
    });
    
    console.log(events, "events");

    let calendarEl = document.getElementById('calendarWidget');
    let calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: { 
            left: 'dayGridMonth,dayGridWeek,listWeek',
            center: 'title',
            right: 'prev,next,today',
        },
        initialView: 'dayGridMonth',
        displayEventTime: false,
        eventOrder : 'startTime',
        events: function(info, successCallback, failureCallback) {
            successCallback(events);
        },
        eventClick: function(info) {
            $('.appendhere').addClass('modalShow').removeClass('modalHide');
            
            $('.eventTitle').text(info.event.title);
            $('.cwEventDate').text(`${moment(info.event.start).format("MMMM D")} | ${info.event.extendedProps.startTime}`);
            if(!!info.event.extendedProps.heroImage){
                $('.eventImage').show();
                $('.eventImage').html(`<img src='${info.event.extendedProps.heroImage}'>`);
            }else{
                $('.eventImage').hide();
            }
            $('.eventDescription').html(info.event.extendedProps.description);
            $('.eventLink').html(`<a href='${info.event.extendedProps.itemLink}'>Learn More</a>`);
        }
    });
    
    calendar.render();
}

//CREATE CARD LAYOUT
function createBox(data){
    let output = "";
    
    data.map(function(i) {
        let validDate;
        
        if(defautlFilter.toLowerCase() == "standard event") {
            //CHECK DATE IF EXPIRED IT WILL GET DATE TO NEXT DATE FIELD WITH THE CLOSEST TO THE CURRENT DATE
            if(isDateExpired(i.fullDate)) {
                let nextDateArray = !!i.nextDate ? i.nextDate.split(",") : [];
                let nextEvent = getClosestNextDate(nextDateArray);
                
                validDate = !!nextEvent ? nextEvent.trim() : '';
            }else {
                validDate = !!i.fullDate ? i.fullDate.trim() : '';
            }
        }else {
            validDate = i.eventDay;
        }
        
        if(!!validDate && validDate != "n/a") {
            output += `<div data-published-date="${!isNaN(new Date(validDate)) ? formattedDate(validDate) : ''}" data-days="${!!i.eventDay ? days.indexOf(i.eventDay.toLowerCase()) : ''}" class="res-box mix a-${replaceDash2(i.involvementType).toLowerCase()} a-${replaceDash2(i.title).toLowerCase()} a-${splitext(replaceDash(i.cityRegion).toLowerCase())} a-${getMonth(validDate)} a-${replaceDash2(validDate).toLowerCase()} a-${replaceDash2(i.eventDay).toLowerCase()} a-${replaceDash2(i.startTime).toLowerCase()} a-${replaceDash2(i.targetAudience).toLowerCase()} a-${replaceDash2(i.ageRange).toLowerCase()} a-${replaceDash2(i.description).toLowerCase()} a-${splitext(replaceDash(i.leaders)).toLowerCase()} a-${replaceDash2(i.groupSize).toLowerCase()} a-${splitext(replaceDash(i.tags)).toLowerCase()} a-${replaceDash2(i.campus).toLowerCase()} a-${replaceDash2(i.childcare).toLowerCase()} a-${replaceDash2(i.inpersonOnline).toLowerCase()} a-${replaceDash2(i.languages).toLowerCase()}">
                <div class="churchBox">
                    <div class="cbImgcon" style="background-image: url(${i.heroImage}">
                        <div class="cbgroupage ${i.targetAudience === "n/a" && i.ageRange === "n/a"  ? "hideEl" : "" }"">
                            <span class="${i.targetAudience === "n/a" ? "hideEl" : "" }">${i.targetAudience}</span> <span class="${i.ageRange === "n/a" ? "hideEl" : ""} ${i.targetAudience === "n/a" ? "hideEl" : "" }">:&nbsp; </span> <span class="${i.ageRange === "n/a" ? "hideEl" : ""}">${i.ageRange}</span>
                        </div>
                    </div>
                    <div class="cbcontentWrapper">
                        <div class="cbTitle">${i.title}</div>
                        <div class="tags" style="display: none">${i.tags}</div>
                        <div class="description" style="display: none">${i.description}</div>
                        <div class="campus" style="display: none">${i.campus}</div>
                        <div class="leaders" style="display: none">${i.leaders}</div>
                        <div class="cbLocation">${i.cityRegion}</div>
                        <div style="height: 4px; background-image: linear-gradient(to right,${gradient1} , ${gradient2});"></div>
                        <div class="divider-dashes-container">
                            <div class="transparent-divider-1"></div>
                            <div class="dash"></div>
                            <div class="transparent-divider-2"></div>
                            <div class="dash"></div>
                            <div class="transparent-divider-3"></div>
                            <div class="dash"></div>
                            <div class="transparent-divider-4"></div>
                        </div>
                        
                        ${(!!i.involvementType ? i.involvementType.toLowerCase() : "standard event") == "standard event" ?
                        
                            `<div class="cbWhen">
                                <span>${moment(validDate).format("MMMM D")} • ${i.startTime}</span>
                            </div>` 
                            
                            :
                            
                            `<div class="cbWhen">
                                <span>${!isNaN(validDate) ? moment(validDate).format("dddd") : i.eventDay}s • ${i.startTime}</span>
                            </div>`
                        
                        }
                        <div class="cbBtnFav">
                            <div class="cbBtncon">
                                <a href="${i.itemLink}">
                                    <div class="button-class">
                                        <span class="link text">Read More</span>
                                    </div>
                                </a>
                            </div>
                            <div class="cbFav" style="background-image: url(${favicon})"></div>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    });
    
    return output;
}

function isDateExpired(date) {
    return new Date() > new Date(date) ? true : false;
}

function getClosestNextDate(datesArray) {
    let today = new Date();
    let closestDate = null;
    let minDifference = Infinity;
    
    datesArray.forEach(function(date, index) {
        let currentDate = date;
        let difference = new Date(currentDate).getTime() - today.getTime();
        
        if (difference >= 0 && difference < minDifference) {
            minDifference = difference;
            closestDate = currentDate;
        }
    });
    
    return closestDate;
}

function formattedDate(date) {
    return [new Date(date).getFullYear(), new Date(date).getMonth()+1, new Date(date).getDate()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}

// Get Category
function getCategory(items) {
    let involvelmentCateg = [];
    let titleCateg = [];
    let cityRegionCateg = [];
    let fullDateCateg = [];
    let targetAudienceCateg = [];
    let ageRangeCateg = [];
    let leadersCateg = [];
    let groupSizeCateg = [];
    let tagsCateg = [];

    items.map(function (i) {

        let inType = !!i.involvementType && i.involvementType.toLowerCase();
        involvelmentCateg = involvelmentCateg.concat(inType);
        
        let title = !!i.title && i.title.toLowerCase();
        titleCateg = titleCateg.concat(title);
        
        let cityRegion = !!i.cityRegion && i.cityRegion.toLowerCase();
        cityRegionCateg = cityRegionCateg.concat(cityRegion);
        
        // let fullDate = !!i.fullDate && i.fullDate.toLowerCase();
        // fullDateCateg = fullDateCateg.concat(fullDate);
        
        let targetAudience = !!i.targetAudience && i.targetAudience.toLowerCase();
        targetAudienceCateg = targetAudienceCateg.concat(targetAudience);
        
        let ageRange = !!i.ageRange && i.ageRange.toLowerCase();
        ageRangeCateg = ageRangeCateg.concat(ageRange);
        
        let leaders = !!i.leaders && i.leaders.toLowerCase();
        let leadersArray = leaders.split(',');
        leadersCateg = leadersCateg.concat(leadersArray);
        
        let groupSize = !!i.groupSize && i.groupSize.toLowerCase();
        groupSizeCateg = groupSizeCateg.concat(groupSize);
        
        let tags = !!i.tags && i.tags.toLowerCase();
        let tagsArray = tags.split(',');
        tagsCateg = tagsCateg.concat(tagsArray);
    });

    let unique_involvementCateg = reMapFilters(Array.from(new Set(involvelmentCateg)));
    appendCategoriesDropdown(unique_involvementCateg, 'involvement-filter');
    
    let unique_titleCateg = reMapFilters(Array.from(new Set(titleCateg)));
    appendCategoriesDropdown(unique_titleCateg, 'title-filter');

    let unique_cityRegionCateg = reMapFilters(Array.from(new Set(cityRegionCateg)));
    appendCategories(unique_cityRegionCateg, 'cityRegion-filter');
    
    // unique_fullDateCateg = reMapFilters(Array.from(new Set(fullDateCateg)));
    // appendCategories(unique_fullDateCateg, 'fullDate-filter');
    
    let unique_targetAudienceCateg = reMapFilters(Array.from(new Set(targetAudienceCateg)));
    appendCategories(unique_targetAudienceCateg, 'targetAudience-filter');
    
    let unique_ageRangeCateg = reMapFilters(Array.from(new Set(ageRangeCateg)));
    appendCategories(unique_ageRangeCateg, 'ageRange-filter');
    
    let unique_leadersCateg = reMapFilters(Array.from(new Set(leadersCateg)));
    appendCategories(unique_leadersCateg, 'leaders-filter');
    
    let unique_groupSizeCateg = reMapFilters(Array.from(new Set(groupSizeCateg)));
    appendCategories(unique_groupSizeCateg, 'groupSize-filter');
    
    let unique_tagsCateg = reMapFilters(Array.from(new Set(tagsCateg)));
    appendCategories(unique_tagsCateg, 'tags-filter');

}

// Append Categories
function appendCategories(uniqueData, classname) {
    let output = "";

    removeArrayDuplicates(uniqueData).map(function(i) {
        output += `<div class="op ${i === "n/a" ? "hideEl" : ""}">
                    <input type="checkbox" name="${i}" value=".a-${replaceDash(i)}"/>
                    <label>${toTitleCase(i)}</label>
                </div>`;
    });

    $(`.${classname}`).html(output);
}

function appendCategoriesDropdown(uniqueData, classname) {
    let output = "";

    removeArrayDuplicates(uniqueData).map(function(i) {
        output += `<option class="${i === "n/a" ? "hideEl" : ""}" value=".a-${replaceDash(i)}">${toTitleCase(i)}</option>`;
    });

    $(`.${classname}`).after(output);
}

function removeArrayDuplicates(array) {
    let newArray = [];

    array.map(function(i) {
        newArray.push(i.trim());
    });
    
    return [...new Set(newArray)];
}

// Sort Alphabetically and Reposition Featured next to All Filter
function reMapFilters (arr){
    let hasValue = arr.includes("featured");
    let reMapArr = arr.forEach((val, index) => {
        if(val == "featured"){
            arr.splice(index, 1);              
        }    
    });
    let sortedArr = arr.sort((a,b)=>{
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0; 
    });
    if(hasValue){    
        sortedArr.unshift("featured");
    }
    return sortedArr;
}

function sortArray(list){ 
    return list.sort((a,b)=>{ 
        if(new Date(a.fullDate) < new Date(b.fullDate)) { return -1; } 
        if(new Date(a.fullDate) > new Date(b.fullDate)) { return 1; } 
        return 0;  
    }); 
}

//replace special characters
function replaceDash(str){
    let strArray = str.split(",");
    let tempStr = strArray.map(i => i.trim());
    let newStr = tempStr.join(",");
    
    if(!!str) {
        let d = newStr.replace(/\s+/g, '-');
        let c = d.replace(/\./g,'-');
        let e = c.replace(/\//g, "-");
        let f = e.replace(/\:/g, "-");
        let g = f.replace(/\'/g, "-");
        let i = g.replace(/\|/g, "-");
        return i.replace(/\&/g, "and");
    }
}

function replaceDash2(str){
    let strArray = str.split(",");
    let tempStr = strArray.map(i => i.trim());
    let newStr = tempStr.join(",");
    
    if(!!str) {
        let d = newStr.replace(/\s+/g, '-');
        let c = d.replace(/\./g,'-');
        let e = c.replace(/\//g, "-");
        let f = e.replace(/\:/g, "-");
        let g = f.replace(/\'/g, "-");
        let h = g.replace(/\,/g, "-");
        let i = h.replace(/\|/g, "-");
        return i.replace(/\&/g, "and");
    }
}

//replace space to a-
function splitext(str){
    if(!!str) {
        let splitxt = str.split(',');
        return str.replaceAll(" ", "").replaceAll(",", " a-");
    }
}

//convert text to titlecase
function toTitleCase(str) {
    if(!!str) {
        return str.replace(/\w\S*/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}

addCss("fullcalendarCss", "https://cdn.jsdelivr.net/npm/fullcalendar@5.1.0/main.css");
addCss("fontAwesomeSource", "https://use.fontawesome.com/releases/v6.2.0/css/all.css");

function addCss(id, url) {
    if (!document.getElementById(id)){
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = id;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = url;
        link.crossOrigin = 'anonymous';
        head.appendChild(link);
    }
}