// Constructor to initialize the stack
const Stack = function(stack) {
    this.stack = stack;
  }
  
  // Pushes a new element on top of the stack
  Stack.prototype.push = function(element) {
      let newArr = [];
      newArr[0] = element;
      let newStack= newArr.concat(this.stack);
      this.stack = newStack
      return this.stack;
  }
  
  // Removes the top most element from the stack and returns that element
  Stack.prototype.pop = function() {
      let top = this.stack[0];
      this.stack.splice(0, 1);
      return top;
  }
  
  // Returns the top-most element, but doesn't change the stack
  Stack.prototype.top = function() {
      return this.stack[0];
  }
  
  // Returns true if stack has no elements in it, otherwise false
  Stack.prototype.isEmpty = function() {
      if (!this.stack.length) {
          return true;
      } else {
          return false;
      }
  }
  
  Stack.prototype.clear = function() {
    let empty = [];
    return this.stack = empty;
  }

  let stack1 = new Stack([1, 2, 5, 7, 0]);
 
  //console.log(stack1.push(89));
  //console.log(stack1.clear());
  //console.log(stack1.isEmpty());
  //console.log(stack1);
  //console.log(stack1.push(98));
  //console.log(stack1.pop());
  //console.log(stack1);