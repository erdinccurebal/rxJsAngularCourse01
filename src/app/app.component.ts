import { Component } from '@angular/core';
import { AppService } from './app.service';
import { of, throwError } from 'rxjs';
import { timeout, delay, catchError } from 'rxjs/operators';
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
        catchError((err) => throwError(err))
      )
      .subscribe((data) => console.log(data));
  }
}
