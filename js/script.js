//PROBLEM 1: Calculate how old Sparky the dog is in dog years compared to human years.

//Sparky's age in human years
var humanY = 3;
//Sparky's age in dog years
var dogY = humanY * 7;

//Print out Sparky's age in dog years
console.log("Spark is " + humanY + " " + "human years old which is " + dogY + " " + "in dog years.");


//PROBLEM 2: Calculate how much pizza each partygoer will get at the party.

//# of slices each pizza has
var slices = 12;
//# of people at the party
var people = 20;
//# of pizzas ordered
var pizzas = 4;

//Result of how many slices of pizza each person will receive
var portion = slices * pizzas / people;

//Print Result
console.log("Each person ate " + portion + " " + "slices of pizza at the party.");


//PROBLEM 3: Calculate how many left over slices Sparky will eat

var sparkySlices = slices * pizzas % people;

console.log("Sparky got " + sparkySlices + " " + "slices of pizza.");


//PROBLEM 4: Calculate the average amount spent on groceries over the past 5 weeks.

//Amount spent over 5 weeks
var spent = [167 , 129 , 202 , 130 , 142];

var total = spent[0] + spent[1] + spent[2] + spent[3] + spent[4];

var average = total / 5;

console.log("You have spent a total of $" + total + " " + "on groceries over 5 weeks. That is an average of $" + average + " " + "per week.");

