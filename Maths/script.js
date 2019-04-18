/*
2. Zadatak:
Učitati dva različita broja (koristiti funkciju prompt). Ako su oba parna, podijeliti veći broj sa
manjim. Ako su oba neparna, od većeg broja oduzeti manji. Ispisati rezultat svake operacije.
*/
/*
var br1= parseInt(prompt("Unesite prvi broj: "),10);
var br2=parseInt(prompt("Unesite drugi broj: "),10);
var result;

if(br1%2===0 && br2%2===0){
result= br1>br2 ? br1/br2: br2/br1;
}else if(br1%2!==0 && br2%2!==0){
    result= br1>br2 ? br1-br2 : br2-br1;
}

console.log("Rezultat operacije je: "+result);
*/


/*
3. Zadatak:
Zatražiti od korisnika unos godine rođenja (koristiti funkciju prompt). Izračunati starost
korisnika i ispisati odgovarajuću poruku (‘Punoljetni ste’ / ‘Niste punoljetni’). Ne uzeti u obzir
ako korisnik unese nevaljanu godinu, u tom slučaju ispisati ‘Pogrešan unos’.
*/
/*
var godinaRodjenja= parseInt(prompt("Unesite godinu rodjenja: "),10);

if(godinaRodjenja>1900 && godinaRodjenja<=2019){
    var starost=2019-godinaRodjenja;

    if(starost>=18){
console.log("Punoljetni ste.");
    }else{
console.log("Niste punoljetni.");
    }
}else{
    console.log("Pogresan unos.");
}
*/


/*
4. Zadatak
Unesite dva cijela troznamenkasta broja. Ukoliko uneseni broj nije troznamenkast, odbaciti ga.
Zbrojiti zadnje znamenke svakog unesenog broja i ispisati broj.
*/
/*
var num1= parseInt(prompt("Unesite prvi troznamenkasti broj: "),10);
var num2=parseInt(prompt("Unesite drugi troznamenkasti broj: "),10);
var sum=0;

if(num1>99 && num1<=999){
    sum+=num1%10;
}
if(num2>99 && num2<=999){
    sum+= num2%10;
}

console.log("Suma zadnjih znamenki je-> "+sum);
*/


/*
5. Zadatak:
Napraviti jednostavan kalkulator. Omogućiti korisniku da pomoću prompt funkcije unese dva
broja i operaciju (+, -, *, /). Ispišite odgovarajuću poruku sa rezultatom, a ako operacija nije
podržana ispišite ‘Operacija ne postoji’. (Pripaziti kod operacije dijeljenja).
*/

/*
var num1=parseInt(prompt("Unesite prvi broj: "),10);
var num2=parseInt(prompt("Unesite drugi broj: "),10);

var operacija=prompt("Unesite jednu od sljedecih operacija: +, -, *, /");
var result=0;
switch(operacija){

    case "+": result=num1+num2; break;
    case "-": result=num1-num2; break;
    case "*": result=num1*num2; break;

    case "/": 
    if(num2!==0){
        result=num1/num2;
    }else{
        result='Infinity';
        console.log("Nije moguće dijeliti s nulom.");
    }
    break;

    default: result='error';
    console.log("Operacija ne postoji.");
}

console.log("Rezultat operacije \""+ operacija+ "\" je: "+result);
*/

///////////////////////////////////////////
// While petlja 

/*
1. Zadatak
Napisati program koji od korisnika traži unos 5 pozitivnih brojeva, zatim ispisuje njihov
umnožak. Ukoliko ih u više od 10 pokušaja nije uspio unijeti, ispisati poruku o grešci i završiti
program.
 */
/*
 var number;
 var result=1;
var positiveCount=0;
var tryCount=0;

while(positiveCount<=5 && tryCount<=10){

    number=parseInt(prompt("Unesite pozitivan broj: "),10);

    if(number>0){
    positiveCount++;
    result*=number;
    }
    tryCount++;
}

if(positiveCount>=5){
    console.log("Result: "+result);
}else{
    console.log("Error");
}
*/

