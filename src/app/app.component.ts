import { Component } from '@angular/core';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myFrom = from([2, 44, 64, 75, 86, 95, 123, 432, 4564]);

  constructor(private appService: AppService) {
    this.myFrom.pipe(take(5)).subscribe((data) => console.log(data));
  }
}
