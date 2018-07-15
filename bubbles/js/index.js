$(document).ready( function() {

    function bubbles()
    {
        setInterval(createCircles, 1000);
    }
    function createCircles() {
        var radius = random(5,20);
        var speed = random(10000,15000);
        var ileft = random(radius*2, $(window).innerWidth() - radius*2);
        var fleft = random(radius*2, $(window).innerWidth() - radius*2);
        //console.debug(radius + " " + speed + " " + left + " " + top);
        var circle = $("<div></div>");    // Create with DOM

        circle.css({border: "1px solid red",
            width: radius + "px",
            height: radius + "px",
            position:"absolute",
            borderRadius: "50%",
            top: $(window).innerHeight() + "px",
            left: ileft + "px"});
        $("body").after(circle);
        if (radius % 2 == 0 || radius % 5 == 0) {
            circle.animate({top: -1 * (radius + 5) + "px"}, speed, function() {circle.remove();}); // Go straight.
        }
        else {
            circle.animate({top: -1 * (radius + 5) + "px", left: fleft + "px"}, speed, function() {circle.remove();});
        }

    }

    function random(min, max)
    {
        return Math.floor(Math.random()*(max-min) + min);
    }

    bubbles();
});