/*
2. Zadatak
Napisati program u kojem korisnik unosi tri pozitivna troznamenkasta broja. Ako broj nije
pozitivan, odbaciti ga. Ispisati zbroj prvih znamenki unesenih brojeva. (koristiti do-while petlju)
*/
/*
var number;
var sum=0;
var count=0;
do{

    number=parseInt(prompt("Unesite troznamenkasti broj: "),10);

    if(number>99 && number<=999){
       sum+=Math.round((number/100));
       count++;
    }
}while(count<3);

console.log("Zbroj prvih znamenki je: "+sum);
*/

/*
1. Zatražiti od korisnika unos dva troznamenkasta broja. Ispisati sve parne brojeve koji se nalaze
u rasponu između ta dva broja.
*/
/*
var num1, num2,temp;

do{

    num1=parseInt(prompt("Unesite prvi troznamenkasti broj: "),10);
    num2=parseInt(prompt("Unesite drugi troznamenkasti broj: "),10);
}while(num1<=99 || num2>999 || num2<=99 || num2>999);

if(num1>num2){
    temp=num1;
    num1=num2;
    num2=temp;
}

for(var i=num1;i<num2;i++){
    if(i%2==0)
     console.log(i);
}
*/

////////////////////////////////////////////
// Functions

/*
1. Zadatak
Napisati funkciju min() koja prima dva broja kao argumente i vraća manji od njih.
*/
/*
function min(a,b){
    return a<b ? a :b;
}

console.log("Manji broj-> "+min(5,4));
*/

/*
2. Zadatak
Napišite funkciju za računanje broja na zadanu potenciju. Funkcija prima dva parametra, broj i
potenciju, te vraća rezultat. Zatražiti od korisnika unos broja i potencije, te ispisati rezultat.
*/
/*
function calculate(num,pot){
    return Math.pow(num,pot);
}

var num=parseInt(prompt("Unesite broj: "),10);
var pow=parseInt(prompt("Unesite potenciju: "),10);

console.log(num+"^"+pow+" ="+calculate(num,pow));
*/

//////////////////////////
// Rekursion

/*
1. Zadatak
Napisati funkciju countdown (rekurzivno) koja prima jedna pozitivan broj i ispisuje sve brojeve
od tog broja do 0.
*/
/*
function countdown(num){
    if(num<=0)
    return num;
    else{
       console.log(num);
      return countdown(num-1);
    }
};

countdown(10);
*/
/*
Napraviti funkciju factorial koja računa faktorijele. (primjer: 5! -> 1*2*3*4*5)
 */
/*
 function factorial(num){

    if(num<0)
    return -1;
   else if(num===0)
    return 1;
    else
    return num*factorial(num-1);  
}

var num=parseInt(prompt("Unesite broj: "),10);
console.log("Faktorijel broja "+num+" je: "+factorial(num));
*/

//////////////////////////////////
// Arrays

/*
1. Zadak:
Deklarirati prazan niz i popuniti ga sa 50 cijelih brojeva (koristiti for petlju). Zatim u drugoj
petlji uraditi računicu prosječne vrijednosti članova niza.
*/
/*
var array=[];
var average=0;
var sum=0;

for(var i=0;i<50;i++)
array.push(i);

sum=array.reduce(function(total,num){
    return total+num;
});

console.log(sum);
console.log(sum/50);
*/
// OR
/*
var array=[];
var sum=0;

for(var i=0;i<50;i++)
array.push(i);

for(var i=0;i<array.length;i++)
sum+=array[i];

console.log("Prosjecna vrijednost iznosi "+sum/array.length);
*/


/*
2. Zadatak:
Učitati brojeve u niz sve dok im zbroj ne prijeđe 150. Ispisati niz sortiran od najvećeg prema
najmanjem.
*/
/*
var arr=[];
var num, sum=0;

while(sum<=150){
    num=parseInt(prompt("Unesite broj: "),10);
    sum+=num;
    arr.push(num);
}

console.log(arr.sort(function(a,b){
    return b-a;
}));
*/

