//MILESTONE 2:Al click dell’utente sulle frecce (una a sinistra e una a destra), il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente. 




// Dichiarazione delle costanti per il carosello
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
let currentSlide = 0;



// Aggiunta degli eventi click sulle frecce
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Array di immagini
const images = [
  {
    image: './img/image1.jpg',
    title: 'Frodo',
    text: '«Ma sono stato ferito troppo profondamente, Sam. Ho tentato di salvare la Contea, ed è stata salvata, ma non per merito mio. Accade sovente così, Sam, quando le cose sono in pericolo: qualcuno deve rinunciare, perderle, affinché altri possano conservarle»',
  },
  {
    image: './img/image2.jpg',
    title: 'Gimli',
    text: ' "Quindi indicò a Frodo, nominandoli, coloro che egli non aveva ancora incontrato: accanto a Glóin vi era un giovane nano, che si presentò come suo figlio Gimli."',
  },
  {
    image: './img/image3.jpg',
    title: 'Legolas',
    text: '"Vi era anche uno strano Elfo vestito di verde e nero, di nome Legolas, inviato dal padre Thranduil, Re degli Elfi a nord del Bosco Atro."',
  },
  {
    image: './img/image4.jpg',
    title: 'Aragorn',
    text: '"Alto come i Re del passato, si ergeva su tutti i presenti; sembrava anziano e al tempo stesso nel fiore della virilità; e sulla sua fronte vi era saggezza, e nelle sue mani vigore e guarigione, e una luce brillava intorno a lui. E allora Faramir gridò: «Guardate il Re!»"',
  },
  {
    image: './img/image5.jpg',
    title: 'Gandalf',
    text: '«Mithrandir lo chiamavamo, alla maniera elfica», rispose Faramir, «ed egli ne era contento. "Molti sono i nomi che ho nelle diverse terre", egli soleva dire, "Mithrandir sono per gli Elfi, Tharkûn per i Nani; Olòrin ero da giovane nella ormai obliato Ovest, nel Sud Incànus, nel Nord Gandalf; nel Est non vado mai"»',
  },
];


// Inserimento delle slide nel carosello
const slidesContainer = document.querySelector('#slides-container');
slidesContainer.innerHTML = generateImageMarkup(images);
const slides = document.querySelectorAll('.slide');


// Mostrare la prima slide all'avvio
showSlide(0);





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



