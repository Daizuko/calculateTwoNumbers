/**
 * A simple JavaScript background changer.
 * 
 * It replaces the background from a list of 
 * images when clicking on one of the images.
 *
 * Author: Jonas Nilsson
 */

//The list of images, commaseparated, and their filepath.
var backgroundImage = {
  bg1 : "images/bg1.jpg"
, bg2 : "images/bg2.jpg"
, bg3 : "images/bg3.jpg"
, bg4 : "images/bg4.jpg"
, bg5 : "images/bg5.jpg"
};


/*
 * Perform the change when click event occurs.
 * Had to be a function inside another function
 * to get the extra scope so the change happens
 * on all images instead of just the last one.
 */
var getOnClickFunction = function(path) {
  return function() {
    document.body.style.backgroundImage = 'url(' + path + ')';
  }
}


//Creates the onclick event and gets the new images file path.
window.onload = function() {
  var backgroundImageButtons = document.querySelectorAll('#backgroundImageButtons > img');
  
  var i, img, key, path;
  for (i = 0; i < backgroundImageButtons.length; i++) {
    img = backgroundImageButtons[i];
    key = img.className;
    path = backgroundImage[key];
    img.onclick = getOnClickFunction(path);
  }
}
