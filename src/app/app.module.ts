import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

// Material
import {
	MdButtonModule,
	MdCheckboxModule,
	MdSidenavModule,
	MdRadioModule,
	MdInputModule,
	MdNativeDateModule,
	MdDatepickerModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Gesture
import 'hammerjs';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { InputComponent } from './input/input.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ButtonComponent,
		CheckboxComponent,
		RadioButtonComponent,
		DatepickerComponent,
		SidenavComponent,
		InputComponent
	],
	imports: [
		BrowserModule,
		MdButtonModule,
		MdCheckboxModule,
		MdSidenavModule,
		MdRadioModule,
		MdInputModule,
		MdNativeDateModule,
		MdDatepickerModule,
		FormsModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
