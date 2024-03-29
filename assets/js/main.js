/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    }
    )
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header')


function toggleSkills(){
    let itemClass = this.parentNode.className
    for(i=0; i<skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
}
)
modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
}
)
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortafolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 7000, // Intervalo de tiempo entre cada cambio de testimonio (en milisegundos)
        disableOnInteraction: false, // Permite que la reproducción automática continúe incluso cuando el usuario interactúa con los testimonios
      },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
     mousewheel: true,
     keyboard: true,
     direction: 'horizontal', // Establece la dirección del deslizamiento de izquierda a derecha
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    slidesPerView: 'auto', // Cambia esta línea
    autoplay: {
        delay: 3000, // Intervalo de tiempo entre cada cambio de testimonio (en milisegundos)
        disableOnInteraction: false, // Permite que la reproducción automática continúe incluso cuando el usuario interactúa con los testimonios
      },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// Set the theme and icon based on the previously selected theme (default to dark theme if none selected)
if (!selectedTheme) {
  // If no theme is selected, set the dark theme as the default theme
  document.body.classList.add(darkTheme)
  themeButton.classList.add(iconTheme)
} else {
  // If a theme is selected, set it accordingly
  document.body.classList.add(selectedTheme)
  themeButton.classList.add(selectedIcon)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

const setTooltipText = () => {
  const tooltipText = getCurrentTheme() === 'dark' ? 'Light mode' : 'Dark mode'
  themeButton.setAttribute('title', tooltipText)
}
themeButton.addEventListener('mouseover', setTooltipText)


/*==================== COLOR PICKER ====================*/ 
 const colorPicker = document.getElementById('colorpicker'); 
 const colorPickerBtn = document.querySelector('.color__picker');

 colorPickerBtn.addEventListener('click', () => {
   colorPicker.click();
 });

 colorPicker.addEventListener('input', (e) => {
   const color = e.target.value;
   const hue = parseInt(color.substring(1, 3), 16);
   document.documentElement.style.setProperty('--hue-color', hue);
 });
// Obtener elementos del DOM
const colorPickerWrapper = document.querySelector('.colorpicker-wrapper');
const colorPickerContainer = document.querySelector('.color__picker-container');

// Agregar evento al hacer clic en el contenedor
colorPickerContainer.addEventListener('click', function() {
  // Mostrar o ocultar el color picker
  colorPickerWrapper.classList.toggle('show');
});

// Ocultar el color picker al hacer clic fuera de él
document.addEventListener('click', function(event) {
  if (!colorPickerContainer.contains(event.target)) {
    colorPickerWrapper.classList.remove('show');
  }
});


/*==================== obtener fecha ====================*/
var currentDateElement = document.getElementById("currentDate");
var currentDate = new Date().toISOString().slice(0, 10);
currentDateElement.innerHTML = currentDate;


/*==================== SERVICIO DE CORREO ====================*/
// document.getElementById('form')
//  .addEventListener('submit', function(event) {
//    event.preventDefault();

//    button.value = 'Sending...';

//    const serviceID = 'default_service';
//    const templateID = 'template_kc1vozr';


//    emailjs.sendForm(serviceID, templateID, this)
//     .then(() => {
//         button.value = 'Send Email';
//       alert('Sent!');
//     }, (err) => {
//         button.value = 'Send Email';
//       alert(JSON.stringify(err));
//     });
// });
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    button.value = 'Sending...';
  
    const serviceID = 'default_service';
    const templateID = 'template_kc1vozr';
  
    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        button.value = 'Send Email';
        Swal.fire({
          title: 'Success',
          text: 'Email sent!',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        });
        this.reset();
      }, (err) => {
        button.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  });
  
  /*==================== SERVICIO DE google tranlator ====================*/
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
        }
        

        const cvButton = document.querySelector('.about__buttons a');
        const tooltipMessage = 'Go to see my new CV';
        
        cvButton.addEventListener('mouseover', () => {
          cvButton.setAttribute('title', tooltipMessage);
        });
        
        cvButton.addEventListener('mouseout', () => {
          cvButton.removeAttribute('title');
        });

  // Reconocimiento de voz
// const reconocimiento = new webkitSpeechRecognition();
// reconocimiento.lang = "es-ES";
// reconocimiento.continuous = true;

// let reconocimientoActivo = true;

// reconocimiento.onresult = evento => {
//   const transcript = evento.results[evento.results.length - 1][0].transcript;
//   console.log(transcript);

//   const textoElement = document.getElementById("texto");
//   textoElement.textContent = transcript;

//   // if (transcript.toLowerCase() === "Stop") {
//   //   if (reconocimientoActivo) {
//   //     reconocimiento.stop();
//   //     reconocimientoActivo = false;
//   //   }
//   // } else if (transcript.toLowerCase() === "start") {
//   //   if (!reconocimientoActivo) {
//   //     reconocimiento.start();
//   //     reconocimientoActivo = true;
//   //   }
//   // }
// };

// reconocimiento.start();
let welcome = "Hello I'm";
 let username = "Jonathan";
 let userlastname = "Pineda";
 let space = " ";
 let exaclamacion = "!";

 const titulo = document.getElementById("titulo");
 titulo.textContent = welcome + space +username + space + userlastname + exaclamacion;
 