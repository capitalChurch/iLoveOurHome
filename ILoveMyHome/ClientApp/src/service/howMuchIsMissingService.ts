import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {ourAim} from "../model/constants";

const baseUrl = '/api/HowMuchIsMissing';

@Injectable()
export class HowMuchIsMissingService {
  private _howMuchIsMissing: BehaviorSubject<number> = new BehaviorSubject<number>(ourAim);

  public howMuchIsMissing: Observable<number> = this._howMuchIsMissing.asObservable();

  constructor(private http: HttpClient){
    setInterval(this.updateValue, 7000);
  }

  private updateValue = (): void => {
    this.http.get<number>(baseUrl)
      .subscribe(x => this._howMuchIsMissing.next(x));
  }
}