/*
3. Zadatak:
Zatražiti od korisnika unos nekog stringa. Ispisati koliko ima samoglasnika u tom stringu.
*/
/*
var recenica;
var samoglasnici=['a','e','i','o','u'];
var brojac=0;
recenica=prompt("Unesite tekst: ");

recenica.toLowerCase(recenica);
for(var i=0;i<recenica.length;i++){
   if(samoglasnici.indexOf(recenica[i])!==-1)
   brojac++;
}

console.log("U recenici ima "+brojac+" samoglasnika");
*/

/*
4. Zadatak:
Zadan je niz cijena kupljenih proizvoda: prices = [‘1.00 KM’, ‘1.85 KM’, ‘19.99 KM’]; Zbrojiti
ukupan iznos koji treba platiti.
*/
/*
var prices = ['1.00 KM', '1.85 KM', '19.99 KM'];
var sum=0, price;

for(var i=0;i<prices.length;i++){
    price=prices[i].split(' ');
    sum+=parseFloat(price[0]);
}

console.log("Ukupan iznos za platiti: "+sum);
*/

/*
5. Zadatak:
Napravi funkciju koja će uspoređiti dva niza i vratiti novi niz sa elementima koji se nalaze u
jednom ili drugom nizu (jedinstveni elementi). Ignorirati elemente koji su isti i u prvom i u
drugom nizu.
*/

/*
function diffArray(arr1,arr2){

    var newArray=[];

    newArray=arr1.filter(function(element){
        return arr2.indexOf(element)===-1;
    }).concat(arr2.filter(function(element){
        return arr1.indexOf(element)===-1;
    }));
    return newArray;
}

console.log(diffArray([-1,'a',4,'c'],['d',-1,'a',8]));
*/

/*
6. Zadatak
Napraviti funkciju koja prima dva ili više nizova i vraća novi niz od jedinstvenih vrijednosti u
slijedu kao što se nalaze u orginalnim nizovima.
*/

/*
function uniteUnique(arr){

    var newArray=[];
    var len=arguments.length;
    var array=[];
    for(var i=0;i<len;i++){
        newArray=newArray.concat(arguments[i]);
    }

    newArray.map(function(element){
        if(array.indexOf(element)===-1)
        array.push(element);
    })
return array;
}

var result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(result);
*/

/*
1. Napisati funkciju koja prima string a vraća string u obrnutom slijedu. (Npr: “danas” ->
“sanad”).

2. Napisati funkciju koja prima rečenicu (string), a vraća broj slova najduže riječi u rečenici.

3. Napisati funkciju koja prima rečenicu (string), a vraća istu rečenicu sa svakom riječi
napisanom velikim slovom. (Npr. “Danas je lijep dan za programiranje” -> “Danas Je Lijep Dan
Za Programiranje”).
*/
/*
function stringReverse(str){

    var newString=[];

        newString=str.split('');

   return newString.reverse().join("");
}

console.log(stringReverse("danas"));
*/
/*
function longestStr(str){
    var words=str.split(' ');
var longest=words[0].length;
    for(var i=1;i<words.length;i++){
        if(longest<words[i].length)
        longest=words[i].length;
    }
    return longest;
}
console.log(longestStr(prompt("Unesite tekst: ")));
*/
/*
function upperString(str){

    var separateString=str.split(" ");
var newString=[];

separateString.forEach(function(element) {
    
   element=element[0].toUpperCase()+element.slice(1);
   newString.push(element);
});
        return newString.join(" ");
}


console.log(upperString("Danas je lijep dan za programiranje"));
*/

//////////////////////////////////////////////////////
//Objekti

