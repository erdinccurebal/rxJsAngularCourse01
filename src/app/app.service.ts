import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getAllUser(): Observable<any> {
    return ajax({
      url: 'https://jsonplaceholder.typicode.com/users',
      method: 'GET',
    }).pipe(map((x) => x.response));
  }
}
