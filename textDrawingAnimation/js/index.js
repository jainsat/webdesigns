$(document).ready(function() {
    const myFont = new FontFace('Tangerine', 'url(fonts/Tangerine.ttf)');
    // In case of custom font, we need to load it first, otherwise canvas
    // doesn't recognize it.
    myFont.load().then((font) => {
        document.fonts.add(font);
        // From here, drawing is starting.
        var canvas = document.querySelector("canvas");
        var cxt = canvas.getContext("2d");
        cxt.font = "70px Tangerine";
        cxt.fillStyle ="#0099ff";
        cxt.strokeStyle ="#0099ff";
        var dashLenMax = 300,offset=10,x=30,text="Satya Jain",i=0, dashLen=0, dashSpace=dashLenMax;
        // Text will appear to animate if we draw it char by char and while
        // drawing a character, we first want to keep 0 dash length and max dash space.
        // Then by recursion, we keep increasing dash length and reduce dash space by
        // same factor. For. e.g. suppose max dash length is 300.
        // In the beginning, (dash len, dash space) will be (0, 300) then depending on
        // how fast we want our text to draw, we can decide some offset, say 10. So in
        // next turn, (len, space) will become (10,290) => (20,280)=>(30,270)......(300,0).
        function draw() {
            cxt.setLineDash([dashLen, dashSpace]); // create a long dash mask
            dashLen += offset;    // increase dash length.
            dashSpace -= offset;  // reduce dash space.
            cxt.strokeText(text[i], x, 60);   // stroke letter.
            if (dashSpace >= 0) {
        	    requestAnimationFrame(draw);
            }
           else {
               cxt.fillText(text[i], x, 60);
               x+=cxt.measureText(text[i]).width + cxt.lineWidth;
               i++;
               dashLen = 0;
               dashSpace = dashLenMax;
               if (i<text.length) {
	                requestAnimationFrame(draw);
               }  	
            }
        }
        draw();
    });
});