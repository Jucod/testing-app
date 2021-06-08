import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ImageComponent } from './shared/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
