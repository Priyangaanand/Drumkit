function makeSomeNoise(keyclick)

{
        switch (keyclick) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio ("sounds/tom-2.mp3");
                tom2.play(); 
                break;
            case "s":
                var tom3 = new Audio ("sounds/tom-3.mp3");
                tom3.play(); 
                break;
            case "d":
                var tom4 = new Audio ("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash = new Audio ("sounds/crash.mp3");
                crash.play(); 
                break;
            case "k":
                var kick = new Audio ("sounds/kick-bass.mp3")
                kick.play();
                setTimeout(function(){
                   
                },1000);
                break;
            case "l":
                var snare = new Audio ("sounds/snare.mp3");
                snare.play();
                break;
            default:
                console.log(this.innerHTML);
                console.log(event.key);
                break;
    
        }
}

    
    document.addEventListener('keydown',function(event)
    {
        var keyGotPressed = event.key;
        makeSomeNoise(keyGotPressed);
        animation(keyGotPressed);
        stopNoise(keyGotPressed);
        
       
    });
    var listenValue = document.querySelectorAll(".drum").length;
    for (var i=0; i<=listenValue; i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener('click',handleClick);
        function handleClick()
        {
            var buttonValue = this.innerHTML;
            makeSomeNoise(buttonValue);
            animation(buttonValue);
            stopNoise(buttonValue);
       
        }
    }
    function animation(keyTook)
    {
       var addAnimation = document.querySelector("."+keyTook);
       addAnimation.classList.add("pressed");
    setTimeout(function()
    {
        addAnimation.classList.remove("pressed");
    },1000);


    }

  