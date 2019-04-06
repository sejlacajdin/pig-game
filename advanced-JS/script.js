// Function constructor 
/*
var john={
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person= function(name, yearOfBirth, job){

    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    
}
// Inheritance
//1. Method
Person.prototype.calculateAge= function(){
    console.log(2016-this.yearOfBirth);
};
//2. Properties (not really common)
Person.prototype.lastName='Smith';

var john=new Person('John',1990,'teacher');
var jane= new Person('Jane',1969,'designer');
var mark=new Person('Mark', 1948,'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto={
    calculateAge: function(){
        console.log(2016-this.yearOfBirth);
    }
}

var john=Object.create(personProto);

john.name='John';
john.yearOfBirth=1990;
john.job='teacher';
*/

// Primitives vs objects

// Primitives
/*
var a=23;
var b=a;
a=46;
console.log(a);
console.log(b); //Each of the variables hold their copy of data. They do not reference anything

// Objects
var obj1={
    name: 'John',
    age: 26
}

var obj2=obj1;

obj1.age=30;

console.log(obj1.age);
console.log(obj2.age); //obj1 and obj2 variables hold a reference that point to the exact same object 
                       //in the memory. It's the same object.

// Functions
var age=27;
var obj={
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a,b){
    a=30;
    b.city='San Francisco';
}

change(age,obj);

console.log(age,obj.city);
*/

////////////////////////////////////
// Lecture: Passing functions as arguments 
/*
var years=[1990,1965,1937,2005,1998];

function arrayCalc(arr, fn){

    var arrRes=[];
    for(var i=0;i<arr.length;i++){
        arrRes.push(fn(arr[i])); //fn callback function
    }
    return arrRes;
}

function calculateAge(el){
    return 2016-el;
}

function isFullAge(el){
 return el>=18;
}

function maxHeartRate(el){

    if(el>=18 && el<=81)
return Math.round(206.9-(0.67*el));
else return -1;
}

var ages=arrayCalc(years,calculateAge);
console.log(ages);

var fullAges=arrayCalc(ages,isFullAge);
console.log(fullAges);

var rates=arrayCalc(ages,maxHeartRate);
console.log(rates);

document.getElementById("birth").textContent=years;
document.getElementById("ages").textContent=ages;
*/

//////////////////////////////////////////////7
// Lecture: Functions returning functions
/*
function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name+', can you please explain what UX design is?');
        }
    }else if(job==='teacher'){
        return function(name){
            console.log('What subject do you teach, '+name+'?');
        }
    }else{
        return function(name){
            console.log('Hello '+name+', what do you do?');
        }
    }
}

var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

//other way
interviewQuestion('teacher')('Mark');
*/

///////////////////////////////////
// Lecture: IIFE
/*
function game(){
    var score=Math.random()*10;
    console.log(score>=5);
}
game();
*/

//IIFE
/*
(function(){
    var score=Math.random()*10;
    console.log(score>=5);
})();

//We can pass the argument
(function(goodLuck){
    var score=Math.random()*10;
    console.log(score>=5-goodLuck);
})(5);
*/

/////////////////////////////////////
// Lecture: Closures
/*
function retirement(retirementAge){
    var a=' year left until retirement.'
    return function(yearOfBirth){
        var age=2016-yearOfBirth;
        console.log((retirementAge-age)+a);
    }
}

var retirementUS=retirement(66);
var retirementGermany=retirement(65);
var retirementIceland=retirement(67);
retirementUS(1990);
//retirement(66)(1990);
retirementGermany(1990);
retirementIceland(1990);


function interviewQuestion(job){
       return function(name){

        if(job==='designer')
        console.log(name+', can you please explain what UX design is?');
        else if(job==='teacher')
        console.log('What subject do you teach, '+name+'?');
        else 
        console.log('Hello '+name+', what do you do?');
       }
}

interviewQuestion('teacher')('John');
*/

////////////////////////////////////
//Lecture: Bind, call and apply
/*
var john={
name: 'John',
age:26,
job:'teacher',
presentation: function(style, timeOfDay){
    if(style==='formal')
    console.log('Good '+timeOfDay+', Ladies and gentlemen! I\'m '+this.name+', I\'m a '+this.job+' and I\'m '+this.age+' years old.');
    else if(style==='friendly')
    console.log('Hey! what\'s up? I\'m '+this.name+', I\'m a '+this.job+' and I\'m '+this.age+' years old. Have a nice '+timeOfDay+'.');
}
};

var emily={
    name:'Emily',
    age:35,
    job:'designer'
};
john.presentation('formal','morning');
//Call method
john.presentation.call(emily, 'friendly','afternoon');

//Apply method
//john.presentation.apply(emily,['friendly','afternoon']); //This is not gonna eork because our method doesn't expect to recieve an array as the input

//Bind method, carrying
var johnFriendly=john.presentation.bind(john,'friendly'); 
//This method returns a function, so the function will get stored in the johnFriendly variable
johnFriendly('morning'); //we didn't set the second argument
johnFriendly('night'); //bind allows us to present some arguments here

//Carrying- a technique in which we create a function based on another function, but with some present parameters

var emilyFormal=john.presentation.bind(emily,'formal');
emilyFormal('afternoon');



//task

var years=[1990,1965,1937,2005,1998];

function arrayCalc(arr,fn){
        var arrRes=[];
        for(var i=0;i<arr.length;i++){
            arrRes.push(fn(arr[i]));
        }
        return arrRes;
}

function calculateAge(el){
    return 2016-el;
}

function isFullAge(limit,el){
    return el>=limit;
}

var ages=arrayCalc(years,calculateAge);

//fn function is always called with only one argument
//FullAge function accepts two arguments
//Use the BIND method because allows us to create a copy of a function with a present argument

var fullJapan=arrayCalc(ages,isFullAge.bind(this,20));
console.log(ages);
console.log(fullJapan);
*/