let noOfDrums = document.querySelectorAll(".drum").length
for(let i=0; i < noOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        let clkBtn = this.innerHTML;
        makeSound(clkBtn);
        btnAnimation(clkBtn);
    });
    
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    btnAnimation(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            const w = new Audio("sounds/w.mp3");
            w.play();
            break;
        
        case "a":
            const a = new Audio("sounds/a.mp3");
            a.play();
            break;
         
        case "s":
            const s = new Audio("sounds/s.mp3");
            s.play();
            break;

        case "d":
            const d = new Audio("sounds/d.mp3");
            d.play();
            break;
        
        case "j":
            const j = new Audio("sounds/j.mp3");
            j.play();
            break;

        case "k":
            const k = new Audio("sounds/k.mp3");
            k.play();
            break;
                    
        case "l":
            const l = new Audio("sounds/l.mp3");
            l.play();
            break;

        default:
            alert("Wrong key");
    }
}

function btnAnimation (pressedKey) {
    let activeBtn = document.querySelector("." + pressedKey);
    activeBtn.classList.add("pressed");

    setTimeout(function() {
        activeBtn.classList.remove("pressed");
    }, 100);
} 