//MILESTONE 2:Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 




//1. Dichiariamo le constanti slide, arrow e current slide del nostro carosello
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;

//2. Resetto le slide con for per dare display none
function reset() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  }

//3. Diamo display block allo slideshow
function startSlide() {
    reset();
    slides[0].style.display = 'block';
  }  


 //4. Preview delle slide
function prevSlide() {
    reset();
    slides[currentSlide - 1].style.display = 'block';
    currentSlide--;
  } 

//5. Mostra la prossima slide
function nextSlide() {
    reset();
    slides[currentSlide + 1].style.display = 'block';
    currentSlide++;
  }
  
  //6. Attiva la freccia sinistra per lo switch
  leftArrow.addEventListener('click', function() {
    if (currentSlide === 0) {
      currentSlide = slides.length;
    }
    prevSlide();
  });
  
  //7.Attiva la freccia destra per lo switch
  rightArrow.addEventListener('click', function() {
    if (currentSlide === slides.length - 1) {
      currentSlide = -1;
    }
    nextSlide();
  });
  
  startSlide();  


//MILESTONE 3


//1. Array con img
const images = [
    {
        image: './img/image1.jpg',
        title: 'Frodo',
        text: 'Il mio tesoro',
    }, {
        image: './img/image2.jpg',
        title: 'Frodo',
        text: 'Il mio tesoro',
    }, {
        image: './img/image3.jpg',
        title: 'Frodo',
        text: 'Il mio tesoro',
    }, {
        image: './img/image4.jpg',
        title: 'Frodo',
        text: 'Il mio tesoro',
    }, {
        image: './img/image5.jpg',
        title: 'Frodo',
        text: 'Il mio tesoro',
    }
];

  //2. Crea una funzione per generare markup

  function generateImageMarkup(images) {
    let markup = '';
    for (let i = 0; i < images.length; i++) {
      markup += `
        <div class="slide">
          <img src="${images[i].image}" alt="${images[i].title}">
          <h2>${images[i].title}</h2>
          <p>${images[i].text}</p>
        </div>
      `;
    }
    return markup;
}

  //3. Generare generatemarkup

  const slidesContainer = document.querySelector('#slides-container');
slidesContainer.innerHTML = generateImageMarkup(images);