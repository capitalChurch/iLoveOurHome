import { Component, OnInit } from '@angular/core';
import {TranslateService} from "../../service/translateService";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {LanguageResource} from "../../model/languageResource";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  public url: SafeUrl;
  public t: LanguageResource;
  public buttonPlayWasPressed: boolean = false;

  constructor(private translateService: TranslateService, private sanitizer: DomSanitizer) {
    this.subscribe();
  }

  ngOnInit() {
  }

  public pressButton = (): void => {
    this.buttonPlayWasPressed = true;
  };

  private subscribe = (): void => {
    this.translateService.resource.subscribe(this.updateResources);
  };

  private updateResources = (lang: LanguageResource): void => {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(lang.video.link);
    this.t = lang;
  }
}
