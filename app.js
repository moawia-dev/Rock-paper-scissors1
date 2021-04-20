const game = () => {
    let pOne = 0;
    let pTwo = 0;

    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const intro = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            intro.classList.add("fadeout");
            match.classList.add("fadein");
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const pOneHand = document.querySelector('.player-1-hand');
        const pTwoHand = document.querySelector('.player-2-hand');
        const hands = document.querySelectorAll('hands img');



        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })


        const pTwoOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach((option) => {
            option.addEventListener("click", function(){
                const pTwoNumbers = Math.floor(Math.random() * 3);
                const pTwoChoice = pTwoOptions[pTwoNumbers]
                pOneHand.style.animation = "shakePlayerOne 2s ease";
                pTwoHand.style.animation = "shakePlayerTwo 2s ease";
                setTimeout(() => {
                    results(this.textContent, pTwoChoice );
                    pOneHand.src = `./Photos/${this.textContent}.png`;
                    pTwoHand.src = `./Photos/${pTwoChoice}.png`;
                }, 2000)

                

            });


        })
        
        
        
    }

    const updateScore = () =>{
        const pOneScore = document.querySelector(".player-1 p");
        const pTwoScore = document.querySelector(".player-2 p");
        pOneScore.textContent = pOne;
        pTwoScore.textContent = pTwo;
    };

    const results = (pOneChoice, pTwoChoice) => {
        const winner = document.querySelector('.winner')
        if(pOneChoice === pTwoChoice){
            winner.textContent = "You Both Suck";
            return;
        }

        if(pOneChoice === 'paper'){
            if(pTwoChoice === 'scissors'){
                winner.textContent = 'Player Two Wins'
                pTwo++;
                updateScore()
                return;
            }else{
                winner.textContent = 'You win!';
                pOne++;
                updateScore()
                return;
            }
        }

        if(pOneChoice === 'rock'){
            if(pTwoChoice === 'scissors'){
                winner.textContent = 'You win!'
                pOne++;
                updateScore()
                return;
            }else{
                winner.textContent = 'You Lose';
                pTwo++;
                updateScore()
                return;
            }
        }

        if(pOneChoice === 'scissors'){
            if(pTwoChoice === 'paper'){
                winner.textContent = 'You win!'
                pOne++;
                updateScore()
                return;
            }else{
                winner.textContent = 'You Lose';
                pTwo++;
                updateScore()
                return;
            }
        }



    }

    startGame();
    playMatch();
    results();
};

game();