import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AppService } from './app.service';
import { throttle } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    // ? Throttle Operator observable 'dan gelen veriyi belirli bir süre engeller
    const myInterval = interval(1000);
    myInterval
      .pipe(throttle((value) => interval(2000)))
      .subscribe((data) => console.log(data));
  }
}
