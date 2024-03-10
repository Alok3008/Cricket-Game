let scoreStr=localStorage.getItem('score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
    score=scoreStr ? JSON.parse(scoreStr) : {
        win: 0,
        lost: 0,
        tie: 0,
    };
    score.displayScore=function(){
        return `score: won ${score.win}, Lost ${score.lost}, Tie ${score.tie}`;
    }
    showResult();
}

function computerChoiceGenerate(){
    let randomNum=Math.random()*3;

    if(randomNum>0 && randomNum<1){
        return 'Bat';
    }else if(randomNum>1 && randomNum<2){
        return 'Ball';
    }else{
        return 'Stump';
    }
}

function getresult(userMove, computerMove){
    if(userMove==='Bat'){
        if(computerMove==='Bat'){
            score.tie++;
            return `It's tie`;
        }else if(computerMove==='Ball'){
            score.win++;
            return 'You win';
        }else{
            score.lost++;
            return 'Comuter has won';
        }
    }else if(userMove==='Ball'){
        if(computerMove==='Bat'){
            score.lost++;
            return `Comuter has won`;
        }else if(computerMove==='Ball'){
            score.tie++;
            return `It's tie`;
        }else{
            score.win++;
            return 'You win';
        }
    }else{
        if(computerMove==='Bat'){
            score.lost++;
            return `You win`;
        }else if(computerMove==='Ball'){
            score.win++;
            return 'Comuter has won';
        }else{
            score.tie++;
            return `It's tie`;
        }
    }
}

function showResult(userMove, computerMove, result){
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('#user-move').innerText=
    userMove ? `You have chosen ${userMove}.` : '';
    document.querySelector('#computer-move').innerText=
    computerMove ? `Computer choice is ${computerMove}.` : '';
    document.querySelector('#result').innerText=result || '';
    document.querySelector('#score').innerText=score.displayScore();
    
}