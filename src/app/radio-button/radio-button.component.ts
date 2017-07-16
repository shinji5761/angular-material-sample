import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {

	radioState = true;

	group = [
		{'name': '東京', 'value': 'tokyo'},
		{'name': '大阪', 'value': 'osaka'}
	];
	selectedRadioButton = this.group[0].value;
	
	ngOnInit() {}

	onChangeRadio(value) : void {
		this.selectedRadioButton = value;
		console.log(this.selectedRadioButton);
	}

	onChangeRadioGroup() : void {
		console.log('onChangeRadioGroup')
	}
}
