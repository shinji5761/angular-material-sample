import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {HelloDialogComponent} from '../hello-dialog/hello-dialog.component';

@Component({
	selector: 'app-dialog',
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

	result : any ;

	constructor(public mdDialog : MdDialog) { }

	ngOnInit() {}

	onClickEvent() : void {
		let dialog = this.mdDialog.open(HelloDialogComponent, {
			'data' : {'title': 'HelloWorld!!'},
			'height' : '300px',
			'width' : '500px',
			'disableClose' : false
		});
		dialog.afterClosed().subscribe( (result) => {
			console.log('afterClosed');
			console.log(result);
			this.result = result;
		});
	}
}
