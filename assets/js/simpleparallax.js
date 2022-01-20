
const simpleParallax = require('simple-parallax-js');

const image = document.getElementsByClassName('whyus');
new simpleParallax(image);



// Down code for multiple img or videos
const images = document.querySelectorAll('img');
new simpleParallax(images, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)',
    overflow: true
});


// simpleParallax now works with video :

{/* <video>
  <source src="video.mp4" type="video/mp4">
</video>
var video = document.getElementsByTagName('video');
new simpleParallax(video); */}