"use strict;"

// Animate text and visual elements
function ContentLayer(action){
  if(action === 'play') {
    $("#content-container").delay(800).fadeTo(650, '1.0');
  }
  if(action === 'stop') {
    $("#content-container").delay(50).fadeTo(100, '0.0');
  }
}