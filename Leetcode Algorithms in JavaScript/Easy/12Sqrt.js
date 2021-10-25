// First Method
var mySqrt = function(x) {

    let answer = Math.sqrt(x);
    let floatingAnswer = Math.floor(answer);
    console.log(floatingAnswer);

};
// Second Method
var mySqrt = function(x) {
  if (x < 2) return x;
  var left = 1;
  var right = x;
  var mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (mid > x / mid) {
      right = mid - 1;
    } else if ((mid + 1) > x / (mid + 1)) {
      return mid;
    } else {
      left = mid + 1;
    }
  }
};


x = 18;
mySqrt(x);