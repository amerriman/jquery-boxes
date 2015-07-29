
$( document ).ready(function() {
    console.log('mmmmmmm');
  // Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  // $('#secretBox').css('background-color', 'white');
  // //Can also use .html instead of .append and can also do the color changes like it like
  // // $('#secretBox').css({
  // //     'background': 'white',
  // //     'color': 'black'
  // //   });


  // $('#secretBox').append('<h1>Secret Box</h1>');
  // $('h1').css('color', 'black');

  // // //Find all child divs of the first row. Set the class for each div to boxType3.
  // $('#row1').children().removeClass().attr('class', 'box boxType3');

  // // //Make the last box in the last row disappear. (Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
  // $('#row4').children().last().hide();

  // // //Change all red boxes to white.
  // $('.boxType1').css('background-color', 'white');

  // // // Get the first two divs in the second row. Take away all styling from the divs.
  // $('#row2 div:lt(2)').css("visibility", "hidden");

  // // //Get all divs inside the container that are not row divs and are not the secret box div. Set the width of the divs to 2 pixels.
  // $('.box').not('#secretBox').css("width", "2px");

  // // Add an on click handler to the container div. Console log the x and y position of the click.
  // $('#container').on('click', function(){
  //   console.log(event.pageX, event.pageY);
  // });

  // //Add links inside all red box divs that take the user to galvanize. Then add an on click handler that alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
  // $('.boxType1').html('<a href="http://www.galvanize.com">Galvanize</a>').on('click', function(event){
  //   event.preventDefault();
  //   alert("You can never leave this page!!!");
  // });

  // //For all box divs, add a click handler that adds an image of a cute puppy to the box. If the image is clicked again, remove the cute puppy.
  // $('.box').on("click", function(){
  //   $(this).append('<img src="http://www.angelanimalhospital.com/wp-content/uploads/2015/01/puppy.jpg" alt="puppy">').on("click", function(){
  //     $('img').css("visibility", "hidden");
  //   });
  // });

  //  //Write a click handler on the conatainer div.
  //  //The click handler should turn the container background to black
  //  //and the background of the original div that was clicked to white.
  //  //If the user original div that was clicked happened to be the container div, change the background of the container div to lime green.
  //  //You should not use any selectors for this exercise. You can do it completely with what is given to you in the event callback.

// $('#container').on("click", function(){
//   //$("div.box", this).css("background", "white");
//   $(this).closest("background", "white");
//   //console.log();
//   $("#container").css("background", "black");
//     //$("#container").css("background", "limegreen");
//   // $("#container").on("click", function(){
//   //   $("#container").css("background", "limegreen");
//   // });
// });

// //Turns background black and box white
// $('#container').on("click", ".box", function(){
//   $("#container").css("background", "black");
//   $(this).css("background", "white");
// });


// $('#container').on("click", ".box", function(){
//   if ( ) {
//     $("#container").css("background", "black");
//     $(this).css("background", "white");
//   }
//   else ( $('#container').on("click"));{
//     $("#container").css("background", "limegreen");
//   }


// });

$('#container').on("click", function(e){
  // if($('.box').css("background-color") === "rgb(255, 255, 255)"){
   $('.box').removeAttr('style')

  //   console.log("works");
  // }
  if($(e.target).hasClass('box') === true){
    $("#container").css("background", "black");
  $(e.target).css("background", "white");
  }
  else if ($(this).is('#container') === true){
     $(this).css("background", "limegreen");
  }
});



});

// $('#screen').html();
// -->"7÷9"
