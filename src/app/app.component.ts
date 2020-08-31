import { Component } from '@angular/core';
import { range } from 'rxjs';
import { AppService } from './app.service';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myRange = range(1, 10);
  constructor(private appService: AppService) {
    this.myRange
      .pipe(take(5), toArray())
      .subscribe((data) => console.log(data));
  }
}
