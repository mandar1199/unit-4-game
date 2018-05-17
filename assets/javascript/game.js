//beginning game function
$(document).ready(function(){
//---Variables(top to bottom):
//making the random number/target score between 16-140
var random=Math.floor(Math.random()*124+16)
//calling random number/target score to html
$("#randomNumber").text(random);

//making the random number for each gem between 1-12
var gem1= Math.floor(Math.random()*11+1)
var gem2= Math.floor(Math.random()*11+1)
var gem3= Math.floor(Math.random()*11+1)
var gem4= Math.floor(Math.random()*11+1)

//making other user controlled(action needed) variables
var totalScore= 0;
var wins= 0;
var losses= 0;

//keeping track of wins and losses
//calling wins/losses to html
$("#totalWins").text(wins);
$("#totalLosses").text(losses);
//---Functions(bottom to top):
//reset game
function reset(){
    Random=Math.floor(Math.random()*124+16);
    console.log(random)
    $('#randomNumber').text(random);
    gem1= Math.floor(Math.random()*11+1);
    gem2= Math.floor(Math.random()*11+1);
    gem3= Math.floor(Math.random()*11+1);
    gem4= Math.floor(Math.random()*11+1);
    totalScore= 0;
    $('#guessedScore').text(totalScore);
    } 

//adding up wins
//calling result to html
function winner(){
    alert("You're a Winner!");
        wins++;
        $("#totalWins").text(wins);
        reset()
}

//adding up losses
//calling result to html
function loser(){
    alert("You're a loser! Play Again!");
        losses++;
        $("#totalLosses").text(losses);
        reset()
}
//.onclick events for each gem button
//calling buttons to html
$("#1").on("click", function(){
    //adding gem value to users totalScore
    totalScore =totalScore + gem1;
    console.log("New totalScore= " + totalScore);
    $("#guessedScore").text(totalScore);
        //converting guessedScore to true of false
        if(totalScore == random){
            winner();
        }
        else if(totalScore > random){
            loser();
        }
})
$("#2").on("click", function(){
    totalScore =totalScore + gem2;
    console.log("New totalScore= " + totalScore);
    $("#guessedScore").text(totalScore);
        if(totalScore == random){
            winner();
        }
        else if(totalScore > random){
            loser();
        }
})
$("#3").on("click", function(){
    totalScore =totalScore + gem3;
    console.log("New totalScore= " + totalScore);
    $("#guessedScore").text(totalScore);
        if(totalScore == random){
            winner();
        }
        else if(totalScore > random){
            loser();
        }
})
$("#4").on("click", function(){
    totalScore =totalScore + gem4;
    console.log("New totalScore= " + totalScore);
    $("#guessedScore").text(totalScore);
        if(totalScore == random){
            winner();
        }
        else if(totalScore > random){
            loser();
        }
})
})