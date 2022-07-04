// Data Base db
const dbEasy = [
    'security','behavior','institute','achievement','brilliant','delicious','accessories',
    'appearance','department','communication','storage','performance','application','agriculture',
    'arrangement','approximately','variables','notification','development','experiment','synchronization',
    'acknowledge','administrator','championship','acceleration','gravity','momentum','engineering','entertainment',
    'financial','foundation','frequency','gentleman','government','grandmother','helicopter','identification','imagination',
    'immediately','improvement','independent','information','measurement','occupation','opportunity','organization',
    'participation','perspective','philosophy','population','preparation','psychology','punishment','recommend','relationship',
    'requirement','satisfaction','settlement','significant','specialist','successful','suggestion','technology','temperature',
    'tendency','tournament','transform','understand','vegetable','wonderful','yesterday','presentation','international',
    'hypothesis','generation'
]
const dbMedium = [
    'normally','behavior','Session','Storage','performance','minister','source',
    'network','Element','Variables','Delicious','Payment','message','motivation',
    'headquarters','judgment','velocity','newspaper','motivation','partnership','vector','investigate',
    'platform','pleasure','politics','pressure','profession','purchase','realize','remember','repeatedly',
    'response','scholarship','secretary','sequence','situation','software','stability','struggle','structure',
    'student','support','symbol','technique','themselves','throughout','thousand','universe','unusual','version',
    'volunteer','workshop','governor','opposite','organic','otherwise','painful','reaction','represent','satellite'
    
]
const dbHard = [
    'Airport','announce','approve','artist','assign','attack','basic','20runs','battle','bell','blade','BlanKet',
    'Boom','bullet','Rs:125','card','cash','child','clear','club','deer','digital','DNA','exact','fabric','FORCE',
    'gender','helpFul','holiDay','invest','jacket','justice','lemon','local','manage','mayBe','mental','million',
    'Missile','Myth','NoBody','Olympic','person','plastic','prime','profit','quietly','Rapidly','recruit','reflect',
    'function()','<Tag>','(Mark)','"Title"','question?','etc...','plus+','subtract-','multipy*','Divide/'
]
// console.log(dbEasy.length);
// console.log(dbMedium.length);
// console.log(dbHard.length);
// console.log(db.length);
// Get Screen 
const homeScreen = document.querySelector('.homeScreen');
const sdScreen = document.querySelector('.sdScreen');
const playScreen = document.querySelector('.playScreen');
const gameOverScreen = document.querySelector('.gameOverScreen');
// Get Button 
const playBtn = document.querySelector('.playBtn');
const easyBtn = document.querySelector('.easyBtn');
const mediumBtn = document.querySelector('.mediumBtn');
const hardBtn = document.querySelector('.hardBtn');
const startBtn = document.querySelector('.startBtn');
const playAgainBtn = document.querySelector('.playAgainBtn');
const homeBtn = document.querySelector('.homeBtn');
// Get another HTML tag
const main = document.querySelector('.main');
const Input = document.querySelector('.userInput');
const typeWord = document.querySelector('.typeWord');
const instruction = document.querySelector('.instruction');
const showScore = document.querySelector('.score');
const showScore2 = document.querySelector('.score2');
const showhighScore = document.querySelector('.highScore');
const showhighScore2 = document.querySelector('.highScore2');
const recentScore = document.querySelector('.recentScore');
const recentScoreBox = document.querySelector('.recentScoreBox');
const timeLeft = document.querySelector('.timeLeft');
const displayTime = document.querySelector('.displayTime');
const cwText = document.querySelector('.instruction');
// Create Variables 
let easyTime = 10;
let mediumTime = 6;
let hardTime = 4;
let lastSeconds = 3;
let time = 0;
let score = 0;
let highScoreEasy=0;
let highScoreMedium=0;
let highScoreHard=0;
let index =0;
let numbersArray = createArrayOfNumber(0,dbEasy.length-1);
let randomIndex =  getRandomNumber(0,numbersArray.length-1);
let randomNumber = numbersArray[randomIndex];
let gameStart = false;
let difficulty;
let spacePress='none';
// Code For playBtn 
playBtn.addEventListener('click',function () {
    homeScreen.classList.add('hide')
    sdScreen.classList.remove('hide')
});
// Code For easyBtn 
easyBtn.addEventListener('click',function () {
    time = easyTime;
    sdScreen.classList.add('hide')
    playScreen.classList.remove('hide');
    timeLeft.innerHTML=time;
    difficulty='easy';
    spacePress='start';
    numbersArray = createArrayOfNumber(0,dbEasy.length-1);
    typeWord.innerHTML=dbEasy[randomNumber];
});
// Code For mediumBtn 
mediumBtn.addEventListener('click',function () {
    time = mediumTime;
    sdScreen.classList.add('hide')
    playScreen.classList.remove('hide');
    timeLeft.innerHTML=time;
    difficulty='medium';
    spacePress='start';
    numbersArray = createArrayOfNumber(0,dbMedium.length-1);
    typeWord.innerHTML=dbMedium[randomNumber];
});
// Code For hardBtn 
hardBtn.addEventListener('click',function () {
    time = hardTime;
    sdScreen.classList.add('hide')
    playScreen.classList.remove('hide')
    timeLeft.innerHTML=time;
    difficulty='hard';
    spacePress='start';
    numbersArray = createArrayOfNumber(0,dbHard.length-1);
    typeWord.innerHTML=dbHard[randomNumber];
});
// Code for startBtn 
function startGame() {
    startBtn.classList.add('hide'); 
    instruction.classList.add('hide'); 
    Input.disabled=false;
    Input.focus();
    gameStart=true;
}
startBtn.addEventListener('click',function () {
    startGame()
});
// Code for playAgainBtn 
function playAgain() {
    gameOverScreen.classList.add('hide');
    playScreen.classList.remove('hide');
    startBtn.classList.remove('hide'); 
    instruction.classList.remove('hide'); 
    Input.value='';
    Input.disabled=true;
    timeLeft.innerHTML = time;
    if(difficulty=='easy'){
        localStorage.setItem("recentScoreEasy", score);
    }
    if(difficulty=='medium'){
        localStorage.setItem("recentScoreMedium", score);
    }
    if(difficulty=='hard'){
        localStorage.setItem("recentScoreHard", score);
    }
    score=0;
    showScore.innerHTML=score;
    if (difficulty=='easy') {
        numbersArray = createArrayOfNumber(0,dbEasy.length-1);
        typeWord.innerHTML=dbEasy[randomNumber];
    }
    if (difficulty=='medium') {
        numbersArray = createArrayOfNumber(0,dbMedium.length-1);
        typeWord.innerHTML=dbMedium[randomNumber];
    }
    if (difficulty=='hard') {
        numbersArray = createArrayOfNumber(0,dbHard.length-1);
        typeWord.innerHTML=dbHard[randomNumber];
    }
    spacePress='start';
    index=0;
}
playAgainBtn.addEventListener('click',function () {
    playAgain();
})
// Code for homeBtn 
homeBtn.addEventListener('click',function () {
    if(difficulty=='easy'){
        localStorage.setItem("recentScoreEasy", score);
    }
    if(difficulty=='medium'){
        localStorage.setItem("recentScoreMedium", score);
    }
    if(difficulty=='hard'){
        localStorage.setItem("recentScoreHard", score);
    }
    location.reload()
});
// Code for Random Number 
function getRandomNumber(min,max) {
    let step1 = max - min +1;
    let step2 = Math.random() * step1;
    let result= Math.floor(step2) + min;
    return result;
}

