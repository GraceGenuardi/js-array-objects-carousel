




// Dichiarazione delle costanti per il carosello
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

// Funzione per impostare il display "none" a tutte le slide
function reset() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
}

// Funzione per mostrare una slide specifica
function showSlide(index) {
  reset();
  slides[index].style.display = 'block';
  currentSlide = index;
}

// Funzione per mostrare la slide successiva
function nextSlide() {
  let newIndex = currentSlide + 1;
  if (newIndex >= slides.length) {
    newIndex = 0;
  }
  showSlide(newIndex);
}

// Funzione per mostrare la slide precedente
function prevSlide() {
  let newIndex = currentSlide - 1;
  if (newIndex < 0) {
    newIndex = slides.length - 1;
  }
  showSlide(newIndex);
}

// Aggiunta degli eventi click sulle frecce
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Array di immagini
const images = [
  {
    image: './img/image1.jpg',
    title: 'Frodo',
    text: 'Il mio tesoro',
  },
  {
    image: './img/image2.jpg',
    title: 'Frodo',
    text: 'Il mio tesoro',
  },
  {
    image: './img/image3.jpg',
    title: 'Frodo',
    text: 'Il mio tesoro',
  },
  {
    image: './img/image4.jpg',
    title: 'Frodo',
    text: 'Il mio tesoro',
  },
  {
    image: './img/image5.jpg',
    title: 'Frodo',
    text: 'Il mio tesoro',
  },
];

// Generazione del markup per le slide
function generateImageMarkup(images) {
  let markup = '';
  for (let i = 0; i < images.length; i++) {
    const activeClass = i === 0 ? 'active' : '';
    markup += `
      <div class="slide ${activeClass}">
        <img src="${images[i].image}" alt="${images[i].title}">
        <h2>${images[i].title}</h2>
        <p>${images[i].text}</p>
      </div>
    `;
  }
  return markup;
}

// Inserimento delle slide nel carosello
const slidesContainer = document.querySelector('#slides-container');
slidesContainer.innerHTML = generateImageMarkup(images);

// Mostrare la prima slide all'avvio
showSlide(0);