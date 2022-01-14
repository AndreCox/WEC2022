function RandomizeArray(input) {
  for (let i = input.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [input[i], input[j]] = [input[j], input[i]];
  }
  return input;
}

function ProcessCrane(input, process) {
  let output = input;
  let cranePosition = 0;
  let holding = false;
  for (let i = 0; i < process.length; i++) {
    //switch statement
    switch (process[i]) {
      //: Move left (moves to the next stack on the left. Does not do anything if already in the leftmost position)
      case 1:
        if (cranePosition !== 0) {
          cranePosition -= 1;
        }
        break;
      //: Move right (moves to the next stack on the right. Does not do anything if already in the rightmost position)
      case 2:
        if (cranePosition !== input.length - 1) {
          cranePosition += 1;
        }
        break;
      //: Lift a box from the stack (Does not do anything if the crane already has a box)
      case 3:
        if (holding === false && input[cranePosition] !== 0) {
          holding = true;
          output[cranePosition] -= 1;
        }
        break;
      //: Drop a box on the stack (Does not do anything if the crane doesn't already have a box)
      case 4:
        if (holding === true && output[cranePosition] < 4) {
          holding = false;
          output[cranePosition] += 1;
        }
        break;
      //: Quit
      case 0:
        return output;
        break;
      default:
        break;
    }
  }
  return output;
}

export { RandomizeArray, ProcessCrane };
