// Define the cats array
let cats = ["Milo", "Otis", "Garfield"];

// Define destructivelyAppendCat function
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Define destructivelyPrependCat function
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Define destructivelyRemoveLastCat function
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Define destructivelyRemoveFirstCat function
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Define appendCat function
function appendCat(name) {
  return [...cats, name];
}

// Define prependCat function
function prependCat(name) {
  return [name, ...cats];
}

// Define removeLastCat function
function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

// Define removeFirstCat function
function removeFirstCat() {
  return cats.slice(1);
}
// Initial state
console.log(cats); // ["Milo", "Otis", "Garfield"]

// Destructive operations
destructivelyAppendCat("Tom");
console.log(cats); // ["Milo", "Otis", "Garfield", "Tom"]

destructivelyPrependCat("Jerry");
console.log(cats); // ["Jerry", "Milo", "Otis", "Garfield", "Tom"]

destructivelyRemoveLastCat();
console.log(cats); // ["Jerry", "Milo", "Otis", "Garfield"]

destructivelyRemoveFirstCat();
console.log(cats); // ["Milo", "Otis", "Garfield"]

// Non-destructive operations
console.log(appendCat("Tom")); // ["Milo", "Otis", "Garfield", "Tom"]
console.log(prependCat("Jerry")); // ["Jerry", "Milo", "Otis", "Garfield"]
console.log(removeLastCat()); // ["Milo", "Otis"]
console.log(removeFirstCat()); // ["Otis", "Garfield"]

// Ensure original array is not modified by non-destructive functions
console.log(cats); // ["Milo", "Otis", "Garfield"]
