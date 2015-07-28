
$( document ).ready(function() {
    console.log('mmmmmmm');
  // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  $('#secretBox').css('background-color', 'white');
  //Can also use .html instead of .append and can also do the color changes like it like
  // $('#secretBox').css({
  //     'background': 'white',
  //     'color': 'black'
  //   });
  $('#secretBox').append('<h1>Secret Box</h1>');
  $('h1').css('color', 'black');

  //Find all child divs of the first row. Set the class for each div to boxType3.
  $('#row1').children().removeClass().attr('class', 'box boxType3');

  //Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
  $('#row4').children().last().hide();

  //Change all red boxes to white.
  $('.boxType1').css('background-color', 'white');

  // Get the first two divs in the second row. Take away all styling from the divs.
  $('#row2 div:lt(2)').css("visibility", "hidden");

  //Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
  $('.box').not('#secretBox').css("width", "2px");








});
