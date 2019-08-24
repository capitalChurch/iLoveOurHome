import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

declare global{
  interface Array<T>{
    findOrFirst: (predicate:(value: T, index: number, lst: T[]) => boolean) => T
    findOrResult: (predicate:(value: T, index: number, lst: T[]) => boolean, result: T) => T
  }
}

Array.prototype.findOrResult = function<T>(predicate:(value: T, index: number, lst: T[]) => boolean, result: T){
  return this.find(predicate) || result;
};


Array.prototype.findOrFirst = function<T>(predicate:(value: T, index: number, lst: T[]) => boolean){
  return this.find(predicate) || this[0];
};

