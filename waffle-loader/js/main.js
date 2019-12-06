(function($){

	// GSAP animations

	// scene part0
	var lHistoire = $('#l-histoire'),
		laGaufre = $('#la-gaufre'),
		tlIntro = new TimelineLite({});

		tlIntro
		
			.from(lHistoire, 1.3, { y:-300,autoAlpha:0, ease:Bounce.easeOut}, 1)
			.from(laGaufre, 1.3, { y:-300,autoAlpha:0, ease:Bounce.easeOut})
		;

	// scene part1
	var frontCast = $('#front-cast'),
		backCast = $('#back-cast'),
		oublie = $('#oublie'),
		title = $('h2'),
		txt = $('p'),
		tlOublie = new TimelineLite({});

		tlOublie
			.to(frontCast, 0.5, { scale:1,transformOrigin:"50% 50%", autoAlpha:1, ease:Power3.easeIn})
			.to(frontCast, 1.2, { x:-250,rotation:-90,transformOrigin:"50% 50%", ease:Power2.easeOut}, 0.75)
			.to(frontCast, 1.2, { autoAlpha:0, ease:Power2.easeOut}, 1.5)
			.to(backCast, 1.3, { x:250, ease:Power2.easeOut}, 0.8)
			.to(backCast, 1.3, { autoAlpha:0, ease:Power2.easeOut}, 1.5)
			.from(title, 0.6, { y:-30,autoAlpha:0, ease:Power2.easeOut}, 2.0)
			.from(txt, 0.6, { y:-30,autoAlpha:0, ease:Power2.easeOut}, 2.8)
		;

	// scene part2
	var stonePillarLeft = $('#stone-pillar-left'),
		stonePillarRight = $('#stone-pillar-right'),
		stoneTop = $('#stone-top'),
		tlDolmen = new TimelineMax({});

		tlDolmen
			.set(stonePillarLeft, {y:100, autoAlpha:0})
			.set(stonePillarRight, {y:100, autoAlpha:0})
			.set(stoneTop, {y:-100, autoAlpha:0})
			.to(stonePillarLeft, 0.25, {y:0, autoAlpha:1, ease:Power1.easeIn})
			.to(stonePillarRight, 0.35, {y:0, autoAlpha:1, ease:Power1.easeIn})
			.to(stoneTop, 0.25, {y:0, autoAlpha:1, ease:Power1.easeIn})
		;

	// scene part3
	var saint = $('#saint'),
		tlSaint = new TimelineMax({repeat:-1});

		tlSaint
			.to(saint, 0.5, {y:-10, ease:Power0.easeNone})
			.to(saint, 1.0, {y:10, ease:Power0.easeNone})
			.to(saint, 0.5, {y:0, ease:Power0.easeNone})
		;

	// scene part4
	var square = $('#square'),
		cornet = $('#cornet'),
		tlCornet = new TimelineMax({});

		tlCornet
			.to(square, 0.25, {autoAlpha:0, ease:Power0.easeNone}, 2)
		;

	// scene part5
	var light = $('#light'),
		candle = $('#candle'),
		cake = $('#cake'),
		wrapCake = $('.container--svg'),
		tlCake = new TimelineLite({});

		tlCake
			.to(cake, 0.6, {y:-30, scale:1.06,transformOrigin:"50% 50%", autoAlpha:1, ease:Power3.easeOut})
			.to(candle, 0.3, {y:-40, autoAlpha:1})
			.set(light, {y:-40})
			.to(light, 0.3, {scale:1.06,transformOrigin:"50% 50%",autoAlpha:1, ease:Bounce.easeIn}, 1)
		;	

	// scene part6
	var strawberry1 = $('#strawberry-1'),
		 strawberry2 = $('#strawberry-2'),
		 strawberry3 = $('#strawberry-3'),
		 strawberry4 = $('#strawberry-4'),
		 cream1 = $('#cream-1'),
		 cream2 = $('#cream-2'),
		 cream3 = $('#cream-3'),
		 cream4 = $('#cream-4'),
		 cream5 = $('#cream-5'),
		tlBelgian = new TimelineMax({});

		tlBelgian
			.set(strawberry1, {y:-50})
			.set(strawberry2, {y:-50})
			.set(strawberry3, {y:-50})
			.set(strawberry4, {y:-50})
			.to(strawberry1, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 0.25)
			.to(strawberry2, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 0.5)
			.to(strawberry3, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 0.75)
			.to(strawberry4, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 1.25)
			.to(cream1, 0.45, {scale:1.4,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 1.5)
			.to(cream1, 0.25, {scale:1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut})
			.to(cream2, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 1.75)
			.to(cream3, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 2.0)
			.to(cream4, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 2.25)
			.to(cream5, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 2.5)
		;

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	//scene part1
	var part1 = new ScrollMagic.Scene({
		triggerElement: '#part1--trigger',
		triggerHook: 0.5
	})
	.setTween(tlOublie)
	.addTo(controller);

	//scene part2
	var part2 = new ScrollMagic.Scene({
		triggerElement: '#part2--trigger',
		triggerHook: 0.7
	})
	.setTween(tlDolmen)
	.addTo(controller);

	//scene part3
	var part3 = new ScrollMagic.Scene({
		triggerElement: '#part3--trigger',
		triggerHook: 0.7
	})
	.setTween(tlSaint)
	.addTo(controller);

	//scene part4
	var part4 = new ScrollMagic.Scene({
		triggerElement: '#part4--trigger',
		triggerHook: 0.7
	})
	.setTween(tlCornet)
	.addTo(controller);

	//scene part5
	var part5 = new ScrollMagic.Scene({
		triggerElement: '#part5--trigger',
		triggerHook: 0.7
	})
	.setTween(tlCake)
	.addTo(controller);

	//scene part6
	var part6 = new ScrollMagic.Scene({
		triggerElement: '#part6--trigger',
		triggerHook: 0.7
	})
	.setTween(tlBelgian)
	.addTo(controller);

})(jQuery);