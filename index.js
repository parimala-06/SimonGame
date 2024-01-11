var button = document.querySelectorAll
function sound(button){
    switch (button) {
        case 1:
            var b1 = new Audio("blue.mp3");
            b1.play(); 
            break;
    
        default:
            break;
    }
}