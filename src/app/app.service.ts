import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getAllUsers(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(mergeMap((data: any) => from(data)));
  }
}
