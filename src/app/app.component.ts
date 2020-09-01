import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, interval, throwError, of } from 'rxjs';
import { AppService } from './app.service';
import { ajax } from 'rxjs/ajax';
import {
  delay,
  delayWhen,
  map,
  mapTo,
  mergeAll,
  retry,
  retryWhen,
  tap,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('myHtmlButton') myButton: ElementRef;

  constructor(private appService: AppService) {}

  ngAfterViewInit(): void {
    fromEvent(this.myButton.nativeElement, 'click').subscribe(() =>
      this.myInterval()
    );
  }

  myInterval(): void {
    interval(1000)
      .pipe(
        map((data) => {
          if (data > 1) {
            throw new Error('Veri 6 dan büyük');
          } else {
            return data;
          }
        })
      )
      .pipe(
        retryWhen((err) =>
          err.pipe(
            tap((x) => console.log(x))
          )
        )
      )
      .subscribe((data) => console.log(data));
  }
}
