import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Language, LanguageResource} from "../model/languageResource";
import {pt} from "../assets/i18n/pt";
import {en} from "../assets/i18n/en";

@Injectable()
export class TranslateService {
  private _resource: BehaviorSubject<LanguageResource> = new BehaviorSubject<LanguageResource>(en);
  public resource: Observable<LanguageResource> = this._resource.asObservable();

  constructor(){
    this.setupBrowserLanguage();
  }

  public use = (lang: Language): void => {
    const languages: {lang: Language, resource: LanguageResource}[] = [
      {lang: "en", resource: en},
      {lang: "pt", resource: pt}
    ];

    const resource = languages.find(x => x.lang === lang).resource;

    this.updateLanguage(resource);
  };

  private updateLanguage = (res: LanguageResource): void => {
    this._resource.next(res);

    document.title = res.titleBrowser;
  };

  private setupBrowserLanguage = (): void => {
    const languages: {browseLang: string, lang: Language}[] = [
      {browseLang: 'pt-BR', lang: "pt"},
      {browseLang: 'en-US', lang: 'en'}
    ];

    const lang: Language = languages.findOrFirst(x => x.browseLang === navigator.language).lang;

    this.use(lang);
  }
}
