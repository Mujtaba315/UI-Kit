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

// Opening inner dropdown

$('.menu_dropdown  .menu_dropdown_1 ul .menu_dropdown_item.open_inner_dropdown').click(function(){
    $(this).toggleClass('clicked');
});