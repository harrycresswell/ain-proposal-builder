// When hamburger toggle is clicked
$('.offcanvas-toggle').on('click', function() {
  // Hide offcanvas menu
  $('.container').toggleClass('offcanvas-hidden');
  // Make header full width
  $('.header').toggleClass('header--width-full');
  // Hide toggle
  $('.offcanvas-toggle').hide();
});

// When offcanvas close icon is clicked
$('.offcanvas-close').on('click', function() {
  // Hide off canvas menu
  $('.container').toggleClass('offcanvas-hidden');
  // Make header full width
  $('.header').toggleClass('header--width-full');
  // Show toggle
  $('.offcanvas-toggle').show();
});
