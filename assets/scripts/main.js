
// Day 17 / 5 / 24

// var dropdownBtn = document.querySelector('.dropdown');
// // var dropdownMenu = document.querySelector('.dropdown-menu');

// dropdownBtn.addEventListener('click', toggleMenu);

// function toggleMenu(){
//     dropdownBtn.classList.toggle('open');
//     // dropdownMenu.classList.toggle('open');
//     $(".dropdown-arrow").toggleClass('open');
// }

// Add evenlistner to all dropdown

var dropdownBtns = document.querySelectorAll('.dropdown');
// var dropdownMenu = document.querySelector('.dropdown-menu');
for (let i = 0; i < dropdownBtns.length; i++) {
    //    console.log(dropdownBtns[i]);
    dropdownBtns[i].addEventListener('click', toggleMenu);

    function toggleMenu() {
        dropdownBtns[i].classList.toggle('open');
        // dropdownMenu.classList.toggle('open');
        // $(".dropdown-arrow").toggleClass('open');
    }
}



// Day 20 / 5 / 24

// Add eventlistner to all line-dropdown

var lineDropdownBtns = document.querySelectorAll('.line-dropdown');

for (let i = 0; i < lineDropdownBtns.length; i++) {

    lineDropdownBtns[i].addEventListener('click', toggleMenu);

    function toggleMenu() {
        lineDropdownBtns[i].classList.toggle('open');
    }
}

// Turning hamburger lines into cross by adding clicked class to left

$('.left').click(function () {
    $(this).toggleClass('clicked');
});



// Day 21 / 5 / 24

// Opening inner dropdown

$('.menu_dropdown  .menu_dropdown_1 ul .menu_dropdown_item.open_inner_dropdown').click(function () {
    $(this).toggleClass('clicked');
});



// Day 22 / 5 / 24

// google search input with dropdown

$('.input-div.google-search.bbc ul li.bbc').click(function () {
    $("input.google-search-input.blue-border.bbc").attr("value", $(this).html());
});

// 1 2 3 dropdown

$('.input-div.google-search.123 ul li.123').click(function () {
    $("input.google-search-input.blue-border.123").attr("value", $(this).html());
});

// Day 24 / 5 / 24

// Tabs

// Tab 1 top

//hiding all the tab buttons texts
$('.tabs-text').css('display', 'none');

// Displaying the text of active tab button
$('#' + $('.tabs-btn.active').attr('id') + '-text').css('display', 'block');

// Adding click funtion to all tab buttons
$('.tabs-btn').click(function () {

    // Buttons other than dropdown
    if (!($(this).attr('id') == "tab1-dropdown")) {

        // Remove active effect from all tab buttons
        $('.tabs-btn').removeClass('active');

        // Adding active effect to the clicked button
        $(this).addClass('active');

        // Again hiding all tab buttons text because active button text is visible
        $('.tabs-text').css('display', 'none');

        //Displaying the text of clicked button
        $('#' + $(this).attr('id') + '-text').css('display', 'block');

        // Closing the dropdown when clicked on tab buttons other than dropdown button
        $('.tabs .tab-dropdown').removeClass('open');

        // Dropdown button
    } else {

        // Removing active effect from all buttons
        $('.tabs-btn').removeClass('active');

        // Adding active effect to the clicked button (i.e dropdown button)
        $(this).addClass('active');

        // Open / close dropdown
        $('.tabs .tab-dropdown').toggleClass('open');
    }
});


// Adding click function to all dropdown items
$('.tab-dropdown-item').click(function () {

    // Hiding all the tabs buttons text
    $('.tabs-text').css('display', 'none');

    // Displaying the text of clicked list item
    $('#' + $(this).attr('id') + '-text').css('display', 'block');
});

// Tab 2 bottom

//hiding all the tab buttons texts
$('.tab-2 .tabs-2-text').css('display', 'none');

// Displaying the text of active tab button
$('#' + $('.tab-2 .tabs-2-btn.active').attr('id') + '-text').css('display', 'block');

