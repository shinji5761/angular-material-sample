import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import {
	MdButtonModule,
	MdCheckboxModule,
	MdSidenavModule,
	MdRadioModule,
	MdInputModule,
	MdNativeDateModule,
	MdDatepickerModule,
	MdSelectModule,
	MdSliderModule,
	MdIconModule,
	MdSlideToggleModule,
	MdTooltipModule,
	MdDialogModule,
	MdSnackBarModule,
	MD_PLACEHOLDER_GLOBAL_OPTIONS
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
import { SelectComponent } from './select/select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SlidetoggleComponent } from './slidetoggle/slidetoggle.component';
import { DialogComponent } from './dialog/dialog.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { HelloDialogComponent } from './hello-dialog/hello-dialog.component';


@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ButtonComponent,
		CheckboxComponent,
		RadioButtonComponent,
		DatepickerComponent,
		SidenavComponent,
		InputComponent,
		SelectComponent,
		SliderComponent,
		SlidetoggleComponent,
		DialogComponent,
		TooltipComponent,
		SnackbarComponent,
		HelloDialogComponent
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
		MdSelectModule,
		MdSliderModule,
		FormsModule,
		ReactiveFormsModule,
		MdIconModule,
		MdSlideToggleModule,
		MdTooltipModule,
		MdDialogModule,
		MdSnackBarModule,
		BrowserAnimationsModule
	],
	providers: [
		{provide: MD_PLACEHOLDER_GLOBAL_OPTIONS, useValue: { float: 'all' }}
	],
	entryComponents : [
		HelloDialogComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
