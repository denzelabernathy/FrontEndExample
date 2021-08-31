import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NewCarsComponent } from './new-cars/new-cars.component';
import { PreOwnedCarsComponent } from './pre-owned-cars/pre-owned-cars.component';
import { ServicesComponent } from './services/services.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NewCarsComponent,
    PreOwnedCarsComponent,
    ServicesComponent,
    NavBarComponent,
    FooterComponent,
    ContactComponent,
    ContactFormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
