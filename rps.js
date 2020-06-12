let scorePlayer = 0
let scoreComputer = 0

function computerPlay(){
   let random =(Math.floor(Math.random()*3))
    
   if (random == 0)
   return 'piedra'

   else if ( random == 1)
   return 'papel'

   else 
   return 'tijera'
}

function playRound(playerSelection, computerSelection) {

if (playerSelection==computerSelection)
        return 'Empate'

else if (playerSelection == 'piedra' && computerSelection=='tijera' || 
         playerSelection == 'papel' && computerSelection=='piedra' ||
         playerSelection == 'tijera' && computerSelection=='papel'){
         scorePlayer = scorePlayer+1
         return 'ganaste ' + playerSelection+ ' beats '+ computerSelection
         }
         
 else {
    scoreComputer=scoreComputer+1
    return 'Perdiste ' + computerSelection + ' beats '+ playerSelection
 }
 
}

function game(){

    for (let ronda = 0; ronda < 5; ronda++){
        let playerSelection = prompt('Ingrese: Piedra, Papel o Tijera')
        playerSelection = playerSelection.toLowerCase()
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
     verificarScore(scorePlayer, scoreComputer);
}

function verificarScore(scorePlayer,scoreComputer){

    if (scorePlayer < scoreComputer)
    alert('You Lose!, Computer Obtuvo'+ scoreComputer + 'y tu obtuviste '+scorePlayer)

    else if (scorePlayer > scoreComputer)
    alert ('You win!, Obtuviste'+ scorePlayer + 'y la computadora obtuvo '+scoreComputer)
    
    else 
    alert ('Empate!')
}

 game();
         

