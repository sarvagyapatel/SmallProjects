let msg=document.querySelector("#msg");
let scoreYour=document.querySelector("#you");
let scoreComp=document.querySelector("#comp");
let choices=document.querySelectorAll(".choice");
let userScore=0;
let compScore=0;

const genCompChoice=()=>{
    const options=["rock", "paper", "scissors"];
    let num =Math.floor(Math.random()*3);
    return options[num];
};

const draw=()=>{
    console.log("The game was draw");
    msg.innerText="It's a Draw";
    msg.style.backgroundColor="grey";

};

const showWinner=(winner)=>{
    if(winner)
    {
        console.log("you are winner");
        msg.innerText="Congratulations!! YOU WON";
        msg.style.backgroundColor="green";
        userScore++;
        scoreYour.innerText=userScore;
    }
    else
    {
        console.log("computer is winner");
        msg.innerText="Computer WON!!";
        msg.style.backgroundColor="red";
        compScore++;
        scoreComp.innerText=compScore;
    }
};

const playGame=(userChoice)=>{
    // console.log(userChoice);
    let compChoice=genCompChoice();
    // console.log(compChoice);
    if(userChoice==compChoice)
    {
        draw();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            if(compChoice==="paper") userWin=false;
            else userWin=true;
        }
        else if(userChoice==="paper")
        {
            if(compChoice==="scissors") userWin=false;
            else userWin=true;
        }
        else if(userChoice==="scissors")
        {
            if(compChoice==="rock") userWin=false;
            else userWin=true;
        }
        showWinner(userWin);
    }
};


choices.forEach((choice) => {     //geneate id off rock paper and sissor
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playGame(userChoice);
    });
  });

