import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
	ngOnInit() {
	}

	private onFocusEvent($event) : void {
		console.log($event);
	}

	private onClickEvent($event) : void {
		console.log($event);
	}
}
