gsap.registerPlugin(ScrollTrigger, ScrollSmoother)


ScrollSmoother.create(
{
	wrapper: '.wrapper',
	content: '.content',
	smooth: .9,
	effects: true
})

gsap.fromTo(' .hero-section', {opacity: 1}, {

	opacity: 0,
	scrollTrigger:{
		trigger: ' .hero-section',
		start: 'center',
        end: '800',

		scrub: true

	}
})

gsap.fromTo(' .hero-section2', {opacity: 0}, {

	opacity: 1,
	scrollTrigger:{
		trigger: ' .hero-section2',
		start: '-800',
        end: '-center',

		scrub: true

	}
})

const itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

itemsL.forEach(item => {
	gsap.fromTo(item , { x: -180, opacity: 0 }, {
	x: 0, opacity: 1 ,
	scrollTrigger: {
		trigger: item,
		start: '-830',
		end: '-100',
		scrub: true
	}
})
})

const itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

itemsR.forEach(item => {
	gsap.fromTo(item , { x: 180, opacity: 0 }, {
	x: 0, opacity: 1 ,
	scrollTrigger: {
		trigger: item,
		start: '-830',
		end: '-100',
		scrub: true
	}
})
})