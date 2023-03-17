
  
  //Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.
  
  const numbers = [12, 23, 4, 2, 11, 21] 
  
  const sumOfEvenNumbers = arrOfNum => arrOfNum.reduce((acc, curr) => curr % 2 === 0? acc + curr : acc , 0)
  
  console.log(sumOfEvenNumbers(numbers))
  // Output: 18
  
  //Write an ES6 function that takes an array of objects representing students with properties name and score, and returns the average score of all the students using the reduce function.
  const students2 = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ];
  
  const len = students2.length
  
  const getAverageScore = arrOfStud => arrOfStud.map((obj) => obj.score).reduce((acc, curr, idx) => idx === len-1? (acc + curr)/len : acc + curr, 0)
  

  console.log(getAverageScore(students2)); 
  // Output: 82.5
  
  // Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns the total cost of all the products using the reduce function.
  
  const products3 = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
  ];
  
  const getTotalCost = prod => prod.reduce((acc, curr) => acc + curr.price*curr.quantity, 0)
  
  console.log(getTotalCost(products3)); 
  // Output: 150
  
  // Write an ES6 function that takes an array of strings and returns a single string that is the concatenation of all the strings using the reduce function.
  const strings = ['Hello', ' ', 'world', '!'];
  
  const concatenateStrings = arrOfStr => arrOfStr.reduce((acc, curr) => acc + curr)
  
  
  console.log(concatenateStrings(strings)); 
  // Output: "Hello world!"
  
  // Write an ES6 function that takes an array of numbers and returns the minimum number using the reduce function.
  const numbers4 = [10, 5, 8, 3, 6];
  const len1 = numbers4.length
  
  const getMinimumNumber = num => num.reduce((acc, curr) => curr < acc ? curr : acc, numbers4[0] )
    
  
  console.log(getMinimumNumber(numbers4)); 
  // Output: 3
  

  // Given an array, write an ES6 function that returns the total length of all the strings in an array.
const strings2 = ["apple", "banana", "cherry", "date", "blueberry"];

const totalLength = arr => arr.reduce((acc, curr) => acc + curr.length, 0)
console.log(totalLength(strings2))

// Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array
const numbers2 = [1, 2, 3, 4, 5];

const sumSquares = arr => arr.reduce((acc, curr) => acc + curr*curr)

console.log(sumSquares(numbers2));
 // Output: 55 

// Write an ES6 function that calculates and returns the total value of all items in an array of objects.
const items = [
  { name: "Item 1", price: 10 },
  { name: "Item 2", price: 20 },
  { name: "Item 3", price: 30 }
];
const totalValue = arr => arr.reduce((acc, curr) => acc + curr.price, 0)

console.log(totalValue(items)); 
// Output: 60

//Write an ES6 function that takes an array of strings as input and concatenates them into a single string


const concatStrings = arr => arr.reduce((acc, curr) => acc + curr)

console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'

//Write an ES6 function to multiply and return all the elements of a given array.
const numbers1 = [1, 2, 3, 4, 5];

const product = arr => arr.reduce((acc, curr) => acc *curr)

console.log(product(numbers1));
// Output: 120

//Write an ES6 function that takes an array of strings and returns the longest string.

const strings1 = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
const longestString = str => str.reduce((acc, curr) => acc.length > curr.length ? acc : curr)

console.log(longestString(strings1)); 
// Output: 'Haule Haule'

//Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.
const people = [
			{name: 'Jeena', age: 25}, 
			{name: 'Priya', age: 30}, 
			{name: 'Naina', age: 45}
]
const oldestPersonName = arr => arr.reduce((acc, curr) =>{
  let name = ((acc.age > curr.age) ? acc : curr).name
  return name
})
   

console.log(oldestPersonName(people)); 
// Output: 'Naina'

//Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.
const people1 = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 40 }
];

const getAverageAge = arr => arr.reduce(({avg}, curr,idx) => {
  return {
    avg : (curr.age + idx * avg) / (idx + 1),
  }
}, {avg : 0})

console.log(getAverageAge(people1));
// Output: { averageAge: 32.5 }

//Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products = [
  { name: "Bread", price: 10, quantity: 2 },
  { name: "Clips", price: 20, quantity: 5 },
  { name: "Knife", price: 30, quantity: 1 },
  { name: "Slipper", price: 40, quantity: 3 }
];

const findMostExpensiveProduct = arr => arr.reduce((acc, curr) =>  acc.price > curr.price ? acc : curr)

console.log(findMostExpensiveProduct(products)); 
// { name: "Slipper", price: 40, quantity: 3 }


//Write an ES6 function that takes an array of strings and returns an object with the count of each string.
//one way
const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];

const countStrings1 = arr => arr.reduce((acc, curr) => {
  curr in acc ? acc[curr] += 1 : acc[curr] = 1
  return acc
  
}, {})

//second way
const countStrings2 = arr => arr.reduce((acc, curr) => ({...acc, [curr]: (acc[curr] ?? 0) + 1}), {})
  
console.log(countStrings1(fruits));

// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 }

//Write an ES6 function that takes an array of objects containing car information (make, model, year) and returns an array with only the car model that were made after the year 2012.
const cars2 = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Civic", year: 2012 },
  { make: "Toyota", model: "Camry", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2018 },
];

const getCarModel = arrOfCars => arrOfCars.reduce((acc, {model, year}) => year > 2012 ? [...acc, model] : acc, [] ) 


const carModels = getCarModel(cars2);
console.log(carModels);
// Output: ["Camry", "Mustang"]
  

//Write an ES6 function that takes an array of objects representing books with properties title, author and pageCount. Return the all book titles that have more than 500 pages.
const books1 = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
];

const getTitlesWithMoreThan500Pages = arrOfBooks => arrOfBooks.reduce((acc, {title, pageCount}) => pageCount > 500 ? [...acc, title] : acc, [] )



const booksWithMoreThan500Pages = getTitlesWithMoreThan500Pages(books1);
console.log(booksWithMoreThan500Pages); 
// Output: [ 'The Lord of the Rings', 'The Name of the Wind' ]


//Write an ES6 function that takes an array of objects containing Bollywood movie information (title, director, year, rating) and returns an array with only the movie titles that were made before 1990 and has a rating above 8.0.

const bollywoodMovies1 = [
  { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
  { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
  { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
  { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
  { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
  { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
  { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
];

const getBestOldBollywoodMovies1 = arrOfObj => arrOfObj.reduce((acc, {title, rating, year}) => rating > 8 && year < 1990 ? [...acc, title] : acc, [])



const bestOldMovies1 = getBestOldBollywoodMovies1(bollywoodMovies1);
console.log(bestOldMovies1); // Output: ['Sholay', 'Parinda']