import { Component } from '@angular/core';
import { AppService } from './app.service';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myString = '';
  myNumber = 0;
  myArray = new Array();
  myObject = new Object();
  myAjax = ajax.getJSON('https://jsonplaceholder.typicode.com/users');
  myFunction(): void {
    console.log('deneme');
  }

  constructor(private appService: AppService) {
    this.myString = 'Full Stack Developer';
    this.myNumber = 13123123;
    this.myArray.push('Ankara', 'İstanbul', 'Bursa');
    this.myObject = { username: 'erdinccurebal', password: '547547' };

    const myOf = of(
      this.myString,
      this.myNumber,
      this.myObject,
      this.myArray,
      this.myFunction(),
      this.myAjax.subscribe((data) => console.log(data))
    );

    myOf.subscribe();
  }
}
