"use strict";

const data = {
    list: [
        {
            title: "Begin your courses!",
            description: "Now that you see the big picture, it's time to start your coursework. Our course are designed with you in mind, providing you with the knowledge and skills needed to excel as a real estate agent. Take the courses on your terms from the comfort oof your home. All courses can be completed in as little as 54 days!",
            image: "https://irp.cdn-website.com/0680922f/dms3rep/multi/begin-your-course.png"
        },
        {
            title: "Begin your courses!",
            description: "Now that you see the big picture, it's time to start your coursework. Our course are designed with you in mind, providing you with the knowledge and skills needed to excel as a real estate agent. Take the courses on your terms from the comfort oof your home. All courses can be completed in as little as 54 days!",
            image: "https://irp.cdn-website.com/0680922f/dms3rep/multi/begin-your-course.png"
        },
        {
            title: "Begin your courses!",
            description: "Now that you see the big picture, it's time to start your coursework. Our course are designed with you in mind, providing you with the knowledge and skills needed to excel as a real estate agent. Take the courses on your terms from the comfort oof your home. All courses can be completed in as little as 54 days!",
            image: "https://irp.cdn-website.com/0680922f/dms3rep/multi/begin-your-course.png"
        },
        {
            title: "Begin your courses!",
            description: "Now that you see the big picture, it's time to start your coursework. Our course are designed with you in mind, providing you with the knowledge and skills needed to excel as a real estate agent. Take the courses on your terms from the comfort oof your home. All courses can be completed in as little as 54 days!",
            image: "https://irp.cdn-website.com/0680922f/dms3rep/multi/begin-your-course.png"
        },
        {
            title: "Begin your courses!",
            description: "Now that you see the big picture, it's time to start your coursework. Our course are designed with you in mind, providing you with the knowledge and skills needed to excel as a real estate agent. Take the courses on your terms from the comfort oof your home. All courses can be completed in as little as 54 days!",
            image: "https://irp.cdn-website.com/0680922f/dms3rep/multi/begin-your-course.png"
        }
    ]
};

tabStructure();
let defaultIndex = $(".st2-tabs:first-child").data("index");
tabImage(defaultIndex);

function tabStructure() {
    let output = "";

    data.list.map(function(i, index) {
        output += `
            <div class="st2-tabs" data-index="${index}">
                <div class="st2-title-wrapper">
                    <div class="st2-number">${index + 1}</div>
                    <div class="st2-title">
                        ${i.title}
                    </div>
                </div>
                <div class="st2-description">
                    ${i.description}
                </div>
            </div>
        `;
    });

    $(".st2-column.right").html(output);
}

function tabImage(selectedIndex) {
    data.list.filter(function(i, index) {
        return index == selectedIndex;
    }).map(function(i) {
        let imageOutput = `<img src="${i.image}" alt="image">`;
        
        $('.st2-image').animate({'opacity': 0}, 100, function(){
            $(this).html(imageOutput).animate({'opacity': 1}, 400);    
        });
    });
}

$(".st2-tabs:first-child").addClass("active");
$(".st2-tabs:first-child .st2-description").slideDown();

$(".st2-tabs").click(function() {
    let isActive = $(this).hasClass("active");
    let selectedIndex = $(this).data("index");

    if(!isActive) {
        $(this).siblings().removeClass("active");
        $(this).siblings().find(".st2-description").slideUp();
        $(this).addClass("active");
        $(this).find(".st2-description").slideDown();
    }

    tabImage(selectedIndex);
});