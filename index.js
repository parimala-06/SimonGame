var colors = ["blue","pink", "orange", "green"];
var gameSeq = [];
var user = [];
var level = 0;

function EventSequence(){

    user = [];
    level++;
    $("#level-title").text("Level " + level);
  
    var randomNo = Math.floor(Math.random()*4);
    var randomcolor = colors[randomNo];
    gameSeq.push(randomcolor);
    console.log(randomcolor);
    console.log(randomNo);
    var y = randomNo +1;
    console.log(y);

   $("#b" + randomNo).fadeOut(100).fadeIn(100);
   sound(randomcolor);
}

EventSequence();

function sound(randomNo){
    var sound = new Audio(`sounds\\b${randomNo}.mp3`);
    sound.play();
}