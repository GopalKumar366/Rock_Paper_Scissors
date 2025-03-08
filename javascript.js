console.log("working external js");

var humanScore = 0;
        var computerScore =0;

        function getComputerChoice(){
            let randomNumber = Math.floor(Math.random()*3)+1;
            //console.log(randomNumber);
            
            if(randomNumber==1){
                return "rock";
            }

            else if(randomNumber==2){
                return "paper";
            }

            else{
                return "scissors";
            }

        }

        function getHumanChoice(){
            let choice = prompt("Enter your choice");
            return choice;
        }

        

        function playRound(humanChoice, computerChoice) {

            if(humanChoice==computerChoice){
                console.log("Draw")

            }

            else if(humanChoice=="rock" && computerChoice=="scissors"){

                console.log("Won");
                humanScore++;

            }
            else if(humanChoice=="scissors" && computerChoice=="paper"){
                console.log("Won");
            }
            else if(humanChoice=="paper" && computerChoice=="rock"){
                console.log("You are winner");
                humanScore++
            }

            else{
                console.log("you lost");
                computerScore++;
            }

            
        }

        
        

        function playGame(){
            
            

            for(i=0;i<5;i++){
                const humanSelection = getHumanChoice().toLowerCase();
                const computerSelection = getComputerChoice();

                playRound(humanSelection, computerSelection);
            }

            if(humanScore>computerScore){
                console.log("You are tournament champion");

            }
            else if(humanScore<computerScore){
                console.log("You lost the tournament");

            }
            else{
                console.log(`HumanScore is :${humanScore} and computerScore is : ${computerScore}\nTournament is Draw, come and play next time`);
            }

            console.log(`humanScore : ${humanScore} && computerScore: ${computerScore}`);
        }

        playGame();





        
        
