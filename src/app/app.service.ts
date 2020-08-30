import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { find, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  myFnAjax(): Observable<any> {
    return ajax.getJSON<any>('https://jsonplaceholder.typicode.com/users').pipe(
      mergeMap((mm) => from(mm)),
      find((ff: any) => ff.id === 3)
    );
  }
}
