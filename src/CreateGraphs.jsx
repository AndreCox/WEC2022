function Create(inputArr) {
  for (i = 0; i <= inputArr.size(); i++) {
    data[i] = { name: i, value: inputArr[i] };
  }
  return data;
}
