/*************************
 * Variables and data types 
 */
/*
var firstName= 'John'; 
console.log(firstName);

var lastName="Smith";
var age=28;

var fullAge=true;
console.log(fullAge);

 var job;
 console.log(job);

 job="Teacher";
 console.log(job);
*/

/*************************
 * Variable mutation and type coercion
 */
/*
 var firstName='John';
 var age=28;

 //Type coercion
 console.log(firstName+' '+ age);

 var job, isMarried;

 job='teacher';
 isMarried=false;
  
 console.log(firstName+' is a '+age+' year old '+ job+ '. Is he married? ' + isMarried );

 //Variable mutation

 age='twenty eight';

 alert(firstName+' is a '+age+' year old '+ job+ '. Is he married? ' + isMarried );

 var lastName=prompt('What is his last name?');
 console.log(firstName+' '+ lastName);
*/
 /************************
  * Basic operators 
  */

  /*
  var year, yearJohn, yearMark, ageJohn, ageMark;
   now=2018;
   ageJohn=28;
ageMark=33;

   //Math operators
 yearJohn= now-ageJohn;
 yearMark=now-ageMark;
console.log(yearJohn);
console.log(now+ 2);
console.log(now* 2);
console.log(now/10);

//Logical operators 

var johnOlder= ageJohn>ageMark;
console.log(johnOlder);

//typeof operator

console.log(typeof johnOlder);

/*************************
 * Operator precedence
 */
/*
 var now=2018;
 var yearJohn=1989;
 var fullAge =18;

 //Multiple operators 
 var isFullAge= now-yearJohn >=fullAge;
console.log(isFullAge);

// Grouping
var ageJohn=now-yearJohn;

var ageMark=35;
var average=(ageJohn+ageMark)/2;
console.log(average);

// Multiple assignments
var x,y;
x=y=(3+5)*4-6; //8*4-6 //32-6 //26
console.log(x,y);
*/

/******************************
 * CODING CHALLENGE 1
 */

 /*var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn, heigherBMI;

 massMark=85;
 massJohn=75;
 heightJohn=1.85;
 heightMark=1.80;

 BMIMark=massMark/(heightMark*heightMark); 
 BMIJohn=massJohn/(heightJohn*heightJohn);
console.log(BMIMark, BMIJohn);

 heigherBMI=BMIMark>BMIJohn;

 console.log("Is Mark's BMI higher than John's? "+ heigherBMI );
*/
 /*****************************
  * If / else statements 
  */
/*
var firstName='John';
var civilStatus='single';

if(civilStatus==='married'){
    console.log(firstName+ ' is married!');
} else {
    console.log(firstName+ ' will hopefully marry soon :)');
}

var isMarried= true;
if(isMarried){
    console.log(firstName+ ' is married!');
} else {
    console.log(firstName+ ' will hopefully marry soon :)');
}


var massMark, massJohn, heightMark, heightJohn, BMIMark, BMIJohn /*heigherBMI*/;
/*
 massMark=85;
 massJohn=75;
 heightJohn=1.85;
 heightMark=1.80;

 BMIMark=massMark/(heightMark*heightMark); 
 BMIJohn=massJohn/(heightJohn*heightJohn);

 if(BMIMark>BMIJohn){
     console.log('Mark\'s BMI is higher than John\'s.');
 }else{
    console.log('John\'s BMI is higher than Mark\'s.');

 }

*/


 /****************************
  * Boolean logic
  */
/*
  var firstName='John';
  var age=20;

  if(age<13){
      console.log(firstName+ ' is a boy.');
  } else if(age >=13 && age<20){ //Between 13 and 20  = age>=13 AND age<20
    console.log(firstName+ ' is a teenager.');
  } else if(age>=20 && age<30){
    console.log(firstName+ ' is a young man.');
  }
  else {
      console.log(firstName+ ' is a man.');
  }
  */

  /*******************************
   *  The Ternary Operator and Switch Statements
   */

/*
   var firstName='John';
   var age=16;

   // Ternary operator
   age>=18 ? console.log(firstName+ ' drinks beer.'): console.log(firstName+ ' drinks juice.'); 

var drink = age>=18 ? 'beer': 'juice';
console.log(firstName+' drinks '+ drink ); 
*/
// Switch statement
/*
var job='teacher';
switch(job){

    case 'teacher':
    console.log(firstName+ ' teaches kids how to code.');
    break;
    case 'driver': 
    console.log(firstName+ ' drives an uber in Lisbon.');
    break;
    case 'designer':
    console.log(firstName+ ' designs beautiful websites.');
    break;

    default: 
    console.log(firstName+ ' does something else.');
}


  switch(true){

    case age<13: 
    console.log(firstName+ ' is a boy.');
break;
case age>=13 && age<20: 
console.log(firstName+ ' is a teenager.');
break;
case age>=20 && age<30: 
console.log(firstName+ ' is a young man.');
break;
default: 
console.log(firstName+ ' is a man.');
  }
  */


  /******************************
   * truthy and Falsy values and equality operators 
   */
