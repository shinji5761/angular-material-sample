import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-slidetoggle',
	templateUrl: './slidetoggle.component.html',
	styleUrls: ['./slidetoggle.component.css']
})
export class SlidetoggleComponent implements OnInit {
	
	toggle = {
		'name' : 'トグル',
		'position' : 'before',
		'checked' : false,
		'disableRipple' : 'true',
		'change' : () => {
			console.log('ChangeEvent');
		}
	}

	constructor() { }

	ngOnInit() {
	}

}