/*
1. Zadatak:
Inicijalizirati objekt test sa propertijima bodovi, maxBodovi i ocjena te im pridjeliti neke
vrijednosti (ocjenu postaviti na nulu, maxBodove na 100, a bodove između 0 i 100). Dodati
metodu izracunajOcjenu koja mijenja iznos ocjene s obzirom na iznos ostvarenih bodova za taj
test.
*/
/*
var test={
    bodovi: 80,
    maxBodovi: 100,
    ocjena: 0,
};

test.izracunajOcjenu=function(){
    var maxOcjena=5;
    this.ocjena= Math.round((this.bodovi/this.maxBodovi)*maxOcjena);
}

console.log(test.ocjena);
test.izracunajOcjenu();
console.log(test.ocjena);
*/

/*
4. Zadatak:
Inicijalizirati objekt time sa propertijem seconds i dodijeliti neku numeričku vrijednost. Objektu
dodati metodu convertToMin() koja će preračunati sekunde u minute i sekunde. Metoda treba
objektu dodati novi property minutes, u njega pohraniti broj minuta te ažurirati broj sekundi u
property seconds. Dodati metodu convertToSec() koja preračunava minute i sekunde natrag u
sekunde te potom ažurira objekt. Dodati metodu addSeconds() koja prima broj sekundi. Metoda
treba (koristeći metode convertToSec() i convertToMin()) ažurirati stanje minuta i sekundi. U
glavnom programu zatražiti unos broja sekundi i poslati ga metodi.
 */

 /*
var time={
    seconds: 112
};

time.convertToMin=function(){
        this.minutes=parseInt(this.seconds/60);
        this.seconds%=60;
};

time.convertToSec=function(){
    this.seconds+=(this.minutes*60);
    this.minutes=0;
};

time.addSeconds=function(sec){
     this.convertToSec();
     this.seconds+=sec;
     this.convertToMin();
};

console.log(time.seconds);
time.convertToMin();
console.log(time.minutes+":"+time.seconds);
var _seconds=parseInt(prompt("Unesite broj sekundi: "));
time.addSeconds(_seconds);
console.log(time.minutes+":"+time.seconds);
*/

//////////////////////////////////

//Iteracija kroz propertije objekta

/*
5. Zadatak:
Inicijalizirati prazan objekt knjiga. Dodijeliti mu propertije autor, ime, godina. Koristeći for ...
in petlju, ispisati propertije na sljedeći način “ključ - vrijednost”.
*/

/*
var knjiga={
};

knjiga.autor='Mato Lovrak';
knjiga.ime='Vlak u snijegu';
knjiga.godina=1976;

var key, value;
for(key in knjiga){
    value=knjiga[key];

    console.log(key+" - "+value);
}
*/

/*
6. Zadatak:
Zadan je objekt movie. Ispisati sve propertije objekta u formatu “ključ - vrijednost”. Potrebno
ispisati sve glumce čije prezime počinje sa slovom ‘c’.
*/

/*
var movie={
    name: 'The Godfather',
    duration: 175,
    rating: 9.2,
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard Castellano']
};

Object.keys(movie).forEach(function(key){
    var value=movie[key];

    console.log(key+" - "+value);
});

    for(var i=0;i<movie.actors.length;i++){

        var lastName=movie.actors[i].split(" ")[1];
if(lastName[0].toLowerCase()==='c')
console.log(movie.actors[i]);
    }
*/

