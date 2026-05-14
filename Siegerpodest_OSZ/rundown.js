"use strict;"

// Animate text and visual elements
function ContentLayer(action){
  if(action === 'play') {
    $("#content-container").delay(100).fadeTo(200, '1.0');
    $("#name-parent").delay(350).fadeTo(300, '1.0');
    $("#name-parent2").delay(650).fadeTo(300, '1.0');
    $("#name-parent3").delay(950).fadeTo(300, '1.0');

  }
  if(action === 'stop') {
    $("#content-container").delay(400).fadeTo(300, '0.0');
  }
}