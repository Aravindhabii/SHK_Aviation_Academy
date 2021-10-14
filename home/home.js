const swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

const carouselButton = document.querySelector('.swiper-button-next');
setTimeout(() => {
	setInterval(() => {
		carouselButton.click();
	}, 5000);
}, 5000);

window.addEventListener('load', () => {
	if (body.children[0]) {
		body.style.overflow = 'hidden';
		gsap
			.timeline()
			.to('.preload img', { duration: 0.5, y: 0, autoAlpha: 1, delay: 0.5 })
			.to('.preload', { duration: 1, autoAlpha: 0 }, '>.8')
			.set('body', { overflow: 'auto' })
			.add(() => {
				document.querySelector('.preload').remove();
			});
	}
});

const inputs = document.querySelectorAll('.input');
const button = document.querySelector('.submit');
const form = document.querySelector('form');
const nextSubmit = document.querySelector('.next-submit');
const textArea = document.querySelector('.text-area');

inputs.forEach((input) => {
	input.addEventListener('input', (e) => {
		if (inputs[2].value == e.data) {
			if (inputs[0].value.length && inputs[1].value.length) {
				nextSubmit.style.left = '75%';
			} else {
				nextSubmit.style.left = '-100%';
			}
		}
	});
});

nextSubmit.addEventListener('click', () => {
	inputs.forEach((input) => {
		console.log(input);
		input.style.left = '-100%';
		nextSubmit.style.left = '-100%';
	});
	textArea.style.left = '50%';
});

textArea.addEventListener('keydown', (e) => {
	if (textArea.value.length >= 30) {
		button.style.left = '70%';
		button.removeAttribute('disabled');
	}
});

const li3 = document.getElementById('li-3');
if (window.innerWidth <= 1250 && window.innerWidth >= 800) {
	li3.parentElement.removeChild(li3);
}

if (window.innerWidth >= 800) {
	gsap.from('.hero-content', {
		duration: 1,
		height: 0
	});

	gsap
		.timeline({
			scrollTrigger: { trigger: '.bottom-nav', start: 'bottom top' }
		})
		.from(
			'.SHK-para',
			{
				duration: 1,
				opacity: 0,
				x: -250
			},
			'-=1	'
		);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.swiper',
				start: 'top 40%'
			}
		})
		.from('.swiper', {
			duration: 1,
			width: '100%',
			height: '100%',
			borderRadius: '0'
		})
		.from('.slide-h1', { duration: 1, height: 0 }, '-=.5');

	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.vision-and-mission',
				start: 'top 40%'
			}
		})
		.from('.vision-h1', {
			duration: 0.5,
			height: 0
		})
		.from(
			'.vision-p',
			{
				duration: 0.5,
				x: -100,
				opacity: 0
			},
			'-=.5'
		)
		.from(
			'.mission-h1',
			{
				duration: 0.5,
				height: 0
			},
			'-=.5'
		)
		.from(
			'.mission-ul',
			{
				duration: 0.5,
				x: 100,
				opacity: 0
			},
			'-=.5'
		);

	gsap
		.timeline({
			scrollTrigger: {
				trigger: '.SHK-heads',
				start: 'top 40%'
			}
		})
		.from('.heads h1', { duration: 0.5, height: 0 }, '-=.5')
		.from(
			'.heads .heads-pos div',
			{ duration: 0.5, x: '500%', stagger: 0.1 },
			'-=.5'
		)
		.from(
			'.head-content-title',
			{
				duration: 0.5,
				height: 0
			},
			'-=1'
		)
		.from(
			'.head-content-para',
			{
				duration: 0.5,
				x: 200,
				autoAlpha: 0
			},
			'-=.8'
		);

	gsap.from('.input', {
		scrollTrigger: { trigger: '.contact-sec', start: 'top 40%' },
		duration: 0.05,
		x: -700,
		stagger: 0.2
	});
}
