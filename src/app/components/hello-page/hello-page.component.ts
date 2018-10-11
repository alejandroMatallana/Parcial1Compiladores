import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SlideshowModule, IImage } from 'ng-simple-slideshow';

@Component({
	selector: 'app-hello-page',
	templateUrl: './hello-page.component.html',
	styleUrls: [ './hello-page.component.css' ]
})
export class HelloPageComponent implements OnInit {
	images: Array<{ src: string; name: string }>;

	constructor(private router: Router) {
		this.images = [
			{
				src:
					'https://cinemarkla.modyocdn.com/uploads/09c4b3aa-12d4-4686-8c3e-4060dff9cdfe/original/ico-facebook.png',
				name: 'Facebook'
			},
			{
				src:
					'https://cinemarkla.modyocdn.com/uploads/aeb3d7b0-1ce1-4208-b56d-868f19117142/original/ico-twitter.png',
				name: 'Twitter'
			},
			{
				src:
					'https://cinemarkla.modyocdn.com/uploads/8109e80b-4302-484d-8877-e935545bf653/original/ico-instagram.png',
				name: 'Instagram'
			}
		];
	}

	imageUrls: (string | IImage)[] = [
		{
			url: 'https://www.cinemacenter.com.ar/img_movies/1814_img1.jpg',
			caption: 'The first slide',
			href: '#config'
		},
		{
			url: 'http://www.cinespaseoaldrey.com.ar/images/bannervalamonja.jpg',
			clickAction: () => alert('custom click function')
		},
		{
			url: 'http://www.movienewsletters.net/media/slider/1200x444/247729.jpg',

			href: 'https://www.apple.com/'
		},
		'https://i.ytimg.com/vi/RYQmtI-uz38/maxresdefault.jpg',
		{
			url: 'http://www.cinesalbatrosbabel.com/upload/slider/8bca32.jpg',
			backgroundSize: 'contain',
			backgroundPosition: 'center'
		}
	];
	height = '400px';
	minHeight: string;
	arrowSize = '30px';
	showArrows = true;
	disableSwiping = false;
	autoPlay = true;
	autoPlayInterval = 3333;
	stopAutoPlayOnSlide = true;
	debug = false;
	backgroundSize = 'cover';
	backgroundPosition = 'center center';
	backgroundRepeat = 'no-repeat';
	showDots = true;
	dotColor = '#FFF';
	showCaptions = true;
	captionColor = '#FFF';
	captionBackground = 'rgba(0, 0, 0, .35)';
	lazyLoad = false;
	hideOnNoSlides = false;
	width = '100%';

	ngOnInit() {}
}
