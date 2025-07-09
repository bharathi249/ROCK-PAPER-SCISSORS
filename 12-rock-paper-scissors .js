let score=JSON.parse(localStorage.getItem('score')) || {  wins: 0,
            losses: 0,
            ties: 0
        };
        updateScoreElement();
        /*
        if(!score){
          score={  wins: 0,
            losses: 0,
            ties: 0
        };
    }
        */
       let isAutoPlay=false;
       let intervalId;
     //const autoplay=() =>{

    // }


       function autoplay(){
        if(!isAutoPlay){
          intervalId= setInterval(()=>{
            const playerMove=pickComputerMove();
            playGame(playerMove);

        },1000); 
        isAutoPlay=true;
        }
        else{
         clearInterval(intervalId);
         isAutoPlay=false;
        }
       }

    document.querySelector('.js-rock-button').addEventListener('click',()=>{
        playGame('rock');
    });
     document.querySelector('.js-paper-button').addEventListener('click',()=>{
        playGame('paper');
    });
     document.querySelector('.js-scissors-button').addEventListener('click',()=>{
        playGame('scissors');
    });
    

       document.body.addEventListener('keydown' ,(event)=>{
        if(event.key === 'r'){
            playGame('rock');
        }
        else if(event.key==='p'){
            playGame('paper');
        }
        else if(event.key==='s'){
            playGame('scissors');
        }
       });
function playGame(playerMove){
     const computermove=pickComputerMove();
   
    let result='';
    if(playerMove==='scissors'){
    if(computermove==='rock'){
        result='you lose.'
    }
    else if(computermove==='paper'){
        result='you win';
    }
    else if(computermove==='scissors'){
        result='tie';
    }
    }


    else if(playerMove==='paper'){

    if(computermove==='rock'){
            result='you win.'
        }
        else if(computermove==='paper'){
            result='tie';
        }
        else if(computermove==='scissors'){
            result='you lose';
        }
    }

    
    else if(playerMove==='rock'){
if(computermove==='rock'){
            result='you win.'
        }
        else if(computermove==='paper'){
            result='tie';
        }
        else if(computermove==='scissors'){
            result='you lose';
        }

    }
    if(result==='you win.'){
        score.wins+=1;
    }
    else if(result==='you lose'){
        score.losses+=1;
    }
    else if(result==='tie'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
     updateScoreElement();
      document.querySelector('.js-result').innerHTML=result;
      document.querySelector('.js-move').innerHTML=` you
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computermove}-emoji.png" class="move-icon">
computer`;
    
    
        }
        function updateScoreElement(){
             document.querySelector('.js-score').innerHTML=`wins:${score.wins} , losses:${score.losses},ties:${score.ties}`;
        }
function pickComputerMove(){
     const randomNumber =Math.random();
        let computermove='';
        if(randomNumber>=0 && randomNumber<1/3){
        
    computermove='rock';
    }
    else if(randomNumber>= 1/3 && randomNumber<2/3){
         computermove='paper';
    }
    else if(randomNumber>=2/3 && randomNumber<1){
          computermove='scissors';
    }
   return computermove;
        }