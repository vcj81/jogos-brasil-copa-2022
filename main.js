function createGame(player1, goal1, player2, goal2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${goal1}</strong>
      <strong>X</strong>
      <strong>${goal2}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, hour, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span> ${hour}</h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    "16:00",
    createGame("brazil", "2", "serbia", "0")
  ) +
  createCard(
    "28/11",
    "segunda",
    "13:00",
    createGame("brazil", "1", "switzerland", "0")
  ) +
  createCard(
    "02/12",
    "sexta",
    "16:00",
    createGame("cameroon", "1", "brazil", "0")
  ) +
  createCard(
    "05/12",
    "Oitavas Final",
    "16:00",
    createGame("brazil", "4", "korea", "1")
  ) +
  createCard(
    "09/12",
    "Quartas Final",
    "12:00",
    createGame("brazil", "2", "croatia", "4")
  )
