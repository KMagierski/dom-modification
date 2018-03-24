console.log('I am a.js!');

// A.1 - Wyświetl zamiast linku, zawartosc znacznika rel

a1 = () => {
  const links = document.querySelectorAll('a');
  const arr = Array.from(links);
  arr.forEach((el) => {
    el.innerText = el.getAttribute('rel');
  });
}
// A.2 - Dodaj na koniec link do Lubelskiej Akademii IT
a2 = () => {
  const section = document.querySelector('section');
  const link = section.firstElementChild.cloneNode(true);
  link.setAttribute('href', 'http://lait.pl');
  link.setAttribute('target', '_blank');
  link.innerText = 'Lubelska Akademia IT';
  section.appendChild(link);
}
// A.3 - Ustaw zeby wszystkie linki kierowaly do Lubelskiej Akademii IT
// A.4 - Wyswietl tylko oplacone linki
a4 = () => {
  const section = document.querySelector('section');
  const links = section.querySelectorAll('a[data-paid=false]');
  links.forEach((link) => {
    section.removeChild(link);
  });
}
// A.5 - Ustaw zeby link 6 był opłacony i powtórz poprzednie zadania A.4