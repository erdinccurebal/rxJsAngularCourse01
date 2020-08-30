import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { AppService } from './app.service';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private appService: AppService) {
    // ? ThrottleTime belirli bir süre veri gelmesini engeller.
    const myInterval = interval(1000);
    myInterval.pipe(throttleTime(3000)).subscribe((data) => console.log(data));
  }
}
