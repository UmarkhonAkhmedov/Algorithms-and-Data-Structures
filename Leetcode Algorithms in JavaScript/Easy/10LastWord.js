var lengthOfLastWord = function(s) {
    let ArrInfo = s.split(' ');
    let newArr = ArrInfo.filter(e => e)
    lastWord = newArr[newArr.length - 1];
    count = 0;

    for(let i=0; i<lastWord.length; i++){
        count++
    }

    console.log(count);
};

s = "Hello World";
lengthOfLastWord(s);