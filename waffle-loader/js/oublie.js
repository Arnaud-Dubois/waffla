(function($){

// 	var header = $('#header'),
// 		h1 = $("h1"),
// 		intro = $('.intro'),
// 		firstItem = $('li:first-child'),
// 		secondItem = $('li:nth-child(2)'),
// 		lastItem = $('li:last-child');

	// Simple Tween

	var frontCast = $('#front-cast'),
		backCast = $('#back-cast'),
		oublie = $('#oublie'),
		tl = new TimelineLite({});

		tl
			.to(frontCast, 0.5, { scale:1,transformOrigin:"50% 50%", autoAlpha:1, ease:Power3.easeIn})
			.to(frontCast, 1.6, { x:-250,rotation:-90,transformOrigin:"50% 50%", ease:Power2.easeOut}, 1.5)
			.to(frontCast, 1.6, { autoAlpha:0, ease:Power2.easeOut}, 2.5)
			.to(backCast, 1.6, { x:250, ease:Power2.easeOut}, 1.5)
			.to(backCast, 1.6, { autoAlpha:0, ease:Power2.easeOut}, 2.5)
			// .set(header, {autoAlpha:1})
			// .from(h1, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
			// .from(intro, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
			// .from(img, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
			// .from(h2, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
			// .from(listItem, 0.3, {y:-15, autoAlpha:0, ease:Power1.easeOut})
			// .staggerFrom(buttons, 0.2, {cycle : {
			// 	x: [50, -50],
			// 	scale: [2, 0.5]
			// },autoAlpha:0, ease:Power1.easeOut}, 0.1)
		;
			

		// tlLoader
		// 	.staggerFromTo(dot, 0.3,
		// 		{y:0, autoAlpha:0},
		// 		{y:20, autoAlpha:1, ease:Back.easeInOut},
		// 		0.05
		// 	)
		// 	.fromTo(loader, 0.3,
		// 		{autoAlpha:1, scale:1.3},
		// 		{autoAlpha:0, scale:1, ease:Power0.easeNone},
		// 		0.9
		// 	);

		// function loadContent(){
		// 	var tlLoaderOut = new TimelineLite({onComplete: contentIn});
		// 	tlLoaderOut
		// 		.set(dot, {backgroundColor: '#2b4d66'})
		// 		.to(loader, 0.3, {autoAlpha:1,scale:1.3, ease:Power0.easeNone})
		// 		.staggerFromTo(dot, 0.3,
		// 			{y:0, autoAlpha:0},
		// 			{y:20, autoAlpha:1, ease:Back.easeInOut},
		// 			0.05, 0
		// 		)
		// 		.to(loader,0.3,{y: -150, autoAlpha:0, ease:Back.easeIn}, '+=0.3')
		// 		;
		// }

		// function contentIn(){
		// 	tl.play();
		// }


		// $('#btnPlay').on('click', function(){
		// 	tl.play();
		// })

		// $('#btnPause').on('click', function(){
		// 	tl.pause();
		// })

		// $('#btnResume').on('click', function(){
		// 	tl.resume();
		// })

		// $('#btnReverse').on('click', function(){
		// 	tl.reverse();
		// })

		// $('#btnSpeedUp').on('click', function(){
		// 	tl.timeScale(8);
		// })

		// $('#btnSlowDown').on('click', function(){
		// 	tl.timeScale(0.5);
		// })

		// $('#btnSeek').on('click', function(){
		// 	tl.seek(1);
		// })

		// $('#btnProgress').on('click', function(){
		// 	tl.progress(0.5);
		// })

		// $('#btnRestart').on('click', function(){
		// 	tl.restart();
		// })

	// TweenLite.from(img, 1, {
	// 	width: 100,
	// 	x:-200,
	// 	ease:Power4.easeInOut,
	// 	onStart: onStart,
	// 	onUpdate: onUpdate,
	// 	onComplete: onComplete
	// });
	// TweenLite.from(h2, 1,{autoAlpha:0, delay:1});

	// function onStart(){
	// 	console.log('animation started');
	// }

	// function onUpdate(){
	// 	console.log('animation is in progress');
	// 	h2.text(i++);
	// }

	// function onComplete(){
	// 	console.log('animation completed');
	// }

})(jQuery);