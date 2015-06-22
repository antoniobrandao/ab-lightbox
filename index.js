'use strict';

var lightbox_base_element;
var lightbox_background;
var lightbox_img_element;
var text_element_title;
var text_element_text;
var buttons_container;
var button_confirm;
var button_cancel;
var button_confirm_p;
var button_cancel_p;

var settings = {
	imageURL 		: 'http://lorempixel.com/400/200/',
	closeOnBGClick 	: true,
	fadeOut			: true,
	bgOpacity		: 0.6,
	maxWidth		: 0.6, // 1 = 100%
	maxHeight		: 0.6, // 1 = 100%
};

module.exports = {

    createlightbox: function(options)
    {
    	// console.log('createlightbox');

		settings = extend(settings, options); // vanilla extend

    	var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,
		y=w.innerHeight||e.clientHeight||g.clientHeight;

		var window_width 		= x;
		var window_height 		= y;

		var window_width_px 	= String(window_width) + 'px';
		var window_height_px	= String(window_height) + 'px';

        lightbox_background		= document.createElement('DIV');
        lightbox_base_element	= document.createElement('DIV');
        lightbox_img_element	= document.createElement('IMG');
        
        lightbox_base_element.addClass('ui-lightbox-image');
        lightbox_background.addClass('ui-lightbox-image-bg');
        lightbox_img_element.addClass('ui-lightbox-image-img');

		lightbox_base_element.setAttribute('id', 		'ui-lightbox-image');
		lightbox_background.setAttribute('id', 			'ui-lightbox-image-bg');
        lightbox_img_element.setAttribute('id', 		'ui-lightbox-image-img');
        lightbox_img_element.setAttribute('src', 		settings.imageURL);
        
        lightbox_img_element.onload 					= handleImageLoaded;

		lightbox_base_element.style.position			= 'fixed';
		lightbox_base_element.style.top					= '0';
		lightbox_base_element.style.left				= '0';
		lightbox_base_element.style.width				= window_width_px;
		lightbox_base_element.style.height				= window_height_px;
		lightbox_base_element.style.zIndex				= '1000';
		lightbox_base_element.style.opacity				= '0';

		lightbox_background.style.position				= 'fixed';
		lightbox_background.style.top					= '0';
		lightbox_background.style.left					= '0';
		lightbox_background.style.width					= window_width_px;
		lightbox_background.style.height				= window_height_px;
		lightbox_background.style.backgroundColor 		= 'black';
		lightbox_background.style.display				= 'block';
		lightbox_background.style.opacity 				= 0;

		lightbox_img_element.style.position				= 'fixed';

        lightbox_img_element.style.borderRadius			= '2px';
		lightbox_img_element.style.boxSizing			= 'border-box';
		lightbox_img_element.style.opacity				= 0;

		// lightbox_img_element.style.padding 				= settings.globalPadding;

		lightbox_img_element.style.maxWidth 			= ( window_width * settings.maxWidth ) + 'px';
		lightbox_img_element.style.maxHeight 			= ( window_height * settings.maxHeight ) + 'px';

		// lightbox_img_element.style.webkitTransition 	= 'all 0.5s';
		// lightbox_img_element.style.mozTransition 		= 'all 0.5s';
		// lightbox_img_element.style.msTransition 		= 'all 0.5s';
		// lightbox_img_element.style.oTransition 			= 'all 0.5s';

		// lightbox_background.style.webkitTransition 		= 'all 0.5s';
		// lightbox_background.style.mozTransition 		= 'all 0.5s';
		// lightbox_background.style.msTransition 			= 'all 0.5s';
		// lightbox_background.style.oTransition 			= 'all 0.5s';

		// lightbox_base_element.style.webkitTransition 	= 'all 0.5s';
		// lightbox_base_element.style.mozTransition 		= 'all 0.5s';
		// lightbox_base_element.style.msTransition 		= 'all 0.5s';
		// lightbox_base_element.style.oTransition 		= 'all 0.5s';

		lightbox_base_element.appendChild(lightbox_background);
		lightbox_base_element.appendChild(lightbox_img_element);

		document.body.appendChild(lightbox_base_element);

		lightbox_base_element.addEventListener('click', closelightbox);

		addViewportListeners();
		adjustViewPortLightbox();

		setTimeout(function()
		{
			lightbox_base_element.style.opacity	= '1';
		}, 100)
    },
}

