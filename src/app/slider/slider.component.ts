import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-slider',
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
	slider : Object = {
		'min' : 0,
		'max' : 100,
		'value' : 50,
		'tickInterval' : 10,
		'change' : (slider) => {
			console.log('change');
			this.slider['value'] = this.slider['value'] - this.slider['value'] % 2 
		}
	};

	constructor() { }

	ngOnInit() {
	}

	onChange(event) : void {
		console.log('onChange');
		console.dir(event);
	}

	onInput(event) : void {
		console.log('onInput');
		console.dir(event);
	}
}
