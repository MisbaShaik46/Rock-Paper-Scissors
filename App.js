let userScore=0;
let compScore=0;

let userScoreBoard=document.querySelector("#user-score");
let compScoreBoard=document.querySelector("#comp-score");


let resultMessage=document.querySelector("#msg");
const  choices =document.querySelectorAll(".choice");

const getCompChoice= () => {
    const options=["rock","paper","scissor"];
    let randomIndex=Math.floor(Math.random()*3);
    return options[randomIndex];
};
const showDraw=()=>{
    console.log("Draw");
    resultMessage.textContent="The game is draw. Play Again";
    resultMessage.style.backgroundColor="#466995";
};

function isPaperWins(firstChoice, secondChoice) {
    return firstChoice === "rock" && secondChoice === "paper";
}

function isRockWins(userChoice, compChoice) {
    return userChoice === "scissor" && compChoice === "rock";
}
 function isScissorWins(userChoice, compChoice) {
        return userChoice === "paper" && compChoice === "scissor";
}

function getWinner(userChoice, compChoice) {
    let winner;
    if(isScissorWins(userChoice,compChoice)
        ||isRockWins(userChoice, compChoice) 
        || isPaperWins(userChoice,compChoice)){

            winner="Computer";
    }
    else{
        winner="User"
    }
    return winner;
   
}

const playGame =(userChoice) =>{
    console.log("user Choice is "+ userChoice);
    let compChoice=getCompChoice();
    console.log("Computer Choice is "+ compChoice);
    if(userChoice === compChoice)
    {
        showDraw();
    }
    else
    {
        
        let winner = getWinner(userChoice,compChoice);
        console.log(winner)
        showWinner(winner,userChoice,compChoice);

    
    }


    
};
choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        console.log("clicked "+userChoice);
        playGame(userChoice);
    })
})

function updateTheScoreBoard(){
    userScoreBoard.innerText=userScore;
    compScoreBoard.innerText=compScore;

}


function showWinner(winner,userChoice,compChoice) {
    //resultClassList.remove("hide");
    if(winner=="User"){
    resultMessage.innerText = `Congratulations! You Win. Your ${userChoice} beats ${compChoice}`;
    resultMessage.style.backgroundColor="green";
    }
    else{
        resultMessage.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        resultMessage.style.backgroundColor="red";
    }
    increaseTheScore(winner);
    updateTheScoreBoard();
}

function increaseTheScore(winner) {
    if (winner === "User") {
        userScore++;
    }
    else {
        compScore++;
    }
}

