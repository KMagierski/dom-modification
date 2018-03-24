console.log('I am b.js!');

// B.1 - Wyświetl na stronie sumę goli strzelonych przez graczy
b1 = () => {
  const goals = document.querySelectorAll('tr > td:last-child');
  // let count = 0;
  // goals.forEach((goalNumber) => {
  //   count += parseInt(goalNumber.innerText);
  // });
  const arr = Array.from(goals);
  const count = arr.reduce((result, goal) => {
    return result += parseInt(goal.innerText);
  }, 0);

  document.querySelector('#goals-count').innerText = 'Sum of goals = ' + count;
}

// B.2 - Zaznacz gracza z największą ilością goli ustawiając tło na zielone
b2 = () => {
  const players = document.querySelectorAll('tr');

  let max = 0;
  let bestPlayer = players[0];

  players.forEach((player) => {
    const goalNumber = parseInt(player.lastElementChild.innerText);
    if (goalNumber > max) {
      max = goalNumber;
      bestPlayer = player;
    }
  });

  bestPlayer.style.backgroundColor = 'green';
}
// B.3 - Zaznacz gracza z najmniejszą ilością goli ustawiając tło na czerwone
// B.4 - Posortuj i wyświetl graczy po id
b4 = () => {
  const players = Array.from(document.querySelectorAll('tr'));
  const playersSorted = players.sort((playerA, playerB) => {
    const aId = parseInt(playerA.dataset.id);
    const bId = parseInt(playerB.dataset.id);
    return aId > bId ? 1 : -1;
  });
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = '';
  playersSorted.forEach((player) => {
    tbody.appendChild(player);
  });
}
// B.5 - Posortuj i wyświetl graczy po cenie z data-atrybutu
// B.6 - Usuń graczy z ceną wyższą nić 60 m USD
b6 = () => {
  const players = Array.from(document.querySelectorAll('tbody > tr'));
  const playersToRemove = players.filter((player) => {
    const priceStr = player.dataset.price.match(/[0-9]+/);
    if (priceStr === null) {
      return false;
    }
    const price = parseInt(priceStr);
    return price > 60;
  });
  const tbody = document.querySelector('tbody');
  playersToRemove.forEach((player) => {
    tbody.removeChild(player);
  });
}
// B.7 - Dodaj kolumnę zawierającą cenę gracza
b7 = () => {
  const players = Array.from(document.querySelectorAll('tbody > tr'));
  players.forEach((player) => {
    const td = document.createElement('td');
    td.innerText = player.dataset.price;
    player.appendChild(td);
  });

  const th = document.createElement('th');
  th.innerText = 'price';
  document.querySelector('thead > tr').appendChild(th);

}
// B.8 - Zostaw tylko graczy z PSG na liście
// B.9 - Dodaj do nazwy klubu ikonkę klubu
b9 = () => {
  const players = Array.from(document.querySelectorAll('tbody > tr'));
  const icons = {
    real: 'http://images.all-free-download.com/images/graphiclarge/real_madrid_101035.jpg',
    barcelona: 'http://images.all-free-download.com/images/graphiclarge/fc_barcelona_101029.jpg',
    psg: '/img/PSG.png'
  }
  players.forEach((player) => {
    const td = player.children[2];
    const team = td.innerText.toLowerCase();
    const img = document.createElement('img');
    img.setAttribute('src', icons[team] || icons.real);
    img.style.width = '20px';
    td.appendChild(img);
  });
}
// B.10 - wyświetl na stronie nazwę najlepszego gracza
// B.11 - wyświetl na stronie nazwę gracza najdroższego
// B.12 - wyświetl na stronie gracza z najlepszym stosunkiem ceny do strzelonych bramek