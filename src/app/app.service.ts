import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { last, mergeMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  // ? Last Operatörü son objeyi döner,Koşullu bir şekildede sondakini getirebilir üçe bölünenlerin en sonu gibi.
  findAllUser(): Observable<any> {
    return ajax.getJSON('https://jsonplaceholder.typicode.com/users')
      .pipe(
        mergeMap((data: any) => from(data)),
        last()
      );
  }

}
