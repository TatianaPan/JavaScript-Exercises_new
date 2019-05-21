// Constructor to initialize the set
const Set = function(set) {
    this.set = set;
  }
  
  // inserts an element
  Set.prototype.insert = function(element) {
      if (!this.set.includes(element)) {
          this.set.push(element);
      } else {
          return this.set;
      }
      return this.set;
  }
  
  // removes an element
  Set.prototype.remove = function(element) {
      if (!this.set.includes(element)) {
          return -1;
      } else {
          let indexOfElement = this.set.indexOf(element);
          this.set.splice(indexOfElement, 1);
          return this.set;
      }
  }
  
  // checks if an element exists in the set
  Set.prototype.has = function(element) {
      for (let item of this.set) {
          if (item === element) {
              return true;
          } 
      }
      return false;
  }
  
  // returns array of all entries
  Set.prototype.all = function() {
      return this.set;
  }
  
  // returns the number of all entries
  Set.prototype.length = function() {
    return this.set.length;
  }

  set1 = new Set([2, 6, 0, 56, 190, 34]);
//   console.log(set1.insert(76));
//   console.log(set1.remove(190));
//   console.log(set1.has(56));
//   console.log(set1.length());
