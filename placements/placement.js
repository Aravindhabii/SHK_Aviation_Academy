gsap.from(".section0div p", {
  scrollTrigger: { trigger: ".section0", start: "top 40%" },
  x: 500,
  autoAlpha: 0,
  duration: 0.4,
});
gsap.from(".section0div h1", {
  height:0,
  duration: 0.8,
});

const gsapfuncmedia = (
		trig,
		clas,
		xpos = "100rem",
		xneg = "-100rem"
	) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: trig, start: "top 50%" },
          })
          .from(clas, { x: xneg, duration: 0.8 })
          .from(`${clas} h1`, { height: 0, duration: 0.8 }, ">-0.3")
          .from( `${clas} p`, { x: xpos, duration: 0.8 }, ">-0.8");
    }

gsapfuncmedia(".placementCell",".placementCell");
gsapfuncmedia(".Training", ".Training",xpos='-100rem',xneg='100rem');
gsapfuncmedia(".Recruiters", ".Recruiters");
gsapfuncmedia(".placementContact", ".placementContact",xpos='-100rem',xneg='100rem');
gsapfuncmedia(".Internship", ".Internship");
gsapfuncmedia(".MOU", ".MOU",xpos='-100rem',xneg='100rem');