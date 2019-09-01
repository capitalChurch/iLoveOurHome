import { Component, OnInit } from '@angular/core';
import {LanguageResource} from "../../model/languageResource";
import {TranslateService} from "../../service/translateService";
import {ourAim} from "../../model/constants";
import {HowMuchIsMissingService} from "../../service/howMuchIsMissingService";

@Component({
  selector: 'app-how-much-is-missing',
  templateUrl: './how-much-is-missing.component.html',
  styleUrls: ['./how-much-is-missing.component.scss']
})
export class HowMuchIsMissingComponent implements OnInit {
  public readonly aim: number = ourAim;
  public howMuchIsMissing: number = ourAim;

  public t: LanguageResource;
  constructor(private translateService: TranslateService, private howMuchService: HowMuchIsMissingService) {
    this.subscribe();
  }

  ngOnInit() {
  }

  private subscribe = (): void => {
    this.translateService.resource.subscribe(x => this.t = x);
    this.howMuchService.howMuchIsMissing.subscribe(x => this.howMuchIsMissing = x);
  };
}
