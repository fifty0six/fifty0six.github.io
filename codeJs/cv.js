$(window).load(function(){

/****函数调用区****/
bg();
showSkill();
QRshow();
fullpage();
/****绘制背景函数****/
function bg() {

	var width, height, largeHeader, canvas, ctx, triangles, target, animateHeader = true;
	var colors = ['72,35,68', '43,81,102', '66,152,103', '250,178,67', '224,33,48'];

	// Main
	initHeader();
	addListeners();
	initAnimation();

	function initHeader() {
		width = window.innerWidth;
		height = window.innerHeight;
		target = {x: 0, y: height};

		largeHeader = document.getElementById('large-header');
		largeHeader.style.height = height+'px';

		canvas = document.getElementById('section1-canvas');
		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext('2d');

		// create particles
		triangles = [];
		for(var x = 0; x < 480; x++) {
			addTriangle(x*10);
		}
	}

	function addTriangle(delay) {
		setTimeout(function() {
			var t = new Triangle();
			triangles.push(t);
			tweenTriangle(t);
		}, delay);
	}

	function initAnimation() {
		animate();
	}

	function tweenTriangle(tri) {
		var t = Math.random()*(2*Math.PI);
		var x = (200+Math.random()*100)*Math.cos(t) + width*0.5;
		var y = (200+Math.random()*100)*Math.sin(t) + height*0.5-20;
		var time = 4+3*Math.random();

		TweenLite.to(tri.pos, time, {x: x,
			y: y, ease:Circ.easeOut,
			onComplete: function() {
				tri.init();
				tweenTriangle(tri);
			}});
	}

	// Event handling
	function addListeners() {
		window.addEventListener('scroll', scrollCheck);
		window.addEventListener('resize', resize);
	}

	function scrollCheck() {
		if(document.body.scrollTop > height) animateHeader = false;
		else animateHeader = true;
	}

	function resize() {
		width = window.innerWidth;
		height = window.innerHeight;
		largeHeader.style.height = height+'px';
		canvas.width = width;
		canvas.height = height;
	}

	function animate() {
		if(animateHeader) {
			ctx.clearRect(0,0,width,height);
			for(var i in triangles) {
				triangles[i].draw();
			}
		}
		requestAnimationFrame(animate);
	}

	// Canvas manipulation
	function Triangle() {
		var _this = this;

		// constructor
		(function() {
			_this.coords = [{},{},{}];
			_this.pos = {};
			init();
		})();

		function init() {
			_this.pos.x = width*0.5;
			_this.pos.y = height*0.5-20;
			_this.coords[0].x = -10+Math.random()*40;
			_this.coords[0].y = -10+Math.random()*40;
			_this.coords[1].x = -10+Math.random()*40;
			_this.coords[1].y = -10+Math.random()*40;
			_this.coords[2].x = -10+Math.random()*40;
			_this.coords[2].y = -10+Math.random()*40;
			_this.scale = 0.1+Math.random()*0.3;
			_this.color = colors[Math.floor(Math.random()*colors.length)];
			setTimeout(function() { _this.alpha = 0.8; }, 10);
		}

		this.draw = function() {
			if(_this.alpha >= 0.005) _this.alpha -= 0.005;
			else _this.alpha = 0;
			ctx.beginPath();
			ctx.moveTo(_this.coords[0].x+_this.pos.x, _this.coords[0].y+_this.pos.y);
			ctx.lineTo(_this.coords[1].x+_this.pos.x, _this.coords[1].y+_this.pos.y);
			ctx.lineTo(_this.coords[2].x+_this.pos.x, _this.coords[2].y+_this.pos.y);
			ctx.closePath();
			ctx.fillStyle = 'rgba('+_this.color+','+ _this.alpha+')';
			ctx.fill();
		};

		this.init = init;
	}

};
/***********************************************************************************************/
/****二维码显示函数****/
function QRshow(){
	$('.QR-code').mouseover(function(){
		$('.QR-code-enlarge').toggle();
	})
	$('.QR-code').mouseout(function(){
		$('.QR-code-enlarge').toggle();
	})
}
/***********************************************************************************************/
/****查看技能说明****/
function showSkill(){
	$('.skill-instruction').mouseover(function(){
		$(this).find('.skill-list').toggle();
	})
	$('.skill-instruction').mouseout(function(){
		$(this).find('.skill-list').toggle();
	})
}
/***********************************************************************************************/
/****fullpage.js调用****/
function fullpage(){
	$('#dowebok').fullpage({
		sectionsColor: ['#1bbc9b', '#CCFFCC', '#99CCCC', '#9999FF','#99CCFF'],
		navigation: true,
		navigationTooltips:['首页','关于我','专业技能','项目经验','校园经历'],
		menu:'#head',
		controlArrowColor:'transparent',
		slidesNavigation: true,
		afterLoad: function(anchorLink, index){
			if(index == 2){

				$(".section2 h5").after("<div class='border-title'><p >about me</p></div>");
				$(".border-title").animate({width:'30%'},1000,function(){
					$(".border-title p").slideDown(400);
				});
				$('.DpInfo').delay(500).animate({
					bottom: '0',
				}, 1500, 'easeOutExpo');

			}
			if(index == 3){
				$(".section3 h5").after("<div class='border-title'><p >skill</p></div>");
				$(".border-title").animate({width:'30%'},1000,function(){
					$(".border-title p").slideDown(400);
				});
				$('.skill-info').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				var windowsWidth=$(window).width();
				var ulWidth= windowsWidth- 60;
				$(".ul-skill").animate({width:ulWidth},3000);
				$(window).resize(function(){
					var windowsWidth=$(window).width();
					var ulWidth= windowsWidth- 60;
					$(".ul-skill").animate({width:ulWidth},2000);
				})



			}
			if(index == 4){
				$(".section4 h5").after("<div class='border-title'><p >project</p></div>");
				$(".border-title").animate({width:'30%'},1000,function(){
					$(".border-title p").slideDown(400);
				});
				$('.project-instruction').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');

				$('.nav-time-1').unbind('click').click(function(){
					$(this).addClass('nav-time-active');
					$(this).siblings().removeClass('nav-time-active');
					var topValue=$("#market").position().top;
					if(!topValue){
						$("#ebdap").animate({top: '0'},1500,'easeOutExpo');
						$("#market").animate({top: '-130%'},1500,'easeOutExpo',function(){
							$("#market").css('top','130%')
						});
					}
				});
				$('.nav-time-2').unbind('click').click(function(){
					$(this).addClass('nav-time-active');
					$(this).siblings().removeClass('nav-time-active');
					var topValue=$("#ebdap").position().top;

					if(!topValue){
						$("#ebdap").animate({top: '-130%'},2500,'easeOutExpo',function(){
							$("#ebdap").css('top','130%')
						});
						$("#market").animate({top: '0'},2500,'easeOutExpo');
					}


				});
			}
			if(index == 5){
				$(".section5 h5").after("<div class='border-title'><p >campus</p></div>");
				$(".border-title").animate({width:'30%'},1000,function(){
					$(".border-title p").slideDown(400);
				});
				$(".section5").find('.campus-info').fadeIn(2000);

			}
		},

		onLeave: function(index, direction){
			if(index == '2'){
				$('.DpInfo').animate({
					bottom: '-120%',
				}, 500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.skill-info').animate({
					left: '-120%'
				}, 500, 'easeInCubic');
				$('.ul-skill').animate({
					width: '30%'
				}, 500, 'easeInCubic');

			}
			if(index == '4'){
				$('.project-instruction').animate({
					bottom: '-120%',
				}, 1500, 'easeOutExpo',function(){
					$('.nav-time-1').addClass('nav-time-active');
					$('.nav-time-1').siblings().removeClass('nav-time-active');
					$("#ebdap").css('top','0');
					$("#market").css('top','130%');
				});

			}
			if(index == '5'){
				$(".section5").find('.campus-info').fadeOut(2000);
			}

			if(index=='2'||index=='3'||index=='4'||index=='5'){
				$(".border-title").remove();
			}
		}
	});


};
/***********************************************************************************************/


})
