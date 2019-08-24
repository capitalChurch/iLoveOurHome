import {Pipe, PipeTransform} from '@angular/core';
import {TranslateService} from "../service/translateService";
import {LanguageResource} from "../model/languageResource";

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private resource: LanguageResource;

  constructor(private translate: TranslateService) {
    this.subscribe();
  }

  transform(value: string): string {
    if (!this.resource)
      return value;

    let result = value;

    try {
      result = value.split(".")
        .reduce((a, b) => a[b], this.resource);

    } catch (e) {
      console.error(`Not found resource: ${value}`);
    }

    return result;
  }

  private subscribe = () => {
    this.translate.resource.subscribe(x => this.resource = x);
  }
}
