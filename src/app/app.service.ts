import { Injectable } from '@angular/core';
import { from, merge, Observable } from 'rxjs';
import { find, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  getAllUsers(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/posts').pipe(
      mergeMap((data: any) => from(data)),
      take(10),
      switchMap((data: any) => {
        return ajax.getJSON('https://jsonplaceholder.typicode.com/users').pipe(
          mergeMap((x: any) => from(x)),
          find((res: any) => res.id === data.userId),
          map((mm: any) => {
            return {
              id: data.id,
              author: mm.name,
              title: data.title,
              content: data.body
            }
          })
        );
      })
    );
  }
}
