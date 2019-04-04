/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, Dice, gamePlaying;

init();


//Dice= Math.floor(Math.random()*6)+1; //to get random number between 1 and 6 
//console.log(Dice);

//The object that will give us access to the DOM is the document object

//document.querySelector('#current-'+ activePlayer).textContent=Dice; //setter, change the content of an HTML element
//can only set plain text, so no HTML

//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+ dice + '</em>'; //adding HTML tags

//only read elements from a webpage
//var x=document.querySelector('#score-0').textContent; //getter
//console.log(x);


//set up event handler (button where we will roll the dice)
document.querySelector('.btn-roll').addEventListener('click',function(){//anonymous function 
        
    if(gamePlaying){ //state variable

        //1. Random number 
        var dice=Math.floor(Math.random()*6)+1;
    
        //2. Display the result 
        var diceDOM=document.querySelector('.dice');
        diceDOM.style.display='block'; //to display the dice 
        diceDOM.src='dice-'+dice+'.png';
    
        //3. Update the round score IF the rolled number was NOT a 1
        if(dice !== 1){
            //Add  score 
            roundScore+=dice;
            document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }else{
            //Next player
            nextPlayer();
        }

    }
} ); 

//Event listener for the hold button 
document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){
    //Add CURRENT score to GLOBAL score
    scores[activePlayer]+=roundScore;

    //Update the UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];

    //Check if player won the game
    if(scores[activePlayer]>=100){
        document.querySelector('#name-'+activePlayer).textContent='Winner!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');

        gamePlaying=false;
    }else{

        //Next player 
        nextPlayer();
    }
}
});


function nextPlayer(){
    //Next player
    activePlayer===0? activePlayer=1: activePlayer=0;
    roundScore=0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    //remove and toggle classes
   // document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //to hide again the dice for next player 
    document.querySelector('.dice').style.display='none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init(){ //to initialize 
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
gamePlaying=true;
    //to hide dice 

document.querySelector('.dice').style.display='none';

//To set elements to zero
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}