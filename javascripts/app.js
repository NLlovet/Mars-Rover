
// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: "0",
  y: "0",
  travelLog: ""
}
// ======================


function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    //heads to west
    case "N":
      rover.direction = "W";
      break;
    //heads to South
    case "W":
      rover.direction = "S";
      break;
    //heads to East
    case "S":
      rover.direction = "E";
      break;
    //heads to North
    case "E":
      rover.direction = "N";
      break;
  }

}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    //heads to East
    case "N":
      rover.direction = "E";
      break;
    //heads to South
    case "E":
      rover.direction = "S";
      break;
    //heads to West
    case "S":
      rover.direction = "W";
      break;
    //heads to North
    case "W":
      rover.direction = "N";
      break;
  }

}

function moveForward(rover) {
  console.log("moveForward was called")

  switch (rover.direction) {

    case "N":
      rover.y -= 1;
      break;

    case "E":
        rover.x += 1;
      break;
    case "S":
        rover.y += 1;
      break;
    case "W":
        rover.x -= 1;
      break;
  }

  rover.travelLog += `X: ${rover.x} Y: ${rover.y} \n`;
}

//moves the rover by taking in commands
function move(rover, commands){
  for(let i = 0; i < commands.length; i++){
    let letter = commands.charAt(i);
      switch (letter) {
        case "f":
          moveForward(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
      }
    }
    return rover.travelLog;
  
  }






