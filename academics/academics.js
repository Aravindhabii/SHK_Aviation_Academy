const span1 = document.querySelectorAll(".span1");
const button1 = document.querySelectorAll(".button1");

button1.forEach((element) => {
	element.addEventListener("click", () => {
		element.parentElement.children[0].classList.toggle("readmore");
		if (element.innerHTML === "Read More") {
			element.innerHTML = "Read Less";
		} else {
			element.innerHTML = "Read More";
		}
	});
});

const watch = document.querySelectorAll(".watch");
const watch1 = document.querySelector(".watch1");
const watch2 = document.querySelector(".watch2");
const watch3 = document.querySelector(".watch3");
const watch4 = document.querySelector(".watch4");
const watch5 = document.querySelector(".watch5");
const watch6 = document.querySelector(".watch6");

const watch21 = document.querySelector(".watch21");
const watch22 = document.querySelector(".watch22");
const watch23 = document.querySelector(".watch23");
const watch24 = document.querySelector(".watch24");
const watch25 = document.querySelector(".watch25");
const watch26 = document.querySelector(".watch26");

const watch31 = document.querySelector(".watch31");
const watch32 = document.querySelector(".watch32");
const watch33 = document.querySelector(".watch33");
const watch34 = document.querySelector(".watch34");
const watch35 = document.querySelector(".watch35");
const watch36 = document.querySelector(".watch36");

const watch41 = document.querySelector(".watch41");
const watch42 = document.querySelector(".watch42");
const watch43 = document.querySelector(".watch43");
const watch44 = document.querySelector(".watch44");
const watch45 = document.querySelector(".watch45");
const watch46 = document.querySelector(".watch46");

const para = document.querySelectorAll(".para");
const para1 = document.querySelector(".para1");
const para2 = document.querySelector(".para2");
const para3 = document.querySelector(".para3");
const para4 = document.querySelector(".para4");
const para5 = document.querySelector(".para5");
const para6 = document.querySelector(".para6");

const para21 = document.querySelector(".para21");
const para22 = document.querySelector(".para22");
const para23 = document.querySelector(".para23");
const para24 = document.querySelector(".para24");
const para25 = document.querySelector(".para25");
const para26 = document.querySelector(".para26");

const para31 = document.querySelector(".para31");
const para32 = document.querySelector(".para32");
const para33 = document.querySelector(".para33");
const para34 = document.querySelector(".para34");
const para35 = document.querySelector(".para35");
const para36 = document.querySelector(".para36");

const para41 = document.querySelector(".para41");
const para42 = document.querySelector(".para42");
const para43 = document.querySelector(".para43");
const para44 = document.querySelector(".para44");
const para45 = document.querySelector(".para45");
const para46 = document.querySelector(".para46");

const ul1 = document.querySelector(".ul1");
const ul2 = document.querySelector(".ul2");
const ul3 = document.querySelector(".ul3");
const ul4 = document.querySelector(".ul4");
const ul5 = document.querySelector(".ul5");
const ul6 = document.querySelector(".ul6");

const watchra = [
	watch1,
	watch2,
	watch3,
	watch4,
	watch5,
	watch6,
	watch22,
	watch23,
	watch24,
	watch25,
	watch26,
	watch32,
	watch33,
	watch34,
	watch35,
	watch36,
	watch42,
	watch43,
	watch44,
	watch45,
	watch46,
];

const parara = [
	para1,
	para2,
	para3,
	para4,
	para5,
	para6,
	para22,
	para23,
	para24,
	para25,
	para26,
	para32,
	para33,
	para34,
	para35,
	para36,
	para42,
	para43,
	para44,
	para45,
	para46,
];

