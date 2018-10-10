import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SlideshowModule } from 'ng-simple-slideshow';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HelloPageComponent } from './components/hello-page/hello-page.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		DashboardComponent,
		HelloPageComponent,
		CardComponent,
		FooterComponent
	],
	imports: [ BrowserModule, AppRoutingModule, MatRadioModule, FormsModule, SlideshowModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
