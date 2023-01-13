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
    document.querySelector("h2").innerHTML =
      " &#128681; Ekrem Abi kazandı alışverişler !";
  } else if (randomDice < randomDice2) {
    document.querySelector("h2").innerHTML =
      "Hüseyin Abi kazandı alışverişler ! &#128681; ";
  } else if ((randomDice = randomDice2)) {
    document.querySelector("h2").innerHTML = "&#128681; berabere! &#128681;";
  } else {
    document.querySelector("h2").innerHTML = "Something Error!";
  }
  dice.innerHTML = "Play Again";
}
