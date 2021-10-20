var isValid = function(s) {

    const map = new Map();
    const stack = [];

    map.set(')', '(');
    map.set(']', '[');
    map.set('}', '{');

    for(let i=0; i<s.length; i++){
        const curr = s[i];
        cont peek = stack[stack.length - 1];

        if(map.has(curr) && map.get(curr) === peek){
            stack.pop();

        } else {
            stack.push(curr);
        }
    }
    return stack.length === 0;
};
