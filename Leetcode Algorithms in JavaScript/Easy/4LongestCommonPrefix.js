var longestCommonPrefix = function (string) {
    // Loop through the letters of the first string
    for (let i = 0; i <= string[0].length; i++) {
        // Loop through the other strings
        for (let j = 1; j < string.length; j++) {
            // Check if this character is also present in the same position of each string
            if (string[0][i] !== string[j][i]) {
                // If not, return the string up to and including the previous character
                return string[0].slice(0, i);
            }
        }
    }

    return string[0];
};


string = ["flower","flow","flight"]
console.log(longestCommonPrefix(string));
