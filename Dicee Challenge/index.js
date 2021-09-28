function randomDicee(Dicee){
    var num = Math.floor(Math.random() * (6) + 1)
    var randomDiceeImage = "dice" + num +".png";
    var randomImageSource = "images/" + randomDiceeImage;
    var image = document.querySelectorAll("img")[Dicee]
    image.setAttribute("src",randomImageSource)

    return num
}
let num1 = randomDicee(0);
let num2 = randomDicee(1);
let num3 = randomDicee(2);


if (num1 > num2 && num1 > num3) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (num2 > num1 && num2 > num3) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else if (num3 > num1 && num3 > num2) {
    document.querySelector("h1").innerHTML = "Player 3 Wins!"
}
else if (num1 > num3 && num2 > num3 && num1 == num2) {
    document.querySelector("h1").innerHTML = "Player 1 & 2 Wins!"
}
else if (num1 > num2 && num3 > num2 && num1 == num3) {
    document.querySelector("h1").innerHTML = "Player 1 & 3 Wins!"
}
else if (num2 > num1 && num3 > num1 && num2 == num3) {
    document.querySelector("h1").innerHTML = "Player 2 & 3 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}