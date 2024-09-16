const player0 = document.querySelector('.player-0');
const player1 = document.querySelector('.player-1');
const scoreP1 = document.querySelector('#score-0');
const scoreP2 = document.querySelector('#score-1');
const current1 = document.getElementById('current-0');
const current2 = document.getElementById('current-1');
const changeplayer = function() {
            document.querySelector(`#current-${activePlayer}`).textContent = 0;                
            activePlayer = activePlayer === 0? 1 : 0;
            player0.classList.toggle('active');
            player1.classList.toggle('active');
            counter = 0;
            document.querySelector(`#current-${activePlayer}`).textContent = counter;
}

let active0 = document.querySelector('.player-0-panel');
let active1 = document.querySelector('.player-1-panel');
let randomNum;  
let gameActive, scores, activePlayer, currentvalue, counter;

const init = function (){ 
gameActive = true;
scores = [0 , 0];
activePlayer = 0;
currentvalue = 0;
counter = 0;

scoreP1.textContent = '0';
scoreP2.textContent = '0';
current1.textContent = '0';
current2.textContent = '0';
player0.classList.remove('winner');
player1.classList.remove('winner');
player0.classList.add('active');
player1.classList.remove('active');
document.querySelector('#dice-1').style.display="none";
}

// starting look
init();

//new game btn functionality
document.querySelector('.btn-new').addEventListener('click',init);

//roll dice btn functionality
document.querySelector('.btn-roll').addEventListener('click', 
    function(){
        if (gameActive){
            //random number roll 
            randomNum = Math.trunc(Math.random() * 6 + 1);
            document.querySelector('#dice-1').style.    display='block';
            document.querySelector('#dice-1').src = `dice-${randomNum}.png`;
            if(randomNum !== 1){
                counter += randomNum;
                document.querySelector(`#current-${activePlayer}`).textContent = counter;
            }
            else{
                changeplayer();
            }
    
}
});

//hold btn functionality
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gameActive){
        scores[activePlayer] += counter;
        document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
        gameActive = false;
        document.querySelector(`.player-${activePlayer}`).classList.add('winner');
        document.querySelector('#dice-1').style.display='none';
        document.querySelector(`.player-${activePlayer}`).classList.remove('active');
    }else{
        changeplayer();

    }
    }
});
 