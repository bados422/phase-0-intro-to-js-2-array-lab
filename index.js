// Write your solution here!
beforeEach(function () {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
  });
  // Appends a cat to the end of the cats array destructively
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  
  // Prepends a cat to the beginning of the cats array destructively
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  // Removes the last cat from the cats array destructively
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  // Removes the first cat from the cats array destructively
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  // Appends a cat to the end of the cats array non-destructively
function appendCat(name) {
    return [...cats, name];
  }
  
  // Prepends a cat to the beginning of the cats array non-destructively
  function prependCat(name) {
    return [name, ...cats];
  }
  
  // Removes the last cat from the cats array non-destructively
  function removeLastCat() {
    return cats.slice(0, cats.length - 1);
  }
  
  // Removes the first cat from the cats array non-destructively
  function removeFirstCat() {
    return cats.slice(1);
  }
  // Initial state
console.log(cats); // ["Milo", "Otis", "Garfield"]

// Destructive operations
destructivelyAppendCat("Tom");
console.log(cats); // ["Milo", "Otis", "Garfield", "Tom"]
cats = ["Milo", "Otis", "Garfield"]; // Reset manually for this example

destructivelyPrependCat("Jerry");
console.log(cats); // ["Jerry", "Milo", "Otis", "Garfield"]
cats = ["Milo", "Otis", "Garfield"]; // Reset manually for this example

destructivelyRemoveLastCat();
console.log(cats); // ["Milo", "Otis"]
cats = ["Milo", "Otis", "Garfield"]; // Reset manually for this example

destructivelyRemoveFirstCat();
console.log(cats); // ["Otis", "Garfield"]
cats = ["Milo", "Otis", "Garfield"]; // Reset manually for this example

// Non-destructive operations
console.log(appendCat("Tom")); // ["Milo", "Otis", "Garfield", "Tom"]
console.log(prependCat("Jerry")); // ["Jerry", "Milo", "Otis", "Garfield"]
console.log(removeLastCat()); // ["Milo", "Otis"]
console.log(removeFirstCat()); // ["Otis", "Garfield"]

// Ensure original array is not modified by non-destructive functions
console.log(cats); // ["Milo", "Otis", "Garfield"]
