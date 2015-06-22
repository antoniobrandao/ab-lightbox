# ab-lightbox

Simplest vanilla lightbox you can imagine.

Features:

- black transparent background (with fade-in)
- loads the given image URL and shows the loaded image (with fade-in)
- limits the size of the image based on screen size and given constraints
- closes the lightbox upon click / touchstart (with fade-out)
- disables scroll while lightbox is visible
- removes DOM elements and event listeners after lightbox is closed

## Install

With [npm](http://npmjs.org) do:

```bash
$ npm install ab-lightbox --save-dev
```

## Usage
	
	var lightbox = require('ab-lightbox');
	
	// default settings are shown.

	lightbox.createlightbox({
		imageURL 				: 'http://lorempixel.com/400/200/',
		closeOnBGClick 			: true,
		fadeOut					: true,
		bgOpacity				: 0.6,
		maxHeightPercent		: 0.6,
		maxWidthPercent			: 0.6,
	});

## License

MIT
