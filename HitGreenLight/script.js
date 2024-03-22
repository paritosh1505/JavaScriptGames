window.onload=startGame
let score=0
let gameOver = false
function startGame(){
   const gamebord = document.getElementById('gameboard')
   for(let i=0;i<9;i++){
    const divele = document.createElement('div')
    divele.setAttribute('id',"index_"+i)
    divele.setAttribute('class','lightblock');
    divele.addEventListener('click',getElementDiv)
   gamebord.appendChild(divele)
   }
setInterval(setColor,1000);

}
function setColor(){
    if(gameOver){
        return
    }
    const color = ['red','green']
    const colorindex= Math.floor(Math.random()*2)
    const colorval = color[colorindex]
    const getclass = document.querySelectorAll(".lightblock")
    getclass.forEach(reset=>{
        reset.style.backgroundColor='black'
    })

    let random = Math.floor(Math.random()*10)
    
    const divblock = document.getElementById("index_"+random);
    divblock.style.backgroundColor=colorval
}

function getElementDiv(){
    if(gameOver){
        return
    }
    const scoreval = document.getElementById('scorevalue')
    
    if(this.style.backgroundColor=='green'){
    score = parseInt(score)+10;
    scoreval.textContent=score    
        
    }
    if(this.style.backgroundColor=="red"){
        gameOver=true
        alert(`Game over Your score is ${scoreval.textContent}`)
    }
}