/*
7. Zadatak:
Zadan je niz objekata movies. Ispisati imena svih filmova. Usporediti ocjene svih filmova i
prema tome ispisati ime filma sa najvišom ocjenom.
*/
/*
var movies=[{
    name: 'The Godfather',
    duration: 175,
    rating: 9.2,
    actors: ['Marlon Brando', 'Al Pacino', 'James Caan', 'Richard Castellano']
    }, {
    name: 'The Shawshank Redemption',
    duration: 142,
    rating: 9.3,
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton']
    }];

    for(var i=0;i<movies.length;i++){
        console.log(movies[i].name);
    }

    var HighestRate=movies[0].rating;
    var theBestMovie=movies[0];
    for(var i=1;i<movies.length;i++){

        if(HighestRate<movies[i].rating){

            HighestRate=movies[i].rating;
            theBestMovie=movies[i];
        }
    }

    console.log("The highest rate has "+theBestMovie.name+" with "+HighestRate);
 */

 ////////////////////////////////////7
 //Object konstruktor i paterni

 /*
 8. Zadatak:
Napraviti algoritam koji će generirati špil karata i nasumično ga podijeliti na dva jednaka dijela,
te izvući jednu kartu s vrha iz oba dijela špila i odrediti koji dio ima veću kartu. U slučaju da je
karta ista, izvlači se nova sve dok jedan dio špila ne bude jači. As je najjača karta.
 */

 /*
 //Konstruktor za kartu
function Karta(broj,znak){
    this.broj=broj;
    this.znak=znak;
}

 //Konstruktor za spil
function Spil(){
    this.spil=[];
}
 //Kreiranje spila
    Spil.prototype.create=function(){
        var self=this;
        var brojevi=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
        var znakovi=['Club','Diamond','Heart','Spade'];

        brojevi.forEach(function(broj){
            znakovi.forEach(function(znak){
                self.spil.push(new Karta(broj,znak));
            });
        });
    }
 //Promijesaj spil

Spil.prototype.PromijesajSpil=function(){
    var temp;
    var s=this.spil;
    for(var i=0;i<s.length;i++){
        
        var j=Math.floor(Math.random()*i);
        temp=s[i];
        s[i]=s[j];
        s[j]=temp;
    }
}
 //Izvuci jacu kartu

 Spil.prototype.IzvuciJacuKartu=function(){
     var len=this.spil.length/2;
     var left, right, lTemp, rTemp;
     left=this.spil.slice(0,len);
     right=this.spil.slice(len);

        function getValue(simbol){

            switch(simbol){
                case 'A': return 15; break;
                case '2': return 2; break;
                case '3': return 3; break;
                case '4': return 4; break;
                case '5': return 5; break;
                case '6': return 6; break;
                case '7': return 7; break;
                case '8': return 8; break;
                case '9': return 9; break;
                case '10': return 10; break;
                case 'J': return 12; break;
                case 'Q': return 13; break;
                case 'K': return 14; break;
            }
        }

        for(var i=0;i<this.spil.length;i++){
            lTemp=getValue(left[i].broj);
            rTemp=getValue(right[i].broj);
            if(lTemp>rTemp){
                console.log('Pobjeđuje karta iz lijevog špila: ' + left[i].broj +
                ' - ' + right[i].broj);
                break;
                } else if (lTemp < rTemp) {
                console.log('Pobjeđuje karta iz desnog špila: ' + left[i].broj +
                ' - ' + right[i].broj);
                break;
                } else {
                console.log('Karte su iste: ' + left[i].broj + ' - ' +
                right[i].broj);
                }
        }
 }
 var d=new Spil();
 d.create();
console.log(d.spil);
d.PromijesajSpil();
console.log(d.spil);
d.IzvuciJacuKartu();
*/

/*
Zadaci za ponavljanje:
1. Napravite niz objekata, gdje svaki objekt definira knjigu sa propertijima naslov, autor i
procitana (boolean koji definira je li knjiga pročitana). Za svaku knjigu ispišite naslov i autora u
obliku “The Hobbit od J.R.R. Tolkein”, a ako je knjiga pročitana ispisati u obliku ‘Već ste čitali
“The Hobbit od J.R.R. Tolkein”.
*/
/*
function Knjiga(naslov,autor,procitana){
    this.naslov=naslov;
    this.autor=autor;
    this.procitana=procitana;
};

var knjige=[];
var naslov, autor, procitana;
var len=parseInt(prompt("Koliko knjiga unosite: "),10);

for(var i=0;i<len;i++){

    naslov=prompt("Naslov knjige: ");
    autor=prompt("Autor knjige: ");
    procitana=prompt("Da li ste je procitali?");

    if(procitana==='da')
    knjige.push(new Knjiga(naslov,autor,true));
    else
    knjige.push(new Knjiga(naslov,autor,false));
}

knjige.forEach(function(element){

    if(element.procitana===true)
    console.log("Već ste čitali "+element.naslov+" od "+element.autor);
    else 
    console.log(element.naslov+" od "+element.autor);

});
*/

