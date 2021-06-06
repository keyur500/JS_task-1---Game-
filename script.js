let promptBtn = document.getElementById("btn");
let resultId = document.getElementById("result");

console.log(promptBtn);

promptBtn.addEventListener("click", userInput);

function userInput(){
    resultId.innerText = "";

    var userChoice = prompt("Enter the choice ! {R/P/S} ");

    if(userChoice == 'R' || userChoice == 'P' || userChoice =='S'){
        let computerChoice = Math.random();

        if(computerChoice > 0 && computerChoice < .34){
            console.log("Paper"+ computerChoice);
            computerChoice = 'P';
        }else if(computerChoice > .35 && computerChoice <= .67){
            console.log("Scsissor"+ computerChoice);
            computerChoice = 'S';
        }else{
            console.log("Rock"+ computerChoice);
            computerChoice = 'R';
        }


        if(userChoice === computerChoice){
            //console.log("DRAW  "+ "You :"+userChoice+ " Comp :"+computerChoice)
            resultId.innerText = "DRAW - "+ "You : ["+userChoice+ "] Computer : ["+computerChoice+"]";

        }else if(userChoice == 'R' && computerChoice == 'P' || userChoice == 'P' && computerChoice == 'S' || userChoice == 'S' && computerChoice == 'R'){
            //console.log("YOU LOSE "+ "You :"+userChoice+ " Comp :"+computerChoice)
            resultId.innerText = "YOU LOSE - "+ "You : ["+userChoice+ "] Computer : ["+computerChoice+"]";

        }else {
            //console.log("YOU WIN "+ "You :"+userChoice+ " Comp :"+computerChoice)
            resultId.innerText = "YOU WIN - "+ "You : ["+userChoice+ "] Computer : ["+computerChoice+"]";
        }
        promptBtn.innerText = "Wanna try Once More !!";
        //console.log(userChoice);
    }else {
        alert("Invalid User Input !!");
    }
    
}


