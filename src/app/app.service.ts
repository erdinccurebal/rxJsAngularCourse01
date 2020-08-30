import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { distinct, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  myFrom = from([5, 6, 7, 8, 9, 1, 1, 4, 6, 7, 3, 2]);

  constructor() {}
  findAll(): Observable<any> {
    return this.myFrom.pipe(distinct(), toArray());
  }
}
