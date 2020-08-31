import { Component } from '@angular/core';
import { fromEvent, interval, Observable, of } from 'rxjs';
import { AppService } from './app.service';
import { map, mergeAll, mergeMap, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService
  ) {
    const myClick = fromEvent(document, 'click');
    const myMerge = myClick.pipe(mapTo(interval(1000)));

    myMerge.pipe(mergeAll(1)).subscribe(data => console.log(data));

  }

}
