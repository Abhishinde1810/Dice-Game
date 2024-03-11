var randomNum = Math.floor(Math.random() * 6) + 1;
var randomImg = "d" + randomNum + ".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg);
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "d" + randomNum1 + ".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImg1);

if (randomNum > randomNum1) {
    document.querySelector(".win").innerHTML =
        "Player 1 wins"
}
else if (randomNum < randomNum1) {
    document.querySelector(".win").innerHTML =
        "Player 2 wins"
}
else {
    document.querySelector(".win").innerHTML =
        "DRAW!!!"
}