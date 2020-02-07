/*
Projet: Robot MindStorm
Vertion:Initiale 31/01/2020
Prénom: Laël, Rodrigo, Maxence, Nelson

*/
brique .buttonUp. onEvent (ButtonEvent.Pressed, function () {
    moteurs .largeBC. réservoir (- 10 , 10 )
})
pour toujours (function (){
    if (! (capteurs .touch1. isPressed ()) && capteurs .touch2. isPressed ()){
        brique . showImage (image.expressionsSick)
        moteurs .largeBC. réservoir ( 10 , 10 , 2, MoveUnit.Secondes)
        moteurs .largeBC. réservoir ( 10 , -10 , 2 , MoveUnit.Seconds)

    }   else if (! (capteurs .touch2. isPressed ()) && capteurs .touch1. isPressed ()){
        brique . showImage (images.expressionsSick)
        moteurs .largeBC. réservoir ( 10, 10 , 2 , MoveUnit.Secondes)
        moteurs .largeBC. tank (- 10 , 10 , 2 , MoveUnit.Secondes)
    }   else if (capteurs .touch1. isPressed () && capteurs .touch2. isPressed ()){
        moteurs .largeBC. réservoir (-10 , -10 )
        if (capteurs .ultrasonic4. distance () <= 6){
            moteurs .largeBC. réservoir ( 10, 10 , 2, MoveUnit.Secondes)
            moteurs .largeBC. tank ( -10 , 10 , 2 , MoveUnit.Secondes)
        } else if (capteurs .ultrasonic3. distance () <= 6){
            moteurs .largeBC. réservoir ( 10 , 10 ,2 , MoveUnit.Secondes)
            moteurs .largeBC. réservoir (10 , -10 , 2, MoveUnit.Secondes)
        }else if ( capteurs .ultrasonic3. distance () <=6 && capteurs .ultrasonic4. distance () <=6){
            moteurs .largeBC. réservoir (10,10)
        }

    } else if (!( capteurs .touch1. isPressed()) &&! (capteurs .touch2. isPressed())) {
        brique . showImage (image.espressionBigSmile)
        moteurs .largeBC. réservoir ( 10 , 10 )
    }

})