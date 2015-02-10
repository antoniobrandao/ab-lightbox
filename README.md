# ab-lightbox

Minimal Vanilla JS Lightbox.

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install ab-lightbox --save-dev
```

## Usage
	
	// At the moment this script expects a wrapper DIV with the ID '#root-wrapper' to be present in the DOM
	// This will be changed to be added via the options object

	var lightbox = require('ab-lightbox');
	
	// all default settings are show below, add a custom image URL in the 'imageURL' parameter

	var options = 
	{
		closeOnBGClick 			: true,
		showImage 				: false,
		imageURL 				: 'image_url_here',
		bgOpacity				: 0.6,
		fadeOut					: true,
		globalPadding			: '100px 70px 100px 70px',
	};

	lightbox.createlightbox(options);

## License

MIT
