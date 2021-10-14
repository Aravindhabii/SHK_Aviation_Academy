const card1 = document.querySelector('.card-1')
const card2  = document.querySelector('.card-2')
const btn_right = document.querySelector('.btn-right')
const btn_left  = document.querySelector('.btn-left')
const cardTop = document.querySelector('.card-bg')
const circle = document.querySelectorAll('.swiper-slide')
const transportContentCard = document.querySelector('#transport-content')
const libraryContentCard = document.querySelector('#library-content')
const hostelContentCard = document.querySelector('#hostel-content')
const templeContentCard = document.querySelector('#temple-content')
const peContentCard = document.querySelector('#pe-content')
const wifiContentCard = document.querySelector('#wifi-content')
const cafeteriaContenCard = document.querySelector('#cafeteria-content')
const internetContentCard = document.querySelector('#internet-content')
const contents = document.querySelectorAll('.content')
const pagination = document.getElementsByClassName('pagination')
const page = document.getElementById('header')
const pagee = window.getComputedStyle(page).getPropertyValue('height')

const scrollToTop = () => {
  const p  =parseInt(pagee)
  console.log(p);
 window.scrollTo(0,p-4.3*16);
}
circle.forEach(element => {
 element.addEventListener('click', function content() {
  circle.forEach(content => content.classList.remove('color'));
  scrollToTop()
   contents.forEach(c => {
    c.classList.remove('display-block')
  });
  console.log(this);
   const contentitem = document.querySelector(`.${this.id}-card`);
  
   this.classList.add('color')
   
    contentitem.classList.add('display-block');
 })
 });
// card click 
 

var swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? 'horizontal' : 'horizontal';

  return direction;
}



// carosel


