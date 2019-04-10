// Write a console.log statement saying "Hello World!" for each language that you know.
console.log("indonesian // Halo, dunia!");
console.log("italian // Ciao, mondo!");
console.log("spanish // Hola, mundo!");
console.log("english // hello world!");
console.log("persian // dorood donya!");
console.log("greec // Γειά σου Κόσμε!");
//console.log('I'm awesome');solov the problem.
let msg = 'I\'m awesome';
//Declare a variable x and initialize it with an integer, using these exact steps:
let x = 5;
//Add a console.log statement that explains that explains in words what you think the value of x is
console.log(typeof x);
console.log(x);
// Declare a variable y and assign a string to it.
let y = "I\'m a string";
// console.log the variable y
console.log(y);
//cheke type of valiu of y.
console.log(typeof y);
let z = (7.25);
console.log(z);
let a = (7.53);
console.log(a);
//now we have z and a find a way to compare the two values and store the highest of the two in a new variable.
let f = Math.max(a, z);
console.log(f);
//Declare an empty array. Make sure that the name you choose indicates 'plurality',
let plurality = ["Audi", "Volvo", "BMW"];
//checke typeof plurality.
console.log(typeof plurality);
console.log(plurality);
//Create an array that has your favorite animals inside.
let favoritAnimal = ["hen", "sheep", "dog"];
console.log(favoritAnimal);
//Add a statement that adds Daan's favorite animal ('baby pig' , 'cat' , 'panda') to the existing array
favoritAnimal.push("cat" , "baby pig" , "panda");
console.log(favoritAnimal);
//Let's consider the following string: let myString = "this is a test".
let myString = "this is a test";
console.log(myString);
//Find a way to get the length of myString.
console.log(myString.length);

// Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
if( typeof(plurality) == typeof(favoritAnimal)){
    console.log('SAME TYPE');
}else{
    alert("is not the same");
};

//for test matematic it give remainder(baghimande )
x = x % 2;
console.log(x);

// Can you store multiple types in an array? Numbers and strings? Make an example that illustrates your answer.

let myArray = ["cat" , 5 ];

//write program do this  6/0 === 10/0 what's the result

let b = 6 ;
let d = 10 ;
let c = 0 ;
let k = b/c;
let r = d/c;
console.log(k === r);





