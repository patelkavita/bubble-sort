const bubbleSort = function(unsortedList) {
  const numbers = unsortedList.slice(0);

  for(let index =0; index <= numbers.length; index++){
    let temp = 0;

    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] > numbers[i+1]) {
        temp = numbers[i+1];
        numbers[i+1] = numbers[i];
        numbers[i] = temp;
      }
    }
  }

  return numbers;
}

exports.bubbleSort = bubbleSort;