// Adding click funtion to all tab buttons
$('.tab-2 .tabs-2-btn').click(function () {

    // Buttons other than dropdown
    if (!($(this).attr('id') == "tab2-dropdown")) {

        // Remove active effect from all tab buttons
        $('.tab-2 .tabs-2-btn').removeClass('active');

        // Adding active effect to the clicked button
        $(this).addClass('active');

        // Again hiding all tab buttons text because active button text is visible
        $('.tab-2 .tabs-2-text').css('display', 'none');

        //Displaying the text of clicked button
        $('#' + $(this).attr('id') + '-text').css('display', 'block');

        // Closing the dropdown when clicked on tab buttons other than dropdown button
        $('.tab-2 .tab-2-dropdown').removeClass('open');

        // Dropdown button
    } else {

        // Removing active effect from all buttons
        $('.tab-2 .tabs-2-btn').removeClass('active');

        // Adding active effect to the clicked button (i.e dropdown button)
        $(this).addClass('active');

        // Open / close dropdown
        $('.tab-2 .tab-2-dropdown').toggleClass('open');
    }
});


// Adding click function to all dropdown items
$('.tab-2 .tab-2-dropdown-item').click(function () {

    // Hiding all the tabs buttons text
    $('.tab-2 .tabs-2-text').css('display', 'none');

    // Displaying the text of clicked list item
    $('#' + $(this).attr('id') + '-text').css('display', 'block');
});


// Day 27 / 5 / 24

// Tab 3 left

//hiding all the tab buttons texts
$('.tab-3 .tabs-3-text').css('display', 'none');

// Displaying the text of active tab button
$('#' + $('.tab-3 .tabs-3-btn.active').attr('id') + '-text').css('display', 'block');

// Adding click funtion to all tab buttons
$('.tab-3 .tabs-3-btn').click(function () {

    // Buttons other than dropdown
    if (!($(this).attr('id') == "tab3-dropdown")) {

        // Remove active effect from all tab buttons
        $('.tab-3 .tabs-3-btn').removeClass('active');

        // Adding active effect to the clicked button
        $(this).addClass('active');

        // Again hiding all tab buttons text because active button text is visible
        $('.tab-3 .tabs-3-text').css('display', 'none');

        //Displaying the text of clicked button
        $('#' + $(this).attr('id') + '-text').css('display', 'block');

        // Closing the dropdown when clicked on tab buttons other than dropdown button
        $('.tab-3 .tab-3-dropdown').removeClass('open');

        // Dropdown button
    } else {

        // Removing active effect from all buttons
        $('.tab-3 .tabs-3-btn').removeClass('active');

        // Adding active effect to the clicked button (i.e dropdown button)
        $(this).addClass('active');

        // Open / close dropdown
        $('.tab-3 .tab-3-dropdown').toggleClass('open');
    }
});


// Adding click function to all dropdown items
$('.tab-3 .tab-3-dropdown-item').click(function () {

    // Hiding all the tabs buttons text
    $('.tab-3 .tabs-3-text').css('display', 'none');

    // Displaying the text of clicked list item
    $('#' + $(this).attr('id') + '-text').css('display', 'block');
});

// Tab 4 right

//hiding all the tab buttons texts
$('.tab-4 .tabs-4-text').css('display', 'none');

// Displaying the text of active tab button
$('#' + $('.tab-4 .tabs-4-btn.active').attr('id') + '-text').css('display', 'block');

// Adding click funtion to all tab buttons
$('.tab-4 .tabs-4-btn').click(function () {

    // Buttons other than dropdown
    if (!($(this).attr('id') == "tab4-dropdown")) {

        // Remove active effect from all tab buttons
        $('.tab-4 .tabs-4-btn').removeClass('active');

        // Adding active effect to the clicked button
        $(this).addClass('active');

        // Again hiding all tab buttons text because active button text is visible
        $('.tab-4 .tabs-4-text').css('display', 'none');

        //Displaying the text of clicked button
        $('#' + $(this).attr('id') + '-text').css('display', 'block');

        // Closing the dropdown when clicked on tab buttons other than dropdown button
        $('.tab-4 .tab-4-dropdown').removeClass('open');

        // Dropdown button
    } else {

        // Removing active effect from all buttons
        $('.tab-4 .tabs-4-btn').removeClass('active');

        // Adding active effect to the clicked button (i.e dropdown button)
        $(this).addClass('active');

        // Open / close dropdown
        $('.tab-4 .tab-4-dropdown').toggleClass('open');
    }
});


