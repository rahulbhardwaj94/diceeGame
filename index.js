
/* Player 1 */

var randomNum1 = Math.floor(Math.random() * 6) + 1;

var imageSource = "images/dice" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", imageSource);


/* Player 2 */

var randomNum2 = Math.floor(Math.random() * 6) + 1;

var imageSource2 = "images/dice" + randomNum2 + ".png";


document.querySelectorAll("img")[1].setAttribute("src", imageSource2);



/* Comparision */

if(randomNum1 > randomNum2){
    document.querySelector("h1").innerText = "🚩 Play 1 Wins!";
}
else if(randomNum1 === randomNum2){
    document.querySelector("h1").innerHTML = "Draw!";
}
else{
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩"
}