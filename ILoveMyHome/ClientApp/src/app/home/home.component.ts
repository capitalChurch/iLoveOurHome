import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../service/translateService";
import {LanguageResource} from "../../model/languageResource";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public t: LanguageResource;

  constructor(private translateService: TranslateService) {
    this.subscribe();
  }

  ngOnInit() {
  }

  private subscribe = (): void =>{
    this.translateService.resource.subscribe(x => this.t = x);
  }
}