// Adding click function to all dropdown items
$('.tab-4 .tab-4-dropdown-item').click(function () {

    // Hiding all the tabs buttons text
    $('.tab-4 .tabs-4-text').css('display', 'none');

    // Displaying the text of clicked list item
    $('#' + $(this).attr('id') + '-text').css('display', 'block');
});


// Search navbar

// Changing dropdown arrow on hover

$('.navbar-left-content .navbar-dropdown').hover(
    function () {
        $('.navbar-left-content .navbar-dropdown img').attr
            ('src', 'assets/images/Arrow.png').css
            ({ 'width': '8px', 'height': '4px' })
    },

    function () {
        $('.navbar-left-content .navbar-dropdown img').attr
            ('src', 'assets/images/navbar dropdown arrow.png')
    }
);

// Opening dropdown on click

$('.search-navbar .navbar-left-content .navbar-dropdown').click(function () {
    $('.search-navbar .navbar-left-content').toggleClass('open');
});

// Menu dropdown 6 / 6 / 24

$('.search-navbar-menu .search-navbar-menu-items .navbar-menu-dropdown').click(function(){
    $('.search-navbar-menu .search-navbar-menu-items .menu-dd').toggleClass('open');
});

$('.search-navbar .navbar-right-content i').click(function(){
    $('div.search-navbar-menu').toggleClass('open');
    if ( !($('div.search-navbar-menu').hasClass('open')) ){
        $('div.search-navbar-menu').css('height', 0);
    }
    let h = $('.search-navbar-menu').prop('scrollHeight');
    $('div.search-navbar-menu.open').css('height', h);
});

$('.search-navbar-menu .search-navbar-menu-close-icon i').click(function(){
    $('div.search-navbar-menu').css('height', 0);
    $('div.search-navbar-menu').removeClass('open');
});

// Closing navbar menu if screen width > 600

$(document).load($(window).bind("resize", checkPosition));
function checkPosition()
{
    if ($(window).width() > 600){
        $('div.search-navbar-menu').removeClass('open');
    }
}

// console.log($('.search-navbar-menu').height());
// console.log($('.search-navbar-menu').prop('scrollHeight'));

// Day 28 / 05 / 2024

// Pill 2

// Adding click event listner to all pill buttons
$('.pill-2 .pill-btn').click(function () {

    // Remove bydefault active button effect
    $('.pill-2 .pill-btn').removeClass('active');

    // Checking if clicked button is dropdown?
    if ($(this).hasClass('pill-dropdown-btn')) {

        // Adding active class for effect and open class to open dropdown
        $(this).toggleClass('active open');

        // Only for button other than dropdown
    } else {

        // Adding active effect to clicked button
        $(this).toggleClass('active');

        // Removing open class from dropdown button
        $('.pill-dropdown-btn').removeClass('open');
    }

    // Changing dropdown image when dropdown button get clicked
    $('.pill-btn.active .pill-dropdown-arrow').attr(
        'src', 'assets/images/Arrow.png'
    ).css(
        { 'width': '8px', 'height': '4px' }
    );

    // Changing image back to original when active class reomved from dropdown button
    $('.pill-btn:not(.active) .pill-dropdown-arrow').attr(
        'src', 'assets/images/pill dropdown arrow.png'
    );
});


// Progress 60%

var n = $('.progresses .progress-60').attr('data-id');
$('.progresses .progress-60').css('width', n + '%').html(n);

$('.progress-60').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


