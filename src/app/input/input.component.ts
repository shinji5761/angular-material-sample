import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


@Component({
	selector: 'app-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

	ngOnInit() {}

	emailFormControl = new FormControl(
		'',
		[Validators.required,Validators.pattern(EMAIL_REGEX)]
	)

	prefix = 'abc';

	onChange() : void {
		console.log(this.prefix);
	}

}
