import { Component } from '@angular/core';
import { AppService } from './app.service';
import { of, throwError } from 'rxjs';
import { catchError, delay, retry, finalize } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    ajax
      .getJSON('https://jsonplaceholder.typicode.com/user')
      .pipe(
        retry(5),
        catchError((error) => throwError(error))
      )
      .subscribe((data) => console.log(data));
  }
}
