import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { last, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  findAllUser(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
      mergeMap((data: any) => from(data)),
      last()
    );
  }
}
