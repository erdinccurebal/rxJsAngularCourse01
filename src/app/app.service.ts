import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap, skip } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  // ? Skip Operator almış olduğu kadar atlama gerçekleştirir.
  listAllUser(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
      mergeMap((data: any) => from(data)),
      skip(5)
    );
  }
}
