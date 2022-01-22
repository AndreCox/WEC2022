function RandomizeArray(input) {
  for (let i = input.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [input[i], input[j]] = [input[j], input[i]];
  }
  return input;
}

let cranePosition = 0;
let holding = false;

function ProcessCrane(input, process, reset) {
  console.log('input', input);
  console.log('process', process);
  if (reset === true) {
    cranePosition = 0;
    holding = false;
    return;
  }
  let output = input;
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
  holding = false;
  cranePosition = 0;
  console.log('output', output);
  return output;
}

function add(accumulator, a) {
  return accumulator + a;
}
holding = false;

function loopChanges(difference, process) {
  console.log(difference);
  for (let i = 0; i < difference.length; i++) {
    if (difference[i] === 0) {
      process.push(2);
    }
    if (difference[i] > 0 && holding === false) {
      process.push(3);
      difference[i] -= 1;
      holding = true;
    }
    if (difference[i] < 0 && holding === true) {
      process.push(4);
      difference[i] += 1;
      holding = false;
    }
    //if were at the end of the array we should go back to the beginning
    if (i === difference.length - 1) {
      for (let j = 0; j < difference.length; j++) {
        process.push(1);
      }
    }
  }
  return [difference, process];
}

function FindProcess(input, output) {
  //if the sum of the input is not equal to the sum of the output then we can't do anything
  if (input.reduce(add, 0) != output.reduce(add, 0)) {
    return null;
  }
  let process = [];

  let difference = input.map(function (item, index) {
    return item - output[index];
  });
  console.log(difference);
  let unprocessed = true;
  while (unprocessed) {
    [difference, process] = loopChanges(difference, process);
    console.log('difference', difference);
    console.log('process', process);
    if (difference.every((item) => item === 0) && holding === false) {
      unprocessed = false;
    }
  }
  //find when array has 1's and 2's at the end and remove them
  let last = process.length - 1;
  while (process[last] === 1 || process[last] === 2) {
    process.pop();
    last -= 1;
  }
  if (process.length === 0) {
    return [0];
  }
  console.log(process);
  return process.append(0);
}

export { RandomizeArray, ProcessCrane, FindProcess };