// $('.progress-60').each(function () {
//     var thisElement = $(this);
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//             var mathCount = Math.ceil(this.Counter);
//             thisElement.text(mathCount);
//         },
//         complete: function() {
//             var mathCount = this.Counter > 0 ? n + '%' : this.Counter;
//             thisElement.text(mathCount);
//           }
//     });
// });




// 29 / 05 / 2024

// Pattern progress bar

let percentage = $('.pattern-progress-bar .pattern-progress-80').attr('data-id');
$('.pattern-progress-bar .pattern-progress-80').css({'width':percentage + '%'});


// Pagination

$('.pagination .pages').click(function(){
    $('.pagination .pages').removeClass('click').css('border-right', '1px solid #ccd1d9');
    if ( $(this).hasClass('1st-page') ){
        $(this).addClass('click');
    } else {
        $(this).addClass('click').prev().css({'border-right':'none', 'width':'28.42px'});
    }
});


// Pagers 

$('.pagers .pager-btn').click(function(){
    $('.pagers .pager-btn').removeClass('active');
    $(this).addClass('active');
});


//  Accordions

let accordion_item1_flag = true;
let accordion_item2_flag = false;
let accordion_item3_flag = false;

$('.accordions .accordion-item').click(function(){
    
    if ($(this).attr("id") == "accordion1-item1"){
        
        if (accordion_item1_flag == false){
            $('.accordions .accordion-item').removeClass('active');
            $('.accordions .accordion-item .item-text').css('max-height', '0');
            $(this).addClass('active');
            accordion_item1_flag = true;
            accordion_item2_flag = false; 
            accordion_item3_flag = false;
            let ach = $('.accordions .accordion-item.active .item-text').prop('scrollHeight');
            $('.accordions .accordion-item.active .item-text').css('max-height', ach);
            
        } else {
            $('.accordions .accordion-item').removeClass('active');
            accordion_item1_flag = false;
            $('.accordions .accordion-item .item-text').css('max-height', '0');        
        }
    }

    else if ($(this).attr("id") == "accordion1-item2"){
        
        if (accordion_item2_flag == false){
            $('.accordions .accordion-item').removeClass('active');
            $('.accordions .accordion-item .item-text').css('max-height', '0');
            $(this).addClass('active');
            accordion_item2_flag = true;
            accordion_item1_flag = false; 
            accordion_item3_flag = false;
            let ach = $('.accordions .accordion-item.active .item-text').prop('scrollHeight');
            $('.accordions .accordion-item.active .item-text').css('max-height', ach);
            
        } else {
            $('.accordions .accordion-item').removeClass('active');
            accordion_item2_flag = false;
            $('.accordions .accordion-item .item-text').css('max-height', '0');  
        }
    }

    else if ($(this).attr("id") == "accordion1-item3"){
        
        if (accordion_item3_flag == false){
            $('.accordions .accordion-item').removeClass('active');
            $('.accordions .accordion-item .item-text').css('max-height', '0');
            $(this).addClass('active');
            accordion_item3_flag = true;
            accordion_item1_flag = false; 
            accordion_item2_flag = false;
            let ach = $('.accordions .accordion-item.active .item-text').prop('scrollHeight');
            $('.accordions .accordion-item.active .item-text').css('max-height', ach);
            
        } else {
            $('.accordions .accordion-item').removeClass('active');
            accordion_item3_flag = false;
            $('.accordions .accordion-item .item-text').css('max-height', '0'); 
        }
    }
});


//  White Accordions

let white_accordion_item1_flag = true;
let white_accordion_item2_flag = false;
let white_accordion_item3_flag = false;

