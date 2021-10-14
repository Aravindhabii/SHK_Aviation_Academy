gsap
	.timeline({
		scrollTrigger: {
			trigger: ".section3Activities",
			start: "top 80%",
		},
	})
	.from(".grid", {
		duration: 0.4,
		y: 230,
		stagger: 0.1,
	});

if (
	document.querySelector("body").clientWidth > 400 &&
	document.querySelector("body").clientWidth < 1720
) {
	const gsapfunc = (
		trig,
		br,
		imgclass,
		clubContent,
		xpos = 200,
		xneg = -400
	) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: trig,
					start: "top 80%",
				},
			})
			.to(imgclass, {
				duration: 0.1,
				borderRadius: br,
			})
			.to(trig, {
				duration: 0.6,
				x: xpos,
			})
			.to(
				clubContent,
				{
					duration: 0.6,
					x: xneg,
				},
				"<"
			);
	};
	gsapfunc(".unopen1", "0px 20px 20px 0px", ".image1", ".clubContentCard1");
	gsapfunc(
		".unopen2",
		"20px 0px 0px 20px",
		".image2",
		".clubContentCard2",
		-200,
		400
	);
	gsapfunc(".unopen3", "0px 20px 20px 0px", ".image3", ".clubContentCard3");
} else if (document.querySelector("body").clientWidth < 400) {
	const gsapfuncmedia = (
		trig,
		br,
		imgclass,
		clubContent,
		xpos = 200,
		xneg = -400
	) => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: trig,
					start: "top 80%",
				},
			})
			.to(".unopen1", {
				marginTop: 230,
			})
			.to(".unopen2", {
				marginTop: 450,
			})
			.to(".unopen3", {
				marginTop: 450,
			})
			.to(".unopen4", {
				marginTop: 450,
			})
			.to(imgclass, {
				duration: 0.1,
				borderRadius: br,
			})

			.to(trig, {
				duration: 0.6,
				y: xpos,
			})
			.to(
				clubContent,
				{
					duration: 0.6,
					y: xneg,
				},
				"<"
			);
	};

	gsapfuncmedia(
		".unopen1",
		"20px 0px 0px 20px",
		".image1",
		".clubContentCard1",
		-200,
		400
	);
	gsapfuncmedia(
		".unopen2",
		"20px 0px 0px 20px",
		".image2",
		".clubContentCard2",
		-200,
		400
	);
	gsapfuncmedia(
		".unopen3",
		"20px 0px 0px 20px",
		".image3",
		".clubContentCard3",
		-200,
		400
	);
}