function createArrayOfNumber(start,end) {
    let myArray = []
    for(let i = start; i <= end; i++){
        myArray.push(i);
    }
    return myArray;
}
// Code for Main Game 
// Check User Type Correct Word or Not
let wordArray;
let usertype;
Input.addEventListener('keyup',function () {
    // debugger;
    let complete = false;
    let Continue = true;
    if (difficulty=='easy') {
        wordArray=dbEasy[randomNumber].split('')
    }
    if (difficulty=='medium') {
        wordArray=dbMedium[randomNumber].split('')
    }
    if (difficulty=='hard') {
        wordArray=dbHard[randomNumber].split('')
    }
    let userInputArray = this.value.split(''); 
    if (event.key=='Backspace') {
        if (usertype=='correct') {
            index-=2;
        }
    }
    console.log('wordArray' + '/' + wordArray[index]);
    console.log('userInput' + '/' + userInputArray[index]);
    if (userInputArray[index]==wordArray[index]) {
        // playScreen.setAttribute('style','background:rgb(2, 77, 2);');
        Input.setAttribute('style','color:white');
        index++;
        Continue=false;
        usertype='correct';
    }
    if (userInputArray[index]!=wordArray[index]&&Continue&&complete==false&&event.keyCode!=37&&event.keyCode!=38&&event.keyCode!=39&&event.keyCode!=40) {
        // playScreen.setAttribute('style','background:rgb(82, 1, 1);');
        Input.setAttribute('style','color:darkred');
        usertype='wrong';
    }
    console.log('index' + '/' + index);
});

