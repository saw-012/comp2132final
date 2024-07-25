$(document).ready(function(){ 
const $firstFrame = $("#startingFrame");
const $gameFrame = $("#gameFrame");
const $startButton = $("#gameStart");
const $roll = $("#roll");
const $reset = $("#reset");

const $playerDice1 = $("#playerDice1");
const $playerDice2 = $("#playerDice2");
const $playerScore = $("#playerScore");
const $dice1 = $("#dice1");
const $dice2 = $("#dice2");

const $computerDice1 = $("#computerDice1");
const $computerDice2 = $("#computerDice2");
const $computerScore = $("#computerScore");
const $dice3 = $("#dice3");
const $dice4 = $("#dice4");

class player{
    constructor(score, dice1, dice2, rollCount){
        this.score = 0;
        this.dice1 = 0;
        this.dice2 = 0;
        this.rollCount = 0;
    }
}

function rollDice(){
    let value1 = Math.floor(Math.random()*6+1);
    return value1;
}
function calculateScore(dice1, dice2){
    if(dice1 == dice2){
        return dice1*4;
    }else if(dice1 == 1 || dice2 == 1){
        return 0;
    }else{
        return dice1 + dice2;
    }
}

function startGame(){
    console.log("test");
    $firstFrame.css("display", "none");
    $gameFrame.css("display", "block");
}

function endGame(){
    player1.dice1 = 0;
    player1.dice2 = 0;
    player1.score = 0;
    player1.rollCount = 0;
    player2.dice1 = 0;
    player2.dice2 = 0;
    player2.score = 0;
    updateScore();
}

function updateScore()
{
    $playerDice1.html(player1.dice1);
    $playerDice2.html(player1.dice2);
    $playerScore.html(player1.score);
    $computerDice1.html(player2.dice1);
    $computerDice2.html(player2.dice2);
    $computerScore.html(player2.score);
}

function endAnimation(player1Dice1, player1Dice2, player2Dice1, player2Dice2){
    $dice1.attr("src", "animation/dice" + player1Dice1 + ".png");
    $dice2.attr("src", "animation/dice" + player1Dice2 + ".png");
    $dice3.attr("src", "animation/dice" + player2Dice1 + ".png");
    $dice4.attr("src", "animation/dice" + player2Dice2 + ".png");
}

function startAnimation(player1Dice1, player1Dice2, player2Dice1, player2Dice2){
    $dice1.attr("src", "animation/dice-roll-" + player1Dice1 + ".gif");
    $dice2.attr("src", "animation/dice-roll-" + player1Dice2 + ".gif");
    $dice3.attr("src", "animation/dice-roll-" + player2Dice1 + ".gif");
    $dice4.attr("src", "animation/dice-roll-" + player2Dice2 + ".gif");

    setTimeout(function(){endAnimation(player1Dice1, player1Dice2, player2Dice1, player2Dice2)}, 3000);
}


function roll(){
    if(player1.rollCount < 3){
        player1.dice1 = rollDice();
        player1.dice2 = rollDice();
        player1.score += calculateScore(player1.dice1, player1.dice2);
        player1.rollCount +=1;
        player2.dice1 = rollDice();
        player2.dice2 = rollDice();
        player2.score += calculateScore(player2.dice1, player2.dice2);
        startAnimation(player1.dice1, player1.dice2, player2.dice1, player2.dice2);
        updateScore();
    }
    else if(player1.score > player2.score){
        alert("Congrats on the victory!")
    }
    else{
        alert("Sorry you lost")
    }
    
}

let player1 = new player();
let player2 = new player();

$startButton.click(startGame);
$roll.click(roll);
$reset.click(endGame);

});