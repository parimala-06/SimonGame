var colors = ["blue","pink", "orange", "green"];
var gameSeq = [];

function EventSequence(){
  
    var randomNo = Math.floor(Math.random()*4);
    var randomcolor = colors[randomNo];
    gameSeq.push(randomcolor);
    console.log(randomcolor);
    console.log(randomNo);
    var y = randomNo +1;
    console.log(y);

    $("#b"+randomNo+1).click(function(){
        var x = "sounds/" + randomcolor + ".mp3";
        console.log(x);
        var sound = new Audio();
        sound.play();
    });   
}

EventSequence();