/*
   var height;

   if(height){

    console.log('Variable is defined');
   }else{

    console.log('Variable has NOT been defined');
   }
   */

   /***********************************
    *  CODING CHALLENGE 2
    */
/*
    var MikeTeamAverage= (116+94+123)/3;
    var JohnTeamAverage= (89+120+103)/3;

    if(MikeTeamAverage>JohnTeamAverage){
        console.log('The winner is Mike\'s team with '+ MikeTeamAverage+' average score.');
    } else if(JohnTeamAverage>MikeTeamAverage){
        console.log('The winner is John\'s team with '+ JohnTeamAverage+' average score.');

    }else{
        console.log('They have the same average score.');
    }

    var MaryTeamAverage=(97+134+105)/3;
    if(MikeTeamAverage>JohnTeamAverage && MikeTeamAverage>MaryTeamAverage){
        console.log('The winner is Mike\'s team with '+ MikeTeamAverage+' average score.');

    }else if(JohnTeamAverage>MikeTeamAverage && JohnTeamAverage>MaryTeamAverage){
        console.log('The winner is John\'s team with '+ JohnTeamAverage+' average score.');

    }else if(MaryTeamAverage>MikeTeamAverage && MaryTeamAverage>JohnTeamAverage){
        console.log('The winner is Mary\'s team with '+ MaryTeamAverage+' average score.');
    } else{
        console.log('There is a draw.');
    }
    */


    /******************************
     * Functions
     */
/*
     function calculateAge(birthYear){

        return 2018 - birthYear;
     }

     var ageJohn=calculateAge(1990);
     var ageMark=calculateAge(1948);
     var ageJane=calculateAge(1969);
     console.log(ageJohn, ageMark, ageJane);

     function yearsUntilRetirement(birthYear, firstName){

        var age=calculateAge(birthYear);
        var retirement= 65-age;
        if(retirement>0){
        console.log(firstName+' retires in '+ retirement+ ' years. ');
    }else{
        console.log(firstName+' is already retired. ');
    }
     }

     yearsUntilRetirement(1990,'John');
     yearsUntilRetirement(1948,'Mark');
     yearsUntilRetirement(1969,'Jane');
     */

     /*********************************+
      * Function Statements and Expressions
      */

      // Function expression

      /*
    var whatDoYouDo= function(job,firstName){
switch(job){
    case 'teacher':
    return firstName+ ' teaches kids how to code';
    case 'driver':
    return firstName+ ' drives a cab in Lisbon.';
    case 'designer':
    return firstName+ ' designs beautiful websites.';
    default:
    return firstName+ ' does something else.';

}
    }

  console.log( whatDoYouDo('teacher', 'John'));
  console.log( whatDoYouDo('designer', 'Jane'));
  console.log( whatDoYouDo('retired', 'Mark'));
*/

/*****************************************
 *  Arrays
 */

 /*
 //Initialize new array
 var names=['John', 'Mark','Jane'];
 var years=new Array(1990,1969,1948);

 console.log(names[0]);
 console.log(names);
 console.log(names.length);

 //Mutate array data
 names[1]='Ben';
 names[names.length]='Mary';
 console.log(names);

 //Different data types

 var john=['John','Smith',1990,'teacher',false];
 john.push('blue');
 console.log(john);
 john.unshift('Mr.');
 console.log(john);

 john.pop();
 console.log(john);

 john.shift();
 console.log(john);

 console.log(john.indexOf(1990));

 var isDesigner=john.indexOf('designer')===-1 ? 'John is NOT a designer': 'John IS a designer';
 console.log(isDesigner);
 */


 /*****************************
  * CODING CHALLENGE 3
  */

  /*
  var tipCalculator= function(bill){

    if(bill<50){
        return bill*20/100;
    } else if(bill>=50 && bill<200){
        return bill*15/100;
    }else{
        return bill*10/100;
    }
  }
var allThreeTips=[];
  allThreeTips.push( tipCalculator(124));
  allThreeTips.push( tipCalculator(48));
  allThreeTips.push( tipCalculator(268));

  var finalPaidAmounts=[];

  finalPaidAmounts.push(allThreeTips[0]+124);
  finalPaidAmounts.push(allThreeTips[1]+48);
  finalPaidAmounts.push(allThreeTips[2]+268);

  console.log('All three tips:'+ allThreeTips);
  console.log('All three final paid amounts: '+finalPaidAmounts);
  */

  /*
  // Object literal
  var john={
      firstName: 'John',
      lastName: 'Smith',
      birthYear:1990,
      family: ['Jane','Mark','Bob', 'Emily'],
      job:'teacher',
      isMarried: false
  };
 
  console.log(john.firstName);
  console.log(john['lastName']);
  var x='birthYear';
  console.log(john[x]);

  john.job='designer';
  john['isMarried']=true;
  console.log(john);

  //new Object syntax

  var jane=new Object();
  jane.firstName='Jane';
  jane.birthYear=1969;
  jane['lastName']='Smith';
  console.log(jane);
  */


  /****************************
   * Objects and methods
   */

   /*
   var john={
       firstName:'John',
       lastName:'Smith',
       birthYear:1990,
       family:['Jane','Mark', 'Bob','Emily'],
       job:'teacher',
       isMarried:false,
       calcAge: function(){
           this.age= 2018-this.birthYear;
       }
   };

john.calcAge();
console.log(john);
*/


