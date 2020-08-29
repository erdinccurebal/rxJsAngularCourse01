import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { from, Observable } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  // ? First Operatörü hata varsa geriye hata mesajı döner, tek obje geri getirir, net aramalar yapılır, tek harfden arama yapılmaz.
  myFnAjax(): Observable<any> {
    return ajax.getJSON<any>('https://jsonplaceholder.typicode.com/users').pipe(
      mergeMap((x) => from(x)),
      first((f: any) => f.id > 3)
    );
  }
}
