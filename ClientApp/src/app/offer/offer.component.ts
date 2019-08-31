import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../service/translateService";
import {LanguageResource} from "../../model/languageResource";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  public t: LanguageResource;
  constructor(public translateService: TranslateService) {
    this.subscribe();
  }

  ngOnInit() {
  }

  private subscribe = (): void => {
     this.translateService.resource.subscribe(x => this.t = x);
  }
}