/***************************
 * CODING CHALLENGE 4
 */
/*
 var Mark={

    firstName:'Mark',
    lastName:'Smith',
    mass: 79,
    height: 1.80,
    calcBMI:function(){
        this.BMI= this.mass/(this.height*this.height);
        return this.BMI;
    }
 };

 var John={

    firstName:'John',
    lastName:'Something',
    mass: 89,
    height: 1.90,
    calcBMI:function(){
        this.BMI=this.mass/(this.height*this.height);
        return this.BMI;
    }

 };

 if(Mark.calcBMI()>John.calcBMI()){
     console.log('Highest BMI has '+ Mark.firstName+' '+Mark.lastName+ ' and it is '+Mark.BMI);
 }else if(John.BMI>Mark.BMI){
    console.log('Highest BMI has '+ John.firstName+' '+John.lastName+ ' and it is '+John.BMI);

 }else{
     console.log('They have the same BMI.');
 }
 */

 /************************
  * Loops and iteration
  */

  //for loop
  /*
  for(var i=0;i<10;i++)
  console.log(i);

  for(var i=1;i<=20;i+=2)
  console.log(i);

  var john=['John','Smith',1990,'designer',false];
  for(var i=0; i< john.length; i++)
  console.log(john[i]);

  //while loop

  var i=0;
  while(i<john.length){
      console.log(john[i]);
      i++;
  }
  */

  //continue and break statements
/*
  var john=['John','Smith', 1990,'designer',false, 'blue'];
  for(var i=0;i<john.length;i++){
      if(typeof john[i]!=='string') continue;
      console.log(john[i]);
  }
  */

  //Looping backwards
  /*
var john=['John','Smith', 1990,'designer',false, 'blue'];

for(var i=john.length-1;i>=0;i--)
console.log(john[i]);*/

/**********************
 * CODING CHALLENGE 5
 */

 var john={

  biils:[124,48,268,180,42],

  calcTip: function(){

    this.tips=[];
    this.paidAmounts=[];
   
      for(var i=0;i<this.biils.length;i++){
        var percentage;
          var bill=this.biils[i];
        if(bill<50)
           percentage=.2;
            else if(bill>=50 && bill<200)
           percentage=.15;
           else  
           percentage=.1;

        
            this.tips[i]=bill*percentage;
            this.paidAmounts[i]=this.biils[i]+this.tips[i];
    }
  }
 };
 console.log('John:');
 john.calcTip();
 console.log('Bills: '+john.biils);
 console.log('Tips '+john.tips);
 console.log('Paid amount: '+john.paidAmounts);

 //EXTRA AFTER FINISHING

var Mark={
    bills: [77,375,110,45],
    tips:[],
    calcTips: function(){

        var calculated=0;
        for(var i=0;i<this.bills.length;i++){

            if(this.bills[i]<100)
            calculated=this.bills[i]*0.2;
            else if(this.bills[i]>=100 && this.bills[i]<300)
            calculated=this.bills[i]*0.1;
            else 
            calculated=this.bills[i]*.25;

            this.tips[i]=calculated;
        }
    }
}

Mark.calcTips();
console.log('Mark:');
console.log('Bills: '+Mark.bills);
console.log('Tips: '+Mark.tips);

//average
var average=function(bills){
    var sum=0;
    for(var i=0;i<bills.length;i++)
sum+=bills[i];
    
return sum/bills.length;
}


if(average(john.tips)>average(Mark.tips))
console.log('John\'s family paid the highest tips on average which is '+average(john.tips));
else
console.log('Mark\'s family paid the highest tips on average which is '+average(Mark.tips));
