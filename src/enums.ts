type keyInput = "up" | "down" | "left" | "right";


// So enum is useful to define constant named constants , a more human readble way 
enum Direction {
  up = "up", //0
  down = "down", //1
  right = "right", //2
  left = "left", //3
}

function keyPress(keyPressed: Direction) {
    if (keyPressed == Direction.up) {
        // do something
    }
}

keyPress(Direction.up)
keyPress(Direction.down)
console.log(Direction.down);
console.log(Direction.up);
console.log(Direction.right);
console.log(Direction.left);


