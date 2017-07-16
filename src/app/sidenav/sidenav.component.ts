import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
	ngOnInit() {}

	onOpenStartEvent(event) : void {
		console.log('onOpenStartEvent');
	}

	onOpenEvent(event) : void {
		console.log('onOpenEvent');
	}

	onCloseStartEvent(event) : void {
		console.log('onCloseStartEvent');
	}

	onCloseEvent(event) : void {
		console.log('onCloseEvent');
	}

	onAlignChangedEvent(event) : void {
		console.log('onAlignChangedEvent');
	}

	onBackdropClickEvent(event) : void {
		console.log('onBackdropClickEvent');
	}

}
