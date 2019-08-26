import { Component, OnInit } from '@angular/core';
import {Language, LanguageResource} from "../../model/languageResource";
import {TranslateService} from "../../service/translateService";

@Component({
  selector: 'app-love-offer',
  templateUrl: './love-offer.component.html',
  styleUrls: ['./love-offer.component.scss']
})
export class LoveOfferComponent implements OnInit {

  public t: LanguageResource;
  constructor(private translateService: TranslateService) {
    this.subscribe();
  }

  ngOnInit() {
  }

  private subscribe = (): void => {
    this.translateService.resource.subscribe(x => this.t = x);
  }
}
