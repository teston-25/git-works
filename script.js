// document.querySelector('.message').textContent="correct number";
// document.querySelector('.score').textContent="19"
let random=Math.trunc((Math.random()*20));
let x=20;
let hs=0;
const messageDisplay=function(message){
    document.querySelector(".message").textContent=message;
};

document.querySelector('.check').addEventListener('click',function(){

        const guess= Number(document.querySelector('.guess').value);
        console.log(guess);
        if(!guess){
            messageDisplay('please enter a number!');
        }
        else if(guess !== random){
            if(x>1){
                messageDisplay( guess > random ?"Too high!" : "Too low!");
                x--;
                document.querySelector('.score').textContent=x;
            }
            else{
                messageDisplay("🚀You lost the game");                
                document.querySelector('.score').textContent=0;
            }    

        }
        else if(guess == random){
            messageDisplay("👍Correct number");
            document.body.style.background="yellowgreen";
            document.querySelector('.inp').textContent=random;
            if(x > hs){
                hs=x;
                document.querySelector('.highscore').textContent=hs;
            }
            else{
                document.querySelector('.highscore').textContent=hs;
            }
        }
})
document.querySelector('.again').addEventListener('click',function(){
    random=Math.trunc((Math.random()*20));
    x=20;
    document.body.style.background="black";
    document.querySelector('.inp').textContent="?";
    document.querySelector('.score').textContent=x;
    messageDisplay("Start guessing...");
    document.querySelector('.guess').value='';
})
