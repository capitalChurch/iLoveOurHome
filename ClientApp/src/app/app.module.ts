import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {TranslateService} from "../service/translateService";
import { HomeComponent } from './home/home.component';
import { VideoComponent } from './video/video.component';
import {TranslatePipe} from "../pipes/translate.pipe";
import { LoveOfferComponent } from './love-offer/love-offer.component';
import { ButtonPersonalizedComponent } from './components/button-personalized/button-personalized.component';
import { TentHistoryComponent } from './tent-history/tent-history.component';
import { HowMuchIsMissingComponent } from './how-much-is-missing/how-much-is-missing.component';
import {registerLocaleData} from "@angular/common";
import localePt from '@angular/common/locales/pt';
import {CapitalizarPipe} from "../pipes/capitalizar.pipe";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TranslatePipe,
    HomeComponent,
    VideoComponent,
    LoveOfferComponent,
    ButtonPersonalizedComponent,
    TentHistoryComponent,
    HowMuchIsMissingComponent,
    CapitalizarPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TranslateService,
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
