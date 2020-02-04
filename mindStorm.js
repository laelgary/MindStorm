/*
Projet: Robot MindStorm
Vertion:Initiale 31/01/2020
Prénom: Laël, Rodrigo, Maxence, Nelson

*/
var1 = falsepour
toujours(function () {
    moteurs.largeBC.réservoir(100, 100)
    var1 = 5 > capteurs.ultrasonic4.distance()
    if (var1) { 
        moteurs.largeBC.réservoir(50, 50) 
    }
    else { 
        moteurs.largeBC.courir(50) 
    } 
    var1 = 3 > capteurs.ultrasonic4.distance()
    if (var1) {
         moteurs.largeBC.réservoir(30, 30) 
        }
    else { 
        moteurs.largeBC.courir(50) 
    } 
    var1 = 1 > capteurs.ultrasonic4.distance()
    if (var1) { 
        moteurs.stopAll() 
    }
    else { 
        moteurs.largeBC.courir(50) 
    }
    
    if (var1) {
    motors.largeBC.tank(30, 30)
    } 
    else {
    motors.largeBC.run(50)
    }
    var1 = 1 > sensors.ultrasonic4.distance()
    if (var1) {
    motors.stopAll()
    } 
    else {
    motors.largeBC.run(50)
    }
})