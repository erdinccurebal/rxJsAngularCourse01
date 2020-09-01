import { Component } from '@angular/core';
import { AppService } from './app.service';
import { of } from 'rxjs';
import { catchError, delay, repeat, timeout } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    ajax
      .getJSON('https://jsonplaceholder.typicode.com/users')
      .pipe(
        delay(3000),
        timeout(2000),
        catchError((err) => of(console.log('err'))),
      )
      .subscribe((data) => console.log(data));
  }
}