numbersArray.splice(randomIndex,1);
setInterval(() => {
    if(difficulty=='easy'){
        highScoreEasy=localStorage.getItem('highScoreEasy');
        if(highScoreEasy==null){
            highScoreEasy=0;
        }
        showhighScore.innerHTML=highScoreEasy;
        showhighScore2.innerHTML=highScoreEasy;
    }
    if(difficulty=='medium'){
        highScoreMedium=localStorage.getItem('highScoreMedium');
        if(highScoreMedium==null){
            highScoreMedium=0;
        }
        showhighScore.innerHTML=highScoreMedium;
        showhighScore2.innerHTML=highScoreMedium;
    }
    if(difficulty=='hard'){
        highScoreHard=localStorage.getItem('highScoreHard');
        if(highScoreHard==null){
            highScoreHard=0;
        }
        showhighScore.innerHTML=highScoreHard;
        showhighScore2.innerHTML=highScoreHard;
    }
    let userInput = Input.value;
    if(userInput==typeWord.innerHTML){
        complete=true;
        index=0;
        score++;
        showScore.innerHTML=score;
        if(difficulty=='easy'){
            if(score>highScoreEasy){
                localStorage.setItem("highScoreEasy", score);
            }
        }
        if(difficulty=='medium'){
            if(score>highScoreMedium){
                localStorage.setItem("highScoreMedium", score);
            }
        }
        if(difficulty=='hard'){
            if(score>highScoreHard){
                localStorage.setItem("highScoreHard", score);
            }
        }
        if(numbersArray.length==0){
            typeWord.innerHTML=`"Congratulation" <br>You Are Typing Master`;
            startBtn.classList.remove('hide');
            startBtn.classList.add('home');
            startBtn.innerHTML='Home';
            startBtn.addEventListener('click',function () {
                location.reload()
            })
            instruction.classList.add('hide'); 
            Input.classList.add('hide');
            gameStart=false;
            displayTime.innerHTML='';
            displayTime.removeAttribute('style');
            typeWord.setAttribute('style','text-align:center; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);')
            return;
        }
        randomIndex =  getRandomNumber(0,numbersArray.length-1);
        randomNumber = numbersArray[randomIndex];
        numbersArray.splice(randomIndex,1);
        // console.log(randomNumber);
        Input.value='';
        displayTime.innerHTML='';
        displayTime.removeAttribute('style');
        // playScreen.removeAttribute('style')
        setTimeout(() => {
            Input.setAttribute('style','color:white');
        }, 510);
        timeLeft.innerHTML=time;
        if (difficulty=='easy') {
            typeWord.innerHTML=dbEasy[randomNumber];
        }
        if (difficulty=='medium') {
            typeWord.innerHTML=dbMedium[randomNumber];
        }
        if (difficulty=='hard') {
            typeWord.innerHTML=dbHard[randomNumber];
        }
    }
    // console.log(userInputArray[0]);
}, 300);

// Timer 
setInterval(() => {
    if(gameStart){
        timeLeft.innerHTML-=1;
        if(timeLeft.innerHTML<=lastSeconds){
            displayTime.innerHTML=timeLeft.innerHTML;
           displayTime.setAttribute('style','animation: displayTime 1s linear infinite;')
        }
        if(timeLeft.innerHTML==0){
            spacePress='playAgain';
            playScreen.classList.add('hide');
            gameOverScreen.classList.remove('hide');
            gameStart=false;
            showScore2.innerHTML=score;
            displayTime.innerHTML='';
            displayTime.removeAttribute('style');
            if(difficulty=='easy'){
                if(localStorage.getItem("recentScoreEasy")==null){
                    recentScoreBox.classList.add('hide')
                }else{
                    recentScoreBox.classList.remove('hide')
                    recentScore.innerHTML=localStorage.getItem("recentScoreEasy");
                }
            }
            if(difficulty=='medium'){
                if(localStorage.getItem("recentScoreMedium")==null){
                    recentScoreBox.classList.add('hide')
                }else{
                    recentScoreBox.classList.remove('hide')
                    recentScore.innerHTML=localStorage.getItem("recentScoreMedium");
                }
            }
            if(difficulty=='hard'){
                if(localStorage.getItem("recentScoreHard")==null){
                    recentScoreBox.classList.add('hide')
                }else{
                    recentScoreBox.classList.remove('hide')
                    recentScore.innerHTML=localStorage.getItem("recentScoreHard");
                }
            }
        }
    }
}, 1000);
// Code for KeyBoard Controll 
window.addEventListener('keyup',function (e) {
//    console.log(event.keyCode); 
   if(e.keyCode==32){
       if (spacePress=='start') {
           startGame()
       }
       if (spacePress=='playAgain') {
           playAgain()
       }
   }
});