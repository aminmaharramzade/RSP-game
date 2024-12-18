const startBtn = document.querySelector(`#startBtn`);
const userMe = document.querySelector(`#userMe`);
const userComp = document.querySelector(`#userComp`)
const myHand = document.querySelector(`#myHand`)
const compHand = document.querySelector(`#compHand`)
const statusUser = document.querySelector(`#statusUser`)
const statusComp = document.querySelector(`#statusComp`)
const scoreUser = document.querySelector(`#scoreUser`)
const scoreComp =document.querySelector(`#scoreComp`)
const resetBtn = document.querySelector(`#resetBtn`)


let pointUser = 0;
let pointComp = 0;




const hands = ["ROCK","SCISSORS","PAPER"]
const images = {
      ROCK : "./assets/images/rock.png" ,
      PAPER : "./assets/images/paper.png" ,
      SCISSORS : "./assets/images/scissors.png"
      
}

function showUser(){
    statusUser.textContent = `WIN`
    statusUser.style.color = "green"

    statusComp.textContent = `LOSE`
    statusComp.style.color = 'red'

    

   

}

function showDraw(){
    statusUser.textContent = `DRAW`
    statusComp.textContent = `DRAW`

    statusUser.style.color = `blue`
    statusComp.style.color = `blue`
}

function showComp(){
    statusUser.textContent = `LOSE`
    statusUser.style.color = `red`

    statusComp.textContent = `WIN`
    statusComp.style.color = `green`
}

const randomEl = () => {
    const random = hands[Math.floor(Math.random() * hands.length)]
    return random
}



const start = () =>  {

    startBtn.textContent = "RETRY"
    
     userMe.textContent = randomEl();
     userComp.textContent = randomEl();

     const myImg = images[userMe.textContent];
     const compImg = images[userComp.textContent]



     if(userMe.textContent === "ROCK" && userComp.textContent === "SCISSORS" ||
        userMe.textContent === "PAPER" && userComp.textContent === "ROCK" ||
        userMe.textContent === "SCISSORS" && userComp.textContent === "PAPER"){
            showUser()
            myHand.src = myImg
            compHand.src = compImg

            pointUser += 1;
            scoreUser.innerHTML = pointUser 
        }else if(userMe.textContent === userComp.textContent){
           showDraw()
           myHand.src = myImg
           compHand.src = compImg
        }else {
            showComp()
            myHand.src = myImg
            compHand.src = compImg

            pointComp += 1 ;
            scoreComp.innerHTML = pointComp
           
        }

}

const reset = () => {
    window.location.reload(); 
};


startBtn.addEventListener("click" , start)
resetBtn.addEventListener("click" , reset)

