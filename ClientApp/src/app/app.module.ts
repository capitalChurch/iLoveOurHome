import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {TranslateService} from "../service/translateService";
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import {TranslatePipe} from "../pipes/translate.pipe";
import { LoveOfferComponent } from './love-offer/love-offer.component';
import { ButtonPersonalizedComponent } from './components/button-personalized/button-personalized.component';
import { TentHistoryComponent } from './tent-history/tent-history.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TranslatePipe,
    HomeComponent,
    VideoComponent,
    LoveOfferComponent,
    ButtonPersonalizedComponent,
    TentHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
