import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { mergeMap, single } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor() { }

  // ? Single Operatörü sorgulanan tek bir obje çeker
  findAll(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users')
      .pipe(
        mergeMap((data: any) => from(data)),
        single(data => data.username === 'Kamren')
    )
  }

}
