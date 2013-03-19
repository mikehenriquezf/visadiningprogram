$(document).ready(function () {
	var $gallery = $('#galleryUl');
	var listWidth = $('#galleryUl li').outerWidth();
	var galleryItems = $('#galleryUl li').length;
	var galleryWidth = listWidth * galleryItems;
	var left_value = listWidth * (-1);
	var $galleryLIs = $gallery.find('li');
    var $curLI = $galleryLIs.first();
    var lastItem = $galleryLIs.last();
	var currentSlide = 0;

	$('#galleryUl li:first').before($('#galleryUl li:last'));
	$('#galleryUl').css({'left' : left_value});
	$('#galleryUl').css('width', galleryWidth);

	$galleryLIs.addClass('desaturate');
    $galleryLIs.eq(currentSlide).removeClass('desaturate');

	$('#leftController').click(function (){
        
        if(currentSlide == 0){
        	currentSlide = galleryItems - 1;
        }else{
        	currentSlide--;	
        }
        // console.log(currentSlide);
        
        $galleryLIs.addClass('desaturate');
        $galleryLIs.eq(currentSlide).removeClass('desaturate');

		var left_indent = parseInt($gallery.css('left')) + listWidth;

		$('#galleryUl').animate({'left': left_indent}, 800, function(){			
			$('#galleryUl li:first').before($('#galleryUl li:last'));
			$gallery.css({'left' : left_value});
			
		});
		return false;
	});

	$('#rightController').click(function (){

		if(currentSlide == galleryItems - 1){
        	currentSlide = 0
        }else{
        	currentSlide++;	
        }
        console.log(currentSlide);

		$galleryLIs.addClass('desaturate');
		$galleryLIs.eq(currentSlide).removeClass('desaturate');

		var left_indent = parseInt($('#galleryUl').css('left')) - listWidth;
		$('#galleryUl').animate({'left': left_indent}, 800, function(){
			$('#galleryUl li:last').after($('#galleryUl li:first'));
			$('#galleryUl').css({'left' : left_value});
		});
		return false;
	});

	// THUMBNAILS
	$('#thumbs ul li').bind('click', function() {
		var ul = $(this).parent();
		var index = ul.children().index(this);

		// console.log(index);

		console.log(index  * listWidth);

		// var thumbs_left_indent = parseInt($('#galleryUl').css('left')) - (index * listWidth);
		var thumbs_left_indent = parseInt(index * listWidth) - listWidth;

		


		$('#galleryUl').animate({'left': index}, 800, function(){
			$('#galleryUl li:last').after($('#galleryUl li:first'));
			$('#galleryUl').css({'left' : left_value});
		});


	});

	$('#previousEntry a').mouseover(function(){
		$('.prev').css({'border-top':'solid #ffffff 2px', 'border-right': 'solid #ffffff 2px'});
		$('.prevEntryDesc').css({'color': '#ffffff'});
		$('.prevEntryTitle').css({'color': '#ffffff'}); 
		$(this).css({'background': '#faa635'});
	});
	$('#previousEntry a').mouseout(function(){
		$('.prev').css({'border-top':'solid #474747 2px', 'border-right': 'solid #474747 2px'});
		$('.prevEntryDesc').css({'color': '#6b6b6b'});
		$('.prevEntryTitle').css({'color': '#6b6b6b'});
		$(this).css({'background': '#d1d1d1'});
	});

	$('#nextEntry a').mouseover(function(){
		$('.next').css({'border-top':'solid #ffffff 2px', 'border-right': 'solid #ffffff 2px', 'background': '#faa635'});
		$('.nextEntryDesc').css({'color': '#ffffff'});
		$('.nextEntryTitle').css({'color': '#ffffff'});
		$(this).css({'background': '#faa635'});
	});
	$('#nextEntry a').mouseout(function(){
		$('.next').css({'border-top':'solid #474747 2px', 'border-right': 'solid #474747 2px', 'background': '#d1d1d1'});
		$('.nextEntryDesc').css({'color': '#6b6b6b'});
		$('.nextEntryTitle').css({'color': '#6b6b6b'});
		$(this).css({'background': '#d1d1d1'});
	});


	$('#myTab a:first').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	})
	$('#myTab a:last').click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	})











});