///////////////////////////////////////////7
//  AJAX

//XMLHttpRequest

//Sinkroni zahtjev
/*
var xhttp=new XMLHttpRequest();
xhttp.open('GET','http://localhost/textFile.txt',false);
xhttp.send();



if(xhttp.status===200){
    console.log('Pronađen tekstni dokument!');
}else if(xhttp.status===404){
    console.log('Tekstni dokument nije pronađen!');
}else{
    console.log('Server je vratio '+xhttp.status+' statusni kod!');
}
*/
//Asinkroni zahtjev
/*
var xhttp=new XMLHttpRequest();
xhttp.open('GET','http://localhost/textFile.txt',true);
xhttp.send();

xhttp.onreadystatechange=function(){
if(xhttp.status===404 && xhttp.readyState===4){
console.log(xhttp.responseText);
}
}
xhttp.send();
*/

/*
1. Zadatak:
Napišite funkciju za asinkroni dohvat podataka sa servera. Dohvatite JSON sa linka:
http://output.jsbin.com/yoluyoqowa.json . Dinamički pronađite prosječan rejting igre i najrjeđe
platforme za koju je igra objavljena. Dinamički provjerite koji se dani u tjednu puštanja igrice
ponavljaju. Koji je najčešći mjesec puštanja igrice?
*/
/*
function getData(url,callback){

    var xhttp=new XMLHttpRequest();

    xhttp.onreadystatechange=function(response){
        if(xhttp.readyState===4 && xhttp.status===200){
            if(callback) callback(JSON.parse(xhttp.response));
        }
    }
    xhttp.open('GET',url,true);
    xhttp.send();
}

function parse(data){
    console.log("igre",data);
    calculateAvgRate(data);
    checkReleaseDays(data);
}
getData('http://output.jsbin.com/yoluyoqowa.json',parse);


function calculateAvgRate(data){

    var avg=0;
    var platforms={};

    data.map(function(game){

        avg=game.rating;

        game.platforms.forEach(function(platform) {
            var p=platform.toLowerCase();
            if(!platforms[p]) platforms[p]=0;
            platforms[p]++;
        });
    });

    avg/=data.length;
    console.log("Prosječan rejting igre je: "+avg);

    var min;
    var rarest=[];
    Object.keys(platforms).forEach(function(key){
        var value=platforms[key];

        if(!min){
            min=value;
            rarest.push(key);
        }else if(min>value){
            min=value;
            rarest=[];
            rarest.push(key);
        }else if(min===value){
            rarest.push(key);
        }
    });
    console.log("Najrjeđe platforme su: ",rarest);
}


function checkReleaseDays(data){

    var months={
        0: 'Siječanj',
1: 'Veljača',
2: 'Ožujak',
3: 'Travanj',
4: 'Svibanj',
5: 'Lipanj',
6: 'Srpanj',
7: 'Kolovoz',
8: 'Rujan',
9: 'Listopad',
10: 'Studeni',
11: 'Prosinac'
    }
    var days={

        0:'Nedjelja',
        1:'Ponedeljak',
        2:'Utorak',
        3:'Srijeda',
        4:'Četvrtak',
        5:'Petak',
        6: 'Subota'

    };

    var repetitiveDays={};
    var repetitiveMonths={};
    data.map(function(date){
        var d= new Date(date.released);
        var day=days[d.getDay()];
        var month=months[d.getMonth()];

        if(!repetitiveDays[day]) repetitiveDays[day]=0;
        repetitiveDays[day]++;
        if(!repetitiveMonths[month]) repetitiveMonths[month]=0;
        repetitiveMonths[month]++;

    });

    console.log('Dani puštanja igrice koji se ponavljaju: ',repetitiveDays);

    var repetitive=[];
    var max;
Object.keys(repetitiveMonths).forEach(function(key){
    var value=repetitiveMonths[key];

    if(!max){
        max=value;
        repetitive.push(key);
    }else if(max<value){
        max=value;
        repetitive=[];
        repetitive.push(key);
    }else if(max===value){
        repetitive.push(key);
    }
});
console.log("Mjeseci koji se najviše ponavljaju: ",repetitive);
}

*/

