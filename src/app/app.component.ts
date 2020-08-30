import { Component } from '@angular/core';
import { AppService } from './app.service';
import { takeWhile, toArray } from 'rxjs/operators';
import { range } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    range(1, 10)
      .pipe(takeWhile((data) => data < 3))
      .subscribe((data) => console.log(data));
  }
}
