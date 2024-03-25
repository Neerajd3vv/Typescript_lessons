"use strict";
// So enum is useful to define constant named constants , a more human readble way 
var Direction;
(function (Direction) {
    Direction["up"] = "up";
    Direction["down"] = "down";
    Direction["right"] = "right";
    Direction["left"] = "left";
})(Direction || (Direction = {}));
function keyPress(keyPressed) {
    if (keyPressed == Direction.up) {
        // do something
    }
}
keyPress(Direction.up);
keyPress(Direction.down);
console.log(Direction.down);
console.log(Direction.up);
console.log(Direction.right);
console.log(Direction.left);
