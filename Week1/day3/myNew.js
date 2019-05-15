//   When the new keyword is placed in front of a function call, four things happen:

// A new object gets created by the constructor function.
// The new object gets linked to a different object.
// The new object gets bound as the this keyword within the constructor function call.
// If the constructor function does not return a value, JavaScript implicitly inserts return this; at the end of the constructor function’s execution.


function myNew(fn, args) {
    const newObj = {}; 
    fn.call(newObj); 
    Object.setPrototypeOf(newObj, fn.prototype); 
    fn.apply(this, [args]);

    return newObj; 
  }

