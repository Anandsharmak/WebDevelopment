var player1=Math.floor(Math.random()*(7-1)+1);
var player2=Math.floor(Math.random()*(7-1)+1);
console.log("player1 "+player1+" player2 "+player2)
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+player1+".png")
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+player2+".png")
if(player1>player2)
document.querySelector("h1").innerText="⛳Player1 wins";
else if(player2>player1 )
document.querySelector("h1").innerText="Player2 wins⛳";
else
document.querySelector("h1").innerText="Draw";
