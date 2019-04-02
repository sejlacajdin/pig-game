///////////////////////////////////////
// Lecture: Hoisting


// functions
/*
calculateAge(1990);

function calculateAge(year){
    console.log(2016-year);
}

//Hoisting doesn't work for function expressions
var retirement= function(year){
    console.log(65-(2016-year));
}

retirement(1990);


// variables 

console.log(age);
var age=23; //stored in the global execution context object 

                                                              //these are two different object (age) with the same name and the results are different
function foo(){  //gets its own execution context object
    var age=65;
    console.log(age);
}

foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third() //scoping
    }
}

function third() {
    var d = 'John';
    console.log(a+d);
    console.log(a + b + c + d); //b and c are not defined, third function can not access variable c 
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this); //window object
/*
calculateAge(1985);

function calculateAge(year){ //this is a regular function code and not a method
    console.log(2018-year);
    console.log(this); //window object
}
//In a regular function code, the 'this' keyword always points to the window object
//The object that this function is attached to is the global object 
*/


//John object

var John={
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this); //John object, the 'this' keyword refers to the object that called the method 
  console.log(2018-this.yearOfBirth);
/*
  function innerFunction(){
      console.log(this); //window object because this is a regular function not a method 
  }

  innerFunction();*/
    }
}

John.calculateAge();



var mike={
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge=John.calculateAge; //METHOD BORROWING
//We don't need parenthesis, because these () are for calling a function, but now, 
//we simply treat the function as a variable 

mike.calculateAge();
//THIS VARIABLE IS ONLY ASSIGNED A VALUE WHEN THE OBJECT CALLS THE METHOD 
