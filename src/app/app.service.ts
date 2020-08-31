import { Injectable } from '@angular/core';
import { concat, from, merge, Observable } from 'rxjs';
import { concatMap, mergeMap, map, find, take, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  findAll(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
      mergeMap((data: any) => from(data)),
      take(10),
      concatMap((data: any) => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
          delay(1000),
          mergeMap((mm: any) => from(mm)),
          find((res: any) => res.id === data.userId),
          map((res: any) => {
            return {
              id: data.id,
              title: data.title,
              content: data.body,
              user: res,
            };
          })
        );
      })
    );
  }
}