/*
1. 1. Napišite funkciju za asinkroni dohvat podataka sa servera. Dohvatite JSON sa linka:
http://output.jsbin.com/xorezehoye.json. 2. Napravite funkciju koja prima 2 parametra: podatke
koje ste dohvatili sa servera i callback. Funkcija treba sortirati dobijene podatke ("amounts") po
id-u, i ispisati tekst, nakon sortiranja, (za svaki podatak) u obliku "id - ime" ("ime" se nalazi u
propertiju meta), na kraju pozvati callback i vratit se u glavni program. 3. Napravite novu
funkciju koja prima 2 parametra: podatke koje ste dohvatili sa servera i callback. Funkcija treba
sortirati dobijene podatke ("amounts") po "totalAmount", nakon sortiranja ispisati top 3 podatka i
pozvati callback. 4. Napraviti funkciju koja će sumirati uplatu po danu uplate (izvući dan iz
timestampa -> datetime) i ispisati ih.
*/
//1. dio
function getData(url, callback){

    var xhttp= new XMLHttpRequest();

    xhttp.onreadystatechange=function(response){
        if(xhttp.readyState===4 && xhttp.status===200){
            if(callback) callback(JSON.parse(xhttp.response));
        }
    }
    xhttp.open('GET',url,true);
    xhttp.send();
}

function parse(data){
    console.log(data);
    if(data){
    sortById(data,parse);
    sortByTotalAmount(data);
    sumByDays(data);
}
}
getData('http://output.jsbin.com/xorezehoye.json',parse);

//2. dio
function sortById(data,callback){

    data.amounts.sort(function(a,b){
        return a.id-b.id;
    });
    Object.keys(data.amounts).forEach(function(key){

        var value=data.amounts[key];
        console.log(value.id+" - "+ data.meta[value.id]);
    });
   if(callback) callback();
}

//3. dio: Napravite novu funkciju koja prima 2 parametra: podatke koje ste dohvatili sa servera
//i callback. Funkcija treba sortirati dobijene podatke ("amounts") po "totalAmount", nakon 
//sortiranja ispisati top 3 podatka i pozvati callback.
  function  sortByTotalAmount(data){
  
    data.amounts.sort(function(a,b){
        return parseFloat(a.totalAmount)-parseFloat(b.totalAmount);
    });

    for(var i=0;i<3;i++){
        console.log(data.meta[data.amounts[i].id]+" - "+data.amounts[i].totalAmount);
    }
  }
     
  //4. dio: Napraviti funkciju koja će sumirati uplatu po danu uplate (izvući dan iz
//timestampa -> datetime) i ispisati ih.

function sumByDays(data){
    var days={
        0: 'Nedjelja',
1: 'Ponedjeljak',
2: 'Utorak',
3: 'Srijeda',
4: 'Četvrtak',
5: 'Petak',
6: 'Subota'
    };
    
    var sum={};

    data.amounts.forEach(function(data){
        var d= new Date(data.datetime);
        var day=days[d.getDay()];

        if(!sum[day]) sum[day]=0;
        sum[day]+=parseFloat(data.totalAmount);
    });

    Object.keys(sum).forEach(function(key){
        var value=sum[key];

        console.log(key+" - "+value);
    })
}













