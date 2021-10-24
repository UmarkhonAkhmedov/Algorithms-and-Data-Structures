// First Method
var plusOne = function(digits) {

    addingOne = digits.at(-1) + 1;
    digits.pop(digits.length - 1);
    digits.push(addingOne);

    console.log(digits);
};

digits = [4,3,2,1];
plusOne(digits);

// Second Method
var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
    if(++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};
