import { Component } from '@angular/core';
import { AppService } from './app.service';
import { from } from 'rxjs';
import { skipWhile } from 'rxjs/operators';
import {} from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    from([2, 3, 4, 6, 8, 3, 13123, 133131, 124])
      .pipe(skipWhile((value, index) => value < 5))
      .subscribe((data) => console.log(data));
  }
}
