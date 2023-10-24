let randomNo1 = Math.floor(Math.random() * 6 + 1);
let randomNo2 = Math.floor(Math.random() * 6 + 1);

let randomImg1p = "images/dice" + randomNo1 + ".png";
let randomImg2p = "images/dice" + randomNo2 + ".png";

document.querySelector("img.img1").setAttribute("src", randomImg1p);
document.querySelector("img.img2").setAttribute("src", randomImg2p);

if (randomNo1 > randomNo2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else if (randomNo2 > randomNo1) {
  document.querySelector("h1").innerHTML = "Player 2 wins🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw Refresh";
}