$('.white-accordions .white-accordion-item').click(function(){

    if ($(this).attr("id") == "white-accordion-item1"){
        
        if (white_accordion_item1_flag == false){
            $('.white-accordions .white-accordion-item').removeClass('active');
            $('.white-accordions .white-accordion-item .item-text').css('max-height', '0');
            $(this).addClass('active');
            white_accordion_item1_flag = true;
            white_accordion_item2_flag = false; 
            white_accordion_item3_flag = false;
            let ah = $('.white-accordions .white-accordion-item.active .item-text').prop('scrollHeight');
            $('.white-accordions .white-accordion-item.active .item-text').css('max-height', ah);
        } else {
            $('.white-accordions .white-accordion-item').removeClass('active');
            white_accordion_item1_flag = false; 
            $('.white-accordions .white-accordion-item .item-text').css('max-height', '0');       
        }
    }

    else if ($(this).attr("id") == "white-accordion-item2"){
        
        if (white_accordion_item2_flag == false){
            $('.white-accordions .white-accordion-item').removeClass('active');
            $('.white-accordions .white-accordion-item .item-text').css('max-height', '0');
            $(this).addClass('active');
            white_accordion_item2_flag = true;
            white_accordion_item1_flag = false; 
            white_accordion_item3_flag = false;
            let ah = $('.white-accordions .white-accordion-item.active .item-text').prop('scrollHeight');
            $('.white-accordions .white-accordion-item.active .item-text').css('max-height', ah);
            
        } else {
            $('.white-accordions .white-accordion-item').removeClass('active');
            white_accordion_item2_flag = false;
            $('.white-accordions .white-accordion-item .item-text').css('max-height', '0');  
        }
    }

    else if ($(this).attr("id") == "white-accordion-item3"){
        
        if (white_accordion_item3_flag == false){
            $('.white-accordions .white-accordion-item').removeClass('active');
            $('.white-accordions .white-accordion-item .item-text').css('max-height', '0');
            $(this).addClass('active');
            white_accordion_item3_flag = true;
            white_accordion_item1_flag = false; 
            white_accordion_item2_flag = false;
            let ah = $('.white-accordions .white-accordion-item.active .item-text').prop('scrollHeight');
            $('.white-accordions .white-accordion-item.active .item-text').css('max-height', ah);
            
        } else {
            $('.white-accordions .white-accordion-item').removeClass('active');
            white_accordion_item3_flag = false;
            $('.white-accordions .white-accordion-item .item-text').css('max-height', '0');   
        }
    }
});

// Day 31 / 5 / 24 

// Lists

$('ul.ui-list li').click(function(){
    $('ul.ui-list li').removeClass('click');
    $(this).toggleClass('click');
});

// Jumbotrons

$('.single-item').slick({
    dots: true
});


// 3 / 6/ 24

// Modal

$('.modal-cross-img').click(function(){
    $('.modal-border-bottom').addClass('closed');
});

$('.open-modal-btn').click(function(){
    $('.modal-border-bottom').removeClass('closed');
});


// panel accordion 

// const accordionBtns = document.querySelectorAll(".accordion-panel-content");

// accordionBtns.forEach((accordion) => {
//   accordion.onclick = function () {
//     //this.classList.toggle("is-open");

//     if (this.style.maxHeight) {
//       //this is if the accordion is open
//       this.style.maxHeight = null;
//     } else {
//       //if the accordion is currently closed
//       this.style.maxHeight = this.scrollHeight + "px";
      
//     }
//   };
// });


const accordionBtns = document.querySelectorAll(".accordion-panel-title");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("active");

    let content = this.nextElementSibling;

    //console.log(" Outside", content.style.maxHeight);
    
    if (content.style.maxHeight) {
      //this is if the accordion is open

      //console.log("Inside", content.style.maxHeight);
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed

      //console.log("Else", content.style.maxHeight);
      content.style.maxHeight = content.scrollHeight + "px";
     //console.log("Else max_h", content.style.maxHeight);
    }
  };
});

// 5 / 6 / 24

// Custom Calendar

$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy",
		duration: "fast",
        showOtherMonths: true
	});
} );


// Day 6 / 6 / 24

// Timeline

// not working

// let container = $('.timeline .container');
// console.log(container);
// // let after = getComputedStyle(container, ":after");
// let style = window.getComputedStyle(container, [:after]);
// console.log(style);
// $(style).click(function(){
//     console.log('h');
// });

// $('.timeline').on('click', '.container::after', function(){
//     console.log('j');
// });

