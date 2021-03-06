// Fininding palindrone or not
var letters = [];
var word = "racecar";
var rword = "";


// Put letters of word into stack
for(var i=0; i<word.length; i++){
  letters.push(word[i]);
}

// Pop off the stack in reverse order
for(var i=0; i<word.length; i++){
  rword += letters.pop();
}

if(rword === word){
  console.log(word + "is a plaindrome.");
} else {
  console.log(word + "is not a palindrome");
}

// Creates a stack
var Stack = function(){
  this.count = 0;
  this.storage = {};

  // Adds a value onto the end of the stack
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  this.pop = function(){
    if(this.count === 0){
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete history.storage[this.count];
    return result
  }
  this.size = function(){
    return this.count;
  }

  // Returbs the value at the end of the stack
  this.peek = function(){
    return this.storage[this.count - 1];
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());