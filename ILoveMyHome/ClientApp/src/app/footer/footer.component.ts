import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../service/translateService";
import {LanguageResource} from "../../model/languageResource";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public t: LanguageResource;
  constructor(private translateService: TranslateService) {
    this.subscribe();
  }

  ngOnInit() {
  }

  public get year(): string{
    return new Date().getFullYear().toString();
  }

  private subscribe = (): void => {
    this.translateService.resource.subscribe(x => this.t = x);
  }
}
