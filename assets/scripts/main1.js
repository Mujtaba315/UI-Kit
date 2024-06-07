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
    $('.search-navbar-menu .search-navbar-menu-items').toggleClass('open');
});

$('.search-navbar .navbar-right-content i').click(function(){
    $('div.search-navbar-menu').toggleClass('open');
});

// $('.search-navbar-menu .search-navbar-menu-close-icon i').click(function(){
//     $('div.search-navbar-menu').removeClass('open');
// });

// Closing navbar menu if screen width > 600

$(document).load($(window).bind("resize", checkPosition));
function checkPosition()
{
    if ($(window).width() > 600){
        $('div.search-navbar-menu').removeClass('open');
    }
}