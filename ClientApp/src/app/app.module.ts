import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {TranslateService} from "../service/translateService";
import { TranslatePipe } from '../pipes/translate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TranslatePipe
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
