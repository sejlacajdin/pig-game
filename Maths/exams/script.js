// Zadatak 1.
// Napraviti funkciju za dohvat podataka koja ima 2 parametra "url" i "callback".
// Dohvatiti podatke sa https://api.myjson.com/bins/gnte0 i pozvati callback (fukcija za obradu podataka).
// Ukoliko ne uspijete, otvorite navedeni URL i kopirajte podatke u varijablu data da možete nastaviti raditi 
// (ali bez priznatih bodova). (5 bodova)

function getData(url, callback){

    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){

        if(xhttp.readyState===4 && xhttp.status===200){
            if(callback) callback(JSON.parse(xhttp.response));
        }
    }

    xhttp.open('GET',url,true);
    xhttp.send();
}

function parse(data){
    console.log(data);
    sortByID(data);
    sortByLength(data);
    findGenre(data);
    getDay(data);
}

getData('https://api.myjson.com/bins/gnte0',parse);

/*
// Zadatak 2.
// Napraviti funkciju koja će sortirati dobivene podatke ("songs") po id-u (od najvećeg id-a prema 
najmanjem) i nakon sortiranja
// ispisati podatke u obliku "id - songName - artist" ("artist" se nalazi u property-ju "artists").
*/
function sortByID(data){

    data.songs.sort(function(a,b){
        return b.id-a.id;
    });

    data.songs.forEach(function(elem) {
        console.log(elem.id+" - "+elem.songName+" - "+data.artists[elem.artist_id]);
    });
}

// Zadatak 3.
// Napraviti funkciju koja će sortirati dobivene podatke ("songs") po "songLength" 
//(format songLength-a je minutes:seconds),
// sortirati od najduže pjesme prema najkraćoj i nakon sortiranja ispisati 3 najduže pjesme.

function getSec(length){
    var len=length.split(":");
    return parseInt(len[0])*60+parseInt(len[1]);
}
function sortByLength(data){

    data.songs.sort(function(a,b){
        return getSec(b.songLength)-getSec(a.songLength);
    });

    for(var i=0;i<3;i++){
        console.log(data.songs[i]);
    }
}

// Zadatak 4.
// Napraviti funkciju koja provjerava koji se žanr glazbe najviše ponavlja među navedenim 
//pjesmama i ako se ponavlja u bar 3 pjesme, ispišite taj žanr.

function findGenre(data){
     var genre={};

     data.songs.forEach(function(elem){
        elem.genre.forEach(function(i){
            if(!genre[i]) genre[i]=0;
            genre[i]++;
        })
     });

     Object.keys(genre).forEach(function(key){
         var value=genre[key];
         if(value>=3)
         console.log(key);
     })
}

// Zadatak 5.
// Napraviti funkciju koja će iz "debut" property-ja izvući datum objavljivanja pjesme te ispisati
// za svaku pjesmu na koji je dan u tjednu izašla. Zatim ispisati dane koji se ponavljaju više 
//od jednog puta i napisati koliko se puta ponavljaju ti dani.

function getDay(data){

    var Days={
       0: 'Nedjelja',
       1: 'Ponedeljak',
       2: 'Utorak',
       3: 'Srijeda',
       4: 'Četvrtak',
       5: 'Petak',
       6: 'Subota'
    }

    var DaysCount={};
    Object.keys(data.songs).forEach(function(key){
        var value=data.songs[key];
        var d=new Date(value.debut);
        var day=Days[d.getDay()];

        console.log(value.songName+" - "+day);

        if(!DaysCount[day]) DaysCount[day]=0;
        DaysCount[day]++;
    });

    Object.keys(DaysCount).forEach(function(key){
        console.log( key+" se ponavlja "+ DaysCount[key]);
    });
}
