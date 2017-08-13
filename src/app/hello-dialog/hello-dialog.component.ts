import { Component, OnInit, Inject} from '@angular/core';

import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
	selector: 'app-hello-dialog',
	templateUrl: './hello-dialog.component.html',
	styleUrls: ['./hello-dialog.component.css']
})
export class HelloDialogComponent implements OnInit {

	constructor(
		@Inject(MD_DIALOG_DATA) public data : any,
		public mdDialogRef : MdDialogRef<HelloDialogComponent>) { }

	ngOnInit() {
		console.dir(this);
	}

	onClickOkButton() : void {
		this.mdDialogRef.close('OK!');
	}

}
