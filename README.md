# ab-lightbox

Simplest vanilla lightbox you can imagine.

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
