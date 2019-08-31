  import { Component, OnInit } from '@angular/core';
  import {TranslateService} from "../../service/translateService";
  import {LanguageResource} from "../../model/languageResource";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

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
