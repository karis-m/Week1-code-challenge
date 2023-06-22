//Challenge 1 : Students Grade Generator
//Checking of the marks category and output the grade
function grade(){
    //Variable declaration and assigning of marks to the variable from the user
    let marks = prompt("Enter the marks scored: ");
    // above 79 marks (A)
    if(marks > 79){
        console.log('A');
    }
    //betwen 60 and 79 marks (C)
    else if(marks >= 60){
        console.log('B');
    }
    //between 49 and 59 marks(C)
    else if(marks >= 49){
        console.log('C');
    }
    //between 40 and 49 marks(D)
    else if(marks >= 40){
        console.log('D');
    }
    //below 40 marks (E)
    else{
        console.log('E');
    }
    
}
