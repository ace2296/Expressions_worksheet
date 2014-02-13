//PROBLEM 1: Calculate how old Sparky the dog is in dog years compared to human years.

//Sparky's age in human years
var humanY = 3;
//Sparky's age in dog years
var dogY = humanY * 7;

//Print out Sparky's age in dog years
console.log("Spark is " + humanY + " human years old which is " + dogY + " in dog years.");


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
console.log("Each person ate " + portion + " slices of pizza at the party.");


//PROBLEM 3: Calculate how many left over slices Sparky will eat

var sparkySlices = slices * pizzas % people;

console.log("Sparky got " + sparkySlices + " slices of pizza.");


//PROBLEM 4: Calculate the average amount spent on groceries over the past 5 weeks.

//Individual amount spent over 5 weeks
var spent = [167 , 129 , 202 , 130 , 142];
//Total amount spent over 5 weeks
var total = spent[0] + spent[1] + spent[2] + spent[3] + spent[4];

var average = total / 5;

console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " per week.");


//PROBLEM 5: Calculate the final price of an item after a discount is applied to it.

var originalPrice = 40;
var discount = 0.15;
var item = "video game";
var tax = 0.07;
//How much money gets removed with a discount
var moneyOff = originalPrice * discount;

//How much the item is with a discount without tax added
var reducedPrice = originalPrice - moneyOff;

console.log(reducedPrice);

//How much the item is with a discount with tax added
var taxPrice = (tax * reducedPrice) + reducedPrice;

//Result
console.log("Your " + item + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + reducedPrice + " without tax, and $" + taxPrice + " with tax.");

