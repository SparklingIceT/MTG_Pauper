"use strict;"

// Animate text and visual elements
function ContentLayer(action){
  if(action === 'play') {
    $("#content-container").fadeTo(250, '1.0').animate({left: '25%'});
  }
  if(action === 'stop') {
    $("#content-container").delay(250).fadeTo(250, '0.0');
  }
}