//Detecting button press
var noOfDrumButtons = document.querySelectorAll(".drum").length;
for( var i=0; i<noOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    function handleClick(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
}

//Detecting keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
            case "w" :
                var audio = new Audio("tom1_sound.mp4");
                audio.play();
            break;
            case "a" :
                var audio = new Audio("tom2_sound.mp4");
                audio.play();
            break;
            case "s" : 
                var audio = new Audio("tom3_sound.mp4");
                audio.play();
            break;
            case "d" :
                var audio = new Audio("tom4_sound.mp4");
                audio.play();
            break;
            case "j" :
                var audio = new Audio("snare_sound.mp4");
                audio.play();
            break;
            case "k" :
                var audio = new Audio("crash_sound.mp4");
                audio.play();
            break;
            case "l" :
                var audio = new Audio("kick-bass_sound.mp4");
                audio.play();
            break;
            default : console.log(buttonInnerHTML);
        }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}