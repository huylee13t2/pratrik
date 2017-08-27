import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/app.component';
import { HomeComponent } from './home/app.component';
import { HomeListComponent } from './home/list/app.component';
import { HomeViewComponent } from './home/view/app.component';
import { AdminComponent } from './admin/app.component';

// auth
import { SignupComponent } from './auth/signup/app.component';
import { LoginComponent } from './auth/login/app.component';

// service
import { MainService } from './app.services';

@NgModule({
	declarations: [
		MainComponent,
		HomeComponent,
		HomeListComponent,
		HomeViewComponent,
		AdminComponent,
		// auth
		SignupComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule,
	],
	providers: [
		MainService,
	],
	bootstrap: [MainComponent]
})
export class AppModule { }
