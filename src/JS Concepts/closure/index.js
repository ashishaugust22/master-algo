// https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/
// https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8

// Closure is when a function is able to remember and access its lexical scope even when 
// that function is executing outside its lexical scope.

// They’re obviously closely tied to the concept of lexical scoping, which MDN defines as 
// “how a parser resolves variable names when functions are nested”. 
// Let’s look at a practical example to better illustrate this:

// Example 0
function useState(initialValue) {
    var _val = initialValue; // _val is a local variable created by useState
    function state() {
        // state is an inner function, a closure
        return _val; // state() uses _val, declared by parent funciton
    }
    function setState(newVal) {
        // same
        _val = newVal; // setting _val without exposing _val
    }
    return [state, setState]; // exposing functions for external use
}
var [foo, setFoo] = useState(0); // using array destructuring
console.log(foo()); // logs 0 - the initialValue we gave
setFoo(1); // sets _val inside useState's scope
console.log(foo()); // logs 1 - new initialValue, despite exact same call