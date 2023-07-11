const arr=["hello", 45, 67, 34.98, true];

console.log(arr.length);
console.log(typeof arr);

const movies=["Avengers", "Justice League", "Pushpa", "Jawan", "OMG", "War", "Batman", "Thor"];

// Indexing.
console.log(movies[0]);
console.log(movies.at(-2));
console.log(movies.indexOf("Pushpa"));

// slicing
console.log(movies.slice(2,5));
console.log(movies.slice(2));

// prints all the array elements.
console.log(movies.slice());

// adding new element and deleting new element
movies.push("Baby Shark"); // add at end of an array using push() method
movies.unshift("Shershah") // add at start of an array.
console.log(movies);

movies.pop();
movies.shift();
console.log(movies);

// splicing
movies.splice(3,1); // removes the elements - first param is the index from which the element
// should be removed & second parameter specifies how many elements including the specifies index.

console.log(movies);

// spread operator
console.log([...movies, "Superman", "Wonder Woman"]);

// write syntax to exclude element on index 4.
movies.splice(4,1);
console.log(movies);
