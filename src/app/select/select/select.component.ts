import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

	monthes : Array<number> = []
	selectedMonth : number;

	statuses : Array<string> = [
		'仕事', '家事', '二日酔い'
	];
	selectedStatus : string;

	constructor() {}

	ngOnInit() {
		for(let month = 1; month <= 12; month++) {
			this.monthes.push(month);
		}
	}

	selectOpen() :void {
		console.log('selectOpen');
	}

	selectClose() : void {
		console.log('selectClose');
	}

	onChange(event) : void {
		console.log('onChange');
		console.dir(event);
	}
}
