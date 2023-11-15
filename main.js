const correctNumber = Math.floor(Math.random() * 100);
let chances = 5;

function checkGuess() {
  const userGuess = document.getElementById("gissainput").value;
  const resultatDiv = document.getElementById("resultat");

  if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
    resultatDiv.innerHTML = "Vänligen skriv en giltig siffra mellan 0 och 100";
    return;
  }

  chances--;

  if (parseInt(userGuess) === correctNumber) {
    resultatDiv.innerHTML = `Grattis du har gissat rätt nummer ${correctNumber}!`;
    disableInputAndButton();
  } else {
    // Kolla om gissningen var högre eller lägre
    const hint = parseInt(userGuess) < correctNumber ? "högre" : "lägre";

    // Kolla om det finns fler chanser
    if (chances > 0) {
      resultatDiv.innerHTML = `Fel nummer! Du har ${chances} chanser kvar. Gissa ${hint}.`;
    } else {
      resultatDiv.innerHTML = `Tyvärr, du har inga chanser kvar. Rätt nummer var ${correctNumber}.`;
      disableInputAndButton();
    }
  }
}

function disableInputAndButton() {
  document.getElementById("gissainput").disabled = true;
  document.querySelector("button").disabled = true;
}





