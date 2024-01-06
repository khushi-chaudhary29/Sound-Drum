
for( var i=0 ; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttoninnerHTML = this.innerHTML;
        makeSound(buttoninnerHTML);
        buttonfade(buttoninnerHTML)
    });
 //   document.addEventListener("keyup",functiorahyeahhn(event){
        makeSound(ButtonInnerHTML)
 //   })


document.body.addEventListener("keypress",(event)=>{
    makeSound(event.key)
    buttonfade(event.key)
})

function makeSound(key){

    switch(key){
        case "w": var audio = new Audio("sounds/tom-1.mp3")
                    audio.play()
                    break;
        case "a": var audio = new Audio("sounds/tom-2.mp3")
                    audio.play()
                    break;  
        case "s": var audio = new Audio("sounds/tom-3.mp3")
                    audio.play()
                    break;
        case "d": var audio = new Audio("sounds/tom-4.mp3")
                    audio.play()
                    break;      
        case "j": var audio = new Audio("sounds/snare.mp3")
                    audio.play()
                    break;    
        case "k": var audio = new Audio("sounds/crash.mp3")
                    audio.play()
                    break;
        case "l": var audio = new Audio("sounds/kick-bass.mp3")
                    audio.play()
                    break;
        default: break;
    }

}
 function buttonfade(pressedKey){
    var activeKey = document.querySelector("."+pressedKey)
 //   activeKey = document.querySelector(".s")
    activeKey.classList.add("pressButton")
    setTimeout(function(){
        activeKey.classList.remove("pressButton")
    },100)

}
}

//function Audio( Filelocation ){
//    this.Filelocation = Filelocation
//    this.play = () => {
        //file location 
        //fetch audio
        //play audio
//    }
//}