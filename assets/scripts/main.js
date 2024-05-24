
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
for (let i=0; i<dropdownBtns.length; i++){
//    console.log(dropdownBtns[i]);
    dropdownBtns[i].addEventListener('click', toggleMenu);
    
    function toggleMenu(){
        dropdownBtns[i].classList.toggle('open');
        // dropdownMenu.classList.toggle('open');
        // $(".dropdown-arrow").toggleClass('open');
    }
}



// Day 20 / 5 / 24

// Add eventlistner to all line-dropdown

var lineDropdownBtns = document.querySelectorAll('.line-dropdown');

for (let i = 0; i<lineDropdownBtns.length; i++){

    lineDropdownBtns[i].addEventListener('click', toggleMenu);

    function toggleMenu(){
        lineDropdownBtns[i].classList.toggle('open');
    }
}

// Turning hamburger lines into cross by adding clicked class to left

$('.left').click(function(){
    $(this).toggleClass('clicked');
});



// Day 21 / 5 / 24

// Opening inner dropdown

$('.menu_dropdown  .menu_dropdown_1 ul .menu_dropdown_item.open_inner_dropdown').click(function(){
    $(this).toggleClass('clicked');
});



// Day 22 / 5 / 24

// google search input with dropdown

$('.input-div.google-search.bbc ul li.bbc').click(function(){
    $("input.google-search-input.blue-border.bbc").attr("value", $(this).html());
});

// 1 2 3 dropdown

$('.input-div.google-search.123 ul li.123').click(function(){
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
$('.tabs-btn').click(function(){

    // Buttons other than dropdown
    if (!($(this).attr('id') == "tab1-dropdown")){  

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
$('.tab-dropdown-item').click(function(){

    // Hiding all the tabs buttons text
    $('.tabs-text').css('display', 'none');

    // Displaying the text of clicked list item
    $('#' + $(this).attr('id') + '-text').css('display', 'block');
});