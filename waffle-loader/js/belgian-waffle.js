(function($){

// 	var header = $('#header'),
// 		h1 = $("h1"),
// 		intro = $('.intro'),
// 		firstItem = $('li:first-child'),
// 		secondItem = $('li:nth-child(2)'),
// 		lastItem = $('li:last-child');

	// Simple Tween

	var strawberry1 = $('#strawberry-1'),
		 strawberry2 = $('#strawberry-2'),
		 strawberry3 = $('#strawberry-3'),
		 strawberry4 = $('#strawberry-4'),
		 cream1 = $('#cream-1'),
		 cream2 = $('#cream-2'),
		 cream3 = $('#cream-3'),
		 cream4 = $('#cream-4'),
		 cream5 = $('#cream-5'),
		tl = new TimelineMax({});

		tl
			.set(strawberry1, {y:-50})
			.set(strawberry2, {y:-50})
			.set(strawberry3, {y:-50})
			.set(strawberry4, {y:-50})
			.to(strawberry1, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 1)
			.to(strawberry2, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 2)
			.to(strawberry3, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 3)
			.to(strawberry4, 0.25, {y:0,autoAlpha:1, ease:Power2.easeOut}, 4)
			.to(cream1, 0.45, {scale:1.4,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 4.25)
			.to(cream1, 0.25, {scale:1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut})
			.to(cream2, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 4.5)
			.to(cream3, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 4.75)
			.to(cream4, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 5)
			.to(cream5, 0.45, {scale:1.1,transformOrigin:"50% 50%",autoAlpha:1, ease:Power1.easeOut}, 5.25)
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