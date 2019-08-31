import { Component, OnInit } from '@angular/core';
import {LanguageResource} from "../../model/languageResource";
import {TranslateService} from "../../service/translateService";
import {hourAim} from "../../model/constants";

@Component({
  selector: 'app-how-much-is-missing',
  templateUrl: './how-much-is-missing.component.html',
  styleUrls: ['./how-much-is-missing.component.scss']
})
export class HowMuchIsMissingComponent implements OnInit {
  public readonly aim: number = hourAim;

  public t: LanguageResource;
  constructor(private translateService: TranslateService) {
    this.subscribe();
  }

  ngOnInit() {
  }

  private subscribe = (): void => {
    this.translateService.resource.subscribe(x => this.t = x);
  };

  public get actualCollected(): number{
   return this.aim - 645760
  }
}
