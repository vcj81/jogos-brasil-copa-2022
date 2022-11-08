function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta", createGame("brazil", "16:00", "serbia")) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("cameroon", "16:00", "brazil")) +
  createCard(
    "03-06/12",
    "Oitavas Final",
    createGame("brazil", "16:00", "undefined")
  ) +
  createCard(
    "09-10/12",
    "Quartas Final",
    createGame("brazil", "12:00", "undefined")
  ) +
  createCard(
    "13-14/12",
    "Semi Final",
    createGame("brazil", "16:00", "undefined")
  ) +
  createCard("18/12", "Final", createGame("brazil", "12:00", "undefined"))
