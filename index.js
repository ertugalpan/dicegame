var refreshButton = document.getElementById("refresh");

function diceGame() {
  //DICE 1
  var randomDice = Math.floor(Math.random() * 6 + 1);
  var diceLocation = "images/" + randomDice + ".gif";
  var img1 = document.querySelectorAll("img")[0];
  img1.setAttribute("src", diceLocation);

  //DICE 2
  var randomDice2 = Math.floor(Math.random() * 6 + 1);
  var diceLocation2 = "images/" + randomDice2 + ".gif";
  var img2 = document.querySelectorAll("img")[1];
  img2.setAttribute("src", diceLocation2);

  if (randomDice > randomDice2) {
    document.querySelector("h1").innerHTML = " &#128681; Player 1 Win !";
  } else if (randomDice < randomDice2) {
    document.querySelector("h1").innerHTML = "Player 2 Win ! &#128681; ";
  } else if ((randomDice = randomDice2)) {
    document.querySelector("h1").innerHTML = "&#128681; Draw! &#128681;";
  } else {
    document.querySelector("h1").innerHTML = "Something Error!";
  }
  dice.innerHTML = "Play Again";
}
