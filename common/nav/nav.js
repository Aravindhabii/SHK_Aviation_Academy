const nav = document.querySelector('header');
const bottomNav = document.querySelector('.bottom-nav');
const menuButton = document.querySelector('.menu-button');
const body = document.querySelector('body');

gsap.from('header', { duration: 1, y: '-150%', ease: 'Power3.easeInOut' });

if (window.innerWidth >= 764) {
	lastScroll = 0;
	window.addEventListener('scroll', () => {
		let currentScroll = window.scrollY;
		if (currentScroll > lastScroll) {
			bottomNav.style.transform = `translateY(${-100}%)`;
		} else {
			bottomNav.style.transform = `translateY(${0}%)`;
		}
		lastScroll = currentScroll;
	});
} else {
	bottomNav.style.height = window.innerHeight + 'px';
}

menuButton.addEventListener('click', () => {
	menuButton.classList.toggle('aeroplane');
	menuButton.classList.toggle('cross');
	nav.classList.toggle('side-bar');
	let clicked = false;
	if (clicked) {
		body.style.overflow = 'scroll';
		clicked = false;
	} else {
		clicked = true;
	}
});
