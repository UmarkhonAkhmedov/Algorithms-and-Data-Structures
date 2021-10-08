//var isPalindrome = function(x) {
//    let rev = 0;
//    let lastDigit;
//
//    while(x != 0){
//        lastDigit = x % 10;
//        rev = rev * 10 + lastDigit;
//        x = Math.floor(x/10);
//    }
//    if(rev === x){
//        return true;
//    } else {
//        return false;
//    }
//};
//
//isPalindrome(121);

var isPalindrome = function(x){
    let rev = 0;
    let y = x;

    if (x < 0){
        return false;
    }
    while (y > 0) {
        const lastDigit = y % 10
        rev = (rev * 10) + lastDigit
        y = (y / 10) | 0
    }
    return x === rev;
}

console.log(isPalindrome(121));