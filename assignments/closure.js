// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const school = (index, arr) => {
  const getStudent = () => {
    return arr[index];
  }
  return getStudent;
}
let students = ['Emmy', 'Johnson', 'Pascal', 'Peta', 'Tygran', 'Melvin'];
console.log(school(4, students)());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0
  const counterFunction = () => {
    counter = counter += 1
    return counter
  }
  return counterFunction
};
const newCounter = counter();
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let counter = 0;
  return {
    increment: () => {
      counter = counter + 1
      return counter
    },
    decrement: () => {
      counter = counter - 1
      return counter
    }
  }
};
counterFactory();
let newVar = counterFactory();

console.log(newVar.increment());
console.log(newVar.increment());
console.log(newVar.decrement());
