// Tuple
// Tuple types allow you to express an array with a fixed number of elements whose types are known,
// but need not be the same. For example, you may want to represent a value as a pair of a
// string and a number,

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
// Type 'number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
