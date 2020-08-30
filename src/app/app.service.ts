import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map, mergeMap, skip, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  findAll(take$: number, skip$: number): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/photos').pipe(
      mergeMap((data: any) => from(data)),
      skip(skip$),
      take(take$),
      map((data: any) => {
        return {
          id: data.id,
          url: data.thumbnailUrl,
        };
      })
    );
  }
}