for (let i = 0; i < watchra.length; i++) {
	watchra[i].addEventListener("click", () => {
		switch (parara[i].getAttribute("class").split(" ")[1]) {
			case "para1":
				parara[i].classList.toggle("js1");
				break;
			case "para2":
				parara[i].classList.toggle("js2");
				break;
			case "para3":
				parara[i].classList.toggle("js3");
				break;
			case "para4":
				parara[i].classList.toggle("js4");
				break;
			case "para5":
				parara[i].classList.toggle("js5");
				break;
			case "para6":
				parara[i].classList.toggle("js6");
				ul1.classList.toggle("js6");
				break;

			case "para21":
				parara[i].classList.toggle("js1");
				break;
			case "para22":
				parara[i].classList.toggle("js2");
				break;
			case "para23":
				parara[i].classList.toggle("js3");
				break;
			case "para24":
				parara[i].classList.toggle("js4");
				break;
			case "para25":
				parara[i].classList.toggle("js5");
				break;
			case "para26":
				parara[i].classList.toggle("js6");
				ul2.classList.toggle("js6");
				break;

			case "para31":
				parara[i].classList.toggle("js1");
				break;
			case "para32":
				parara[i].classList.toggle("js2");
				break;
			case "para33":
				parara[i].classList.toggle("js3");
				break;
			case "para34":
				parara[i].classList.toggle("js4");
				break;
			case "para35":
				parara[i].classList.toggle("js5");
				break;
			case "para36":
				parara[i].classList.toggle("js6");
				ul3.classList.toggle("js6");
				break;

			case "para41":
				parara[i].classList.toggle("js1");
				break;
			case "para42":
				parara[i].classList.toggle("js2");
				break;
			case "para43":
				parara[i].classList.toggle("js3");
				break;
			case "para44":
				parara[i].classList.toggle("js4");
				break;
			case "para45":
				parara[i].classList.toggle("js5");
				break;
			case "para46":
				parara[i].classList.toggle("js6");
				ul4.classList.toggle("js6");
				break;
		}
	});
}

const bba = document.querySelector(".bba");
const bscaviation = document.querySelector(".bscaviation");
const mba = document.querySelector(".mba");
const bscair = document.querySelector(".bscair");

const clicking = [bba, bscaviation, mba, bscair];

clicking.forEach((element) => {
	element.addEventListener("click", () => {
		switch (element.getAttribute("class")) {
			case "bba":
				window.location.href = "./academics.html#course1";
				again.classList.remove("colorchanging");
				again.classList.remove("clicking10");
				break;
			case "bscaviation":
				window.location.href = "./academics.html#course2";
				again.classList.remove("colorchanging");
				again.classList.remove("clicking10");
				break;
			case "mba":
				window.location.href = "./academics.html#course3";
				again.classList.remove("colorchanging");
				again.classList.remove("clicking10");
				break;
			case "bscair":
				window.location.href = "./academics.html#course4";
				again.classList.remove("colorchanging");
				again.classList.remove("clicking10");
				break;
		}
	});
});

const arrow = document.querySelector(".arrow");
const arrowl = document.querySelector(".arrowl");
const arrowr = document.querySelector(".arrowr");
const table = document.querySelector(".table");
const mobileclick = document.querySelector(".mobileclick");
const firstdiv = document.querySelector(".firstdiv");
const again = document.querySelector(".again");

mobileclick.addEventListener("click", () => {
	again.classList.toggle("clicking10");
	again.classList.toggle("colorchanging");
});
mobileclick.addEventListener("click", () => {
	arrowr.classList.toggle("arrowright");
});
mobileclick.addEventListener("click", () => {
	arrowr.classList.toggle("arrowright");
});
mobileclick.addEventListener("click", () => {
	arrowl.classList.toggle("rotate");
});

const courseone = document.querySelector(".courseone");
const coursetwo = document.querySelector(".coursetwo");
const coursethree = document.querySelector(".coursethree");
const coursefour = document.querySelector(".coursefour");

gsap.from(courseone, {
	y: 100,
	duration: 0.5,
});

const otherthree = (course) => {
	gsap.from(course, {
		duration: 0.3,
		y: 50,
		scrollTrigger: {
			trigger: course,
			duration: 0.5,
		},
	});
};

otherthree(coursetwo)
otherthree(coursethree)
otherthree(coursefour)