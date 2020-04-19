function yu_gi_oh(num) {
  var numbers = [];
  var output;
  for (var i = 1; i <= num; i++) {
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      output = "yu-gi-oh";
    } else if (i % 2 == 0 && i % 5 == 0) {
      output = "yu-oh";
    } else if (i % 2 == 0 && i % 3 == 0) {
      output = "yu-gi";
    } else if (i % 5 == 0 && i % 3 == 0) {
      output = "gi-oh";
    } else if (i % 2 == 0) {
      output = "yu";
    } else if (i % 3 == 0) {
      output = "gi";
    } else if (i % 5 == 0) {
      output = "oh";
    } else {
      output = i;
    }
    numbers.push(output);
  }
  console.log(numbers);
  return numbers;
}

yu_gi_oh(100);
yu_gi_oh(10);
