//Challenge 3 : Speed Detector
function speedChecker(){
    //The prompts user to enter the speed
    let speed = prompt("Enter the speed");
    //Checking speed and assigning demerit points accordingly
    //speed below 70
    if(speed <= 70){
        console.log("Ok");
    }
    //speed greater than 70
    else{
        let demeritPoints = (speed - 70)/5;
        //if points exceeds 12 the license is suspended
        if(demeritPoints > 12){
            console.log("License Suspended");
        }
        else{
            console.log("Points: ",demeritPoints);
        }
    }
}