//Program to generate the grade scored by a student 
//Checking of the marks category and grading
function grade(){
    //Variable declaration and assigning of marks to the variable from the user
    let marks = prompt("Enter the marks scored: ");
    if(marks > 79){
        console.log('A');
    }
    else if(marks >= 60){
        console.log('B');
    }
    else if(marks >= 49){
        console.log('C');
    }
    else if(marks >= 40){
        console.log('D');
    }
    else{
        console.log('E');
    }
    
}
