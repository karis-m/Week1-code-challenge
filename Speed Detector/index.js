//The function accepts the speed input and outputs demerit points
function speedChecker(){
    //The speed of the car is captured
    let speed = prompt("Enter the speed");
    //Checking speed and assigning demerit points accordingly
    if(speed <= 70){
        console.log("Ok");
    }
    else{
        let demeritPoints = (speed - 70)/5;
        if(demeritPoints > 12){
            console.log("License Suspended");
        }
        else{
            console.log("Points: ",demeritPoints);
        }
    }
}