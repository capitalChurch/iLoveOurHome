import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../service/translateService";
import {LanguageResource} from "../../model/languageResource";

@Component({
  selector: 'app-tent-history',
  templateUrl: './tent-history.component.html',
  styleUrls: ['./tent-history.component.scss']
})
export class TentHistoryComponent implements OnInit {

  public t: LanguageResource;
  constructor(private translateService: TranslateService) {
    this.subscribe();
  }

  ngOnInit() {
  }

  public get text(): string{
    const regex = /\n\n/;
    const result = this.t.tentHistory.text.replace(/\n\n/, '</p><p>');
    console.log(result);
    return result
  }

  private subscribe = (): void => {
    this.translateService.resource.subscribe(x => this.t = x);
  }
}
