$(document).ready(function() {
const myFont = new FontFace('Tangerine', 'url(Tangerine.ttf)');

myFont.load().then((font) => {
  document.fonts.add(font);

  console.log('Font loaded');
var can = document.querySelector("canvas");
var cxt = can.getContext("2d");
cxt.font = "30px Tangerine";
cxt.textAlign="center";
cxt.fillText("Satya Jain", can.width/2, can.height/2);
});

});