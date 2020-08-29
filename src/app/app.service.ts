import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import {} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { find, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  // ? Find operatorü tek obje döner ve net aramalar yapılır , tek harf aranmaz, hata mesajı dönmez.
  myFnAjax(): Observable<any> {
    return ajax.getJSON<any>('https://jsonplaceholder.typicode.com/users').pipe(
      mergeMap((mm) => from(mm)),
      find((ff: any) => ff.id === 3)
    );
  }
}
