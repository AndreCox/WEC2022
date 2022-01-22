function HandleArray(input) {
  console.log('input: ', input);
  //take a string of numbers and turn it into an array of numbers if it contains things other than numbers return an exception
  var numberPattern = /\d+/g;
  var numberArray = String(input).match(numberPattern);
  //if the array is empty return an exception
  if (numberArray === null) {
    console.log('Error: Input must be a string of numbers');
    return null;
  }

  //split the returned array's into an array of numbers
  let typeCast = (num) => Number(num);
  var numberArray = Array.from(String(numberArray.join('')), typeCast);
  console.log(numberArray);
  return numberArray;
}

export default HandleArray;
