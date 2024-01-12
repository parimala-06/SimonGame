
function EventSequence(){
    var randomNo = Math.floor(Math.random()*3) + 1;
    var colors = ["blue","pink", "orange", "green"];
    var randomcolor = colors[randomNo];
    var gameSeq = [];
    gameSeq.push(randomcolor);
}

function sound(){
    
}
$("button").click(function(event){
    $(event.target).fadeOut(100).fadeIn(100); // only attributes with numeric definitions can be added to animate function
    
});
