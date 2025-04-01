var numberDrum=document.querySelectorAll(".drum").length;
for(i=0;i<numberDrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){ 
       
        var bottuonInner=this.textContent;
        keyBord(bottuonInner);
       pressed(bottuonInner);
    });
}

document.addEventListener("keydown",function (event){
    keyBord(event.key);
    pressed(event.key);
});

function keyBord(key){
    switch (key){
        case "w":
            var tom= new Audio("./sounds/tom-1.mp3");
            tom.play();  
        break;
        case "a":
            var tom2= new Audio("./sounds/tom-2.mp3");
            tom2.play();  
        break;
        case "s":
            var tom3= new Audio("./sounds/tom-3.mp3");
            tom3.play();  
        break;
        case "d":
            var tom4= new Audio("./sounds/tom-4.mp3");
            tom4.play();  
        break;
        case "j":
            var snare= new Audio("./sounds/snare.mp3");
            snare.play();  
        break;
        case "k":
            var kick= new Audio("./sounds/kick-bass.mp3");
            kick.play();  
        break;
        case "l":
            var crash= new Audio("./sounds/crash.mp3");
            crash.play();  
        break;
        default: console.log("try again");
    }
}
function pressed(keyb){
document.querySelector("."+keyb).classList.add("pressed");
setTimeout(function(){
    document.querySelector("."+keyb).classList.remove("pressed");  
},200);
}