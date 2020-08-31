import { Component } from '@angular/core';
import { fromEvent, range } from 'rxjs';
import { AppService } from './app.service';
import { delayWhen } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {

    const myClick = fromEvent(document, 'keyup');

    range(1, 20).pipe(delayWhen(data => myClick)).subscribe(data => console.log(data));

  }
}