var closelightbox = function()
{
	removeViewportListeners();

	var removeElement = function() {
		document.body.removeChild(document.getElementById('ui-lightbox-image'));
	}

	if (settings.fadeOut) 
	{
		lightbox_base_element.style.opacity = '0';
		
		setTimeout(function() { removeElement(); }, 500)
	}
	else { removeElement(); }
}

var handleImageLoaded = function()
{
	adjustViewPortLightbox();

	setTimeout(function()
	{
		lightbox_background.style.webkitTransition 		= 'all 0.5s';
		lightbox_background.style.mozTransition 		= 'all 0.5s';
		lightbox_background.style.msTransition 			= 'all 0.5s';
		lightbox_background.style.oTransition 			= 'all 0.5s';

		lightbox_base_element.style.webkitTransition 	= 'all 0.5s';
		lightbox_base_element.style.mozTransition 		= 'all 0.5s';
		lightbox_base_element.style.msTransition 		= 'all 0.5s';
		lightbox_base_element.style.oTransition 		= 'all 0.5s';

		lightbox_background.style.opacity 				= String(settings.bgOpacity);
	}, 200);

	setTimeout(function()
	{
		lightbox_img_element.style.webkitTransition 	= 'all 0.7s';
		lightbox_img_element.style.mozTransition 		= 'all 0.7s';
		lightbox_img_element.style.msTransition 		= 'all 0.7s';
		lightbox_img_element.style.oTransition 			= 'all 0.7s';

		lightbox_img_element.style.opacity				= 1;
	}, 500);
}

var addViewportListeners = function()
{
	if(window.attachEvent) 			 	{window.attachEvent('onresize', adjustViewPortLightbox);
	} else if(window.addEventListener) 	{window.addEventListener('resize', adjustViewPortLightbox, true);
	} else { 							//The browser does not support Javascript event binding
	}
}

var removeViewportListeners = function()
{
	if(window.detachEvent)  				{ window.detachEvent('onresize', adjustViewPortLightbox);
	} else if(window.removeEventListener) 	{ window.removeEventListener('resize', 	adjustViewPortLightbox);
	} else { 								//The browser does not support Javascript event binding
	}
}

var handleConfirmCallback = function()
{
	settings.confirmCallback();
	
	closelightbox();
}

var adjustViewPortLightbox = function()
{
    var w=window,
		d=document,
		e=d.documentElement,
		g=d.getElementsByTagName('body')[0],
		x=w.innerWidth||e.clientWidth||g.clientWidth,
		y=w.innerHeight||e.clientHeight||g.clientHeight;

	var lightbox_instance = document.getElementById('ui-lightbox-image-img');
	
	if (lightbox_instance) {
		lightbox_background.style.width		= String(x) + 'px';
		lightbox_background.style.height	= String(y) + 'px';

		lightbox_instance.style.left		= String((x / 2) - (lightbox_instance.offsetWidth / 2)) + 'px';
		lightbox_instance.style.top			= String((y / 2) - (lightbox_instance.offsetHeight / 2)) + 'px';
	};
}

var extend = function ( defaults, options ) 
{
	var extended = {};
	var prop;

	for (prop in defaults) 
	{
		if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
			extended[prop] = defaults[prop];
		}
	}

	for (prop in options) 
	{
		if (Object.prototype.hasOwnProperty.call(options, prop)) 
		{
			extended[prop] = options[prop];
		}
	}
	return extended;
};
