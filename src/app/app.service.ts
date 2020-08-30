import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { distinct, mergeMap, single, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  myFrom = from([5, 6, 7, 8, 9, 1, 1, 4, 6, 7, 3, 2]);

constructor() { }
  // ? Distinct
  findAll(): Observable<any> {
    return this.myFrom
      .pipe(
        distinct(),
        toArray()
      );
  }
}
