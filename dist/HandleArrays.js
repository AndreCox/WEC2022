function HandleArray(input) {
  console.log("input: ", input);
  var numberPattern = /\d+/g;
  var numberArray = String(input).match(numberPattern);
  if (numberArray === null) {
    console.log("Error: Input must be a string of numbers");
    return null;
  }
  let typeCast = (num) => Number(num);
  var numberArray = Array.from(String(numberArray.join("")), typeCast);
  console.log(numberArray);
  return numberArray;
}
export default HandleArray;
