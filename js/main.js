$(document).ready(function () {
	

	var $gallery = $('#galleryUl');
	var listWidth = $('#galleryUl li').outerWidth();
	var galleryItems = $('#galleryUl li').length;
	var galleryWidth = listWidth * galleryItems;
	var left_value = listWidth * (-1);
	var $galleryLIs = $gallery.find('li');
    var thumbsWidth = $('#thumbs li').outerWidth();
    var thumbsItems = $('#thumbs li').length;
    var $thumbs = thumbsWidth * thumbsItems;
    var pagination = Math.ceil(thumbsItems / 6);
    var currPagination = 1;

    //Variables para index rotator
    var $rotatorItems = $('#rotator li').length;
    var $rotatorOutWidth = $('#rotator li').outerWidth();
    var $rotatorWidth = $rotatorOutWidth * $rotatorItems;
  	var rotatorIndex =  1;
  	var position = 0;
    //Variables para index rotator


	$('#galleryUl').css('width', galleryWidth);
	$('#rotator ul').css('width', $rotatorWidth);
	$('#thumbs ul').css('width', $thumbs);
	$galleryLIs.addClass('desaturate');
    $galleryLIs.eq(0).removeClass('desaturate');
    $('#rotatorIndex').html(rotatorIndex + "/" + $rotatorItems);

	
    $('#thumbs li').click(function (){
    	$('#cerrar').click();
    	var selectedIndex = $(this).index();
    	var scrollPosition = (selectedIndex * galleryWidth) / galleryItems;

    	$('#galleryUl').animate({marginLeft: "-" + scrollPosition}, 600, function (){
    		$galleryLIs.addClass('desaturate');
	        $galleryLIs.eq(selectedIndex).switchClass('desaturate', 1500);

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

	$('#leftController').click(function (){
		$('#cerrar').click();
		if(currPagination === 1){
			$('#thumbs ul').animate({marginLeft: 5}, 600);
			return false;
		}else{
			currPagination--;
			currentPos = (currPagination * 532) - 9;
			$('#thumbs ul').animate({marginLeft: "-" + currentPos}, 600);
		}
		
	});

	$('#rightController').click(function () {
		$('#cerrar').click();
		if(currPagination == pagination){
			return false;
		}else{
			
			currentPos = (currPagination * 532) - 9;
			$('#thumbs ul').animate({marginLeft: "-" + currentPos}, 600);
		}
		currPagination++;
	});


	$('.rotatorLeft').click(function () {
		if(rotatorIndex-1 == 0){
			return false;
		}else{
			rotatorIndex--;
			position = (rotatorIndex * 190) - 190;
			$('#rotatorIndex').html(rotatorIndex + "/" + $rotatorItems);
			$('#rotator ul').animate({marginLeft: "-" + position}, 600);
		}
	});

	$('.rotatorRight').click(function () {
		if(rotatorIndex == $rotatorItems ){
			return false;
		}else{
			position = rotatorIndex * 190;
			rotatorIndex++;
			$('#rotatorIndex').html(rotatorIndex + "/" + $rotatorItems);
			$('#rotator ul').animate({marginLeft: "-" + position}, 600);
		}
	});

	$('#thumbVideo').click(function (){
		$('#theVideo').show();
		$('#theVideo').css({'opacity':'0'});
		$('#theVideo').animate({opacity:1}, 'slow');

	})
	
	$('#cerrar').click(function (){
		$('#theVideo').animate({opacity:0}, 'slow', function() {
			$('#theVideo').hide();		
		});
		
	});

	// DROPDOWN MENU LISTADO RESTAURANTES
	function DropDown(el) {
	    this.dd = el;
	    this.placeholder = this.dd.children('span');
	    this.opts = this.dd.find('ul.dropdown > li');
	    this.val = '';
	    this.index = -1;
	    this.initEvents();
	}
	
	var dropdownStatus = false;
	
	DropDown.prototype = {
	    initEvents : function() {
	        var obj = this;
	 
	        obj.dd.on('click', function(event){
	            $(this).toggleClass('active');
	            if(!dropdownStatus){
		            $('.dropdown').animate({opacity : 1, marginTop : '8px'}, 'fast');
		            dropdownStatus = true;
	            }else{
	            	$('.dropdown').animate({opacity : 0, marginTop : '0px'}, 'fast');
	            	dropdownStatus = false;
	            }
	            return false;
	        });

	        
	 
	        obj.opts.on('click',function(){
	            var opt = $(this);
	            obj.val = opt.text();
	            obj.index = opt.index();
	            obj.placeholder.text(obj.val);
	        });
	    },
	    getValue : function() {
	        return this.val;
	    },
	    getIndex : function() {
	        return this.index;
	    }
	}

	$(function() {
		var dd = new DropDown( $('#dd') );
		$(document).click(function() {
			$('.wrapper-dropdown').removeClass('active');
			$('.dropdown').animate({opacity : 0, marginTop : '0px'}, 'fast');
			dropdownStatus = false;
		});
	});

	$('.blankSpot').mouseover(function (){
		var $restaurant = $(this).parent().find('.restauranteInfo');
		$restaurant.animate({'background-color':'#faa632', 'color':'#fff'}, 'fast');
		$(this).parent().find('.restname').animate({'color' : '#fff'}, 'fast');
		$restaurant.find('.tipocomida').css({'background' : 'url("img/icons_listado_white.png") no-repeat left center', 'background-position': '0 8px'});
		$restaurant.find('.lugarcomida').css({'background' : 'url("img/icons_listado_white.png") no-repeat left center', 'background-position': '0 -18px'});
		$(this).parent().find('img').before('<div class="overlay">ver detalles</div>');
		$(this).parent().find('.overlay').animate({opacity : .8}, 'fast');
	});

	$('.blankSpot').mouseout(function (){
		var $restaurant = $(this).parent().find('.restauranteInfo');
		$restaurant.animate({'background-color':'#fefbfb', 'color':'#474747'}, 'fast');
		$(this).parent().find('.restname').animate({'color' : '#00229f'}, 'fast');
		$restaurant.find('.tipocomida').css({'background' : 'url("img/icons_listado_orange.png") no-repeat left center', 'background-position': '0 8px'});
		$restaurant.find('.lugarcomida').css({'background' : 'url("img/icons_listado_orange.png") no-repeat left center', 'background-position': '0 -18px'});
		$(this).parent().find('.overlay').animate({opacity : 0}, 'fast', function(){
			$(this).parent().find('.overlay').remove();	
		});
	});

	$('.blankSpot').click(function (){
		location.href = 'notafinal.php';
	});	

});