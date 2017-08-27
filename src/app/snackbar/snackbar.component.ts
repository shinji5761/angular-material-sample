import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
	selector: 'app-snackbar',
	templateUrl: './snackbar.component.html',
	styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

	private snackBar;

	constructor(private mdSnackBar : MdSnackBar) { }
	ngOnInit() {}

	private onClickOpenButton() : void {
		let ref = this.mdSnackBar.open(
			'message',
			'Close',
			{
				'duration' : 2000,		// 表示時間(ms)
				'direction' : 'ltr'		// ltr or rtl
			}
		);

		this.snackBar = ref;

		ref.afterOpened().subscribe( () => {
			console.log('afterOpened');
		});

		ref.afterDismissed().subscribe( () => {
			console.log('afterDismissed');
		});

		ref.onAction().subscribe( () => {
			console.log('onAction');
		});
	}

	private onClickCloseButton() : void {
		if( this.snackBar )
			this.snackBar.dismiss();
	}

}
