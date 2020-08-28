import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { delay, map, mapTo, mergeAll, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  myAjax = ajax.getJSON('https://jsonplaceholder.typicode.com/users')
    .pipe(
      mergeMap((mm: any) => mm = from(mm)),
      delay(1000)
    );

constructor() { }

}
