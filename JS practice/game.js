let gameplay = confirm("can we play rock,paper and sissors?");
if(gameplay){
    let playerchoice = prompt("please enter your choice");
    if(playerchoice){
        let playerone = playerchoice.trim().toLowerCase();
        if(playerone==="rock" || playerone==="paper" || playerone==="sissor"){
            let computer = Math.floor(Math.random()*3)+1;
            let computerchoice = computer===1?"rock":computer===2?"paper":"sissor";

            let winner = playerone==="rock" && computerchoice==="paper" ? `computer wins ${computerchoice} \n your choice is ${playerone}` : playerone==="paper" && computerchoice==="rock" ? `computer wins${computerchoice}\n your choice is ${playerone}` : playerone==="rock" && computerchoice==="sissor"? `you are the winner ${playerone}\n computers choice is ${computerchoice} ` : playerone==="sissor" && computerchoice==="rock" ? `computer wins ${computerchoice}\n your choice is ${playerone}` : playerone==="sissor" && computerchoice==="paper" ? `player wins ${playerone}\n computer choice is ${computerchoice} ` : playerone==="paper" && computerchoice==="sissor" ? `computer wins ${computerchoice}\n your choice is ${playerone}` : playerone===computerchoice ? "tie":jg;
            alert(winner);
            let playagain = confirm("play again ?");
            if(playagain){
                confirm(location.reload())
            }
            else
            alert("ok thanks for playing");
        }
        else{
        alert("please enter a rock,paper or sissor");
        confirm(location.reload());
        }
      

    }
    else{
        alert("ok may be changed your mind")
    }
}
else{
    alert("ok we can play next time")
}
