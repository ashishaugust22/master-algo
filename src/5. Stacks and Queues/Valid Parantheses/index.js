function isValid(s) {

    let stack = [];
    let openingParan = {
        '{': '}',
        '(': '}',
        '[': ']',
    };
    let closingParan = {
        '}': '{',
        ')': '(',
        ']': '[',
    };

    for (let i = 0; i < s.length; i++) {
        const lastStackEl = stack[stack.length - 1];
        if (openingParan[s[i]]) {
            stack.push(s[i]);
        } else if (closingParan[s[i]] === lastStackEl) {
            stack.pop();
        } else {
            return false;
        }
    }

    return !stack.length;
}

export {
    isValid
}



// { } [ ] { } [ { } ] )

// stack =   [ 
// last el =  

// stack =  { [ { ( 
