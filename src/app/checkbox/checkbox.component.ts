import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
	button = {
		'disable' : false
	}
	align = 'end';
	indeterminate = true;
	labelPosition = "before";

	ngOnInit() {}

	onCahngeEvent() : void {
		console.log('onCahngeEvent');
	}

	onChangeIndeterminateEvent() : void {
		console.log('onChangeIndeterminateEvent');
	}
}
