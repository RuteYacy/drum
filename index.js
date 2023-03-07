
numberOfDrum = document.querySelectorAll(".drum").length;

for (i=0; i<numberOfDrum; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    }); 
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key) {

    switch (key) {
        case "w":
            tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play();
            break;
        case "a":
            tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play();
            break;
        case "s":
            tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play();
            break;
        case "d":
            tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play();
            break;
        case "j":
            snare = new Audio('sounds/snare.mp3')
            snare.play();
            break;
        case "k":
            crash = new Audio('sounds/crash.mp3')
            crash.play();
            break;
        case "l":
            kickBass = new Audio('sounds/kick-bass.mp3')
            kickBass.play();
            break;
        
    }
}

function buttonAnimation(currKey) {
    activedButton = document.querySelector("." + currKey);
    activedButton.classList.add("pressed");
    setTimeout(function() {
        activedButton.classList.remove("pressed")
    }, 100);
}

