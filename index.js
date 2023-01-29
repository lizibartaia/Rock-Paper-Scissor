const computer=document.getElementById('computer-choice')
const user=document.getElementById('user-choice')
const resultdis=document.getElementById('result')
const btnchoice = document.querySelectorAll('button')
let userchoice;
let compchoice;
let res;

btnchoice.forEach(btnchoice => btnchoice.addEventListener('click', (e) => {
    userchoice=e.target.id
    user.innerHTML=userchoice
    computerchoice()
    result()
}))

function computerchoice(){
    const randomNumb= Math.floor(Math.random() * btnchoice.length)+1
    console.log(randomNumb)
    if(randomNumb === 1){
        compchoice = "rock"
    }
    if(randomNumb === 2){
        compchoice = "scissor"
    }
    if(randomNumb === 1){
        compchoice = "paper"
    }
    computer.innerHTML=compchoice
}

function result(){
    if(userchoice=="rock" && compchoice=="paper"){
        res="you lost!"
    }

    if(userchoice=="rock" && compchoice=="scissor"){
        res="you won!"
    }
    if(userchoice=="rock" && compchoice=="rock"){
        res="It's a draw!"
    }
    if(userchoice=="paper" && compchoice=="paper"){
        res="It's a draw!"
    }
    if(userchoice=="paper" && compchoice=="rock"){
        res="you won!"
    }
    if(userchoice=="paper" && compchoice=="scissor"){
        res="you lost!"
    }
    if(userchoice=="scissor" && compchoice=="paper"){
        res="you won!"
    }
    if(userchoice=="scissor" && compchoice=="rock"){
        res="you lost!"
    }
    if(userchoice=="scissor" && compchoice=="scissor"){
        res="It's a draw!"
    }
    resultdis.innerHTML=res
}