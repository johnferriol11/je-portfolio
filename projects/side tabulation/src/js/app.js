"use strict";

const data = {
    list: [
        {
            title: "Introduction to Python Programming",
            description: "This course provides an introduction to the Python programming language. It covers basic concepts such as variables, data types, control structures, functions, and more.",
            image: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Web Development Fundamentals",
            description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript. This course covers essential concepts and techniques for building static and interactive web pages.",
            image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Machine Learning Basics",
            description: "Explore the basics of machine learning, including supervised and unsupervised learning algorithms, model evaluation, and feature engineering.",
            image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Graphic Design Essentials",
            description: "Master the essentials of graphic design including typography, color theory, layout principles, and design software tools such as Adobe Photoshop and Illustrator.",
            image: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Financial Planning and Investment",
            description: "Gain practical knowledge and skills in financial planning, investment strategies, risk management, and portfolio diversification.",
            image: "https://images.pexels.com/photos/7821487/pexels-photo-7821487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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