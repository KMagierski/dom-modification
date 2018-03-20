console.log('I am a0.js');

// A0.1 - sklonuj div A 10 razy i ustaw go za C
a01 = () => {
  const body = document.querySelector('body');
  const div = body.firstElementChild;

  for (let i = 0; i < 10; i++) {
    body.appendChild(div.cloneNode(true));
  }
}
// A0.2 - zastąp div B i C na div A
a02 = () => {
  const body = document.querySelector('body');
  const divA = body.firstElementChild;
  // usuwamy stare div B i C
  body.removeChild(divA.nextElementSibling);
  body.removeChild(divA.nextElementSibling);
  // wstawiamy klony diva A
  body.appendChild(divA.cloneNode(true));
  body.appendChild(divA.cloneNode(true));
}
a02Replace = () => {
  const body = document.querySelector('body');
  const divA = body.firstElementChild;
  
  const divB = divA.nextElementSibling;
  const divC = divB.nextElementSibling;

  body.replaceChild(divA.cloneNode(true), divB);
  body.replaceChild(divA.cloneNode(true), divC);
}


// A0.3 - usuń akapity ze wszystkich div
a03 = () => {
  const divs = document.querySelectorAll('div');
  const arr = Array.from(divs);

  arr.forEach((div) => {
    // worst way:
    //const p = div.querySelector('p');
    //div.removeChild(p);
    // better way:
    div.removeChild(div.lastElementChild);
  })
}
// A0.4 - przestaw miejscami tak zeby było C, B, A
a04 = () => {
  const divA = document.querySelectorAll('div')[0];
  const divC = document.querySelectorAll('div')[2];
  const body = document.querySelector('body');
  body.replaceChild(divC, divA);
  body.appendChild(divA);
}
// A0.5 - wstaw diva D na koniec
a05 = () => {
  const divA = document.querySelector('div');
  const divD = divA.cloneNode(true);
  divD.firstElementChild.innerText = 'D';
  divD.lastElementChild.innerText = 'I am div D';
  const body = document.querySelector('body');
  body.appendChild(divD);
}
// A0.6 - wstaw diva Z przed A
a06 = () => {
  const divA = document.querySelector('div');
  const divZ = divA.cloneNode(true);
  divZ.firstElementChild.innerText = 'Z';
  divZ.lastElementChild.innerText = 'I am div Z';
  const body = document.querySelector('body');
  body.insertBefore(divZ, divA);
}
// A0.7 - wstaw diva z napisem Brake pomiędzy A i B oraz B i C
a07 = () => {
  const brakeDiv = document.createElement('div');
  brakeDiv.innerHTML = '<b>Brake</b>';
  const body = document.querySelector('body');
  const divC = body.querySelectorAll('div')[2];
  const divB = divC.previousElementSibling;

  body.insertBefore(brakeDiv, divB);
  body.insertBefore(brakeDiv.cloneNode(true), divC);
}
// A0.8 - wstaw do srodka diva B liste <ul></ul>
a08 = () => {
  const divB = document.querySelectorAll('div')[1];
  divB.innerHTML = divB.innerHTML + '<ul><li>First element</li></ul>'
}
a08Create = () => {
  const divB = document.querySelectorAll('div')[1];
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.innerText = 'First element';
  ul.appendChild(li);
  divB.appendChild(ul);
}
// A0.9 - wstaw do diva C sklonowane divy A, B, C
a10 = () => {
 const divC = document.querySelectorAll('div')[2];
 const cloneC = divC.cloneNode(true);
 divC.appendChild(divC.previousElementSibling.cloneNode(true));
 divC.appendChild(divC.previousElementSibling.previousElementSibling.cloneNode(true));
 divC.appendChild(cloneC);
}