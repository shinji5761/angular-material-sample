import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
	ngOnInit() {}

	datepicker = {
		'model' : '',
		'filter' : (date : Date)=>{
						let day = date.getDay();
						// 日(0)､または土(6)以外
						return day != 0 && day != 6
					},
		'min' : new Date(2010, 3, 1),
		'max' : new Date(2020, 2, 31)
	}

	changeDatePicker() : void {
		console.dir(this.datepicker);
	}

}
