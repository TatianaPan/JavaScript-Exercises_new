// Constructor to initialize the queue
const Queue = function(queue) {
    this.queue = queue;
  }
  
  // Adds element at the end of the queue
  Queue.prototype.enqueue = function(element) {
      let el = [];
      el[0] = element;
      let newQueue = this.queue.concat(el);
      this.queue = newQueue;
      return this.queue;
  }
  
  // Removes element from the front, and returns that element
  Queue.prototype.dequeue = function() {
      let firstElement = this.queue[0];
      let newQueue = this.queue.slice(1);
      this.queue = newQueue;
      return firstElement;
    // TODO
  }
  
  // Returns front-most element from queue, but doesn't remove it
  Queue.prototype.first = function() {
      return this.queue[0];
  }
  
  // Return true if queue has no elements in it, otherwise false
  Queue.prototype.isEmpty = function() {
    if (!this.queue.length) {
        return true;
    } else {
        return false;
    }
  }
  
  // Remove all elements from queue
  Queue.prototype.clear = function() {
    return this.queue = [];
  }

let queue1 = new Queue([9, 6, 23, 56, 18]);
// console.log(queue1.enqueue(76));
// console.log(queue1.dequeue());
// console.log(queue1);


